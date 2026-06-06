/**
 * Compact blog knowledge chunks for chatbot retrieval.
 * One chunk per post — excerpt + headings only, not full article bodies.
 */

import type { BlogCategorySlug } from "@/lib/blog-categories";
import { getCategoryName } from "@/lib/blog-categories";
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
  "why-water-mitigation-claims-get-underpaid": {
    phrases: ["water mitigation underpaid", "underpayment"],
    keywords: ["underpaid", "underpayment"],
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
