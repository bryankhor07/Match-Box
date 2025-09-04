import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
  description: "View your messages on MatchBox",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
