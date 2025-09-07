"use client";

import React from "react";
import {
  Shield,
  AlertTriangle,
  Eye,
  MessageCircle,
  MapPin,
  Phone,
  Lock,
  Heart,
  CheckCircle,
  Users,
  Camera,
  Flag,
} from "lucide-react";
import { useRouter } from "next/navigation"; // Router for redirects

export default function SafetyTips() {
  const router = useRouter();

  function redirectToLandingPage() {
    router.push("/");
  }
  const safetyTips = [
    {
      category: "Profile Safety",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
      tips: [
        "Use recent, authentic photos of yourself",
        "Don't share personal information like your full name, address, or workplace in your bio",
        "Be cautious about sharing social media handles",
        "Report and block suspicious profiles immediately",
      ],
    },
    {
      category: "Messaging Safety",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      tips: [
        "Keep conversations on the MatchBox platform initially",
        "Don't share personal phone numbers or addresses too quickly",
        "Be wary of anyone asking for money or gifts",
        "Trust your instincts if something feels off",
      ],
    },
    {
      category: "Meeting Safety",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      tips: [
        "Always meet in public places for first dates",
        "Tell a friend or family member about your plans",
        "Arrange your own transportation to and from the date",
        "Consider a video call before meeting in person",
      ],
    },
    {
      category: "Privacy Protection",
      icon: Lock,
      color: "from-pink-500 to-red-500",
      tips: [
        "Use MatchBox's built-in video calling feature",
        "Don't share financial information",
        "Be cautious about sharing your location",
        "Review your privacy settings regularly",
      ],
    },
  ];

  const redFlags = [
    "Asks for money, gifts, or financial information",
    "Refuses to video chat or meet in person",
    "Has very few photos or photos that seem too professional",
    "Pushes for personal information too quickly",
    "Makes you feel uncomfortable or pressured",
    "Stories don't add up or change over time",
    "Wants to move off the platform immediately",
    "Sends inappropriate content without consent",
  ];

  const emergencyContacts = [
    {
      service: "Emergency Services",
      number: "911",
      description: "For immediate danger",
    },
    {
      service: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "24/7 confidential support",
    },
    {
      service: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free crisis counseling via text",
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
              <Shield className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-700">
                Your safety is our priority
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              Safety Tips
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dating should be fun and safe. Follow these guidelines to protect
              yourself while finding meaningful connections on MatchBox.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Tips Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Essential Safety Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these best practices to ensure a safe and positive dating
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {safetyTips.map((category, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 group hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-all duration-300`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-red-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-200/50">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-700">
                  Warning signs
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Red Flags to Watch For
              </h2>
              <p className="text-xl text-gray-600">
                Be cautious if someone exhibits these behaviors. Trust your
                instincts.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50">
              <div className="grid md:grid-cols-2 gap-4">
                {redFlags.map((flag, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-red-50/50 border border-red-100/50"
                  >
                    <Flag className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Emergency Resources
              </h2>
              <p className="text-xl text-gray-600">
                If you're in immediate danger or need support, these resources
                are available 24/7.
              </p>
            </div>

            <div className="space-y-6">
              {emergencyContacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100/50 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {contact.service}
                    </h3>
                    <p className="text-gray-600">{contact.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-xl">
                      <Phone className="w-4 h-4" />
                      <span>{contact.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Safe, Find Love
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Remember: your safety comes first. Trust your instincts and don't
            hesitate to reach out for help if you need it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group px-8 py-4 bg-white text-purple-600 text-lg font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer"
              onClick={redirectToLandingPage}
            >
              <Heart className="inline w-5 h-5 mr-2 group-hover:animate-pulse" />
              Back to MatchBox
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
