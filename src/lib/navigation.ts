export type NavDropdownItem = {
  label: string;
  href: string;
  description: string;
};

export type NavDropdownEntry = {
  type: "dropdown";
  label: string;
  items: readonly NavDropdownItem[];
};

export type NavLinkEntry = {
  type: "link";
  label: string;
  href: string;
};

export type NavEntry = NavDropdownEntry | NavLinkEntry;

export const PLATFORM_NAV: readonly NavDropdownItem[] = [
  {
    label: "Platform Overview",
    href: "/platform",
    description: "See how the Claims Ninja ecosystem works.",
  },
  {
    label: "Client Portal",
    href: "/platform/client-portal",
    description: "Manage documents, communication, and project activity.",
  },
  {
    label: "Claim Tracking",
    href: "/platform/claim-tracking",
    description: "Monitor claim status and recovery progress.",
  },
  {
    label: "Communication Hub",
    href: "/platform/communication-hub",
    description: "Collaborate directly with the Claims Ninja team.",
  },
  {
    label: "Billing & Payments",
    href: "/platform/billing-payments",
    description: "Manage invoices and claim-related billing.",
  },
  {
    label: "AI Claim Analysis",
    href: "/platform/ai-claim-analysis",
    description: "Identify missed opportunities and claim recovery potential.",
  },
] as const;

export const SOLUTIONS_NAV: readonly NavDropdownItem[] = [
  {
    label: "Roofing Claims",
    href: "/solutions/roofing",
    description: "Maximize recoveries on residential and commercial roofing losses.",
  },
  {
    label: "Water Damage Claims",
    href: "/solutions/water-damage",
    description: "Documentation, scope development, and supplement strategy.",
  },
  {
    label: "Fire Damage Claims",
    href: "/solutions/fire-damage",
    description: "Complex reconstruction and carrier negotiation support.",
  },
  {
    label: "Mold Claims",
    href: "/solutions/mold",
    description: "Claim support for remediation and rebuild projects.",
  },
  {
    label: "Contents Restoration Claims",
    href: "/solutions/contents",
    description: "Pack-out, inventory, and specialty contents restoration claim support.",
  },
] as const;

export const RESOURCES_NAV: readonly NavDropdownItem[] = [
  {
    label: "Blog",
    href: "/resources/blog",
    description: "Insights on claims operations and recovery.",
  },
  {
    label: "Results & Insights",
    href: "/case-studies",
    description: "Industry intelligence from thousands of reviewed claims.",
  },
  {
    label: "Claim Guides",
    href: "/resources/guides",
    description: "Practical playbooks for claim workflow excellence.",
  },
  { label: "Videos", href: "/videos", description: "Walkthroughs and operational best practices." },
  { label: "FAQ", href: "/faq", description: "Answers to common platform and service questions." },
] as const;

export const COMPANY_NAV: readonly NavDropdownItem[] = [
  { label: "About", href: "/about", description: "Our mission and contractor-first approach." },
  {
    label: "Partner Network",
    href: "/partner-network",
    description: "Trusted partners across restoration and roofing.",
  },
  { label: "Reviews", href: "/reviews", description: "What contractors say about working with us." },
  { label: "Contact", href: "/contact", description: "Reach our team for partnership and support." },
] as const;

export const MAIN_NAV: readonly NavEntry[] = [
  { type: "dropdown", label: "Platform", items: PLATFORM_NAV },
  { type: "dropdown", label: "Solutions", items: SOLUTIONS_NAV },
  { type: "dropdown", label: "Resources", items: RESOURCES_NAV },
  { type: "dropdown", label: "Company", items: COMPANY_NAV },
  { type: "link", label: "Pricing", href: "/pricing" },
] as const;
