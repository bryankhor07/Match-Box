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
 * - Maps them into the `UserProfile` format used by the frontend
 */
export async function getPotentialMatches(): Promise<UserProfile[]> {
  const supabase = await createClient();

  // Get the currently logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated."); // User must be logged in
  }

  // Fetch up to 50 users, excluding the current user
  const { data: potentialMatches, error } = await supabase
    .from("users")
    .select("*")
    .neq("id", user.id)
    .limit(50);

  if (error) {
    throw new Error("Failed to fetch potential matches");
  }

  // Fetch the current user's preferences (e.g. gender preference)
  const { data: userPrefs, error: prefsError } = await supabase
    .from("users")
    .select("preferences")
    .eq("id", user.id)
    .single();

  if (prefsError) {
    throw new Error("Failed to get user preferences");
  }

  // Extract the gender preference array (if set)
  const currentUserPrefs = userPrefs.preferences as any;
  const genderPreference = currentUserPrefs?.gender_preference || [];

  // Filter potential matches based on gender preference
  const filteredMatches =
    potentialMatches
      .filter((match) => {
        if (!genderPreference || genderPreference.length === 0) {
          // If no preference set, show all
          return true;
        }
        return genderPreference.includes(match.gender);
      })
      // Map database rows to `UserProfile` type
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
        location_lat: undefined, // Not implemented yet
        location_lng: undefined, // Not implemented yet
        last_active: new Date().toISOString(), // Fake "last active" timestamp
        is_verified: true, // Assume verified for now
        is_online: false, // No real-time presence implemented yet
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
