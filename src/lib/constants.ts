export const HERO_VIDEO_URL =
  "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/1df6b7b88fc207a3eb3fa6f7323f6420/downloads/default.mp4";

export const SITE = {
  name: "The Claims Ninja",
  tagline: "Public adjusting that fights for what you're owed.",
  phone: "(555) 000-0000",
  email: "hello@theclaimsninja.com",
} as const;

/** Live conversion destinations — primary onboarding vs strategy consultation. */
export const CTA_LINKS = {
  onboarding: "https://form.jotform.com/260536051303041",
  schedule: "https://meetings.hubspot.com/taylor-handsel/team",
} as const;

export const NAV_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Calculator", href: "#calculator" },
  { label: "Partners", href: "#partners" },
  { label: "Reviews", href: "#reviews" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "#" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Claim intake", href: CTA_LINKS.onboarding, external: true },
    { label: "Schedule consultation", href: CTA_LINKS.schedule, external: true },
    { label: "FAQ", href: "#" },
    { label: "Privacy", href: "#" },
  ],
} as const;
