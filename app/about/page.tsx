"use client";

import React from "react";
import {
  Heart,
  Users,
  Target,
  Sparkles,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const values = [
    {
      icon: Heart,
      title: "Authentic Connections",
      description:
        "We believe real love starts with genuine interactions. Our platform encourages meaningful conversations over superficial swipes.",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety and privacy are paramount. We use advanced verification and moderation to create a secure dating environment.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Smart Matching",
      description:
        "Our AI learns your preferences and compatibility patterns to suggest matches that truly align with your values and lifestyle.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Globe,
      title: "Inclusive Community",
      description:
        "Love knows no boundaries. We celebrate diversity and welcome everyone to find their perfect match in our inclusive community.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  function redirectToLandingPage() {
    router.push("/");
  }

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
                Our story
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              About MatchBox
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize how people find love. Through
              thoughtful design, advanced technology, and genuine care for our
              community, we're creating meaningful connections that last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                onClick={redirectToLandingPage}
              >
                <Users className="inline w-5 h-5 mr-2 group-hover:animate-pulse" />
                Join Our Community
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  How MatchBox Started
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  It all began with a simple frustration: dating apps were
                  becoming more about entertainment than genuine connection.
                  Endless swiping, superficial matches, and a focus on quantity
                  over quality.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We knew there had to be a better way. So we built MatchBox
                  from the ground up, focusing on what really matters:
                  compatibility, safety, and meaningful conversations that lead
                  to real relationships.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Founded in 2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      With love, by people who believe in love
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-red-500 rounded-3xl p-8 text-white text-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <Sparkles className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg">
                    "To create a world where everyone can find their perfect
                    match through authentic connections, mutual respect, and
                    genuine compatibility."
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              What We Believe In
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from product decisions to
              community building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 group hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-all duration-300`}
                >
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
