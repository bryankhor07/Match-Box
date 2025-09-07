"use client";

import React, { useState } from "react";
import {
  FileText,
  Shield,
  Users,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Eye,
  Lock,
  Globe,
  Gavel,
  Calendar,
  Mail,
} from "lucide-react";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      content: {
        summary:
          "By using MatchBox, you agree to these terms and our policies.",
        details: [
          "These Terms of Service constitute a legally binding agreement between you and MatchBox.",
          "By creating an account, you confirm you are at least 18 years old and legally able to enter into contracts.",
          "If you disagree with any part of these terms, you should not use our service.",
          "We may update these terms from time to time, and your continued use constitutes acceptance of changes.",
        ],
      },
    },
    {
      id: "eligibility",
      title: "Eligibility & Account Requirements",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      content: {
        summary:
          "You must be 18+ and provide accurate information to use MatchBox.",
        details: [
          "You must be at least 18 years old to create an account.",
          "You must provide accurate, current, and complete information during registration.",
          "You are responsible for maintaining the confidentiality of your account credentials.",
          "You may not create multiple accounts or allow others to use your account.",
          "We reserve the right to suspend or terminate accounts that violate these requirements.",
        ],
      },
    },
    {
      id: "conduct",
      title: "User Conduct & Community Guidelines",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      content: {
        summary:
          "You agree to follow our community guidelines and treat others respectfully.",
        details: [
          "You must comply with our Community Guidelines at all times.",
          "You will not harass, abuse, or harm other users in any way.",
          "You will not post inappropriate, offensive, or explicit content.",
          "You will not use the service for commercial purposes or spam.",
          "You will not attempt to circumvent our safety features or policies.",
          "Violations may result in account suspension or permanent termination.",
        ],
      },
    },
    {
      id: "content",
      title: "Content & Intellectual Property",
      icon: Eye,
      color: "from-pink-500 to-red-500",
      content: {
        summary:
          "You own your content, but grant us rights to operate the service.",
        details: [
          "You retain ownership of all content you post, including photos and messages.",
          "You grant MatchBox a license to use, display, and distribute your content as necessary to provide the service.",
          "You represent that you have all rights necessary to grant these licenses.",
          "You may not post content that infringes on others' intellectual property rights.",
          "We may remove content that violates these terms or our policies.",
          "MatchBox trademarks and content are owned by us and protected by law.",
        ],
      },
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      icon: Lock,
      color: "from-teal-500 to-cyan-500",
      content: {
        summary: "We protect your privacy and handle your data responsibly.",
        details: [
          "Our Privacy Policy explains how we collect, use, and protect your information.",
          "We use industry-standard security measures to protect your data.",
          "You control your privacy settings and can delete your account at any time.",
          "We may share limited data as required by law or to prevent harm.",
          "We do not sell your personal information to third parties.",
          "You have rights regarding your data as outlined in our Privacy Policy.",
        ],
      },
    },
    {
      id: "payments",
      title: "Payments & Subscriptions",
      icon: CreditCard,
      color: "from-yellow-500 to-orange-500",
      content: {
        summary: "Premium features require payment, with clear billing terms.",
        details: [
          "Basic MatchBox features are free, with optional premium subscriptions available.",
          "Subscription fees are billed in advance on a recurring basis.",
          "You can cancel your subscription at any time through your account settings.",
          "Refunds are provided according to our refund policy and applicable law.",
          "Price changes will be communicated with at least 30 days notice.",
          "Failed payments may result in suspension of premium features.",
        ],
      },
    },
    {
      id: "limitations",
      title: "Service Limitations & Disclaimers",
      icon: AlertCircle,
      color: "from-red-500 to-pink-500",
      content: {
        summary:
          'MatchBox is provided "as is" with certain limitations and disclaimers.',
        details: [
          "We cannot guarantee that you will find matches or romantic success.",
          "The service may be temporarily unavailable due to maintenance or technical issues.",
          "We are not responsible for the actions or behavior of other users.",
          "We make no warranties about the accuracy or completeness of user profiles.",
          "Your use of the service is at your own risk and discretion.",
          "We reserve the right to modify or discontinue features at any time.",
        ],
      },
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Gavel,
      color: "from-indigo-500 to-purple-500",
      content: {
        summary:
          "Our liability is limited, and you use the service at your own risk.",
        details: [
          "MatchBox's liability is limited to the maximum extent permitted by law.",
          "We are not liable for indirect, incidental, or consequential damages.",
          "Our total liability will not exceed the amount you paid for the service.",
          "You agree to indemnify MatchBox against claims arising from your use of the service.",
          "These limitations apply even if we have been advised of the possibility of damages.",
          "Some jurisdictions may not allow these limitations, so they may not apply to you.",
        ],
      },
    },
  ];

  const toggleSection = (sectionId: any) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

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
              <FileText className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-700">
                Legal terms and conditions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              Terms of Service
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of MatchBox and outline our mutual
              rights and responsibilities. Please read them carefully before
              using our service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-blue-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-700">
                  Last updated: September 2025
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50">
                <Globe className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-700">
                  Effective worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Terms Summary
            </h2>
            <p className="text-xl text-gray-600">
              Here's what you're agreeing to in simple terms:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Be Respectful
              </h3>
              <p className="text-gray-600">
                Treat others kindly, follow our community guidelines, and use
                the app responsibly.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Stay Safe
              </h3>
              <p className="text-gray-600">
                We protect your privacy and safety, but you're responsible for
                your own interactions.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Your Rights
              </h3>
              <p className="text-gray-600">
                You own your content and can delete your account anytime,
                subject to these terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Detailed Terms
              </h2>
              <p className="text-xl text-gray-600">
                Click on any section below to read the full details:
              </p>
            </div>

            <div className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-gray-50/50 transition-all duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {index + 1}. {section.title}
                        </h3>
                        <p className="text-gray-600">
                          {section.content.summary}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${
                        activeSection === section.id ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {activeSection === section.id && (
                    <div className="px-6 pb-6 border-t border-gray-100/50">
                      <div className="pt-6">
                        <ul className="space-y-3">
                          {section.content.details.map(
                            (detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
