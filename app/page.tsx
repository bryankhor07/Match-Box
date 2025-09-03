"use client";

import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, Video, Users } from "lucide-react";
import { useRouter } from "next/navigation"; // Router for redirects
import { useAuth } from "@/contexts/auth-context";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter(); // Next.js router for navigation
  const { user, loading: authLoading } = useAuth();

  // If user is already signed in, redirect them to matches page.
  useEffect(() => {
    if (user && !authLoading) {
      router.push("/matches");
    }
  }, [user, authLoading, router]);

  const testimonials = [
    {
      name: "Sarah, 28",
      text: "I met my partner within 2 weeks on MatchBox. Couldn't be happier!",
      image: "👩🏻‍💼",
    },
    {
      name: "Mike, 32",
      text: "The AI matching is incredible. Every match feels so compatible!",
      image: "👨🏽‍💻",
    },
    {
      name: "Jessica, 26",
      text: "Finally, a dating app that feels safe and genuine. Love it!",
      image: "👩🏼‍🎨",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  function redirectToAuthPage() {
    router.push("/auth");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-red-500/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-pink-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-pink-200/50">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-700">
                Your perfect match awaits
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              Love is one click away
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              MatchBox connects you with people who truly share your vibe. Smart
              matching, genuine connections, real relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-2xl hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                onClick={redirectToAuthPage}
              >
                <Heart className="inline w-5 h-5 mr-2 group-hover:animate-pulse" />
                Start Matching Now
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </button>

              <a
                href="#how-it-works"
                className="px-8 py-4 border-2 border-pink-300 text-pink-600 text-lg font-semibold rounded-2xl hover:bg-pink-50 transition-all duration-300 cursor-pointer"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              How MatchBox Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Finding love has never been this simple. Four easy steps to your
              perfect match.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Create Profile",
                desc: "Tell us about yourself with photos and interests",
                color: "pink",
              },
              {
                icon: Heart,
                title: "Discover Matches",
                desc: "Our AI finds people who share your vibe",
                color: "purple",
              },
              {
                icon: MessageCircle,
                title: "Start Chatting",
                desc: "Break the ice with meaningful conversations",
                color: "blue",
              },
              {
                icon: Video,
                title: "Meet IRL",
                desc: "Take it offline and build real connections",
                color: "green",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${
                    step.color === "pink"
                      ? "from-pink-500 to-pink-600"
                      : step.color === "purple"
                      ? "from-purple-500 to-purple-600"
                      : step.color === "blue"
                      ? "from-blue-500 to-blue-600"
                      : "from-green-500 to-green-600"
                  } rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Why Choose MatchBox?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced features designed to help you find genuine, lasting
              connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "AI-Powered Matching",
                desc: "Our smart algorithm learns your preferences and finds compatible matches based on deep personality insights.",
                gradient: "from-pink-500 to-red-500",
              },
              {
                icon: Video,
                title: "Real Video Calls",
                desc: "Built-in video calling lets you connect face-to-face before meeting in person.",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: MessageCircle,
                title: "Meaningful Conversations",
                desc: "Conversation starters and compatibility insights help you connect on a deeper level.",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 group hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-3 transition-all duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Love Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real people, real connections, real happiness. Here's what our
              users say.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 text-center">
              <div className="text-6xl mb-4">
                {testimonials[currentTestimonial].image}
              </div>
              <blockquote className="text-2xl text-gray-700 mb-4 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <p className="text-lg font-semibold text-pink-600">
                {testimonials[currentTestimonial].name}
              </p>

              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-pink-500"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                See MatchBox in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Beautiful design meets powerful features. Experience the future
                of dating.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-16 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-bold">MatchBox</span>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          A
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Alex, 28
                          </p>
                          <p className="text-sm text-gray-500">2 miles away</p>
                        </div>
                      </div>
                      <div className="bg-pink-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          "Hey! I saw you love hiking too. Want to explore the
                          trails this weekend?"
                        </p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          "That sounds amazing! I know the perfect spot..."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to meet someone special?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy couples who found love on MatchBox. Your
            perfect match is waiting.
          </p>

          <button
            className="group px-12 py-4 bg-white text-pink-600 text-xl font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            onClick={redirectToAuthPage}
          >
            <Heart className="inline w-6 h-6 mr-2 group-hover:animate-pulse" />
            Join Free Today
            <span className="ml-2">→</span>
          </button>

          <p className="text-white/80 mt-4">
            Free to join • No credit card required • Start matching in minutes
          </p>
        </div>
      </section>
    </div>
  );
}
