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
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(234);

  // This would normally come from your CMS or database based on params.postId
  const post = {
    id: "first-date-ideas-2025",
    title: "Creative First Date Ideas That Actually Work in 2025",
    excerpt:
      "Skip the boring dinner dates! Discover unique, memorable first date ideas that help you connect authentically and have genuine fun together.",
    category: "Dating Tips",
    author: "Sarah Chen",
    date: "2025-01-05",
    readTime: "8 min read",
    likes: 234,
    comments: 18,
    views: 1542,
    tags: ["First Dates", "Dating Tips", "Relationships", "Activity Ideas"],
    authorBio:
      "Sarah is a relationship coach and dating expert with over 8 years of experience helping people find meaningful connections.",
    authorImage: "👩🏻‍💼",
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
              <span className="inline-flex items-center px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
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
              <p className="text-gray-700 mb-6 leading-relaxed">
                Let's be honest – the traditional dinner-and-a-movie first date
                formula is tired. While it might have worked for our parents,
                today's dating landscape calls for more creativity and
                authenticity. After analyzing thousands of successful first
                dates and surveying our community, we've discovered what really
                makes for memorable initial connections.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Why Traditional First Dates Don't Work Anymore
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The problem with dinner dates isn't that they're inherently bad
                – it's that they create artificial pressure. You're sitting
                across from someone you barely know, expected to carry a
                conversation for 2+ hours, with nothing but food as a
                conversation starter. Plus, the formal setting can make both
                people feel like they're in a job interview rather than getting
                to know someone they're attracted to.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Science of Great First Dates
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Research from the Journal of Social Psychology shows that shared
                activities and mild adrenaline boosts create stronger emotional
                connections than passive activities. When you do something
                together – whether it's solving a puzzle, trying a new activity,
                or exploring somewhere new – you create what psychologists call
                "misattribution of arousal." The excitement from the activity
                gets associated with your date, making them seem more
                attractive.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                15 Creative First Date Ideas That Actually Work
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Active & Adventurous
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 leading-relaxed">
                  <strong>Mini Golf with a Twist:</strong> Find a unique mini
                  golf course – glow-in-the-dark, pirate-themed, or rooftop. The
                  playful competition breaks the ice naturally.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Farmers Market Adventure:</strong> Explore a local
                  farmers market together, sample foods, and pick ingredients
                  for a simple meal you can cook together later.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Hiking with a View:</strong> Choose an easy trail with
                  a scenic payoff. The side-by-side walking makes conversation
                  flow more naturally than face-to-face dining.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Rock Climbing (Indoor):</strong> Indoor climbing gyms
                  are beginner-friendly and create natural opportunities to
                  encourage and support each other.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Creative & Cultural
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 leading-relaxed">
                  <strong>Art Gallery Opening:</strong> Free wine, interesting
                  conversation starters on every wall, and a sophisticated
                  atmosphere without the pressure of a formal dinner.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Pottery or Art Class:</strong> Create something
                  together while having easy conversation. Plus, you'll have a
                  memento of your first date.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Local Music Venue:</strong> Choose a venue with good
                  acoustics where you can still talk. Live music provides
                  natural conversation breaks and shared experiences.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Museum Scavenger Hunt:</strong> Create a fun list of
                  items to find or exhibits to visit. It turns a potentially
                  stuffy museum visit into a playful adventure.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Food-Focused (But Not Dinner)
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 leading-relaxed">
                  <strong>Food Truck Tour:</strong> Hit 2-3 food trucks in one
                  area. It's casual, you can walk between locations, and you'll
                  have lots to talk about.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Cooking Class:</strong> Learn to make something new
                  together. The shared challenge creates bonding opportunities
                  and natural conversation.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Coffee Shop Hopping:</strong> Visit 2-3 unique coffee
                  shops in a walkable area. It keeps things moving and gives you
                  different environments to chat in.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  <strong>Happy Hour at a Unique Bar:</strong> Choose somewhere
                  with character – a speakeasy, rooftop bar, or place with
                  interesting cocktails. The atmosphere does half the work for
                  you.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Golden Rules for Any First Date
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                1. Keep It Short and Sweet
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Limit first dates to 1-2 hours maximum. This prevents awkward
                lulls and leaves you both wanting more. If things are going
                great, you can always extend spontaneously.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. Choose Something You Actually Enjoy
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Don't pick an activity just because you think your date will
                like it. Choose something you're genuinely interested in – your
                enthusiasm will be contagious.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. Have a Backup Plan
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If your outdoor plan gets rained out or the venue is
                unexpectedly closed, have a nearby alternative ready. It shows
                you're thoughtful and adaptable.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Bottom Line
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Great first dates aren't about impressing someone with elaborate
                plans or expensive venues. They're about creating an environment
                where two people can relax, be themselves, and see if there's a
                genuine connection worth exploring further.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The best first date is one where you both have fun, learn
                something about each other, and leave feeling excited about the
                possibility of a second date. Whether that happens over mini
                golf or coffee is entirely up to you.
              </p>

              <div className="bg-pink-50 p-6 rounded-2xl border border-pink-200 mt-8">
                <p className="text-gray-700 italic">
                  <strong>What's your favorite first date idea?</strong> Share
                  it with us in the comments below – we'd love to hear what's
                  worked for you!
                </p>
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
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
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
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 mb-12 border border-pink-100">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                {post.authorImage}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.authorBio} She's passionate about helping people build
                  authentic connections and has been featured in numerous dating
                  and relationship publications.
                </p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                  View All Articles
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
