export const FAQ_META = {
  path: "/faq",
  metaTitle: "FAQ",
  metaDescription:
    "Claims Ninja FAQ covers onboarding, pricing, supplements, carrier negotiations, and platform security — clear answers for contractors and restoration professionals.",
} as const;

export const FAQ_HERO = {
  eyebrow: "Claims Knowledge Center",
  title: "Frequently Asked Questions",
  description:
    "Practical answers for contractors, restoration companies, and property claim professionals — from onboarding and pricing to supplements, documentation, and carrier negotiations.",
} as const;

export type FaqCategoryId =
  | "getting_started"
  | "pricing"
  | "insurance_supplements"
  | "roofing_claims"
  | "water_damage_claims"
  | "fire_damage_claims"
  | "mold_claims"
  | "contents_restoration"
  | "carrier_negotiations"
  | "documentation"
  | "platform_security"
  | "ai_claim_analysis";

export const FAQ_CATEGORIES = [
  {
    id: "getting_started" as const,
    title: "Getting Started",
    description:
      "How onboarding, intake, and your first claim reviews work with Claims Ninja.",
  },
  {
    id: "pricing" as const,
    title: "Pricing",
    description:
      "Fee structures, invoicing, and what is included across partnership tiers.",
  },
  {
    id: "insurance_supplements" as const,
    title: "Insurance Supplements",
    description:
      "How supplement strategy, scope review, and carrier submissions are handled.",
  },
  {
    id: "roofing_claims" as const,
    title: "Roofing Claims",
    description:
      "Storm, residential, and commercial roofing documentation and recovery support.",
  },
  {
    id: "water_damage_claims" as const,
    title: "Water Damage Claims",
    description:
      "Mitigation, drying, and reconstruction scope questions for water losses.",
  },
  {
    id: "fire_damage_claims" as const,
    title: "Fire Damage Claims",
    description:
      "Smoke, soot, structural, and contents considerations on fire losses.",
  },
  {
    id: "mold_claims" as const,
    title: "Mold Claims",
    description:
      "Remediation documentation, testing, and carrier review on mold-related claims.",
  },
  {
    id: "contents_restoration" as const,
    title: "Contents Restoration",
    description:
      "Pack-out, cleaning, storage, and personal property recovery workflows.",
  },
  {
    id: "carrier_negotiations" as const,
    title: "Carrier Negotiations",
    description:
      "How expert teams engage adjusters, reviewers, and dispute processes.",
  },
  {
    id: "documentation" as const,
    title: "Documentation",
    description:
      "Photos, estimates, moisture logs, and the records carriers expect to see.",
  },
  {
    id: "platform_security" as const,
    title: "Platform & Security",
    description:
      "Data handling, access controls, and document storage practices.",
  },
  {
    id: "ai_claim_analysis" as const,
    title: "AI Claim Analysis",
    description:
      "How AI-assisted review supports scope accuracy and supplement identification.",
  },
] as const;

export const FAQ_SEARCH = {
  eyebrow: "Search the library",
  title: "Find answers fast",
  description:
    "Browse by topic below or use search to jump to specific questions about claims, platform use, and partnership support.",
  placeholder: "Search claims questions…",
  helperText: "Full searchable FAQ library — coming soon.",
} as const;

export const FAQ_CATEGORY_SECTION = {
  eyebrow: "Browse by topic",
  title: "Explore claims knowledge by category",
  description:
    "Organized guidance for the questions contractors and restoration teams ask most.",
} as const;

export const FAQ_POPULAR_SECTION = {
  eyebrow: "Popular questions",
  title: "What teams ask us most",
  description:
    "A preview of common questions — full answers and expandable detail coming in the complete library.",
} as const;

export const FAQ_POPULAR_QUESTIONS = [
  {
    question: "How does Claims Ninja onboarding work?",
    preview:
      "Intake, workflow review, and first claim setup — typically within your first week of partnership.",
    category: "Getting Started",
  },
  {
    question: "What is included in supplement support?",
    preview:
      "Scope review, line-item analysis, documentation guidance, and carrier-ready supplement submissions.",
    category: "Insurance Supplements",
  },
  {
    question: "How are partnership fees structured?",
    preview:
      "Tiered models based on claim volume and service scope — transparent invoicing with no hidden markups.",
    category: "Pricing",
  },
  {
    question: "What documentation do carriers expect on roofing claims?",
    preview:
      "Photos, measurements, code items, and estimate detail aligned to how the roof was actually built.",
    category: "Roofing Claims",
  },
  {
    question: "How does Claims Ninja handle carrier negotiations?",
    preview:
      "Expert teams engage adjusters with organized documentation, scope support, and dispute escalation when needed.",
    category: "Carrier Negotiations",
  },
  {
    question: "Is my claim data secure on the platform?",
    preview:
      "Encrypted storage, role-based access, and document handling aligned to contractor and carrier workflows.",
    category: "Platform & Security",
  },
  {
    question: "How does AI claim analysis help my operation?",
    preview:
      "AI-assisted review flags scope gaps and supplement opportunities — expert teams validate before submission.",
    category: "AI Claim Analysis",
  },
  {
    question: "What stays with my field team versus Claims Ninja?",
    preview:
      "Your crew handles production; expert teams support documentation, supplements, and carrier engagement.",
    category: "Getting Started",
  },
] as const;

export const FAQ_LIBRARY_PLACEHOLDER = {
  eyebrow: "Full library",
  title: "The complete searchable FAQ is being built",
  description:
    "We are expanding this knowledge center with detailed answers, category navigation, and full-text search — so your team can find claim guidance without waiting on a call.",
} as const;

export const FAQ_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";
