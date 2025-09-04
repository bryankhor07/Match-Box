"use server";
// Ensures these functions always run on the server, not the client

import { UserProfile } from "@/app/profile/page";
import { createClient } from "../supabase/server";
// Import types and Supabase client helper

/**
 * Fetch potential matches for the currently logged-in user.
 * - Grabs the current user from Supabase auth
 * - Fetches up to 50 other users (excluding the current user)
 * - Filters them based on the current user's gender preferences
 * - Exclude matched users
 * - Maps them into the `UserProfile` format used by the frontend
 */
export async function getPotentialMatches(): Promise<UserProfile[]> {
  const supabase = await createClient();

  // Get the currently logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated.");
  }

  // Get all active matches for the current user
  const { data: matches, error: matchError } = await supabase
    .from("matches")
    .select("*")
    .or(`user1_id.eq.${user.id},user2_id.eq.${user.id}`)
    .eq("is_active", true);

  if (matchError) {
    throw new Error("Failed to fetch matches");
  }

  // Collect IDs of users already matched with the current user
  const matchedUserIds = new Set(
    (matches || []).map((m) =>
      m.user1_id === user.id ? m.user2_id : m.user1_id
    )
  );

  // Fetch up to 50 users, excluding the current user
  const { data: potentialMatches, error } = await supabase
    .from("users")
    .select("*")
    .neq("id", user.id)
    .limit(50);

  if (error) {
    throw new Error("Failed to fetch potential matches");
  }

  // Fetch the current user's preferences
  const { data: userPrefs, error: prefsError } = await supabase
    .from("users")
    .select("preferences")
    .eq("id", user.id)
    .single();

  if (prefsError) {
    throw new Error("Failed to get user preferences");
  }

  const currentUserPrefs = userPrefs.preferences as any;
  const genderPreference = currentUserPrefs?.gender_preference || [];

  // Filter out already matched users and apply gender preference
  const filteredMatches =
    potentialMatches
      .filter((match) => {
        // Exclude users already matched
        if (matchedUserIds.has(match.id)) return false;

        // Apply gender preference
        if (!genderPreference || genderPreference.length === 0) {
          return true;
        }
        return genderPreference.includes(match.gender);
      })
      .map((match) => ({
        id: match.id,
        full_name: match.full_name,
        username: match.username,
        email: "", // Hide email for privacy
        gender: match.gender,
        birthdate: match.birthdate,
        bio: match.bio,
        avatar_url: match.avatar_url,
        preferences: match.preferences,
        location_lat: undefined,
        location_lng: undefined,
        last_active: new Date().toISOString(),
        is_verified: true,
        is_online: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })) || [];

  return filteredMatches;
}

/**
 * Handles "liking" another user.
 * - Inserts a like into the `likes` table
 * - Checks if the other user already liked back (mutual like = match)
 * - If matched, fetches and returns the matched user's info
 */
export async function likeUser(toUserId: string) {
  const supabase = await createClient();

  // Get the currently logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated."); // Must be logged in
  }

  // Insert a "like" into the `likes` table
  const { error: likeError } = await supabase.from("likes").insert({
    from_user_id: user.id, // Current user is liking...
    to_user_id: toUserId, // ...this target user
  });

  if (likeError) {
    throw new Error("Failed to create like");
  }

  // Check if the other user already liked back (reverse like)
  const { data: existingLike, error: checkError } = await supabase
    .from("likes")
    .select("*")
    .eq("from_user_id", toUserId) // Did they like me...
    .eq("to_user_id", user.id) // ...back?
    .single();

  // Ignore "row not found" errors (code PGRST116 means no match yet)
  if (checkError && checkError.code !== "PGRST116") {
    throw new Error("Failed to check for match");
  }

  // If a reverse like exists, it's a match 🎉
  if (existingLike) {
    const { data: matchedUser, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", toUserId)
      .single();

    if (userError) {
      throw new Error("Failed to fetch matched user");
    }

    return {
      success: true,
      isMatch: true, // Mutual like detected
      matchedUser: matchedUser as UserProfile,
    };
  }

  // Otherwise, just a one-sided like
  return { success: true, isMatch: false };
}

/**
 * Fetches all active matches for the currently authenticated user.
 *
 * @returns {Promise<UserProfile[]>} - A list of user profiles that the current user has matched with.
 * @throws {Error} - If the user is not authenticated or if fetching matches fails.
 */
export async function getUserMatches() {
  // Create a Supabase client instance
  const supabase = await createClient();

  // Get the currently authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If no user is logged in, throw an error
  if (!user) {
    throw new Error("Not authenticated.");
  }

  // Query the "matches" table for active matches involving the current user
  const { data: matches, error } = await supabase
    .from("matches")
    .select("*")
    .or(`user1_id.eq.${user.id},user2_id.eq.${user.id}`) // Match where user is either user1 or user2
    .eq("is_active", true); // Only active matches

  // Handle query error
  if (error) {
    throw new Error("Failed to fetch matches");
  }

  // Store the matched users' profiles
  const matchedUsers: UserProfile[] = [];

  // Loop through each match to retrieve the other user's profile
  for (const match of matches || []) {
    // Determine the ID of the "other" user in the match
    const otherUserId =
      match.user1_id === user.id ? match.user2_id : match.user1_id;

    // Fetch the other user's profile from the "users" table
    const { data: otherUser, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", otherUserId)
      .single();

    // Skip if there was an error fetching the other user's data
    if (userError) {
      continue;
    }

    // Push the other user's profile into the results list
    matchedUsers.push({
      id: otherUser.id,
      full_name: otherUser.full_name,
      username: otherUser.username,
      email: otherUser.email,
      gender: otherUser.gender,
      birthdate: otherUser.birthdate,
      bio: otherUser.bio,
      avatar_url: otherUser.avatar_url,
      preferences: otherUser.preferences,
      location_lat: undefined, // Placeholder (can be updated later if location data is added)
      location_lng: undefined, // Placeholder
      last_active: new Date().toISOString(), // Assume they're "active" at the time of fetch
      is_verified: true, // Assume verified (can be modified to use actual field if available)
      is_online: false, // Default value (could be updated with presence tracking)
      created_at: match.created_at, // Use match creation timestamp
      updated_at: match.created_at,
    });
  }

  // Return the list of matched user profiles
  return matchedUsers;
}
