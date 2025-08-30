// Import Supabase client factory for server environments.
// Unlike the browser client, `createServerClient` works with Next.js
// server components, API routes, and server actions.
import { createServerClient } from "@supabase/ssr";

// Next.js built-in helper for reading/writing cookies in server components.
import { cookies } from "next/headers";

/**
 * Creates and returns a Supabase client instance for use on the server.
 *
 * Key differences from the browser version:
 * - The server client integrates with Next.js `cookies()` to manage
 *   authentication state (e.g., user sessions).
 * - Keeps Supabase auth tokens in sync between client and server.
 *
 * This is typically used inside:
 * - Server Components
 * - Route Handlers (app/api/*)
 * - Middleware
 */
export async function createClient() {
  // Access Next.js cookie store (for reading/writing session cookies).
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // Project URL (public)
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Public "anon" key
    {
      cookies: {
        // Reads all cookies (needed to check auth/session state).
        getAll() {
          return cookieStore.getAll();
        },
        // Writes cookies (e.g., when Supabase refreshes an auth token).
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // NOTE:
            // This error usually happens when `setAll` is called
            // from a Server Component (which cannot set cookies directly).
            // It’s safe to ignore if you have middleware that refreshes
            // Supabase user sessions automatically.
          }
        },
      },
    }
  );
}
