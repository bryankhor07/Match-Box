"use client";

import { useState, useEffect } from "react";
import { UserProfile } from "../profile/page";
import { getPotentialMatches, likeUser } from "@/lib/actions/matches";
import { useRouter } from "next/navigation";
import MatchCard from "@/components/MatchCard";
import MatchButtons from "@/components/MatchButtons";
import MatchNotification from "@/components/MatchNotifications";
import { HelpCircle } from "lucide-react";

export default function MatchesPage() {
  // State for storing potential matches retrieved from backend
  const [potentialMatches, setPotentialMatches] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true); // Loading indicator while fetching matches
  const [currentIndex, setCurrentIndex] = useState(0); // Index of currently displayed profile
  const router = useRouter();

  // State for match notification
  const [showMatchNotification, setShowMatchNotification] = useState(false);
  const [matchedUser, setMatchedUser] = useState<UserProfile | null>(null);

  // User can toggle between strict or relaxed mode for potential matches
  const [strictMode, setStrictMode] = useState(true);

  // Fetch potential matches when component mounts
  useEffect(() => {
    async function loadUsers() {
      try {
        const potentialMatchesData = await getPotentialMatches(strictMode);
        setPotentialMatches(potentialMatchesData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading once fetch is done
      }
    }

    loadUsers();
  }, []);

  // Handle "Like" button click
  async function handleLike() {
    if (currentIndex < potentialMatches.length) {
      const likedUser = potentialMatches[currentIndex];

      try {
        // Send like request to backend
        const result = await likeUser(likedUser.id);

        // If mutual match, show notification
        if (result.isMatch) {
          setMatchedUser(result.matchedUser!);
          setShowMatchNotification(true);
        }

        // Move to next profile
        setCurrentIndex((prev) => prev + 1);
      } catch (err) {
        console.error(err);
      }
    }
  }

  // Handle "Pass" button click (skip profile)
  function handlePass() {
    if (currentIndex < potentialMatches.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  // Close match notification popup
  function handleCloseMatchNotification() {
    setShowMatchNotification(false);
    setMatchedUser(null);
  }

  // Start chat with matched user
  function handleStartChat() {
    router.push("/chat");
  }

  // If no more profiles left
  if (currentIndex >= potentialMatches.length) {
    return (
      <div className="h-full bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">💕</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No more profiles to show
          </h2>
          <p className="text-gray-600 mb-6">
            Check back later for new matches, or try adjusting your preferences!
          </p>
          <button
            onClick={() => setCurrentIndex(0)}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-200"
          >
            Refresh
          </button>
        </div>
        {showMatchNotification && matchedUser && (
          <MatchNotification
            match={matchedUser}
            onClose={handleCloseMatchNotification}
            onStartChat={handleStartChat}
          />
        )}
      </div>
    );
  }

  // Loading state UI
  if (loading) {
    return (
      <div className="h-full bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Finding your matches...</p>
        </div>
      </div>
    );
  }
  // Current profile being shown
  const currentPotentialMatch = potentialMatches[currentIndex];

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Discover Matches
            </h1>
            <p className="text-gray-600">
              {currentIndex + 1} of {potentialMatches.length} profiles
            </p>
          </div>
          {/* Strict/Relaxed toggle */}
          <div className="mt-4 relative flex justify-center">
            {/* Centered button */}
            <button
              onClick={() => {
                const newMode = !strictMode;
                setStrictMode(newMode);
                setLoading(true);
                getPotentialMatches(newMode).then((data) => {
                  setPotentialMatches(data);
                  setCurrentIndex(0); // reset index when refetching
                  setLoading(false);
                });
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                strictMode
                  ? "bg-pink-500 text-white hover:bg-pink-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {strictMode ? "Disable Strict Matches" : "Enable Strict Matches"}
            </button>

            {/* Icon positioned absolutely to the right of the button */}
            <div
              className="absolute left-1/2 ml-18 top-1/2 -translate-y-1/2 group"
              style={{ transform: "translateX(calc(50% + 0.5rem))" }}
            >
              <HelpCircle className="w-5 h-5 text-gray-500 cursor-pointer" />

              {/* Tooltip text */}
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-56 rounded-md bg-gray-900 text-white text-xs p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Strict mode will only show matches that meet <b>all</b> of your
                preferences (age, distance, gender). Relaxed mode shows matches
                that meet at least one.
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-md mx-auto">
          <MatchCard user={currentPotentialMatch} />
          <div className="mt-8">
            <MatchButtons onLike={handleLike} onPass={handlePass} />
          </div>
        </div>

        {showMatchNotification && matchedUser && (
          <MatchNotification
            match={matchedUser}
            onClose={handleCloseMatchNotification}
            onStartChat={handleStartChat}
          />
        )}
      </div>
    </div>
  );
}
