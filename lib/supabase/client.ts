// Import the Supabase client factory for browser environments.
// `@supabase/ssr` provides helpers that work well with Next.js and SSR.
import { createBrowserClient } from "@supabase/ssr";

/**
 * Creates and returns a Supabase client instance for use in the browser.
 *
 * - Uses public environment variables defined in `.env.local`
 *   (NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY).
 * - The client allows you to:
 *    - Query the database
 *    - Handle user authentication
 *    - Work with storage and edge functions
 *
 * Wrapping the client in a function:
 * - Keeps setup consistent and avoids repeating boilerplate.
 * - Makes it easier to maintain if the config or import ever changes.
 * - Can be mocked/replaced in tests if needed.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // Project URL (public)
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // Public "anon" key
  );
}
