export const HERO_VIDEO_URL =
  "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/1df6b7b88fc207a3eb3fa6f7323f6420/downloads/default.mp4";

export const SITE = {
  name: "The Claims Ninja",
  tagline: "Public adjusting that fights for what you're owed.",
  description:
    "Claims Ninja is a contractor claims operations platform combining expert claim support, claims management technology, and AI intelligence for restoration teams.",
  phone: "(615) 479-2438",
  email: "info@theclaimsninja.com",
} as const;

/** Official social profiles — footer and brand touchpoints. */
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/104983847/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61563366512133",
  },
  { label: "Instagram", href: "https://www.instagram.com/theclaimsninja1/" },
  { label: "YouTube", href: "https://www.youtube.com/@TheClaimsNinja" },
] as const;

/** Live conversion destinations — primary onboarding vs strategy consultation. */
export const CTA_LINKS = {
  onboarding: "https://form.jotform.com/260536051303041",
  schedule: "https://meetings.hubspot.com/taylor-handsel/team",
} as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Partner Network", href: "/partner-network" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Claim intake", href: CTA_LINKS.onboarding, external: true },
    { label: "Schedule consultation", href: CTA_LINKS.schedule, external: true },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;
