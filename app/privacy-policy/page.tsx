"use client";

import React, { useState } from "react";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Share2,
  Settings,
  Trash2,
  Download,
  Bell,
  MapPin,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "collection",
      title: "Information We Collect",
      icon: Database,
      color: "from-blue-500 to-blue-600",
      content: {
        summary:
          "We collect information you provide directly and through your use of MatchBox.",
        categories: [
          {
            title: "Profile Information",
            items: [
              "Name, age, gender, and location",
              "Photos you upload",
              "Bio and personal preferences",
              "Dating preferences and filters",
            ],
          },
          {
            title: "Communication Data",
            items: [
              "Messages you send and receive",
              "Match interactions and responses",
              "Video call metadata (not content)",
              "Report and feedback submissions",
            ],
          },
          {
            title: "Usage Information",
            items: [
              "App usage patterns and features used",
              "Device information and operating system",
              "IP address and approximate location",
              "Crash logs and performance data",
            ],
          },
        ],
      },
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: Settings,
      color: "from-green-500 to-green-600",
      content: {
        summary:
          "We use your information to provide and improve our matching service.",
        categories: [
          {
            title: "Core Service",
            items: [
              "Create and display your profile to potential matches",
              "Suggest compatible matches using our algorithm",
              "Enable messaging and communication features",
              "Provide customer support and assistance",
            ],
          },
          {
            title: "Safety & Security",
            items: [
              "Verify user profiles and prevent fake accounts",
              "Detect and prevent fraud and abuse",
              "Enforce our community guidelines",
              "Investigate reported violations",
            ],
          },
          {
            title: "Improvement & Analytics",
            items: [
              "Analyze usage patterns to improve features",
              "Conduct research on dating preferences",
              "Test new features and functionality",
              "Send relevant notifications and updates",
            ],
          },
        ],
      },
    },
    {
      id: "sharing",
      title: "Information Sharing",
      icon: Share2,
      color: "from-purple-500 to-purple-600",
      content: {
        summary:
          "We share your information only as necessary to provide our service and as you direct.",
        categories: [
          {
            title: "With Other Users",
            items: [
              "Your profile information is visible to potential matches",
              "Messages are shared between matched users",
              "Match status and interaction history",
              "Location information based on your settings",
            ],
          },
          {
            title: "Service Providers",
            items: [
              "Cloud hosting and data storage providers",
              "Payment processing companies",
              "Analytics and crash reporting services",
              "Customer support and communication tools",
            ],
          },
          {
            title: "Legal Requirements",
            items: [
              "When required by law or legal process",
              "To protect safety and prevent harm",
              "In connection with business transactions",
              "With your explicit consent",
            ],
          },
        ],
      },
    },
    {
      id: "security",
      title: "Data Security",
      icon: Lock,
      color: "from-red-500 to-pink-500",
      content: {
        summary:
          "We implement comprehensive security measures to protect your personal information.",
        categories: [
          {
            title: "Technical Safeguards",
            items: [
              "End-to-end encryption for sensitive communications",
              "Secure data transmission using HTTPS/TLS",
              "Regular security audits and penetration testing",
              "Access controls and authentication systems",
            ],
          },
          {
            title: "Operational Security",
            items: [
              "Limited access to personal data on need-to-know basis",
              "Employee training on privacy and security practices",
              "Regular security policy updates and reviews",
              "Incident response and breach notification procedures",
            ],
          },
          {
            title: "Data Protection",
            items: [
              "Regular data backups with encryption",
              "Secure data centers with physical security",
              "Data retention policies and secure deletion",
              "Privacy by design in all system development",
            ],
          },
        ],
      },
    },
    {
      id: "rights",
      title: "Your Privacy Rights",
      icon: Eye,
      color: "from-teal-500 to-cyan-500",
      content: {
        summary:
          "You have control over your personal information and how we use it.",
        categories: [
          {
            title: "Access & Portability",
            items: [
              "Request a copy of your personal data",
              "Export your profile and match history",
              "Review information we have collected about you",
              "Understand how your data is being used",
            ],
          },
          {
            title: "Control & Correction",
            items: [
              "Update or correct your profile information",
              "Modify your privacy and notification settings",
              "Control who can see your profile and information",
              "Opt out of certain data uses and communications",
            ],
          },
          {
            title: "Deletion & Restriction",
            items: [
              "Delete your account and associated data",
              "Request restriction of certain data processing",
              "Object to automated decision making",
              "Withdraw consent where applicable",
            ],
          },
        ],
      },
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: Trash2,
      color: "from-orange-500 to-red-500",
      content: {
        summary:
          "We keep your information only as long as necessary for our services and legal obligations.",
        categories: [
          {
            title: "Active Accounts",
            items: [
              "Profile data maintained while account is active",
              "Messages stored for the duration of conversations",
              "Usage analytics retained for service improvement",
              "Safety reports kept for security purposes",
            ],
          },
          {
            title: "Account Deletion",
            items: [
              "Most data deleted within 30 days of account closure",
              "Some data retained for legal and safety purposes",
              "Aggregated, anonymized data may be retained indefinitely",
              "Backups securely deleted according to retention schedule",
            ],
          },
          {
            title: "Legal Requirements",
            items: [
              "Data retained as required by applicable laws",
              "Financial records kept for tax and audit purposes",
              "Safety and security logs maintained for protection",
              "Legal hold data preserved during investigations",
            ],
          },
        ],
      },
    },
  ];

  const toggleSection = (sectionId: any) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const privacyFeatures = [
    {
      icon: Shield,
      title: "Profile Verification",
      description:
        "Photo verification and identity checks to ensure authentic profiles",
    },
    {
      icon: Eye,
      title: "Visibility Controls",
      description: "Control who can see your profile and personal information",
    },
    {
      icon: Lock,
      title: "Secure Messaging",
      description: "End-to-end encrypted conversations for your privacy",
    },
    {
      icon: MapPin,
      title: "Location Privacy",
      description: "Choose how precise your location information is shared",
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
                Your privacy matters
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent leading-tight">
              Privacy Policy
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're committed to protecting your privacy and being transparent
              about how we collect, use, and share your information. This policy
              explains our practices in clear, simple terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-blue-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50">
                <Bell className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-700">
                  Last updated: September 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Promise */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Privacy Promise
            </h2>
            <p className="text-xl text-gray-600">
              These are the commitments we make to protect your privacy:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${
                    index === 0
                      ? "from-blue-500 to-blue-600"
                      : index === 1
                      ? "from-green-500 to-green-600"
                      : index === 2
                      ? "from-purple-500 to-purple-600"
                      : "from-pink-500 to-red-500"
                  } rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Privacy at a Glance
              </h2>
              <p className="text-xl text-gray-600">
                Here's what you need to know about your privacy on MatchBox:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What We Collect
                </h3>
                <p className="text-gray-600">
                  Profile info, messages, and usage data to provide our matching
                  service and keep you safe.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How We Use It
                </h3>
                <p className="text-gray-600">
                  To match you with compatible people, ensure safety, and
                  improve our service.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Your Control
                </h3>
                <p className="text-gray-600">
                  You can access, update, delete, or download your data anytime
                  through your settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Privacy Sections */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Detailed Privacy Information
              </h2>
              <p className="text-xl text-gray-600">
                Click on any section below to learn more about our privacy
                practices:
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
                      <div className="pt-6 space-y-6">
                        {section.content.categories.map(
                          (category, categoryIndex) => (
                            <div key={categoryIndex}>
                              <h4 className="text-lg font-bold text-gray-800 mb-3">
                                {category.title}
                              </h4>
                              <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-600 leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
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
