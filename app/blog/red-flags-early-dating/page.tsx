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
  AlertTriangle,
  Shield,
  XCircle,
  CheckCircle,
  Flag,
  MessageSquare,
  Users,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function RedFlagsDateBlog() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(278);

  const post = {
    id: "red-flags-early-dating",
    title: "Red Flags to Watch for in Early Dating",
    excerpt:
      "Learn to identify concerning behaviors early on to protect yourself and find healthier relationships.",
    category: "Relationship Advice",
    author: "Elena Rodriguez",
    date: "2024-12-25",
    readTime: "7 min read",
    likes: 278,
    comments: 16,
    views: 4231,
    tags: [
      "Red Flags",
      "Dating Safety",
      "Relationship Advice",
      "Early Dating",
      "Warning Signs",
    ],
    authorBio:
      "Elena is MatchBox's Safety Director with 10+ years of experience in digital safety and relationship psychology.",
    authorImage: "👩🏽‍⚖️",
  };

  const redFlagCategories = [
    {
      title: "Communication Red Flags",
      icon: MessageSquare,
      color: "from-red-500 to-red-600",
      description: "Warning signs in how they communicate with you",
      flags: [
        {
          flag: "Love Bombing",
          description:
            "Overwhelming you with excessive affection, gifts, or attention very early in dating",
          examples: [
            "'You're perfect, I've never felt this way'",
            "Expensive gifts on the first few dates",
            "Constant texting and calls",
            "Talking about the future after just meeting",
          ],
          severity: "high",
        },
        {
          flag: "Poor Response Patterns",
          description:
            "Inconsistent, delayed, or dismissive communication habits",
          examples: [
            "Takes days to respond without explanation",
            "Leaves you on read frequently",
            "Only contacts you late at night",
            "Gives one-word responses",
          ],
          severity: "medium",
        },
        {
          flag: "Pressure to Move Fast",
          description:
            "Pushing for intimacy, commitment, or personal information too quickly",
          examples: [
            "Wants to be exclusive immediately",
            "Pressures for physical intimacy",
            "Asks for personal details too soon",
            "Gets upset if you want to take things slow",
          ],
          severity: "high",
        },
        {
          flag: "Secretive Communication",
          description:
            "Being evasive, vague, or secretive about basic information",
          examples: [
            "Won't share their last name",
            "Vague about their job or location",
            "Avoids video calls consistently",
            "Stories don't add up or change",
          ],
          severity: "high",
        },
      ],
    },
    {
      title: "Behavioral Red Flags",
      icon: Users,
      color: "from-orange-500 to-red-500",
      description: "Concerning patterns in their actions and attitudes",
      flags: [
        {
          flag: "Disrespectful to Others",
          description:
            "How they treat service workers, friends, or strangers reveals character",
          examples: [
            "Rude to servers or staff",
            "Road rage or aggressive driving",
            "Speaks poorly about exes",
            "Dismissive of your friends/family",
          ],
          severity: "high",
        },
        {
          flag: "Boundary Violations",
          description: "Ignoring or pushing against boundaries you've set",
          examples: [
            "Shows up uninvited",
            "Continues behavior after you've said no",
            "Touches you without consent",
            "Ignores your 'no' in any context",
          ],
          severity: "high",
        },
        {
          flag: "Controlling Behavior",
          description:
            "Attempting to control your choices, schedule, or relationships",
          examples: [
            "Tells you what to wear",
            "Gets jealous of your friends",
            "Wants to know where you are constantly",
            "Criticizes your choices",
          ],
          severity: "high",
        },
        {
          flag: "Inconsistent Stories",
          description:
            "Details about their life don't match up or change over time",
          examples: [
            "Job details change",
            "Age or background inconsistencies",
            "Photos don't match in person",
            "Contradicts previous statements",
          ],
          severity: "medium",
        },
      ],
    },
    {
      title: "Emotional Red Flags",
      icon: Heart,
      color: "from-purple-500 to-red-500",
      description: "Warning signs related to emotional maturity and stability",
      flags: [
        {
          flag: "Extreme Mood Swings",
          description:
            "Dramatic shifts in mood or behavior that seem unpredictable",
          examples: [
            "Sweet one moment, cold the next",
            "Explosive anger over small things",
            "Can't handle minor disappointments",
            "Blames mood on others",
          ],
          severity: "high",
        },
        {
          flag: "Playing Victim",
          description:
            "Always positioning themselves as the victim in every situation",
          examples: [
            "Everyone is always against them",
            "Never takes responsibility",
            "All exes are 'crazy'",
            "Bad things 'always happen to them'",
          ],
          severity: "medium",
        },
        {
          flag: "Emotional Manipulation",
          description: "Using guilt, fear, or manipulation to get their way",
          examples: [
            "'If you loved me, you would...'",
            "Threatens to hurt themselves",
            "Silent treatment as punishment",
            "Makes you feel guilty for having boundaries",
          ],
          severity: "high",
        },
        {
          flag: "Lack of Empathy",
          description:
            "Difficulty understanding or caring about others' feelings",
          examples: [
            "Doesn't comfort you when upset",
            "Dismisses your feelings",
            "Can't understand why you're hurt",
            "Only focuses on their own needs",
          ],
          severity: "medium",
        },
      ],
    },
    {
      title: "Lifestyle Red Flags",
      icon: Flag,
      color: "from-yellow-500 to-red-500",
      description: "Concerning patterns in how they live their life",
      flags: [
        {
          flag: "Substance Abuse Issues",
          description:
            "Problematic relationship with alcohol, drugs, or other substances",
          examples: [
            "Can't socialize without drinking",
            "Uses substances to cope with emotions",
            "Drives under the influence",
            "Becomes different person when using",
          ],
          severity: "high",
        },
        {
          flag: "Financial Irresponsibility",
          description:
            "Poor money management or expecting you to pay for everything",
          examples: [
            "Always 'forgot' their wallet",
            "Asks to borrow money early on",
            "Brags about expensive purchases then can't pay bills",
            "Has no financial goals or planning",
          ],
          severity: "medium",
        },
        {
          flag: "Isolation from Support System",
          description:
            "Having no close friends, family connections, or support network",
          examples: [
            "No close friends they can introduce you to",
            "Estranged from all family with vague explanations",
            "Moves frequently without clear reason",
            "You're their only source of social interaction",
          ],
          severity: "medium",
        },
        {
          flag: "Legal or Serious Issues",
          description: "Current legal problems or concerning background issues",
          examples: [
            "Current restraining orders",
            "Frequent legal troubles",
            "Fired from multiple jobs",
            "History of violence or arrests",
          ],
          severity: "high",
        },
      ],
    },
  ];

  const relatedPosts = [
    {
      id: "online-dating-safety-guide",
      title: "The Complete Guide to Online Dating Safety",
      category: "Safety",
      readTime: "8 min read",
      image: "🛡️",
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

  const getSeverityColor = (severity: any) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
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
              <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
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
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">
                      Trust Your Instincts
                    </h3>
                    <p className="text-red-700">
                      If something feels off, it probably is. This guide will
                      help you identify specific warning signs, but remember:
                      your intuition is your first line of defense. Never ignore
                      gut feelings for the sake of giving someone "the benefit
                      of the doubt."
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The early stages of dating are exciting – you're getting to know
                someone new, feeling those butterflies, and imagining what might
                develop. But it's also the most important time to stay alert for
                red flags. The behaviors someone shows in the first few weeks or
                months of dating often predict how they'll act in a
                relationship.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Red flags aren't always dramatic or obvious. Sometimes they're
                subtle patterns that gradually escalate. Other times they're
                clear warning signs that get dismissed because "they're so sweet
                otherwise" or "everyone has flaws." This guide will help you
                identify concerning behaviors early, so you can make informed
                decisions about who deserves a place in your life.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Why Early Recognition Matters
              </h2>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8">
                <h3 className="text-lg font-bold text-blue-800 mb-4">
                  The Pattern Usually Escalates
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Early Dating:
                    </h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Subtle boundary testing</li>
                      <li>• Occasional mood swings</li>
                      <li>• Small controlling behaviors</li>
                      <li>• Minor disrespect to others</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      In Relationships:
                    </h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Major boundary violations</li>
                      <li>• Emotional manipulation</li>
                      <li>• Isolation from support system</li>
                      <li>• Verbal or physical aggression</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">
                Red Flags to Watch For
              </h2>

              {/* Red Flag Categories */}
              <div className="space-y-12">
                {redFlagCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {category.title}
                        </h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {category.flags.map((flagItem, flagIndex) => (
                        <div
                          key={flagIndex}
                          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <Flag className="w-5 h-5 text-red-500" />
                                <h4 className="text-lg font-bold text-gray-800">
                                  {flagItem.flag}
                                </h4>
                                <span
                                  className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(
                                    flagItem.severity
                                  )}`}
                                >
                                  {flagItem.severity} risk
                                </span>
                              </div>
                              <p className="text-gray-700 mb-4 leading-relaxed">
                                {flagItem.description}
                              </p>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-4 rounded-xl">
                            <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <AlertTriangle className="w-4 h-4 mr-2 text-yellow-600" />
                              Examples to Watch For:
                            </h5>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {flagItem.examples.map(
                                (example, exampleIndex) => (
                                  <li
                                    key={exampleIndex}
                                    className="flex items-start space-x-2"
                                  >
                                    <XCircle className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">
                                      {example}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
                Green Flags: What Healthy Dating Looks Like
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                To help you recognize the difference, here are the green flags
                you should look for in early dating:
              </p>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mb-8">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Healthy Dating Behaviors
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">
                      Communication:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Consistent, respectful communication
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Respects your response time
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Accepts "no" gracefully
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Opens up gradually
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">
                      Behavior:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Treats others with kindness
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Has healthy friendships
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Takes responsibility for mistakes
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm">
                          Shows empathy and emotional intelligence
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                What to Do When You See Red Flags
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                1. Trust Your Instincts
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Don't talk yourself out of what you're seeing or feeling. If
                multiple behaviors are concerning you, that's information worth
                taking seriously.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. Set and Maintain Boundaries
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Test how they respond to reasonable boundaries. A healthy person
                will respect them; someone with concerning patterns will push
                back, argue, or ignore them entirely.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. Don't Try to Fix or Change Them
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Red flags aren't challenges to overcome or problems to solve.
                They're information about who this person is right now. People
                can change, but only when they want to and do the work
                themselves.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4. Talk to Trusted Friends or Family
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Outside perspectives can be invaluable. If multiple people in
                your support system express concerns, take that feedback
                seriously.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                5. End Things Safely
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you decide to end things, prioritize your safety. For
                high-risk situations, consider ending contact through text,
                blocking on social media, and informing friends or family of
                your decision.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Common Myths About Red Flags
              </h2>

              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 mb-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-4">
                  Don't Fall for These Rationalizations:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-yellow-800">
                        "They're just passionate/intense"
                      </p>
                      <p className="text-yellow-700 text-sm">
                        Passion doesn't excuse boundary violations or
                        controlling behavior.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-yellow-800">
                        "They had a bad day/childhood/relationship"
                      </p>
                      <p className="text-yellow-700 text-sm">
                        Past trauma explains behavior but doesn't excuse it or
                        make it your responsibility to fix.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-yellow-800">
                        "They'll change once we're together"
                      </p>
                      <p className="text-yellow-700 text-sm">
                        Early dating behavior is usually the best you'll see,
                        not the worst.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-yellow-800">
                        "Nobody's perfect"
                      </p>
                      <p className="text-yellow-700 text-sm">
                        There's a difference between minor flaws and concerning
                        behavioral patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Building Your Red Flag Radar
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The more you understand what healthy relationships look like,
                the easier it becomes to spot unhealthy patterns. Here are some
                ways to strengthen your ability to recognize red flags:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Know your own boundaries</strong> and what behavior
                    you will and won't accept
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Pay attention to how you feel</strong> after
                    spending time with them
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Watch how they treat others,</strong> especially
                    those in service positions or with less power
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Listen to their stories</strong> about past
                    relationships, conflicts, and challenges
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Notice patterns,</strong> not just isolated
                    incidents
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Bottom Line
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Recognizing red flags early isn't about being pessimistic or
                judgmental – it's about protecting yourself and making room in
                your life for someone who will treat you with the respect and
                kindness you deserve. The right person for you won't make you
                question your instincts or constantly wonder if their behavior
                is acceptable.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Remember that you deserve someone who makes you feel safe,
                valued, and respected from day one. Don't settle for someone who
                shows you concerning behaviors just because you're lonely,
                they're attractive, or you've invested time in getting to know
                them. Your future self will thank you for walking away from red
                flags instead of hoping they'll disappear.
              </p>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mt-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-red-800 mb-2">
                      Emergency Resources
                    </h4>
                    <p className="text-red-700 mb-3">
                      If you're in immediate danger or need support:
                    </p>
                    <ul className="space-y-1 text-red-700">
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
                      <li>
                        <strong>National Sexual Assault Hotline:</strong>{" "}
                        1-800-656-HOPE
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Trust yourself.</strong> You know more than you think
                you do, and your instincts are there to protect you. Don't
                ignore them for anyone.
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
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
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

            <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-12 border border-red-100">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                {post.authorImage}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.authorBio} Elena has dedicated her career to helping
                  people recognize unhealthy relationship patterns and build
                  safer, more fulfilling connections. She regularly speaks at
                  universities and organizations about relationship safety and
                  healthy boundaries.
                </p>
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300">
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
                          <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                            <Tag className="w-3 h-3 mr-1" />
                            {relatedPost.category}
                          </span>
                          <div className="text-3xl">{relatedPost.image}</div>
                        </div>

                        <h4 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {relatedPost.readTime}
                          </span>
                          <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
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
