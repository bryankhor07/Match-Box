import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile - MatchBox",
  description: "Update your profile information on MatchBox",
};

export default function EditProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
