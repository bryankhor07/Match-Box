"use client";

import { getUserMatches } from "@/lib/actions/matches";
import { useEffect, useState } from "react";
import { UserProfile } from "../profile/page";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context"; // Custom hook for user/auth state
import { useRouter } from "next/navigation";

// Defines the shape of chat data for this component
interface ChatData {
  id: string; // Unique chat/match ID
  user: UserProfile; // The matched user's profile info
  lastMessage?: string; // Latest message in the conversation (optional)
  lastMessageTime: string; // Timestamp of last activity
  unreadCount: number; // Count of unread messages
}

export default function ChatPage() {
  const [chats, setChats] = useState<ChatData[]>([]); // Stores list of chats
  const [loading, setLoading] = useState(true); // Tracks loading state

  const router = useRouter();
  const { user, loading: authLoading } = useAuth(); // Get auth state (from context)

  // If user is not signed in, redirect them to auth page.
  useEffect(() => {
    if (!user && !authLoading) {
      router.push("/auth");
    }
  }, [user, authLoading, router]);

  // Load matches when component mounts
  useEffect(() => {
    async function loadMatches() {
      try {
        // Fetch user's matches from server
        const userMatches = await getUserMatches();

        // Transform matches into ChatData structure
        const chatData: ChatData[] = userMatches.map((match) => ({
          id: match.id,
          user: match,
          lastMessage: "Start your conversation!", // Default placeholder message
          lastMessageTime: match.created_at, // Use match creation time
          unreadCount: 0, // Default unread count
        }));

        setChats(chatData); // Save chats into state
        console.log(userMatches);
      } catch (error) {
        console.error(error); // Log errors if fetch fails
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    }

    loadMatches();
  }, []);

  // Helper function to format timestamps into relative time strings
  function formatTime(timestamp: string) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      return "Just now"; // Less than 1 hour ago
    } else if (diffInHours < 24) {
      // Same day → show time (HH:MM)
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffInHours < 48) {
      return "Yesterday"; // 1–2 days ago
    } else {
      return date.toLocaleDateString(); // Older → show full date
    }
  }

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading your messages...</p>
        </div>
      </div>
    );
  }

  // Main chat page UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-700">
            {chats.length} conversation{chats.length !== 1 ? "s" : ""}
          </p>
        </header>
        {chats.length === 0 ? (
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">💬</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No conversations yet
            </h2>
            <p className="text-gray-700 mb-6">
              Start swiping to find matches and begin conversations!
            </p>
            <Link
              href="/matches"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-200"
            >
              Start Swiping
            </Link>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {chats.map((chat, key) => (
                <Link
                  key={key}
                  href={`/chat/${chat.id}`}
                  className="block bg-slate-900 hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={chat.user.avatar_url}
                        alt={chat.user.full_name}
                        className="w-full h-full object-cover"
                      />
                      {chat.unreadCount > 0 && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                          {chat.unreadCount}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 ml-4">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {chat.user.full_name}
                        </h3>
                        <span className="text-sm text-gray-400 flex-shrink-0">
                          {formatTime(chat.lastMessageTime)}
                        </span>
                      </div>

                      <p className="text-sm text-gray-400 truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
