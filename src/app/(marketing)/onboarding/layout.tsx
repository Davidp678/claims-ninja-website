import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claim onboarding | The Claims Ninja",
  robots: { index: false, follow: false },
};

export default function OnboardingMarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Uses the parent (marketing) layout Navbar/Footer unchanged.
  return <div className="min-h-[70vh] bg-brand-black">{children}</div>;
}
