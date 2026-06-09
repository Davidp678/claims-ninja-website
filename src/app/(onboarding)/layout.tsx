import { StartHerePortalShell } from "@/components/start-here/StartHerePortalShell";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StartHerePortalShell>{children}</StartHerePortalShell>;
}
