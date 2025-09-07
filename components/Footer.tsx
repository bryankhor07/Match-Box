import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                MatchBox
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting hearts, building relationships, creating lasting love
              stories.
            </p>
            <div className="flex space-x-4">
              {["💕", "📱", "🌟", "💬"].map((emoji, index) => (
                <span
                  key={index}
                  className="text-2xl cursor-pointer hover:scale-110 transition-transform"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <div className="space-y-2 text-gray-400 flex flex-col">
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Safety</h3>
            <div className="space-y-2 text-gray-400 flex flex-col">
              <Link
                href="/safety-tips"
                className="hover:text-white transition-colors"
              >
                Safety Tips
              </Link>
              <Link
                href="/community-guidelines"
                className="hover:text-white transition-colors"
              >
                Community Guidelines
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <div className="space-y-2 text-gray-400 flex flex-col">
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 MatchBox. All rights reserved. Made with 💕 for finding
            love.
          </p>
        </div>
      </div>
    </footer>
  );
}
