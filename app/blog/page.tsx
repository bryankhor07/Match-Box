"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Heart,
  MessageCircle,
  Tag,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: "first-date-ideas-2025",
      title: "Creative First Date Ideas That Actually Work in 2025",
      excerpt:
        "Skip the boring dinner dates! Discover unique, memorable first date ideas that help you connect authentically and have genuine fun together.",
      category: "Dating Tips",
      author: "Sarah Chen",
      date: "2025-01-05",
      readTime: "5 min read",
      image: "🎨",
      likes: 234,
      comments: 18,
      featured: true,
    },
    {
      id: "online-dating-safety-guide",
      title: "The Complete Guide to Online Dating Safety",
      excerpt:
        "Everything you need to know about staying safe while dating online, from profile creation to meeting in person for the first time.",
      category: "Safety",
      author: "Elena Rodriguez",
      date: "2025-01-03",
      readTime: "8 min read",
      image: "🛡️",
      likes: 189,
      comments: 12,
      featured: true,
    },
    {
      id: "profile-photos-that-get-matches",
      title: "Profile Photos That Actually Get Matches: A Data-Driven Analysis",
      excerpt:
        "We analyzed 10,000+ profiles to understand what makes some photos irresistible. Here are the surprising results and actionable tips.",
      category: "Profile Tips",
      author: "Marcus Johnson",
      date: "2025-01-01",
      readTime: "6 min read",
      image: "📸",
      likes: 456,
      comments: 34,
      featured: true,
    },
    {
      id: "conversation-starters-that-work",
      title: "50 Conversation Starters That Actually Get Responses",
      excerpt:
        'Ditch the "Hey" messages! These research-backed conversation starters will help you get more replies and better connections.',
      category: "Communication",
      author: "David Kim",
      date: "2024-12-28",
      readTime: "4 min read",
      image: "💬",
      likes: 312,
      comments: 29,
      featured: false,
    },
    {
      id: "red-flags-early-dating",
      title: "Red Flags to Watch for in Early Dating",
      excerpt:
        "Learn to identify concerning behaviors early on to protect yourself and find healthier relationships.",
      category: "Relationship Advice",
      author: "Elena Rodriguez",
      date: "2024-12-25",
      readTime: "7 min read",
      image: "🚩",
      likes: 278,
      comments: 16,
      featured: false,
    },
    {
      id: "long-distance-relationships-tips",
      title: "Making Long Distance Relationships Work in the Digital Age",
      excerpt:
        "Technology has changed everything about long-distance love. Here's how to build strong connections across the miles.",
      category: "Relationship Advice",
      author: "Sarah Chen",
      date: "2024-12-22",
      readTime: "9 min read",
      image: "💕",
      likes: 167,
      comments: 23,
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Dating Tips",
    "Safety",
    "Profile Tips",
    "Communication",
    "Relationship Advice",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-red-500/10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-pink-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-pink-200/50">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-700">
                Dating insights and advice
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              MatchBox Blog
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert dating advice, safety tips, and insights to help you find
              meaningful connections and build lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg"
                        : "bg-white/80 text-gray-600 hover:bg-pink-50 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Featured Articles
                </h2>
                <p className="text-xl text-gray-600">
                  Our most popular and impactful dating advice
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <article key={post.id} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 overflow-hidden transform group-hover:scale-105">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">
                            <Tag className="w-3 h-3 mr-1" />
                            {post.category}
                          </span>
                          <div className="text-4xl">{post.image}</div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </div>
                          </div>

                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors group"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      {regularPosts.length > 0 && (
        <section className="py-20 bg-white/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  All Articles
                </h2>
                <p className="text-xl text-gray-600">
                  Discover more insights and tips for better dating
                </p>
              </div>

              <div className="space-y-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 p-8">
                      <div className="flex items-start space-x-6">
                        <div className="text-6xl flex-shrink-0">
                          {post.image}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                              <Tag className="w-3 h-3 mr-1" />
                              {post.category}
                            </span>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <span className="text-sm text-gray-500">
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                              <div className="flex items-center text-sm text-gray-500">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Heart className="w-4 h-4 mr-1" />
                                  {post.likes}
                                </div>
                                <div className="flex items-center">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  {post.comments}
                                </div>
                              </div>
                            </div>

                            <Link
                              href={`/blog/${post.id}`}
                              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                            >
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                No articles found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search terms or selecting a different
                category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-8 rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
