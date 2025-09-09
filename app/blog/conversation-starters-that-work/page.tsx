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
  Copy,
  CheckCircle,
  Lightbulb,
  Zap,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function ConversationStartersBlog() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(312);
  const [copiedText, setCopiedText] = useState("");

  const post = {
    id: "conversation-starters-that-work",
    title: "50 Conversation Starters That Actually Get Responses",
    excerpt:
      'Ditch the "Hey" messages! These research-backed conversation starters will help you get more replies and better connections.',
    category: "Communication",
    author: "David Kim",
    date: "2024-12-28",
    readTime: "4 min read",
    likes: 312,
    comments: 29,
    views: 2856,
    tags: [
      "Conversation Starters",
      "Messaging",
      "Communication",
      "Dating Tips",
      "First Messages",
    ],
    authorBio:
      "David is MatchBox's AI Engineer specializing in conversation analytics and natural language processing.",
    authorImage: "👨🏻‍🔬",
  };

  const conversationStarters = [
    {
      category: "Profile-Based Openers",
      description:
        "Reference something specific from their profile to show you actually read it",
      starters: [
        "I see you're into hiking! What's the most beautiful trail you've discovered recently?",
        "Your travel photos are amazing! Which destination surprised you the most?",
        "I noticed you love cooking - what's your go-to comfort food to make?",
        "Fellow coffee enthusiast here! What's your current favorite brewing method?",
        "I saw you mentioned [hobby] - I've been wanting to try that! Any beginner tips?",
        "Your book collection looks impressive! What's the last book that completely absorbed you?",
        "I love that you volunteer at [organization]! What drew you to that cause?",
        "Your dog/cat is adorable! What's their personality like?",
        "I see you're a [profession] - that must be fascinating! What's the best part of your job?",
        "Your weekend adventures look fun! What's on your bucket list for this year?",
      ],
    },
    {
      category: "Question-Based Starters",
      description:
        "Open-ended questions that invite detailed responses and show genuine curiosity",
      starters: [
        "What's something you've learned recently that completely changed your perspective?",
        "If you could have dinner with anyone, living or dead, who would it be and why?",
        "What's the most spontaneous thing you've done this year?",
        "What's a skill you'd love to master if you had unlimited time?",
        "What's your favorite way to spend a Sunday morning?",
        "If you could live anywhere in the world for a year, where would you choose?",
        "What's something that never fails to make you laugh?",
        "What's the best advice you've ever received?",
        "What's a goal you're working toward that you're excited about?",
        "What's your favorite season and what do you love most about it?",
      ],
    },
    {
      category: "Playful & Fun Starters",
      description:
        "Light-hearted messages that showcase your personality and sense of humor",
      starters: [
        "Quick question: Are you team pineapple on pizza or team absolutely not?",
        "I have to settle a debate - what's the best Disney movie and why is it [your choice]?",
        "Okay, honest question: Do you actually fold your fitted sheets or just crumple them like the rest of us?",
        "Would you rather have the ability to fly or be invisible? (This is very important for compatibility)",
        "I'm making a playlist for road trips - what song absolutely has to be on it?",
        "Coffee or tea? This might determine if we can be friends 😄",
        "What's your go-to karaoke song? (Please don't say you don't do karaoke)",
        "If you were a superhero, what would your completely useless superpower be?",
        "What's the weirdest food combination that you actually love?",
        "Beach vacation or mountain adventure? Asking for science 🧪",
      ],
    },
    {
      category: "Current Events & Seasonal",
      description:
        "Timely conversation starters that feel natural and relevant",
      starters: [
        "Have you watched [popular current show]? I'm completely obsessed and need someone to discuss it with!",
        "With the new year coming up, what's one thing you're most looking forward to?",
        "Any good Netflix recommendations? I just finished [show] and need something new!",
        "How are you surviving this crazy weather we've been having?",
        "Have you tried any new restaurants lately? I'm always looking for good food recommendations!",
        "What's your take on this whole [current trend] thing? I'm curious what you think!",
        "Are you doing anything fun for the holidays, or keeping it low-key?",
        "Have you been to any good concerts or events recently?",
        "What's your summer/winter survival strategy? Any hidden gems you recommend?",
        "Are you following [current sports event/cultural event]? What do you think about it?",
      ],
    },
    {
      category: "Creative & Unique Starters",
      description:
        "Memorable messages that stand out from the typical opening lines",
      starters: [
        "I'm conducting a very important survey: What's the best late-night snack and why?",
        "Your mission, should you choose to accept it: Recommend me something new to try this weekend.",
        "I have a theory that you can tell a lot about someone by their grocery cart. What's always in yours?",
        "Plot twist: We're both stranded on a desert island. What three things did you bring?",
        "I'm trying to convince my friends that [something from their profile] is amazing. Help me build my case?",
        "Quick! You have 30 seconds to pitch me your favorite hobby. Go!",
        "I'm starting a very exclusive club for people who [reference their interest]. Are you in?",
        "Breaking news: Local person (me) seeks adventure recommendations from expert (you).",
        "I have a confession: I've never [something common]. Should I be worried?",
        "Your profile suggests you might be the perfect person to settle this debate I'm having...",
      ],
    },
  ];

  const relatedPosts = [
    {
      id: "first-date-ideas-2025",
      title: "Creative First Date Ideas That Actually Work in 2025",
      category: "Dating Tips",
      readTime: "5 min read",
      image: "🎨",
    },
    {
      id: "profile-photos-that-get-matches",
      title: "Profile Photos That Actually Get Matches: A Data-Driven Analysis",
      category: "Profile Tips",
      readTime: "6 min read",
      image: "📸",
    },
    {
      id: "red-flags-early-dating",
      title: "Red Flags to Watch for in Early Dating",
      category: "Relationship Advice",
      readTime: "7 min read",
      image: "🚩",
    },
  ];

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
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
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl">
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
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 mb-8">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-purple-800 mb-2">
                      Why First Messages Matter
                    </h3>
                    <p className="text-purple-700">
                      Research shows that personalized first messages receive 3x
                      more responses than generic greetings. The key is showing
                      genuine interest while being memorable and easy to respond
                      to.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "Hey." "Hi there." "How's your day?" If these are your go-to
                conversation starters, it's time for an upgrade. After analyzing
                thousands of successful first messages on MatchBox, we've
                identified the patterns that consistently get responses and lead
                to meaningful conversations.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                The best conversation starters do three things: they show you've
                read the person's profile, they're easy and fun to respond to,
                and they give the other person something specific to talk about.
                Here are 50 proven conversation starters organized by type, plus
                tips on when and how to use them.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Science Behind Great Conversation Starters
              </h2>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8">
                <h3 className="text-lg font-bold text-blue-800 mb-4">
                  What Our Analysis Found
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-xl font-bold text-blue-800">67%</p>
                      <p className="text-sm text-blue-700">
                        Response rate for profile-based openers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-xl font-bold text-blue-800">3.2x</p>
                      <p className="text-sm text-blue-700">
                        Longer conversations from question-based starters
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-xl font-bold text-blue-800">45%</p>
                      <p className="text-sm text-blue-700">
                        Higher engagement with humor-based messages
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-xl font-bold text-blue-800">89%</p>
                      <p className="text-sm text-blue-700">
                        Preference for specific over generic messages
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">
                50 Conversation Starters That Work
              </h2>

              {/* Conversation Starters by Category */}
              <div className="space-y-8">
                {conversationStarters.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          categoryIndex === 0
                            ? "bg-gradient-to-r from-green-500 to-green-600"
                            : categoryIndex === 1
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : categoryIndex === 2
                            ? "bg-gradient-to-r from-purple-500 to-purple-600"
                            : categoryIndex === 3
                            ? "bg-gradient-to-r from-pink-500 to-red-500"
                            : "bg-gradient-to-r from-orange-500 to-yellow-500"
                        }`}
                      >
                        {categoryIndex + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {category.category}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {category.starters.map((starter, starterIndex) => (
                        <div
                          key={starterIndex}
                          className="group flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-start space-x-3 flex-1">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 mt-0.5 flex-shrink-0">
                              {starterIndex + 1}
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {starter}
                            </p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(starter)}
                            className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                              copiedText === starter
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                            }`}
                            title="Copy to clipboard"
                          >
                            {copiedText === starter ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
                How to Customize These Starters
              </h2>

              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 mb-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">
                      Pro Tips for Personalization
                    </h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>
                        • <strong>Add their name:</strong> Messages with names
                        get 35% more responses
                      </li>
                      <li>
                        • <strong>Reference specific details:</strong> Show you
                        read their full profile, not just photos
                      </li>
                      <li>
                        • <strong>Match their energy:</strong> Formal profile =
                        more professional opener, fun profile = playful starter
                      </li>
                      <li>
                        • <strong>Keep it concise:</strong> 2-3 sentences max -
                        make them want to learn more
                      </li>
                      <li>
                        • <strong>End with a question:</strong> Give them a
                        clear way to respond
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                The Do's and Don'ts of First Messages
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    DO This
                  </h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Read their entire profile before messaging</li>
                    <li>• Ask open-ended questions</li>
                    <li>• Show genuine curiosity about their interests</li>
                    <li>• Use proper spelling and grammar</li>
                    <li>• Be authentic and let your personality show</li>
                    <li>
                      • Reference something specific from their photos or bio
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                  <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 rotate-45" />
                    DON'T Do This
                  </h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Send generic "Hey" or "How are you?" messages</li>
                    <li>• Comment only on physical appearance</li>
                    <li>• Write novels - keep it concise</li>
                    <li>• Copy-paste the same message to everyone</li>
                    <li>• Be overly forward or inappropriate</li>
                    <li>
                      • Ask for personal information (phone, address)
                      immediately
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                What to Do After They Respond
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Getting a response is just the beginning! Here's how to keep the
                conversation flowing:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Respond promptly but not immediately:</strong> Show
                    interest without seeming desperate (1-4 hours is ideal)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Ask follow-up questions:</strong> Show you're
                    listening and want to learn more
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Share something about yourself:</strong> Make it a
                    two-way conversation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Suggest meeting after 5-7 messages:</strong> Don't
                    let the conversation drag on too long online
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Bottom Line
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Great conversation starters are about connection, not
                perfection. The goal isn't to impress someone with your wit or
                creativity (though those don't hurt!). It's to show that you're
                a thoughtful person who pays attention and is genuinely
                interested in getting to know them.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Remember, even the best conversation starter won't work with
                everyone – and that's okay! You're not trying to get a response
                from every person you message. You're trying to start meaningful
                conversations with people who might be a good match for you.
              </p>

              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 mt-8">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      Ready to Start Better Conversations?
                    </h4>
                    <p className="text-purple-700 mb-3">
                      Pick 3-5 conversation starters from different categories
                      that feel natural to you. Customize them based on each
                      person's profile, and watch your response rate improve!
                    </p>
                    <p className="text-purple-700 italic">
                      <strong>Remember:</strong> Authenticity beats perfection
                      every time. Be yourself, be curious, and be kind.
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
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
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

            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 mb-12 border border-purple-100">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                {post.authorImage}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.authorBio} David has analyzed millions of messages to
                  understand what makes conversations successful, and his
                  insights have helped thousands of MatchBox users improve their
                  communication skills and find meaningful connections.
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  View All Communication Tips
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
