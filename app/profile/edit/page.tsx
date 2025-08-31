"use client";

import PhotoUpload from "@/components/PhotoUpload";
import {
  getCurrentUserProfile,
  updateUserProfile,
} from "@/lib/actions/profile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * EditProfilePage Component
 *
 * Purpose (Now):
 * - Provides a form for users to edit their profile information.
 * - Loads current user data from the backend (Supabase) on mount.
 * - Allows editing basic profile info (name, username, bio, gender, birthday).
 * - Allows uploading/updating a profile picture (via PhotoUpload).
 * - Lets users configure dating preferences (age range, distance, gender preference).
 * - Submits updates to the backend with validation and error handling.
 *
 * Future Considerations:
 * - Add client-side validation (e.g., unique username checks, valid birthday range).
 * - Add inline previews (live updates when preferences are changed).
 * - Allow more profile fields (occupation, interests, social links).
 * - Better UX for errors and success confirmations (toasts instead of inline text).
 * - Internationalization (form labels, error messages).
 * - Accessibility enhancements (ARIA attributes, improved keyboard navigation).
 */

export default function EditProfilePage() {
  // UI states for loading, saving, and error messages
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  // Main form data state (represents user profile in editable format)
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    bio: "",
    gender: "male" as "male" | "female" | "other",
    birthdate: "",
    avatar_url: "",
    preferences: {
      age_range: {
        min: 18,
        max: 35,
      },
      distance: 50,
      gender_preference: [] as ("male" | "female" | "other")[],
    },
  });

  /**
   * Load current profile data when component mounts
   */
  useEffect(() => {
    async function loadProfile() {
      try {
        const profileData = await getCurrentUserProfile();
        if (profileData) {
          // Merge profile data into form state with fallbacks
          setFormData({
            full_name: profileData.full_name || "",
            username: profileData.username || "",
            bio: profileData.bio || "",
            gender: profileData.gender || "male",
            birthdate: profileData.birthdate || "",
            avatar_url: profileData.avatar_url || "",
            preferences: {
              age_range: {
                min: profileData.preferences?.age_range?.min || 18,
                max: profileData.preferences?.age_range?.max || 35,
              },
              distance: profileData.preferences?.distance || 50,
              gender_preference:
                profileData.preferences?.gender_preference || [],
            },
          });
        }
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  /**
   * Handle form submission
   * - Sends updated profile to backend
   * - Redirects to profile page on success
   */
  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);
    setError(null);

    try {
      const result = await updateUserProfile(formData);
      if (result.success) {
        router.push("/profile");
      } else {
        setError(result.error || "Failed to update profile.");
      }
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  /**
   * Update form data when text/textarea/select inputs change
   */
  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  /**
   * Update a single preference field (distance, gender preferences, etc.)
   */
  function handlePreferenceChange(
    field: string,
    value: string | number | string[]
  ) {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value,
      },
    }));
  }

  /**
   * Update the min or max values for age range preference
   */
  function handleAgeRangeChange(type: "min" | "max", value: number) {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        age_range: {
          ...prev.preferences.age_range,
          [type]: value,
        },
      },
    }));
  }

  /**
   * Toggle gender preference selection (male, female, other)
   */
  function handleGenderPreferenceChange(gender: "male" | "female" | "other") {
    const currentPrefs = formData.preferences.gender_preference;
    let newPrefs: ("male" | "female" | "other")[];

    if (currentPrefs.includes(gender)) {
      // Remove gender if already selected
      newPrefs = currentPrefs.filter((g) => g !== gender);
    } else {
      // Add gender if not selected
      newPrefs = [...currentPrefs, gender];
    }

    handlePreferenceChange("gender_preference", newPrefs);
  }

  // Show loading state until profile data is fetched
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Edit Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Update your profile information and dating preferences
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <form
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            onSubmit={handleFormSubmit}
          >
            {/* Profile Picture Section */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                Profile Picture
              </label>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                      src={formData.avatar_url || "/default-avatar.png"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <PhotoUpload
                    onPhotoUploaded={(url) => {
                      setFormData((prev) => ({
                        ...prev,
                        avatar_url: url,
                      }));
                    }}
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Upload a new profile picture
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    JPG, PNG or GIF. Max 5MB.
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Information Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Basic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Username *
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Choose a username"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="birthdate"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Birthday *
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  About Me *
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Tell others about yourself..."
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.bio.length}/500 characters
                </p>
              </div>
            </div>

            {/* Dating Preferences Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Dating Preferences
              </h3>

              {/* Age Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Age Range: {formData.preferences.age_range.min} -{" "}
                  {formData.preferences.age_range.max} years
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Minimum Age
                    </label>
                    <input
                      type="range"
                      min="18"
                      max="80"
                      value={formData.preferences.age_range.min}
                      onChange={(e) =>
                        handleAgeRangeChange("min", parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>18</span>
                      <span>{formData.preferences.age_range.min}</span>
                      <span>80</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Maximum Age
                    </label>
                    <input
                      type="range"
                      min="18"
                      max="80"
                      value={formData.preferences.age_range.max}
                      onChange={(e) =>
                        handleAgeRangeChange("max", parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>18</span>
                      <span>{formData.preferences.age_range.max}</span>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distance */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Maximum Distance: {formData.preferences.distance} km
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={formData.preferences.distance}
                  onChange={(e) =>
                    handlePreferenceChange("distance", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 km</span>
                  <span>{formData.preferences.distance} km</span>
                  <span>500 km</span>
                </div>
              </div>

              {/* Gender Preference */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Interested in
                </label>
                <div className="space-y-2">
                  {["male", "female", "other"].map((gender) => (
                    <label
                      key={gender}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.preferences.gender_preference.includes(
                          gender as "male" | "female" | "other"
                        )}
                        onChange={() =>
                          handleGenderPreferenceChange(
                            gender as "male" | "female" | "other"
                          )
                        }
                        className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <span className="text-sm text-gray-900 dark:text-gray-300 capitalize">
                        {gender}
                      </span>
                    </label>
                  ))}
                </div>
                {formData.preferences.gender_preference.length === 0 && (
                  <p className="text-xs text-red-500 mt-1">
                    Please select at least one gender preference
                  </p>
                )}
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  saving || formData.preferences.gender_preference.length === 0
                }
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
