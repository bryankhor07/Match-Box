"use client";
import { useAuth } from "@/contexts/auth-context";
import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const { signOut, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo (left) */}
          <Link
            href={user ? "/matches" : "/"}
            className="flex items-center space-x-2"
          >
            <Heart className="text-pink-500 text-2xl" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
              MatchBox
            </span>
          </Link>

          {/* Navigation (center) */}
          {/* Only show navigation links if user is authenticated */}
          {user && (
            <div className="hidden md:flex space-x-8">
              <Link
                href="/matches"
                className="text-white hover:text-pink-400 transition-colors"
              >
                Discover
              </Link>
              <Link
                href="/matches/list"
                className="text-white hover:text-pink-400 transition-colors"
              >
                Matches
              </Link>
              <Link
                href="/chat"
                className="text-white hover:text-pink-400 transition-colors"
              >
                Messages
              </Link>
              <Link
                href="/profile"
                className="text-white hover:text-pink-400 transition-colors"
              >
                Profile
              </Link>
            </div>
          )}

          {/* Auth Buttons (right) */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <button
                  onClick={signOut}
                  className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-200 cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth"
                  className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth"
                  className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2">
          {user ? (
            <>
              <Link
                href="/matches"
                className="block text-white hover:text-pink-400 transition-colors"
              >
                Discover
              </Link>
              <Link
                href="/matches/list"
                className="block text-white hover:text-pink-400 transition-colors"
              >
                Matches
              </Link>
              <Link
                href="/chat"
                className="block text-white hover:text-pink-400 transition-colors"
              >
                Messages
              </Link>
              <Link
                href="/profile"
                className="block text-white hover:text-pink-400 transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={signOut}
                className="text-left text-white bg-gradient-to-r from-pink-500 to-red-500 font-semibold py-2 px-4 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="flex mt-2 gap-2">
              <Link
                href="/auth"
                className="w-fit bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/auth"
                className="w-fit bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
