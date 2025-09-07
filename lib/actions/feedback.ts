"use server";

import { createClient } from "../supabase/server";

/**
 * Submits feedback.
 * - Works for both logged-in and anonymous users.
 */
export async function submitFeedback({
  name,
  email,
  subject,
  message,
  rating,
}: {
  name?: string;
  email?: string;
  subject?: string;
  message: string;
  rating?: number;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("feedback")
    .insert([
      {
        name: name || null,
        email: email || null,
        subject: subject || null,
        message,
        rating: rating ?? null,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error submitting feedback:", error);
    throw new Error("Failed to submit feedback");
  }

  return data;
}
