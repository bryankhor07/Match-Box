"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  Heart,
  MessageCircle,
  Share2,
  ArrowLeft,
  ArrowRight,
  Tag,
  Clock,
  Eye,
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function OnlineDatingSafetyGuide() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(189);

  const post = {
    id: "online-dating-safety-guide",
    title: "The Complete Guide to Online Dating Safety",
    excerpt:
      "Everything you need to know about staying safe while dating online, from profile creation to meeting in person for the first time.",
    category: "Safety",
    author: "Elena Rodriguez",
    date: "2025-01-03",
    readTime: "8 min read",
    likes: 189,
    comments: 12,
    views: 2341,
    tags: ["Online Dating", "Safety", "Dating Tips", "Security", "First Dates"],
    authorBio:
      "Elena is MatchBox's Safety Director with 10+ years of experience in digital safety and user protection.",
    authorImage: "👩🏽‍⚖️",
  };

  const relatedPosts = [
    {
      id: "red-flags-early-dating",
      title: "Red Flags to Watch for in Early Dating",
      category: "Relationship Advice",
      readTime: "7 min read",
      image: "🚩",
    },
    {
      id: "first-date-ideas-2025",
      title: "Creative First Date Ideas That Actually Work in 2025",
      category: "Dating Tips",
      readTime: "5 min read",
      image: "🎨",
    },
    {
      id: "conversation-starters-that-work",
      title: "50 Conversation Starters That Actually Get Responses",
      category: "Communication",
      readTime: "4 min read",
      image: "💬",
    },
  ];

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Back Navigation */}
      <div className="bg-white/50 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </span>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {post.views} views
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {post.authorImage}
                </div>
                <div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="font-semibold text-gray-800">
                      {post.author}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">
                      Your Safety Comes First
                    </h3>
                    <p className="text-blue-700">
                      This guide covers essential safety practices for online
                      dating. While finding love should be exciting, your
                      personal safety and well-being are paramount. Trust your
                      instincts and never hesitate to prioritize your security
                      over politeness.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Online dating has revolutionized how we meet potential partners,
                opening up endless possibilities for connection. However, with
                great opportunity comes the need for great caution. Whether
                you're new to online dating or a seasoned swiper, understanding
                how to protect yourself is crucial for a positive experience.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                This comprehensive guide will walk you through every aspect of
                online dating safety, from creating a secure profile to meeting
                someone in person for the first time. By following these
                guidelines, you can focus on finding meaningful connections
                while keeping yourself protected.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Part 1: Profile Safety & Privacy
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Choose Your Photos Wisely
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>
                      Use recent photos that accurately represent you:
                    </strong>{" "}
                    Authenticity builds trust and leads to better matches.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Avoid photos that reveal your location:</strong>{" "}
                    Don't include images with house numbers, license plates, or
                    distinctive landmarks near your home.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Be cautious with work photos:</strong> Avoid
                    uniforms or badges that could reveal your workplace.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Consider reverse image searches:</strong> Use unique
                    photos that haven't been posted elsewhere online.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Craft a Safe Bio
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Share interests, not specifics:</strong> Say you
                    love hiking instead of naming your favorite trail.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Keep work details vague:</strong> "Marketing
                    professional" instead of your exact job title and company.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Don't mention travel plans:</strong> Avoid posting
                    about upcoming trips or being away from home.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Part 2: Communication Safety
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Keep Initial Conversations on the Platform
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Most dating apps have built-in safety features and monitoring
                systems. Stay on the platform until you've established trust
                with your match. This protects both of you and gives you access
                to reporting and blocking features if needed.
              </p>

              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">
                      Red Flags in Messages
                    </h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>
                        • Immediately asking for personal information (phone,
                        address, workplace)
                      </li>
                      <li>
                        • Pushing to meet right away or move off the app quickly
                      </li>
                      <li>
                        • Asking for money, gifts, or financial information
                      </li>
                      <li>
                        • Sending inappropriate or sexually explicit messages
                      </li>
                      <li>
                        • Profile seems too good to be true or photos look
                        professional
                      </li>
                      <li>• Avoiding video calls or phone conversations</li>
                      <li>• Stories that don't add up or change over time</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Video Chat Before Meeting
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A video call is one of the best ways to verify someone's
                identity and build comfort before meeting in person. It's harder
                to fake a live video conversation, and you'll get a better sense
                of their personality and communication style.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Use the app's built-in video calling feature when available
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    If they consistently avoid video calls, consider it a red
                    flag
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Keep initial video calls short (15-30 minutes) and casual
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Part 3: Meeting in Person Safely
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Choose the Right Location
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Always meet in public:</strong> Coffee shops,
                    restaurants, parks, or other busy public spaces.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Choose familiar territory:</strong> Pick a location
                    you know well, preferably near your home or work.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Avoid isolated areas:</strong> No hiking trails,
                    empty beaches, or secluded spots for first meetings.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Skip their place or yours:</strong> Keep first
                    meetings in neutral, public locations.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Tell Someone Your Plans
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Always inform a trusted friend or family member about your date
                plans. Share details including:
              </p>

              <ul className="space-y-2 mb-6 text-gray-700">
                <li>• Your date's name and profile information</li>
                <li>• Where you're meeting and what time</li>
                <li>• When you expect to be home</li>
                <li>• Plan to check in during or after the date</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Transportation Safety
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Drive yourself or use rideshare:</strong> Maintain
                    control over your transportation.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Don't let them pick you up:</strong> Especially not
                    from your home address.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Have backup transportation:</strong> Ensure you can
                    leave independently if needed.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Part 4: During the Date
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Stay Alert and Trust Your Instincts
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Limit alcohol consumption:</strong> Stay sober
                    enough to make good decisions and stay aware of your
                    surroundings.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Watch your drinks:</strong> Never leave drinks
                    unattended and be wary of accepting drinks you didn't see
                    made.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Pay attention to inconsistencies:</strong> Notice if
                    their story doesn't match their profile or previous
                    conversations.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Have an exit strategy:</strong> Know how you'll
                    leave if you feel uncomfortable.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Part 5: Digital Security Best Practices
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Protect Your Personal Information
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Use a Google Voice number:</strong> Get a separate
                    number for dating that you can easily change or block.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Be cautious with social media:</strong> Don't
                    connect on social platforms until you've met and established
                    trust.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Google them (carefully):</strong> A basic search can
                    reveal inconsistencies, but respect privacy boundaries.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                App Security Settings
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Review and adjust privacy settings regularly
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Use strong, unique passwords for dating apps
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Enable two-factor authentication when available
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Log out from shared or public devices
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                When to Report or Block
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Don't hesitate to use the reporting and blocking features
                available on dating platforms. These tools exist for your
                protection and help keep the community safe for everyone.
              </p>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-red-800 mb-2">
                      Report Immediately If Someone:
                    </h4>
                    <ul className="space-y-2 text-red-700">
                      <li>
                        • Sends threatening, abusive, or harassing messages
                      </li>
                      <li>• Requests money, gifts, or financial information</li>
                      <li>• Sends unsolicited explicit photos or content</li>
                      <li>• Appears to be using fake photos or information</li>
                      <li>
                        • Makes you feel unsafe or uncomfortable in any way
                      </li>
                      <li>• Violates the platform's terms of service</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Building Healthy Boundaries
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Remember that you're not obligated to continue any interaction
                that makes you uncomfortable. Healthy online dating involves:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Taking your time:</strong> Move at your own pace,
                    regardless of pressure from matches.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Saying no when needed:</strong> You can decline
                    dates, calls, or any requests without explanation.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Trusting your gut:</strong> If something feels off,
                    it's okay to end the conversation or date.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Prioritizing your safety:</strong> Your well-being
                    is more important than being polite to someone who makes you
                    uncomfortable.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Bottom Line
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Online dating can be a wonderful way to meet someone special,
                but it requires vigilance and smart safety practices. The key is
                finding the balance between being open to new connections and
                protecting yourself from potential risks.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Remember that genuine people who are interested in getting to
                know you will respect your boundaries and safety concerns.
                Anyone who pushes back against reasonable safety measures or
                tries to rush you into unsafe situations is showing you exactly
                who they are – believe them and protect yourself accordingly.
              </p>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mt-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-blue-800 mb-2">
                      Emergency Resources
                    </h4>
                    <p className="text-blue-700 mb-3">
                      If you ever feel threatened or unsafe, don't hesitate to
                      contact:
                    </p>
                    <ul className="space-y-1 text-blue-700">
                      <li>
                        <strong>Emergency Services:</strong> 911
                      </li>
                      <li>
                        <strong>National Domestic Violence Hotline:</strong>{" "}
                        1-800-799-7233
                      </li>
                      <li>
                        <strong>Crisis Text Line:</strong> Text HOME to 741741
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Stay safe out there!</strong> Your perfect match is
                worth waiting for, but they should never come at the expense of
                your safety and peace of mind.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Like and Comment Section */}
          <div className="flex items-center justify-between py-6 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  liked
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                <span>{likeCount} likes</span>
              </button>

              <div className="flex items-center space-x-2 text-gray-600">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments} comments</span>
              </div>
            </div>

            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-12 border border-blue-100">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                {post.authorImage}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.authorBio} Elena specializes in creating comprehensive
                  safety protocols and has helped thousands of users navigate
                  online dating securely. Her expertise spans digital privacy,
                  personal safety, and building trust in virtual relationships.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  View All Safety Articles
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article key={relatedPost.id} className="group">
                  <Link href={`/blog/${relatedPost.id}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 overflow-hidden transform group-hover:scale-105">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                            <Tag className="w-3 h-3 mr-1" />
                            {relatedPost.category}
                          </span>
                          <div className="text-3xl">{relatedPost.image}</div>
                        </div>

                        <h4 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {relatedPost.readTime}
                          </span>
                          <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
