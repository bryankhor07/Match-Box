"use client";

import { useState } from "react";
import { submitFeedback } from "@/lib/actions/feedback"; // adjust import path

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await submitFeedback({
        name,
        email,
        subject: `Contact form from ${name || "Anonymous"}`,
        message,
        // rating: optionalRatingState || null
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a question, suggestion, or just want to say hello? Fill out the
            form below or reach us directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-8 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm">
                ✅ Your message has been sent. Thank you!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                We’d love to hear from you. Whether you have feedback, need
                support, or just want to connect, our team is here.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                📧 <span className="font-medium">Email:</span>{" "}
                support@yourapp.com
              </p>
              <p className="text-gray-700">
                📞 <span className="font-medium">Phone:</span> (123) 456-7890
              </p>
              <p className="text-gray-700">
                📍 <span className="font-medium">Location:</span> San Francisco,
                CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
