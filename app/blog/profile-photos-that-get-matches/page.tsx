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
  Camera,
  TrendingUp,
  BarChart3,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export default function ProfilePhotosAnalysis() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(456);

  const post = {
    id: "profile-photos-that-get-matches",
    title: "Profile Photos That Actually Get Matches: A Data-Driven Analysis",
    excerpt:
      "We analyzed 10,000+ profiles to understand what makes some photos irresistible. Here are the surprising results and actionable tips.",
    category: "Profile Tips",
    author: "Marcus Johnson",
    date: "2025-01-01",
    readTime: "6 min read",
    likes: 456,
    comments: 34,
    views: 3847,
    tags: [
      "Profile Photos",
      "Data Analysis",
      "Dating Tips",
      "Match Success",
      "Photography",
    ],
    authorBio:
      "Marcus is MatchBox's Head of Product with expertise in user behavior analysis and data-driven product optimization.",
    authorImage: "👨🏾‍💻",
  };

  const relatedPosts = [
    {
      id: "conversation-starters-that-work",
      title: "50 Conversation Starters That Actually Get Responses",
      category: "Communication",
      readTime: "4 min read",
      image: "💬",
    },
    {
      id: "first-date-ideas-2025",
      title: "Creative First Date Ideas That Actually Work in 2025",
      category: "Dating Tips",
      readTime: "5 min read",
      image: "🎨",
    },
    {
      id: "online-dating-safety-guide",
      title: "The Complete Guide to Online Dating Safety",
      category: "Safety",
      readTime: "8 min read",
      image: "🛡️",
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
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-500 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
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
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mb-8">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">
                      Research Methodology
                    </h3>
                    <p className="text-green-700">
                      We analyzed 10,847 MatchBox profiles over 6 months,
                      tracking photo types, match rates, and user engagement.
                      All data was anonymized and aggregated to protect user
                      privacy while providing actionable insights.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Your profile photo is your digital first impression – and the
                data shows it can make or break your online dating success.
                After analyzing thousands of profiles and their performance
                metrics, we've uncovered surprising patterns about what actually
                attracts potential matches.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                This isn't about conventional attractiveness or following
                generic photo advice. Our analysis reveals specific, actionable
                insights about composition, lighting, settings, and even facial
                expressions that consistently lead to more matches and
                meaningful connections.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Numbers Don't Lie: Key Findings
              </h2>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8">
                <h3 className="text-lg font-bold text-blue-800 mb-4">
                  Top-Level Statistics
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-blue-800">340%</p>
                      <p className="text-sm text-blue-700">
                        Higher match rate for optimized photos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-blue-800">4.2</p>
                      <p className="text-sm text-blue-700">
                        Optimal number of photos per profile
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-blue-800">73%</p>
                      <p className="text-sm text-blue-700">
                        Prefer genuine smiles over posed photos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-blue-800">2.1x</p>
                      <p className="text-sm text-blue-700">
                        More likes for photos showing activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                What Makes a Great Primary Photo
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Your first photo is crucial – it determines whether someone
                swipes right or keeps scrolling. Our analysis found several key
                elements that high-performing primary photos share:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                1. Face Forward, Eyes Visible
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>87% higher match rate</strong> for photos where both
                    eyes are clearly visible
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Direct eye contact with camera</strong> creates
                    connection and trustworthiness
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Avoid sunglasses in primary photos</strong> – save
                    them for secondary images
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. The Power of a Genuine Smile
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Duchenne smiles</strong> (involving eye muscles)
                    perform 45% better than posed smiles
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Showing teeth is preferred</strong> by 68% of
                    potential matches
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Laughing photos</strong> receive 2.3x more right
                    swipes than serious expressions
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. Lighting and Image Quality
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Natural lighting</strong> beats artificial lighting
                    by a 67% margin
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Golden hour photos</strong> (1 hour before sunset)
                    have highest engagement
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>High resolution matters</strong> – blurry photos
                    reduce matches by 43%
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Perfect Photo Lineup Strategy
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Our data shows that profiles with 3-5 photos perform
                significantly better than those with just one or those with 8+
                photos. Here's the optimal sequence:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">
                    📸 Photo #1: The Hook
                  </h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Clear headshot with genuine smile</li>
                    <li>• Good lighting, preferably natural</li>
                    <li>• Eyes visible and looking at camera</li>
                    <li>• Minimal background distractions</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">
                    🏃 Photo #2: Activity Shot
                  </h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Shows you doing something you love</li>
                    <li>• Full body or 3/4 shot preferred</li>
                    <li>• Action shots get 2.1x more engagement</li>
                    <li>• Hiking, sports, hobbies work well</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h4 className="text-lg font-bold text-green-800 mb-3">
                    👔 Photo #3: Social Proof
                  </h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• With friends (but you're clearly identifiable)</li>
                    <li>• At events, parties, or gatherings</li>
                    <li>• Shows you're socially connected</li>
                    <li>• Avoid photos where you're not the focus</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                  <h4 className="text-lg font-bold text-orange-800 mb-3">
                    🎭 Photo #4: Personality Showcase
                  </h4>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Creative or unique photo that shows your style</li>
                    <li>• Travel photos, artistic shots, or fun moments</li>
                    <li>• Should spark conversation</li>
                    <li>• Avoid overly artsy or hard-to-understand images</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Photos That Kill Your Match Rate
              </h2>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
                <h3 className="text-lg font-bold text-red-800 mb-4">
                  Avoid These Photo Types
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-red-700">
                        <strong>Mirror selfies:</strong> 34% lower match rate
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-red-700">
                        <strong>Group photos as primary:</strong> 58% confusion
                        rate
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-red-700">
                        <strong>Bathroom selfies:</strong> 67% negative
                        perception
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-red-700">
                        <strong>Heavily filtered photos:</strong> 41% distrust
                        factor
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-red-700">
                        <strong>Photos with exes:</strong> 89% automatic left
                        swipe
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-red-700">
                        <strong>Car selfies:</strong> 23% lower engagement
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Surprising Insights from Our Data
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                The Pet Photo Effect
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Photos with pets received 19% more matches, but only when the
                pet didn't dominate the frame. The sweet spot is you clearly
                visible with your furry friend as a natural part of the scene.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Color Psychology in Dating Photos
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Blue clothing:</strong> Associated with
                    trustworthiness (+12% match rate)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Red clothing:</strong> Increases perceived
                    attractiveness (+8% for women, +5% for men)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Green backgrounds:</strong> Nature settings boost
                    match rates by 16%
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                The Authenticity Paradox
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While professional headshots might seem like the obvious choice,
                our data shows they actually perform 31% worse than high-quality
                casual photos. People want to see the real you, not a corporate
                version. The key is finding the sweet spot between authentic and
                polished.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Quick Photo Optimization Checklist
              </h2>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      ✅ Do This
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">
                          Show genuine emotions
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">
                          Use natural lighting
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">
                          Include activity photos
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">
                          Keep photos recent (within 2 years)
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">
                          Show your face clearly
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      ❌ Avoid This
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">
                          Heavy filters or editing
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">
                          Bathroom or mirror selfies
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">
                          Photos with other people's faces
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">
                          Blurry or low-quality images
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">
                          Only headshots (show variety)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Bottom Line
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Great dating photos aren't about being conventionally attractive
                or having professional headshots. They're about authentically
                representing who you are while following basic principles of
                good photography and human psychology.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The data is clear: genuine smiles, good lighting, variety in
                your photo selection, and showing your personality through
                activities and interests will dramatically improve your match
                rate. Remember, you're not trying to trick anyone – you're
                trying to attract people who are genuinely interested in the
                real you.
              </p>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mt-8">
                <div className="flex items-start space-x-3">
                  <Camera className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">
                      Ready to Optimize Your Photos?
                    </h4>
                    <p className="text-green-700 mb-3">
                      Use these insights to review and update your profile
                      photos. Small changes based on data can lead to
                      dramatically better results.
                    </p>
                    <p className="text-green-700 italic">
                      <strong>Pro tip:</strong> Update one photo at a time and
                      monitor your match rate to see what works best for your
                      specific profile and location.
                    </p>
                  </div>
                </div>
              </div>
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
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600"
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

            <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 mb-12 border border-green-100">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                {post.authorImage}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.authorBio} Marcus leads MatchBox's data science
                  initiatives and has analyzed millions of user interactions to
                  understand what drives successful connections. His insights
                  have helped thousands of users optimize their profiles for
                  better dating outcomes.
                </p>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                  View All Data Articles
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
