"use client";
// Marks this as a Client Component (needed because we use hooks).

import { createClient } from "@/lib/supabase/client"; // Supabase browser client
import { useAuth } from "@/contexts/auth-context"; // Custom hook for user/auth state
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Router for redirects

/**
 * Authentication Page
 * - Allows users to either Sign In or Sign Up.
 * - Handles form state, loading state, and error handling.
 */
export default function AuthPage() {
  // Local state for form inputs and UI
  const [isSignUp, setIsSignUp] = useState<boolean>(false); // Toggles between Sign In / Sign Up
  const [email, setEmail] = useState<string>(""); // Email input
  const [password, setPassword] = useState<string>(""); // Password input
  const [loading, setLoading] = useState<boolean>(false); // Loading state during auth request
  const [error, setError] = useState<string>(""); // Error message to display

  const supabase = createClient(); // Create Supabase client
  const { user, loading: authLoading } = useAuth(); // Get auth state (from context)
  const router = useRouter(); // Next.js router for navigation

  // If user is already signed in, redirect them to matches page.
  useEffect(() => {
    if (user && !authLoading) {
      router.push("/matches");
    }
  }, [user, authLoading, router]);

  /**
   * Handles form submission for Sign In / Sign Up.
   */
  async function handleAuth(e: React.FormEvent) {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Show "loading..."
    setError(""); // Clear previous error messages

    try {
      if (isSignUp) {
        // --- Sign Up flow ---
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        // If user is created but session isn't active yet
        // (happens when email confirmation is required).
        if (data.user && !data.session) {
          setError("Please check your email for a confirmation link");
          return;
        }
      } else {
        // --- Sign In flow ---
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
      }
    } catch (error: any) {
      // Show Supabase error message (e.g., "Invalid login credentials")
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  }

  return (
    // Background wrapper with gradient
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full space-y-8 p-8">
        {/* App title and subtitle */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            MatchBox
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isSignUp ? "Create Your Account" : "Sign in to your account"}
          </p>
        </div>

        {/* Auth form */}
        <form className="space-y-6" onSubmit={handleAuth}>
          {/* Email input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          {/* Password input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your password"
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle between Sign In and Sign Up */}
        <div className="text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 text-sm cursor-pointer"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
