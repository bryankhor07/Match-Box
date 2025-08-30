"use client";
// This tells Next.js that this file is a Client Component
// (needed because we use hooks like useState, useEffect, and useContext).

import { createClient } from "@/lib/supabase/client"; // Supabase browser client factory
import { User } from "@supabase/supabase-js"; // Type for authenticated user
import { useRouter } from "next/navigation"; // For programmatic navigation
import { createContext, useContext, useEffect, useState } from "react";

// Define the shape of our authentication context.
// - user: the currently signed-in user (null if not signed in).
// - loading: whether we’re still checking the auth state.
// - signOut: function to sign the user out.
interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

// Create a React Context for authentication.
// Default value is `undefined` so we can detect if the provider is missing.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider component
 * Wraps the app (or part of it) to give children access to auth state.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null); // Holds the current user
  const [loading, setLoading] = useState<boolean>(false); // Tracks auth loading state
  const supabase = createClient(); // Supabase client
  const router = useRouter(); // Next.js router (for redirects)

  useEffect(() => {
    // Runs once on mount: checks the current session and listens for changes.
    async function checkUser() {
      try {
        // 1. Get the current session from Supabase (if user is logged in).
        const {
          data: { session },
        } = await supabase.auth.getSession();

        // Set user from session (or null if not signed in).
        setUser(session?.user ?? null);

        // 2. Listen for auth state changes (login, logout, token refresh, etc).
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange(async (event, session) => {
          setUser(session?.user ?? null);
        });

        // Cleanup: unsubscribe from listener when component unmounts.
        return () => subscription.unsubscribe();
      } catch (error) {
        console.error(error);
      } finally {
        // Mark loading as finished whether success or error.
        setLoading(false);
      }
    }

    checkUser();
  }, []); // Empty dependency array = run once on mount.

  /**
   * Signs the user out of Supabase and redirects to /auth page.
   */
  async function signOut() {
    try {
      await supabase.auth.signOut();
      router.push("/auth"); // Redirect to login/auth page after signing out.
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  // Provide auth state (user, loading, signOut) to the rest of the app.
  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook: useAuth
 * - Gives easy access to `user`, `loading`, and `signOut`.
 * - Must be called inside an <AuthProvider>, otherwise throws an error.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
