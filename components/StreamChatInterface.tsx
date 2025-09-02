import { UserProfile } from "@/app/profile/page";
import {
  createOrGetChannel,
  createVideoCall,
  getStreamUserToken,
} from "@/lib/actions/stream";
import { useRouter } from "next/navigation";
import {
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Channel, Event, StreamChat } from "stream-chat";
import VideoCall from "./VideoCall";

// Define the structure of a chat message
interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: Date;
  user_id: string;
}

export default function StreamChatInterface({
  otherUser,
  ref,
}: {
  otherUser: UserProfile;
  ref: RefObject<{ handleVideoCall: () => void } | null>;
}) {
  // States for chat setup
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Stream client and channel instances
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);

  // Scroll button for chat
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  // Video call states
  const [videoCallId, setVideoCallId] = useState<string>("");
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [isCallInitiator, setIsCallInitiator] = useState(false);

  // Incoming call states
  const [incomingCallId, setIncomingCallId] = useState<string>("");
  const [callerName, setCallerName] = useState<string>("");
  const [showIncomingCall, setIncomingCall] = useState(false);

  // Refs for scrolling chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Scroll chat to bottom
  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollButton(false);
  }

  // Detect user scroll to show/hide scroll-to-bottom button
  function handleScroll() {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    }
  }

  // Automatically scroll when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Attach scroll listener
  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Initialize chat with Stream on component mount
  useEffect(() => {
    // Reset call states when chat changes
    setShowVideoCall(false);
    setVideoCallId("");
    setIncomingCall(false);
    setIncomingCallId("");
    setCallerName("");
    setIsCallInitiator(false);

    async function initializeChat() {
      try {
        setError(null);

        // Get Stream token and user info
        const { token, userId, userName, userImage } =
          await getStreamUserToken();
        setCurrentUserId(userId!);

        // Initialize Stream chat client
        const chatClient = StreamChat.getInstance(
          process.env.NEXT_PUBLIC_STREAM_API_KEY!
        );

        await chatClient.connectUser(
          {
            id: userId!,
            name: userName,
            image: userImage,
          },
          token
        );

        // Create or get chat channel with the other user
        const { channelType, channelId } = await createOrGetChannel(
          otherUser.id
        );

        // Get the channel
        const chatChannel = chatClient.channel(channelType!, channelId);
        await chatChannel.watch();

        // Load existing messages
        const state = await chatChannel.query({ messages: { limit: 50 } });

        // Convert stream messages to our format
        const convertedMessages: Message[] = state.messages.map((msg) => ({
          id: msg.id,
          text: msg.text || "",
          sender: msg.user?.id === userId ? "me" : "other",
          timestamp: new Date(msg.created_at || new Date()),
          user_id: msg.user?.id || "",
        }));

        setMessages(convertedMessages);

        // Listen for new messages
        chatChannel.on("message.new", (event: Event) => {
          if (event.message) {
            // Handle incoming video call messages
            if (event.message.text?.includes(`📹 Video call invitation`)) {
              const customData = event.message as any;

              if (customData.caller_id !== userId) {
                setIncomingCallId(customData.call_id);
                setCallerName(customData.caller_name || "Someone");
                setIncomingCall(true);
              }
              return;
            }

            // Handle other user messages
            if (event.message.user?.id !== userId) {
              const newMsg: Message = {
                id: event.message.id,
                text: event.message.text || "",
                sender: "other",
                timestamp: new Date(event.message.created_at || new Date()),
                user_id: event.message.user?.id || "",
              };

              setMessages((prev) => {
                const messageExists = prev.some((msg) => msg.id === newMsg.id);
                if (!messageExists) {
                  return [...prev, newMsg];
                }

                return prev;
              });
            }
          }
        });

        // Listen for typing indicators
        chatChannel.on("typing.start", (event: Event) => {
          if (event.user?.id !== userId) {
            setIsTyping(true);
          }
        });

        chatChannel.on("typing.stop", (event: Event) => {
          if (event.user?.id !== userId) {
            setIsTyping(false);
          }
        });

        setClient(chatClient);
        setChannel(chatChannel);
      } catch (error) {
        router.push("/chat");
      } finally {
        setLoading(false);
      }
    }

    if (otherUser) {
      initializeChat();
    }

    // Cleanup: disconnect user on unmount
    return () => {
      if (client) {
        client.disconnectUser();
      }
    };
  }, [otherUser]);

  // Start a video call
  async function handleVideoCall() {
    try {
      const { callId } = await createVideoCall(otherUser.id);
      setVideoCallId(callId!);
      setShowVideoCall(true);
      setIsCallInitiator(true);

      if (channel) {
        const messageData = {
          text: `📹 Video call invitation`,
          call_id: callId,
          caller_id: currentUserId,
          caller_name: otherUser.full_name || "Someone",
        };

        await channel.sendMessage(messageData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Expose handleVideoCall to parent via ref
  useImperativeHandle(ref, () => ({
    handleVideoCall,
  }));

  // Send a new text message
  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (newMessage.trim() && channel) {
      try {
        const response = await channel.sendMessage({
          text: newMessage.trim(),
        });

        const message: Message = {
          id: response.message.id,
          text: newMessage.trim(),
          sender: "me",
          timestamp: new Date(),
          user_id: currentUserId,
        };

        setMessages((prev) => {
          const messageExists = prev.some((msg) => msg.id === message.id);
          if (!messageExists) {
            return [...prev, message];
          }

          return prev;
        });

        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  }

  // Handle ending the video call
  function handleCallEnd() {
    setShowVideoCall(false);
    setVideoCallId("");
    setIsCallInitiator(false);

    // Clear any pending incoming call state when call ends
    setIncomingCall(false);
    setIncomingCallId("");
    setCallerName("");
  }

  // Decline an incoming call
  function handleDeclineCall() {
    setIncomingCall(false);
    setIncomingCallId("");
    setCallerName("");
  }

  // Accept an incoming call
  function handleAcceptCall() {
    setVideoCallId(incomingCallId);
    setShowVideoCall(true);
    setIncomingCall(false);
    setIncomingCallId("");
    setIsCallInitiator(false);
  }

  // Format timestamp for display
  function formatTime(date: Date) {
    return date.toLocaleDateString([], { hour: "2-digit", minute: "2-digit" });
  }

  // Show loading spinner while chat client/channel are initializing
  if (!client || !channel) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Setting up chat...
          </p>
        </div>
      </div>
    );
  }

  // Main chat UI
  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900">
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth chat-scrollbar relative"
        style={{ scrollBehavior: "smooth" }}
      >
        {messages.map((message, key) => (
          <div
            key={key}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === "me"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "me"
                    ? "text-pink-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {showScrollButton && (
        <div className="absolute bottom-20 right-6 z-10">
          <button
            onClick={scrollToBottom}
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            title="Scroll to bottom"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Message Input */}

      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <form className="flex space-x-2" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);

              if (channel && e.target.value.length > 0) {
                channel.keystroke();
              }
            }}
            onFocus={(e) => {
              if (channel) {
                channel.keystroke();
              }
            }}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            disabled={!channel}
          />

          <button
            type="submit"
            disabled={!newMessage.trim() || !channel}
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </button>
        </form>
      </div>

      {showIncomingCall && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-pink-500">
                <img
                  src={otherUser.avatar_url}
                  alt={otherUser.full_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Incoming Video Call
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {callerName} is calling you
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleDeclineCall}
                  className="flex-1 bg-red-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200"
                >
                  Decline
                </button>
                <button
                  onClick={handleAcceptCall}
                  className="flex-1 bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600 transition-colors duration-200"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showVideoCall && videoCallId && (
        <VideoCall
          onCallEnd={handleCallEnd}
          callId={videoCallId}
          isIncoming={!isCallInitiator}
        />
      )}
    </div>
  );
}
