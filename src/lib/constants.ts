import { HOMEPAGE_INTAKE_HREF } from "@/lib/homepage-intake";

export const HERO_VIDEO_URL =
  "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/1df6b7b88fc207a3eb3fa6f7323f6420/downloads/default.mp4";

export const PLATFORM_HERO_VIDEO = {
  embedUrl:
    "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/2ed5c9a05d2de831e1158f89161d2e1e/iframe?poster=https%3A%2F%2Fcustomer-qmgpb08arenbn1zo.cloudflarestream.com%2F2ed5c9a05d2de831e1158f89161d2e1e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&letterboxColor=transparent",
  sourceAspect: 1414 / 720,
  embedFit: "cover" as const,
} as const;

export const CLIENT_PORTAL_HERO_VIDEO = {
  embedUrl:
    "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/2ed5c9a05d2de831e1158f89161d2e1e/iframe?poster=https%3A%2F%2Fcustomer-qmgpb08arenbn1zo.cloudflarestream.com%2F2ed5c9a05d2de831e1158f89161d2e1e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&letterboxColor=transparent",
  sourceAspect: 1414 / 720,
  embedFit: "cover" as const,
} as const;

export const CLAIM_TRACKING_HERO_VIDEO = {
  embedUrl:
    "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/1542c249c16455b997a45ff1f01f4311/iframe?poster=https%3A%2F%2Fcustomer-qmgpb08arenbn1zo.cloudflarestream.com%2F1542c249c16455b997a45ff1f01f4311%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&letterboxColor=transparent",
  sourceAspect: 484 / 480,
  embedFit: "cover" as const,
} as const;

export const COMMUNICATION_HUB_HERO_VIDEO = {
  embedUrl:
    "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/bbba7807bcd48536180cd07749f73931/iframe?poster=https%3A%2F%2Fcustomer-qmgpb08arenbn1zo.cloudflarestream.com%2Fbbba7807bcd48536180cd07749f73931%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&letterboxColor=transparent",
  sourceAspect: 1442 / 720,
  embedFit: "cover" as const,
} as const;

export const BILLING_PAYMENTS_HERO_VIDEO = {
  embedUrl:
    "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/5c97536fd368879c1e849aa6e6c8f522/iframe?poster=https%3A%2F%2Fcustomer-qmgpb08arenbn1zo.cloudflarestream.com%2F5c97536fd368879c1e849aa6e6c8f522%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true&controls=false&letterboxColor=transparent",
  sourceAspect: 1620 / 720,
  embedFit: "cover" as const,
} as const;

export const SITE = {
  name: "The Claims Ninja",
  tagline: "Contractor claims support that maximizes recovery.",
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

/** Live conversion destinations — homepage intake vs strategy call. */
export const CTA_LINKS = {
  startHere: HOMEPAGE_INTAKE_HREF,
  onboardingForm: HOMEPAGE_INTAKE_HREF,
  schedule: "https://meetings.hubspot.com/taylor-handsel/team",
} as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Partner Network", href: "/partner-network" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  resources: [
    { label: "Claim intake", href: CTA_LINKS.startHere },
    { label: "Schedule consultation", href: CTA_LINKS.schedule, external: true },
    { label: "Results & Insights", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Claim Guides", href: "/resources/guides" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;
