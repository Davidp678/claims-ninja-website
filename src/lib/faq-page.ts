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
  helperText: "Search questions, answers, and topics across the full library.",
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
    "Common questions across onboarding, supplements, pricing, and platform use.",
} as const;

export type FaqRelatedLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  id: string;
  category: FaqCategoryId;
  question: string;
  answer: string;
  relatedLinks?: readonly FaqRelatedLink[];
  featured?: boolean;
};

export const FAQ_LIBRARY_SECTION = {
  eyebrow: "Full library",
  title: "Explore the complete claims knowledge library",
  description:
    "Browse by topic, review popular questions, and find practical guidance on claims, supplements, documentation, and platform use — organized for contractors and restoration teams.",
} as const;

export const FAQ_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export const FAQ_ANCHOR_SCROLL_CLASS =
  "scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32";

export function getCategoryById(id: FaqCategoryId) {
  const category = FAQ_CATEGORIES.find((entry) => entry.id === id);
  if (!category) {
    throw new Error(`Unknown FAQ category: ${id}`);
  }
  return category;
}

export function getCategoryTitle(id: FaqCategoryId): string {
  return getCategoryById(id).title;
}

export function getFaqsByCategory(
  items: readonly FaqItem[],
): { category: (typeof FAQ_CATEGORIES)[number]; items: FaqItem[] }[] {
  return FAQ_CATEGORIES.map((category) => ({
    category,
    items: items.filter((item) => item.category === category.id),
  })).filter((group) => group.items.length > 0);
}

export function getFeaturedFaqs(
  items: readonly FaqItem[],
  limit = 8,
): FaqItem[] {
  return items.filter((item) => item.featured).slice(0, limit);
}

export function getFaqPreview(item: FaqItem): string {
  if (item.answer.length <= 120) {
    return item.answer;
  }
  return `${item.answer.slice(0, 117).trimEnd()}…`;
}
