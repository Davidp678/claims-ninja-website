import { ABOUT_CARD_CLASS } from "@/lib/about-page";

export const PARTNER_NETWORK_CARD_CLASS = ABOUT_CARD_CLASS;

export const PARTNER_NETWORK_META = {
  path: "/partner-network",
  metaTitle: "Partner Network | Strategic Industry Partnerships | The Claims Ninja",
  metaDescription:
    "Explore the Claims Ninja partner network, including ProfileGorilla, CORE Group, 911 Restoration, Daylit, and Morgan & Morgan. Trusted resources for contractors, restoration companies, and insurance claim professionals.",
} as const;

export const PARTNER_NETWORK_HERO = {
  eyebrow: "Company",
  title: "Strategic partner network",
  paragraphs: [
    "Claims Ninja connects contractors with trusted organizations that strengthen claim outcomes, accelerate cash flow, provide legal resources, and support operational growth.",
    "Every partner in our network is selected because they solve real problems contractors face before, during, or after the claim process.",
  ],
} as const;

export const PARTNER_NETWORK_ECOSYSTEM = {
  eyebrow: "Partner ecosystem",
  title: "More than supplementing support",
  paragraphs: [
    "Most contractors do not just need better estimates. They need access to reliable resources across financing, legal support, reputation management, franchise operations, industry relationships, and business growth.",
    "The Claims Ninja partner network extends our value beyond claim recovery by connecting contractor partners with organizations that support the broader health of their operation.",
  ],
  supportAreasTitle: "Network support areas",
  supportAreas: [
    "Claim settlement support",
    "Contractor financing",
    "Legal escalation",
    "Reputation growth",
    "Franchise and operator relationships",
    "Restoration industry leadership",
  ],
} as const;

export type PartnerCardConfig = {
  id: string;
  name: string;
  category: string;
  description: string;
  bulletLabel: string;
  bullets: readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

export const PARTNER_NETWORK_PARTNERS: readonly PartnerCardConfig[] = [
  {
    id: "profile-gorilla",
    name: "ProfileGorilla",
    category: "Contractor reputation and review management",
    description:
      "ProfileGorilla helps contractors generate, manage, and showcase customer reviews across major online platforms. Stronger reputation signals can increase trust, improve close rates, and help contractors stand out in competitive markets.",
    bulletLabel: "Best for",
    bullets: [
      "Roofing contractors",
      "Restoration companies",
      "Growing service businesses",
      "Multi-location operators",
    ],
    ctaLabel: "Visit ProfileGorilla →",
    ctaHref: "https://profilegorilla.com",
  },
  {
    id: "core-group",
    name: "CORE Group",
    category: "Restoration industry leadership network",
    description:
      "CORE Group brings together restoration leaders focused on operational excellence, growth, and industry collaboration. Claims Ninja partners with CORE Group to support contractors seeking stronger systems, leadership development, and business scalability.",
    bulletLabel: "Best for",
    bullets: [
      "Restoration company owners",
      "Growth-focused operators",
      "Multi-branch organizations",
      "Industry leaders",
    ],
    ctaLabel: "Learn about CORE Group →",
    ctaHref: "https://www.coregroup.org",
  },
  {
    id: "911-restoration",
    name: "911 Restoration Corporate",
    category: "Preferred claims settlement vendor",
    description:
      "Claims Ninja serves as a preferred claims settlement resource for 911 Restoration Corporate, franchise directors, national leadership, and participating franchise operators. By supporting supplement strategy, documentation quality, carrier communication, and claim recovery opportunities, Claims Ninja helps franchise operators strengthen insurance claim outcomes across the system.",
    bulletLabel: "Partnership focus",
    bullets: [
      "Supplement strategy",
      "Carrier negotiation support",
      "Documentation review",
      "Claim recovery optimization",
    ],
    ctaLabel: "Visit 911 Restoration →",
    ctaHref: "https://911restoration.com",
  },
  {
    id: "daylit",
    name: "Daylit",
    category: "Authorized contractor financing partner",
    description:
      "Daylit offers short-term financing assistance designed to help contractors maintain momentum when insurance payment timing creates cash-flow pressure. As an authorized partner, Claims Ninja may help connect qualified contractor partners with Daylit financing resources when project timing, material needs, payroll, or working capital require additional support.",
    bulletLabel: "Common uses",
    bullets: [
      "Material purchases",
      "Payroll support",
      "Project mobilization",
      "Working capital assistance",
    ],
    ctaLabel: "Explore Daylit →",
    ctaHref: "https://daylit.com",
  },
  {
    id: "morgan-morgan",
    name: "Morgan & Morgan",
    category: "Exclusive legal partner",
    description:
      "When a claim escalates beyond traditional supplement negotiation, legal support may become appropriate. Morgan & Morgan is Claims Ninja's exclusive legal partner, giving qualified clients access to preferred partner-rate resources when a claim requires legal escalation.",
    bulletLabel: "Potential claim scenarios",
    bullets: [
      "Bad faith disputes",
      "Coverage disagreements",
      "Delayed claim resolution",
      "Significant underpayment situations",
    ],
    ctaLabel: "Learn more →",
    ctaHref: "https://www.forthepeople.com",
  },
] as const;

export const PARTNER_NETWORK_BENEFITS = {
  title: "How our network helps contractors",
  items: [
    {
      title: "Recover more revenue",
      description:
        "Access claims expertise, documentation support, and settlement resources built around contractor outcomes.",
    },
    {
      title: "Protect cash flow",
      description:
        "Financing resources may help qualified contractors bridge timing gaps between project costs and insurance payments.",
    },
    {
      title: "Navigate escalation",
      description:
        "Legal partner access helps contractors understand next steps when a claim moves beyond normal supplement negotiation.",
    },
    {
      title: "Scale with confidence",
      description:
        "Reputation, leadership, franchise, and operator relationships support growth beyond a single claim file.",
    },
  ],
} as const;

export const PARTNER_NETWORK_BECOME = {
  title: "Become a strategic partner",
  paragraphs: [
    "Claims Ninja is always interested in relationships that create measurable value for contractors, restoration companies, roofing operators, and insurance claim professionals.",
    "If your organization supports contractor growth, claim outcomes, financing, legal resources, technology, or operational excellence, we would be open to exploring a strategic relationship.",
  ],
  ctaLabel: "Discuss partnership opportunities",
  ctaHref: "/contact",
} as const;

export const PARTNER_NETWORK_POLICY = {
  optionalUse:
    "Partner network services are optional. Contractors can use Claims Ninja for core claim support without using any network partner. Network partners are available when they may add value to a contractor's operation.",
  selectionCriteria:
    "Strategic partners are selected because they solve real contractor problems — including financing, legal escalation, reputation management, franchise operations, and restoration industry leadership. Claims Ninja prioritizes quality, fit, and measurable contractor value over partner volume.",
  introductions:
    "Contractors may request an introduction to a network partner when appropriate. Claims Ninja may facilitate introductions for qualified contractor partners, subject to partner approval and qualification. Partner use is independent of Claims Ninja fee agreements.",
  eligibility:
    "Network partner resources are primarily positioned for Claims Ninja contractor partners. Access varies by partner, engagement, and qualification — not every contractor automatically qualifies for financing, legal, or other partner services.",
  goodPartnerTypes:
    "Good strategic partner candidates include organizations that support contractor growth, claim outcomes, financing, legal resources, technology, operational excellence, reputation management, or restoration industry leadership.",
} as const;
