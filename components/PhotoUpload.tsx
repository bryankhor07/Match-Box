"use client";

import { uploadProfilePhoto } from "@/lib/actions/profile";
import { useRef, useState } from "react";

/**
 * PhotoUpload Component
 *
 * Purpose (Now):
 * - Allows a user to select and upload a profile photo.
 * - Validates that the file is an image and less than 5MB.
 * - Uploads the image to Supabase storage via `uploadProfilePhoto`.
 * - Returns the uploaded image's public URL through the `onPhotoUploaded` callback.
 * - Provides feedback to the user (loading spinner, error messages).
 *
 * Future Considerations:
 * - Could be extended to allow multiple file uploads.
 * - Could support cropping or resizing images before upload.
 * - Could display the uploaded image preview directly inside this component.
 * - Could integrate better error messages or retry functionality.
 */

export default function PhotoUpload({
  onPhotoUploaded,
}: {
  onPhotoUploaded: (url: string) => void; // Callback to pass uploaded image URL to parent component
}) {
  // Track uploading state (used to disable button & show spinner)
  const [uploading, setUploading] = useState<boolean>(false);

  // Track any error messages to show feedback to user
  const [error, setError] = useState<string | null>(null);

  // Reference to hidden file input so we can trigger it programmatically
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Handle file selection from input
   * - Validates file type (must be image) and size (< 5MB)
   * - Uploads file to Supabase storage
   * - Calls `onPhotoUploaded` with the uploaded image URL if successful
   */
  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    // Validate file size (< 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Upload to Supabase
      const result = await uploadProfilePhoto(file);

      if (result.success && result.url) {
        // Pass uploaded image URL to parent component
        onPhotoUploaded(result.url);
        setError(null);
      } else {
        setError(result.error ?? "Failed to upload photo.");
      }
    } catch (err) {
      setError("Failed to change photo");
    } finally {
      setUploading(false);
    }
  }

  /**
   * Handle click event on custom button
   * - Programmatically clicks the hidden file input
   */
  function handleClick() {
    fileInputRef.current?.click();
  }

  return (
    <div className="absolute bottom-0 right-0">
      {/* Hidden file input (triggered by button click) */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* Button that triggers file selection */}
      <button
        type="button"
        onClick={handleClick}
        disabled={uploading}
        className="absolute bottom-0 right-0 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        title="Change photo"
      >
        {uploading ? (
          // Show loading spinner while uploading
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          // Default camera icon
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>

      {/* Optional: show error messages below upload button in future */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
