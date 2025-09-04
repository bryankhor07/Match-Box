import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "View your profile information on MatchBox",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
