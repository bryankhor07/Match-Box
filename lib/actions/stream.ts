"use server";

import { StreamChat } from "stream-chat";
import { createClient } from "../supabase/server";

/**
 * Generates a Stream Chat user token for the currently logged-in Supabase user.
 * - Checks if user is authenticated.
 * - Fetches user profile (full_name, avatar_url) from Supabase.
 * - Creates or updates user in Stream Chat.
 * - Returns a signed token and user details.
 */
export async function getStreamUserToken() {
  const supabase = await createClient();

  // Get the current authenticated user from Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Fetch extra user info from Supabase
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("full_name, avatar_url")
    .eq("id", user.id)
    .single();

  if (userError) {
    console.error("Error fetching user data:", userError);
    throw new Error("Failed to fetch user data");
  }

  // Create Stream client using API keys
  const serverClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_API_SECRET!
  );

  // Generate token for user
  const token = serverClient.createToken(user.id);

  // Ensure user is upserted in Stream's user registry
  await serverClient.upsertUser({
    id: user.id,
    name: userData.full_name,
    image: userData.avatar_url || undefined,
  });

  return {
    token,
    userId: user.id,
    userName: userData.full_name,
    userImage: userData.avatar_url || undefined,
  };
}

/**
 * Creates or retrieves a messaging channel between the current user and another user.
 * - Ensures both users are matched in the Supabase `matches` table.
 * - Generates a deterministic channel ID based on both user IDs.
 * - Creates a messaging channel in Stream Chat if it doesn't exist.
 */
export async function createOrGetChannel(otherUserId: string) {
  const supabase = await createClient();

  // Validate current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Ensure users are matched before allowing a channel
  const { data: matches, error: matchError } = await supabase
    .from("matches")
    .select("*")
    .or(
      `and(user1_id.eq.${user.id},user2_id.eq.${otherUserId}),and(user1_id.eq.${otherUserId},user2_id.eq.${user.id})`
    )
    .eq("is_active", true)
    .single();

  if (matchError || !matches) {
    throw new Error("Users are not matched. Cannot create chat channel.");
  }

  // Generate a deterministic channel ID using both user IDs
  const sortedIds = [user.id, otherUserId].sort();
  const combinedIds = sortedIds.join("_");

  let hash = 0;
  for (let i = 0; i < combinedIds.length; i++) {
    const char = combinedIds.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  const channelId = `match_${Math.abs(hash).toString(36)}`;

  // Create Stream client
  const serverClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_API_SECRET!
  );

  // Fetch other user's info from Supabase
  const { data: otherUserData, error: otherUserError } = await supabase
    .from("users")
    .select("full_name, avatar_url")
    .eq("id", otherUserId)
    .single();

  if (otherUserError) {
    console.error("Error fetching user data:", otherUserError);
    throw new Error("Failed to fetch user data");
  }

  // Create a messaging channel with both users
  const channel = serverClient.channel("messaging", channelId, {
    members: [user.id, otherUserId],
    created_by_id: user.id,
  });

  // Ensure the other user is also registered in Stream
  await serverClient.upsertUser({
    id: otherUserId,
    name: otherUserData.full_name,
    image: otherUserData.avatar_url || undefined,
  });

  try {
    await channel.create();
  } catch (error) {
    if (error instanceof Error && !error.message.includes("already exists")) {
      throw error;
    }
  }

  return {
    channelType: "messaging",
    channelId,
  };
}

/**
 * Generates a unique video call ID between the current user and another user.
 * - Validates that both users are matched.
 * - Uses the same hashing approach as chat channels.
 */
export async function createVideoCall(otherUserId: string) {
  const supabase = await createClient();

  // Validate current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Ensure users are matched before creating a call
  const { data: matches, error: matchError } = await supabase
    .from("matches")
    .select("*")
    .or(
      `and(user1_id.eq.${user.id},user2_id.eq.${otherUserId}),and(user1_id.eq.${otherUserId},user2_id.eq.${user.id})`
    )
    .eq("is_active", true)
    .single();

  if (matchError || !matches) {
    throw new Error("Users are not matched. Cannot create chat channel.");
  }

  // Generate a deterministic call ID
  const sortedIds = [user.id, otherUserId].sort();
  const combinedIds = sortedIds.join("_");

  let hash = 0;
  for (let i = 0; i < combinedIds.length; i++) {
    const char = combinedIds.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  const callId = `call_${Math.abs(hash).toString(36)}`;

  return { callId, callType: "default" };
}

/**
 * Generates a Stream video token for the logged-in user.
 * Similar to `getStreamUserToken` but focused on video calls.
 */
export async function getStreamVideoToken() {
  const supabase = await createClient();

  // Validate current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Fetch user profile
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("full_name, avatar_url")
    .eq("id", user.id)
    .single();

  if (userError) {
    console.error("Error fetching user data:", userError);
    throw new Error("Failed to fetch user data");
  }

  // Create token for video calls
  const serverClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_API_SECRET!
  );

  const token = serverClient.createToken(user.id);

  return {
    token,
    userId: user.id,
    userName: userData.full_name,
    userImage: userData.avatar_url || undefined,
  };
}
