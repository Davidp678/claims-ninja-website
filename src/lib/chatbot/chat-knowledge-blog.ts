/**
 * Compact blog knowledge chunks for chatbot retrieval.
 * Article chunks: one per post (excerpt + headings only).
 * Category chunks: one per category hub (metadata + titles only).
 */

import type { BlogCategorySlug } from "@/lib/blog-categories";
import {
  BLOG_CATEGORY_REGISTRY,
  getCategoryName,
  getCategoryPath,
  getCategoryPostCount,
} from "@/lib/blog-categories";
import { getPostsByCategorySlug } from "@/lib/blog-registry";
import { formatPracticeGuidesForChatbot } from "@/lib/blog-guide-companions";
import type { BlogPost } from "@/lib/blog-types";

type BlogKnowledgeChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

const BLOG_BASE_PATH = "/resources/blog" as const;
const MAX_EXCERPT_CHARS = 240;
const MAX_SECTION_HEADINGS = 8;
const MAX_RECOMMENDED_TITLES = 3;
const MAX_TOP_ARTICLE_TITLES = 5;

const CATEGORY_CLUSTER_SUMMARIES: Record<BlogCategorySlug, string> = {
  "insurance-supplementing":
    "Foundational supplement strategy, scope review, and carrier submission guidance for contractors.",
  "roofing-claims":
    "Roof supplements, storm documentation, steep charges, and roofing-specific recovery playbooks.",
  "water-damage-claims":
    "Guides on mitigation scope, drying logs, moisture mapping, equipment charges, and water supplement recovery.",
  "fire-damage-claims":
    "Fire and smoke documentation, HVAC contamination, odor mitigation, and fire supplement denial recovery.",
  xactimate:
    "Xactimate estimate review, pricing gaps, line-item checklists, and carrier estimate accuracy.",
  "claim-documentation":
    "Photos, scope notes, moisture logs, and evidence practices that improve supplement approval rates.",
  "contractor-operations":
    "Workflows, supplementing partnerships, and scaling claim operations without in-house overhead.",
  "public-adjusters":
    "No articles published yet in this hub. Content on public adjuster coordination is planned.",
  "insurance-estimating":
    "Carrier estimate review, missed line items, scope development, and estimating accuracy.",
  "claim-recovery":
    "Supplement denial recovery, first-48-hour strategy, O&P, and maximizing legitimate claim payment.",
};

const CATEGORY_PHRASE_BOOSTS: Record<
  BlogCategorySlug,
  { keywords?: readonly string[]; phrases?: readonly string[] }
> = {
  "insurance-supplementing": {
    phrases: [
      "insurance supplementing resources",
      "supplementing guides",
      "supplement articles",
    ],
    keywords: ["insurance supplementing", "supplementing guide"],
  },
  "roofing-claims": {
    phrases: ["roofing claim guides", "roof supplement resources", "roofing articles"],
    keywords: ["roofing claims", "roof supplement"],
  },
  "water-damage-claims": {
    phrases: [
      "water mitigation resources",
      "water damage guides",
      "mitigation articles",
      "water damage articles",
    ],
    keywords: ["water mitigation", "water damage claims", "mitigation resources"],
  },
  "fire-damage-claims": {
    phrases: [
      "fire claim guides",
      "fire damage resources",
      "fire damage guides",
      "fire damage articles",
    ],
    keywords: ["fire damage claims", "fire claim"],
  },
  xactimate: {
    phrases: [
      "xactimate articles",
      "what should i read about xactimate",
      "xactimate resources",
      "xactimate guides",
    ],
    keywords: ["xactimate"],
  },
  "claim-documentation": {
    phrases: [
      "documentation guides",
      "claim documentation resources",
      "claim documentation guides",
    ],
    keywords: ["claim documentation", "documentation guide"],
  },
  "contractor-operations": {
    phrases: [
      "contractor operations resources",
      "contractor operations guides",
      "scaling claim operations",
    ],
    keywords: ["contractor operations"],
  },
  "public-adjusters": {
    phrases: ["public adjuster resources", "public adjuster articles", "public adjuster guides"],
    keywords: ["public adjuster"],
  },
  "insurance-estimating": {
    phrases: [
      "insurance estimating resources",
      "insurance estimating guides",
      "estimating articles",
    ],
    keywords: ["insurance estimating", "carrier estimate"],
  },
  "claim-recovery": {
    phrases: [
      "denied supplement resources",
      "supplement denial resources",
      "claim recovery resources",
      "claim recovery guides",
    ],
    keywords: ["claim recovery", "denial recovery", "denied supplement"],
  },
};

const BLOG_CATEGORY_TOPICS: Record<BlogCategorySlug, readonly string[]> = {
  "insurance-supplementing": ["supplements", "insurance_supplements"],
  "roofing-claims": ["roofing_claims", "contractor_fit"],
  "water-damage-claims": ["water_damage_claims", "mitigation"],
  "fire-damage-claims": ["fire_damage_claims", "contractor_fit"],
  xactimate: ["supplements", "documentation", "xactimate"],
  "claim-documentation": ["documentation"],
  "contractor-operations": ["contractor_fit", "onboarding"],
  "public-adjusters": ["public_adjuster"],
  "insurance-estimating": ["supplements", "documentation"],
  "claim-recovery": ["supplements"],
};

/** Extra keywords/phrases per slug for high-intent topic matching. */
const SLUG_BOOSTS: Record<
  string,
  { keywords?: readonly string[]; phrases?: readonly string[]; topics?: readonly string[] }
> = {
  "insurance-supplementing-guide-contractors": {
    phrases: ["insurance supplementing guide", "supplement process"],
    topics: ["supplements"],
  },
  "water-damage-mitigation-supplement-playbook": {
    phrases: ["water mitigation supplement", "mitigation playbook"],
    keywords: ["mitigation supplement", "water playbook"],
  },
  "dry-log-documentation-guide-insurance-claims": {
    phrases: ["dry log documentation", "drying log"],
    keywords: ["dry log", "moisture log", "drying documentation"],
    topics: ["dry_logs", "mitigation"],
  },
  "moisture-mapping-best-practices-insurance-claims": {
    phrases: ["moisture mapping", "moisture map"],
    keywords: ["moisture map", "mapping"],
    topics: ["moisture_mapping"],
  },
  "moisture-mapping-mistakes-that-cost-contractors-money": {
    phrases: ["moisture mapping mistakes", "mapping mistakes cost", "moisture map errors"],
    keywords: ["mapping mistake", "moisture map error", "weak moisture map"],
    topics: ["moisture_mapping", "water_damage_claims"],
  },
  "why-water-mitigation-claims-get-underpaid": {
    phrases: ["water mitigation underpaid", "underpayment"],
    keywords: ["underpaid", "underpayment"],
  },
  "why-category-3-water-claims-get-underpaid": {
    phrases: ["category 3 underpaid", "category 3 water claim", "black water underpayment"],
    keywords: ["category 3", "black water", "category 3 underpaid"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "why-fire-damage-claims-get-underpaid": {
    phrases: [
      "fire damage underpaid",
      "fire claim underpayment",
      "fire claim documentation mistakes",
      "why fire damage claims get underpaid",
    ],
    keywords: [
      "fire damage supplements",
      "fire restoration documentation",
      "fire claim underpaid",
      "fire damage estimating",
    ],
    topics: ["fire_damage_claims"],
  },
  "smoke-damage-documentation-mistakes": {
    phrases: [
      "smoke damage documentation mistakes",
      "smoke documentation errors",
      "smoke claim underpaid documentation",
      "costly smoke documentation mistakes",
    ],
    keywords: [
      "smoke damage documentation",
      "smoke claim underpaid",
      "smoke documentation mistakes",
      "invisible smoke damage",
    ],
    topics: ["fire_damage_claims"],
  },
  "how-carriers-reduce-drying-days": {
    phrases: ["carriers reduce drying days", "drying day reductions", "drying days cut"],
    keywords: ["drying day", "drying days", "reduce drying", "equipment days"],
    topics: ["dry_logs", "water_damage_claims", "equipment_charges", "monitoring"],
  },
  "water-damage-supplement-denial-recovery": {
    phrases: ["water supplement denial", "denied water supplement"],
    keywords: ["water denial recovery", "denial recovery"],
    topics: ["denial_recovery"],
  },
  "equipment-charges-water-damage-claims": {
    phrases: ["equipment charges", "dehumidifier days"],
    keywords: ["equipment charge", "dehumidifier", "air mover"],
    topics: ["equipment_charges"],
  },
  "equipment-charges-that-get-cut-from-water-claims": {
    phrases: [
      "equipment charge reductions",
      "carriers reduce equipment charges",
      "why do carriers reduce equipment charges",
      "air mover reductions",
      "dehumidifier reductions",
      "HEPA reductions",
      "air scrubber reductions",
      "specialty drying equipment disputes",
      "mitigation equipment documentation",
      "equipment deployment documentation",
    ],
    keywords: [
      "equipment cut",
      "equipment reduction",
      "air mover",
      "dehumidifier",
      "HEPA",
      "air scrubber",
    ],
    topics: ["equipment_charges", "water_damage_claims", "monitoring", "dry_logs"],
  },
  "documentation-gaps-that-trigger-water-claim-denials": {
    phrases: [
      "documentation gaps",
      "water claim denial",
      "water claim denied",
      "missing moisture readings",
      "missing dry logs",
      "missing daily monitoring",
      "final drying verification",
      "mitigation documentation standards",
      "documentation package requirements",
    ],
    keywords: [
      "documentation gap",
      "claim denial",
      "missing dry log",
      "documentation package",
      "mitigation documentation",
    ],
    topics: ["water_damage_claims", "documentation", "denial_recovery", "dry_logs", "monitoring"],
  },
  "water-damage-documentation-for-apartment-complexes": {
    phrases: [
      "apartment complex water damage documentation",
      "apartment water loss documentation",
      "multifamily water loss documentation",
      "HOA water damage documentation",
      "unit-by-unit water damage documentation",
      "common area water damage documentation",
      "tenant impact apartment water loss",
    ],
    keywords: [
      "apartment complex",
      "multifamily water",
      "HOA documentation",
      "unit-by-unit",
      "common area",
      "tenant impact",
    ],
    topics: ["commercial_water", "water_damage_claims", "moisture_mapping", "equipment_charges", "monitoring"],
  },
  "common-documentation-mistakes-on-commercial-water-losses": {
    phrases: [
      "commercial water documentation mistakes",
      "common documentation mistakes commercial water loss",
      "commercial mitigation documentation errors",
      "commercial invoice documentation gaps",
      "documentation to invoice alignment commercial water",
      "commercial mitigation documentation disputes",
    ],
    keywords: [
      "commercial documentation",
      "tenant impact",
      "common area",
      "invoice alignment",
      "documentation mistakes",
    ],
    topics: ["commercial_water", "water_damage_claims", "moisture_mapping", "dry_logs", "equipment_charges", "monitoring", "mitigation"],
  },
  "large-loss-water-mitigation-documentation-best-practices": {
    phrases: [
      "large-loss water mitigation documentation",
      "large loss water mitigation documentation best practices",
      "enterprise water loss documentation",
      "large loss drying zones",
      "executive reporting water mitigation",
      "vendor documentation large loss",
      "large-loss documentation systems",
      "commercial mitigation operations large loss",
    ],
    keywords: [
      "large loss",
      "enterprise water",
      "drying zones",
      "executive summary",
      "vendor coordination",
      "hospital water loss",
      "catastrophic water event",
      "large-loss documentation",
    ],
    topics: ["commercial_water", "water_damage_claims", "moisture_mapping", "monitoring", "equipment_charges"],
  },
  "multifamily-water-claims-that-get-underpaid": {
    phrases: [
      "multifamily water claims underpaid",
      "apartment water claim underpayment",
      "multifamily claim reductions",
      "unit-by-unit documentation multifamily",
      "common area omissions water claim",
      "tenant impact documentation multifamily",
      "multifamily equipment reductions",
      "multifamily drying day reductions",
      "documentation-to-invoice mismatch multifamily",
      "HOA water claim underpayment",
      "condo water claim underpaid",
    ],
    keywords: [
      "multifamily underpaid",
      "apartment underpayment",
      "unit-by-unit",
      "common area",
      "tenant impact",
      "equipment reductions",
      "drying days",
      "invoice mismatch",
    ],
    topics: ["commercial_water", "water_damage_claims", "equipment_charges", "monitoring", "dry_logs"],
  },
  "daily-monitoring-documentation-best-practices": {
    phrases: ["daily monitoring", "monitoring documentation"],
    keywords: ["monitoring visit", "monitoring log"],
    topics: ["monitoring"],
  },
  "fire-damage-claim-documentation-guide": {
    phrases: ["fire damage documentation", "fire claim documentation"],
    keywords: ["fire documentation", "smoke documentation"],
  },
  "fire-damage-supplement-playbook-for-contractors": {
    phrases: ["fire supplement playbook", "fire damage supplement"],
    keywords: ["fire supplement"],
  },
  "smoke-and-soot-damage-documentation-guide": {
    phrases: ["smoke and soot", "soot documentation"],
    keywords: ["smoke damage", "soot"],
  },
  "hvac-contamination-in-fire-damage-claims": {
    phrases: ["hvac contamination", "duct contamination"],
    keywords: ["hvac", "duct"],
    topics: ["hvac_fire"],
  },
  "fire-damage-supplement-denial-recovery": {
    phrases: ["fire supplement denial", "fire denial recovery"],
    keywords: ["fire denial", "denied fire supplement"],
    topics: ["denial_recovery"],
  },
  "odor-mitigation-in-fire-damage-claims": {
    phrases: ["odor mitigation", "smoke odor"],
    keywords: ["odor", "deodorization", "hydroxyl", "ozone"],
    topics: ["odor_mitigation"],
  },
  "supplement-denial-recovery-guide": {
    phrases: ["supplement denial recovery", "denied supplement"],
    keywords: ["denial recovery", "partial denial", "resubmission"],
    topics: ["denial_recovery"],
  },
  "first-48-hours-after-carrier-estimate": {
    phrases: ["first 48 hours", "carrier estimate review"],
    keywords: ["first 48", "carrier estimate receipt"],
    topics: ["first_48"],
  },
  "xactimate-estimate-review-checklist-contractors": {
    phrases: ["xactimate estimate review", "estimate review checklist"],
    keywords: ["xactimate", "estimate review", "line item", "missed line"],
    topics: ["xactimate"],
  },
  "why-carrier-estimates-miss-line-items": {
    phrases: ["missed line items", "carrier estimate gaps"],
    keywords: ["missed line", "line item"],
    topics: ["xactimate"],
  },
  "op-on-insurance-claims": {
    phrases: ["overhead and profit", "o&p"],
    keywords: ["o&p", "overhead", "profit"],
    topics: ["op_claims"],
  },
  "roofing-supplement-playbook": {
    phrases: ["roofing supplement playbook"],
    keywords: ["roof supplement"],
  },
  "hail-damage-roof-claims-documentation-supplement": {
    phrases: ["hail damage roof claims", "hail roof supplement documentation"],
    keywords: ["hail damage", "hail roof claim"],
    topics: ["roofing_claims"],
  },
  "wind-damage-roof-claims-what-carriers-miss": {
    phrases: ["wind damage roof claims", "wind roof supplement"],
    keywords: ["wind damage", "wind roof claim"],
    topics: ["roofing_claims"],
  },
  "roof-matching-vs-repairability-when-to-supplement": {
    phrases: ["roof matching vs repairability", "matching vs repairability roof"],
    keywords: ["roof matching", "repairability", "partial replacement"],
    topics: ["roofing_claims"],
  },
  "claim-documentation-approval-rates": {
    phrases: ["documentation approval rates", "approval rates"],
    keywords: ["approval rate", "documentation"],
  },
};

function truncateExcerpt(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length <= MAX_EXCERPT_CHARS) {
    return trimmed;
  }
  return `${trimmed.slice(0, MAX_EXCERPT_CHARS - 1).trimEnd()}…`;
}

function sectionHeadings(post: BlogPost): string {
  const headings: string[] = [];
  const seen = new Set<string>();

  for (const section of post.sections) {
    const heading = section.heading.trim();
    if (!heading || seen.has(heading)) {
      continue;
    }
    seen.add(heading);
    headings.push(heading);
    if (headings.length >= MAX_SECTION_HEADINGS) {
      break;
    }
  }

  return headings.join(" • ");
}

function tagPhrases(tags: readonly string[]): string[] {
  const phrases: string[] = [];
  for (const tag of tags) {
    const lower = tag.toLowerCase();
    if (lower.length >= 8) {
      phrases.push(lower);
    }
    const words = lower.split(/\s+/).filter((w) => w.length >= 3);
    for (let i = 0; i < words.length - 1; i++) {
      phrases.push(`${words[i]} ${words[i + 1]}`);
    }
  }
  return phrases;
}

function buildChunkText(post: BlogPost): string {
  const categoryName = getCategoryName(post.category);
  const excerpt = truncateExcerpt(post.excerpt);
  const sections = sectionHeadings(post);
  const url = `${BLOG_BASE_PATH}/${post.slug}`;

  const lines = [
    `Title: ${post.title}`,
    `Category: ${categoryName}`,
    `Topics: ${post.tags.join(", ")}`,
    `Summary: ${excerpt}`,
  ];

  if (sections) {
    lines.push(`Sections: ${sections}`);
  }

  const practiceGuides = formatPracticeGuidesForChatbot(post.slug);
  if (practiceGuides) {
    lines.push(practiceGuides);
  }

  lines.push(`URL: ${url}`);
  return lines.join("\n");
}

export function blogToChunks(posts: readonly BlogPost[]): BlogKnowledgeChunk[] {
  return posts.map((post) => {
    const boost = SLUG_BOOSTS[post.slug] ?? {};
    const categoryTopics = BLOG_CATEGORY_TOPICS[post.category] ?? ["contractor_fit"];
    const topics = [...new Set([...categoryTopics, ...(boost.topics ?? [])])];

    const keywords = [
      ...post.tags.map((t) => t.toLowerCase()),
      post.category.replace(/-/g, " "),
      ...(boost.keywords ?? []),
    ];

    const titleLower = post.title.toLowerCase();
    const phrases = [
      titleLower,
      ...tagPhrases(post.tags),
      ...(boost.phrases ?? []),
    ];

    return {
      id: `blog:${post.slug}`,
      source: `blog — ${post.title}`,
      topics,
      phrases: [...new Set(phrases)],
      keywords: [...new Set(keywords)],
      text: buildChunkText(post),
    };
  });
}

function buildCategoryChunkText(
  slug: BlogCategorySlug,
  name: string,
  description: string,
  postCount: number,
  recommendedTitles: readonly string[],
  topTitles: readonly string[],
): string {
  const url = getCategoryPath(slug);
  const lines = [
    `Category hub: ${name}`,
    `Slug: ${slug}`,
    `URL: ${url}`,
    `Posts: ${postCount}`,
    `Description: ${description}`,
  ];

  if (recommendedTitles.length > 0) {
    lines.push(`Recommended: ${recommendedTitles.join(" • ")}`);
  }

  if (topTitles.length > 0) {
    lines.push(`Top articles: ${topTitles.join(" • ")}`);
  }

  lines.push(`Cluster summary: ${CATEGORY_CLUSTER_SUMMARIES[slug]}`);
  return lines.join("\n");
}

export function blogCategoryToChunks(): BlogKnowledgeChunk[] {
  return BLOG_CATEGORY_REGISTRY.map((category) => {
    const posts = getPostsByCategorySlug(category.slug);
    const postCount = getCategoryPostCount(category.slug);
    const boost = CATEGORY_PHRASE_BOOSTS[category.slug];

    const recommendedTitles = posts
      .filter((post) => post.recommended)
      .slice(0, MAX_RECOMMENDED_TITLES)
      .map((post) => post.title);

    const recommendedSet = new Set(recommendedTitles);
    const topTitles = posts
      .filter((post) => !recommendedSet.has(post.title))
      .slice(0, MAX_TOP_ARTICLE_TITLES)
      .map((post) => post.title);

    const categoryTopics = BLOG_CATEGORY_TOPICS[category.slug] ?? ["contractor_fit"];
    const topics = [...new Set([...categoryTopics, "blog_resources"])];

    const nameLower = category.name.toLowerCase();
    const slugSpaced = category.slug.replace(/-/g, " ");
    const phrases = [
      nameLower,
      `${slugSpaced} resources`,
      `${slugSpaced} guides`,
      `${slugSpaced} articles`,
      ...(boost.phrases ?? []),
    ];

    const keywords = [
      slugSpaced,
      nameLower,
      category.slug,
      ...(boost.keywords ?? []),
    ];

    return {
      id: `blog-category:${category.slug}`,
      source: `blog category — ${category.name}`,
      topics,
      phrases: [...new Set(phrases)],
      keywords: [...new Set(keywords)],
      text: buildCategoryChunkText(
        category.slug,
        category.name,
        category.description,
        postCount,
        recommendedTitles,
        topTitles,
      ),
    };
  });
}
