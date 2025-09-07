import React from "react";
import {
  Heart,
  Users,
  Shield,
  MessageCircle,
  Camera,
  Flag,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lock,
  Smile,
  UserCheck,
} from "lucide-react";

export default function CommunityGuidelines() {
  const guidelines = [
    {
      icon: Heart,
      title: "Be Authentic & Honest",
      color: "from-pink-500 to-red-500",
      rules: [
        "Use real, recent photos of yourself",
        "Be truthful about your age, location, and intentions",
        "Write a genuine bio that reflects who you are",
        "Don't catfish or misrepresent yourself",
      ],
    },
    {
      icon: Users,
      title: "Treat Others with Respect",
      color: "from-blue-500 to-purple-500",
      rules: [
        "Be kind and courteous in all interactions",
        "Respect others' boundaries and preferences",
        "Accept rejection gracefully - no means no",
        "Use inclusive language and avoid discrimination",
      ],
    },
    {
      icon: MessageCircle,
      title: "Keep Conversations Appropriate",
      color: "from-green-500 to-teal-500",
      rules: [
        "No sexual or explicit content in messages",
        "Don't send unsolicited intimate photos",
        "Keep conversations friendly and respectful",
        "Report inappropriate messages immediately",
      ],
    },
    {
      icon: Shield,
      title: "Protect Your Safety",
      color: "from-purple-500 to-pink-500",
      rules: [
        "Don't share personal information too quickly",
        "Meet in public places for first dates",
        "Trust your instincts and report suspicious behavior",
        "Use MatchBox's built-in features for communication",
      ],
    },
  ];

  const prohibited = [
    {
      icon: XCircle,
      title: "Harassment & Bullying",
      description: "Any form of harassment, threats, or bullying behavior",
      examples: [
        "Sending repeated unwanted messages",
        "Making threats or aggressive comments",
        "Bullying or intimidating other users",
      ],
    },
    {
      icon: Camera,
      title: "Inappropriate Content",
      description: "Sexually explicit, offensive, or inappropriate content",
      examples: [
        "Nude or sexually explicit photos",
        "Hate speech or discriminatory content",
        "Violence or graphic imagery",
      ],
    },
    {
      icon: UserCheck,
      title: "Fake Profiles & Catfishing",
      description: "Creating fake profiles or misrepresenting yourself",
      examples: [
        "Using someone else's photos",
        "Lying about age, identity, or location",
        "Creating multiple accounts",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Spam & Commercial Activity",
      description: "Promotional content, spam, or commercial activities",
      examples: [
        "Promoting businesses or services",
        "Sending spam or promotional messages",
        "Soliciting money or gifts",
      ],
    },
  ];

  const reportingSteps = [
    {
      step: "1",
      title: "Identify the Issue",
      description:
        "Take note of what happened and gather any evidence (screenshots, messages, etc.)",
    },
    {
      step: "2",
      title: "Use In-App Reporting",
      description:
        "Tap the report button on the user's profile or in your conversation",
    },
    {
      step: "3",
      title: "Provide Details",
      description:
        "Give us specific information about what happened and why you're reporting",
    },
    {
      step: "4",
      title: "We Take Action",
      description:
        "Our team reviews all reports within 24 hours and takes appropriate action",
    },
  ];

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
              <Users className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-700">
                Building a better community together
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              Community Guidelines
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              These guidelines help us maintain a safe, respectful, and positive
              environment where everyone can find meaningful connections. By
              using MatchBox, you agree to follow these community standards.
            </p>
          </div>
        </div>
      </section>

      {/* Core Guidelines */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Core Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these principles to create positive experiences for
              yourself and others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 group hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${guideline.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-all duration-300`}
                >
                  <guideline.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {guideline.title}
                </h3>
                <ul className="space-y-3">
                  {guideline.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Not Allowed */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-200/50">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-700">
                Prohibited behavior
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              What's Not Allowed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These behaviors violate our community standards and may result in
              account suspension or permanent ban.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {prohibited.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800 text-sm">
                    Examples:
                  </p>
                  <ul className="space-y-1">
                    {item.examples.map((example, exampleIndex) => (
                      <li
                        key={exampleIndex}
                        className="flex items-start space-x-2"
                      >
                        <span className="text-red-500 text-sm">•</span>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
