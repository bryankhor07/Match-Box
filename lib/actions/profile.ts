"use server";
// This marks the file as a "server action" file in Next.js App Router.
// Functions here always run on the server (never in the browser).

import { UserProfile } from "@/app/profile/page";
import { createClient } from "../supabase/server";

/**
 * Fetches the currently authenticated user's profile.
 * - Uses Supabase auth to get the logged-in user.
 * - If no user is logged in, returns null.
 * - Otherwise, queries the "users" table for their profile data.
 */
export async function getCurrentUserProfile() {
  const supabase = await createClient();

  // Get currently logged-in user from Supabase Auth
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null; // No user = not authenticated
  }

  // Fetch the user’s profile from the "users" table
  const { data: profile, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single(); // Expect only one profile per user

  if (error) {
    console.error("Error fetching profile:", error);
    return null;
  }

  return profile;
}

/**
 * Updates the authenticated user's profile in the "users" table.
 * - Requires the user to be logged in.
 * - Accepts a partial UserProfile object (can update some or all fields).
 * - Updates metadata like `updated_at`.
 */
export async function updateUserProfile(profileData: Partial<UserProfile>) {
  const supabase = await createClient();

  // Verify logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Update user record in "users" table
  const { error } = await supabase
    .from("users")
    .update({
      full_name: profileData.full_name,
      username: profileData.username,
      bio: profileData.bio,
      gender: profileData.gender,
      birthdate: profileData.birthdate,
      avatar_url: profileData.avatar_url,
      location_lat: profileData.location_lat ?? null,
      location_lng: profileData.location_lng ?? null,
      preferences: profileData.preferences,
      updated_at: new Date().toISOString(), // Keep track of last update
    })
    .eq("id", user.id); // Only update this logged-in user's row

  if (error) {
    console.log(error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

/**
 * Uploads a new profile photo to Supabase Storage.
 * - Verifies that a user is logged in.
 * - Generates a unique file name using the user ID + timestamp.
 * - Uploads the file to the "profile-photos" bucket.
 * - Returns a public URL for easy access (bucket must be public).
 */
export async function uploadProfilePhoto(file: File) {
  const supabase = await createClient();

  // Verify logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "User not authenticated" };
  }

  // Create a unique file name: userID + timestamp + extension
  const fileExt = file.name.split(".").pop();
  const fileName = `${user.id}-${Date.now()}.${fileExt}`;

  // Upload file to Supabase storage bucket "profile-photos"
  const { error } = await supabase.storage
    .from("profile-photos")
    .upload(fileName, file, {
      cacheControl: "3600", // Cache for 1 hour
      upsert: false, // Do not overwrite existing files
    });

  if (error) {
    return { success: false, error: error.message };
  }

  // Get the public URL for the uploaded photo (bucket must be public)
  const {
    data: { publicUrl },
  } = supabase.storage.from("profile-photos").getPublicUrl(fileName);

  return { success: true, url: publicUrl };
}
