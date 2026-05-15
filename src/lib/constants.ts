export const SITE = {
  name: "The Claims Ninja",
  tagline: "Public adjusting that fights for what you're owed.",
  phone: "(555) 000-0000",
  email: "hello@theclaimsninja.com",
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
    { label: "Claim intake", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Privacy", href: "#" },
  ],
} as const;
