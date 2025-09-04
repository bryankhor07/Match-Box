import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover",
  description: "View potential matches on MatchBox",
};

export default function MatchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
