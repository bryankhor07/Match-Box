import { getStreamVideoToken } from "@/lib/actions/stream";
import {
  Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

import "@stream-io/video-react-sdk/dist/css/styles.css";

interface VideoCallProps {
  callId: string; // Unique ID of the call
  onCallEnd: () => void; // Callback triggered when user leaves or call ends
  isIncoming?: boolean; // Whether this call is incoming (default false)
}

/**
 * VideoCall component
 * Handles initializing, joining, and rendering a video call using Stream's Video SDK.
 */
export default function VideoCall({
  callId,
  onCallEnd,
  isIncoming = false,
}: VideoCallProps) {
  // State for Stream client, active call, and call status
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasJoined, setHasJoined] = useState(false);

  useEffect(() => {
    let isMounted = true; // Tracks component lifecycle to avoid memory leaks

    // Initializes the video call (authenticates, creates/join call, sets client)
    async function initializeVideoCall() {
      if (hasJoined) {
        return; // Prevent rejoining if already joined
      }

      try {
        setError(null);

        // Get token and user info for Stream authentication
        const { token, userId, userImage, userName } =
          await getStreamVideoToken();

        if (!isMounted) return;

        // Create a Stream client instance
        const videoClient = new StreamVideoClient({
          apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
          user: {
            id: userId!,
            name: userName,
            image: userImage,
          },
          token,
        });

        if (!isMounted) return;

        // Create or fetch a call instance by callId
        const videoCall = videoClient.call("default", callId);

        // Join as caller (create) or callee (just join)
        if (isIncoming) {
          await videoCall.join();
        } else {
          await videoCall.join({ create: true });
        }

        if (!isMounted) return;

        // Save client and call to state
        setClient(videoClient);
        setCall(videoCall);
        setHasJoined(true);
      } catch (error) {
        console.error(error);
        setError("Failed to initiate call");
      } finally {
        setLoading(false);
      }
    }

    initializeVideoCall();

    // Cleanup when component unmounts
    return () => {
      isMounted = false;

      // Leave call if still connected
      if (call && hasJoined) {
        call.leave();
      }

      // Disconnect Stream client to free resources
      if (client) {
        client.disconnectUser();
      }
    };
  }, [callId, isIncoming, hasJoined]);

  // Show loading screen while joining/starting the call
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">
            {isIncoming ? "Joining call..." : "Starting call..."}
          </p>
        </div>
      </div>
    );
  }

  // Show error screen if initialization fails
  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="text-center text-white max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">❌</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Error</h3>
          <p className="text-gray-300 mb-4">{error}</p>
          <button
            onClick={onCallEnd}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Show fallback loading screen if client or call isn't ready
  if (!client || !call) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Setting up call...</p>
        </div>
      </div>
    );
  }

  // Main video call UI with Stream components
  return (
    <div className="fixed inset-0 bg-black z-50">
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <StreamTheme>
            <SpeakerLayout />
            <CallControls onLeave={onCallEnd} />
          </StreamTheme>
        </StreamCall>
      </StreamVideo>
    </div>
  );
}
