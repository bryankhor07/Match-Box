import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "View your messages on MatchBox",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
