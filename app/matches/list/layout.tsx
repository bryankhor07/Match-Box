import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matches - MatchBox",
  description: "View your matches on MatchBox",
};

export default function MatchesListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
