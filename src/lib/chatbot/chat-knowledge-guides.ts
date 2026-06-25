/**
 * Compact claim guide knowledge chunks for chatbot retrieval.
 * Guide chunks: one per guide (excerpt + step titles only).
 * Category chunks: one per guide category hub.
 */

import type { GuideCategorySlug } from "@/lib/guide-categories";
import {
  GUIDE_CATEGORY_REGISTRY,
  getGuideCategoryGuideCount,
  getGuideCategoryName,
  getGuideCategoryPath,
} from "@/lib/guide-categories";
import { getGuidesByCategory } from "@/lib/guide-registry";
import type { Guide } from "@/lib/guide-types";
import { getGuidePathForGuide } from "@/lib/guide-page";

type GuideKnowledgeChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

const MAX_EXCERPT_CHARS = 240;
const MAX_STEP_TITLES = 6;
const MAX_GUIDE_TITLES = 5;

const GUIDE_CATEGORY_TOPICS: Record<GuideCategorySlug, readonly string[]> = {
  "general-claims": ["supplements", "documentation", "claim_guides"],
  "roofing-claims": ["roofing_claims", "claim_guides", "contractor_fit"],
  "water-damage": ["water_damage_claims", "mitigation", "claim_guides"],
  "fire-damage": ["fire_damage_claims", "claim_guides", "contractor_fit"],
  "exterior-restoration": ["roofing_claims", "claim_guides"],
};

const GUIDE_CATEGORY_PHRASE_BOOSTS: Record<
  GuideCategorySlug,
  { keywords?: readonly string[]; phrases?: readonly string[] }
> = {
  "general-claims": {
    phrases: [
      "claim guides",
      "general claims guides",
      "supplement submission guide",
      "first 48 hours checklist",
    ],
    keywords: ["claim guide", "operational guide", "checklist"],
  },
  "roofing-claims": {
    phrases: ["roofing claim guides", "roofing supplement checklist", "roofing guides"],
    keywords: ["roofing guide", "roof supplement checklist"],
  },
  "water-damage": {
    phrases: [
      "water damage guides",
      "mitigation guides",
      "dry log guide",
      "water mitigation checklist",
    ],
    keywords: ["water damage guide", "mitigation guide", "dry log collection"],
  },
  "fire-damage": {
    phrases: ["fire damage guides", "fire claim guides", "smoke documentation guide"],
    keywords: ["fire guide", "fire claim intake"],
  },
  "exterior-restoration": {
    phrases: ["exterior restoration guides", "siding documentation guide"],
    keywords: ["exterior guide", "siding documentation"],
  },
};

const GUIDE_SLUG_BOOSTS: Record<
  string,
  { keywords?: readonly string[]; phrases?: readonly string[]; topics?: readonly string[] }
> = {
  "first-48-hours-checklist": {
    phrases: ["first 48 hours checklist", "first 48 hours"],
    topics: ["first_48"],
  },
  "supplement-submission-guide": {
    phrases: [
      "supplement submission guide",
      "how to submit supplement",
      "supplement submission steps",
      "supplement submission workflow",
    ],
    keywords: ["supplement submission", "submit supplement"],
  },
  "dry-log-collection-guide": {
    phrases: ["dry log collection", "dry log checklist", "collect dry logs", "how do i collect dry logs"],
    keywords: ["dry log collection", "collect dry logs"],
    topics: ["dry_logs"],
  },
  "mitigation-intake-checklist": {
    phrases: ["mitigation intake checklist", "water intake checklist", "document a water mitigation claim", "how do i document a water mitigation"],
    keywords: ["mitigation intake", "water mitigation documentation"],
  },
  "category-class-documentation-guide": {
    phrases: ["document a water mitigation claim", "water mitigation documentation"],
    keywords: ["category class documentation", "mitigation documentation"],
  },
  "roofing-supplement-checklist": {
    phrases: ["roofing supplement checklist"],
    keywords: ["roof supplement checklist"],
  },
  "carrier-estimate-review-guide": {
    phrases: ["carrier estimate review guide", "review carrier estimate"],
    keywords: ["estimate review"],
  },
  "fire-claim-intake-guide": {
    phrases: ["fire claim intake", "fire intake checklist"],
    keywords: ["fire intake"],
  },
  "claim-file-audit-guide": {
    phrases: ["claim file audit", "audit claim file"],
    keywords: ["claim audit", "file audit"],
  },
  "op-qualification-guide": {
    phrases: ["o&p qualification", "overhead and profit documentation", "op documentation"],
    keywords: ["o&p", "overhead profit"],
    topics: ["op_claims"],
  },
  "documentation-standards-guide": {
    phrases: ["documentation standards", "claim documentation standard"],
    keywords: ["documentation standard"],
  },
  "photo-documentation-standards-guide": {
    phrases: ["photo documentation", "field photo procedure"],
    keywords: ["photo documentation"],
  },
  "roofing-documentation-guide": {
    phrases: ["roofing documentation", "roof claim documentation"],
    keywords: ["roofing documentation"],
  },
  "reinspection-preparation-guide": {
    phrases: [
      "reinspection preparation",
      "roof reinspection",
      "how do i prepare for reinspection",
      "adjuster reinspection",
    ],
    keywords: ["reinspection", "re-inspection"],
  },
  "code-upgrade-documentation-guide": {
    phrases: ["code upgrade documentation", "roof code upgrade"],
    keywords: ["code upgrade"],
  },
  "steep-high-documentation-guide": {
    phrases: ["steep roof documentation", "high roof documentation", "steep and high"],
    keywords: ["steep", "high roof"],
  },
  "roof-measurement-documentation-guide": {
    phrases: ["roof measurement documentation", "measurement report"],
    keywords: ["roof measurement"],
  },
  "moisture-mapping-guide": {
    phrases: ["moisture mapping", "moisture map procedure", "how do i moisture map"],
    keywords: ["moisture mapping", "moisture map"],
    topics: ["moisture_mapping"],
  },
  "equipment-documentation-guide": {
    phrases: ["equipment documentation", "document equipment charges", "dehumidifier documentation"],
    keywords: ["equipment documentation", "equipment charge"],
    topics: ["equipment_charges"],
  },
  "daily-monitoring-guide": {
    phrases: ["daily monitoring checklist", "monitoring visit documentation"],
    keywords: ["daily monitoring", "monitoring visit"],
    topics: ["monitoring"],
  },
  "contents-manipulation-documentation-guide": {
    phrases: ["contents manipulation documentation", "contents manipulation"],
    keywords: ["contents manipulation"],
  },
  "smoke-documentation-guide": {
    phrases: ["smoke documentation", "smoke and soot documentation"],
    keywords: ["smoke documentation", "soot"],
  },
  "hvac-contamination-guide": {
    phrases: ["hvac contamination documentation", "hvac duct documentation fire"],
    keywords: ["hvac contamination", "duct contamination"],
    topics: ["hvac_fire"],
  },
  "odor-documentation-guide": {
    phrases: ["odor documentation", "odor mitigation documentation", "deodorization documentation"],
    keywords: ["odor documentation", "deodorization"],
    topics: ["odor_mitigation"],
  },
  "contents-documentation-guide": {
    phrases: ["contents documentation fire", "fire contents documentation"],
    keywords: ["contents documentation"],
  },
  "structural-stabilization-documentation-guide": {
    phrases: ["structural stabilization documentation", "shoring documentation"],
    keywords: ["structural stabilization"],
  },
  "siding-envelope-documentation-guide": {
    phrases: ["siding documentation", "envelope documentation"],
    keywords: ["siding documentation", "envelope"],
  },
  "window-door-documentation-guide": {
    phrases: ["window door documentation", "window and door documentation"],
    keywords: ["window documentation", "door documentation"],
  },
  "commercial-water-loss-documentation-guide": {
    phrases: [
      "commercial water loss documentation",
      "commercial mitigation documentation",
      "apartment water damage documentation",
      "multifamily water claims",
      "multifamily water losses",
      "HOA water damage documentation",
      "unit-by-unit documentation water damage",
      "common area water damage documentation",
      "large loss documentation",
      "tenant impact documentation water damage",
      "business interruption documentation water damage",
      "how do i document commercial water loss mitigation",
    ],
    keywords: [
      "commercial water",
      "tenant impact",
      "business interruption",
      "commercial moisture mapping",
      "commercial mitigation package",
      "commercial claim recovery",
      "apartment water",
      "multifamily",
      "HOA documentation",
      "unit-by-unit",
      "common area",
      "large loss",
    ],
    topics: ["water_damage_claims", "commercial_water", "mitigation"],
  },
  "water-mitigation-invoice-defense-guide": {
    phrases: [
      "water mitigation invoice defense",
      "mitigation invoice review",
      "defend mitigation invoice",
      "carrier invoice reductions",
      "mitigation invoice reduction",
      "drying day disputes",
      "equipment disputes",
      "mitigation documentation requirements",
      "how do i defend a water mitigation invoice",
      "why do carriers reduce mitigation invoices",
    ],
    keywords: [
      "invoice defense",
      "invoice reduction",
      "mitigation invoice",
      "carrier invoice reduction",
      "drying day dispute",
      "equipment dispute",
      "monitoring visits",
      "dry logs",
      "moisture maps",
    ],
    topics: ["water_damage_claims", "equipment_charges", "dry_logs", "mitigation"],
  },
};

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

export function guideToChunks(guides: readonly Guide[]): GuideKnowledgeChunk[] {
  return guides.map((guide) => {
    const boosts = GUIDE_SLUG_BOOSTS[guide.slug];
    const stepTitles = guide.steps.slice(0, MAX_STEP_TITLES).map((s) => s.title);
    const path = getGuidePathForGuide(guide);

    return {
      id: `guide:${guide.category}/${guide.slug}`,
      source: `guide — ${guide.title}`,
      topics: [
        "claim_guides",
        guide.category,
        guide.guideType,
        ...(boosts?.topics ?? []),
      ],
      phrases: [
        guide.title.toLowerCase(),
        `${guide.slug.replace(/-/g, " ")}`,
        ...(boosts?.phrases ?? []),
      ],
      keywords: [
        guide.guideType,
        ...guide.tags.map((t) => t.toLowerCase()),
        ...(boosts?.keywords ?? []),
      ],
      text: [
        guide.title,
        `Category: ${getGuideCategoryName(guide.category)}`,
        `Type: ${guide.guideType}`,
        truncate(guide.excerpt, MAX_EXCERPT_CHARS),
        stepTitles.length > 0 ? `Steps: ${stepTitles.join("; ")}` : "",
        `URL: ${path}`,
      ]
        .filter(Boolean)
        .join("\n"),
    };
  });
}

export function guideCategoryToChunks(): GuideKnowledgeChunk[] {
  return GUIDE_CATEGORY_REGISTRY.map((category) => {
    const guides = getGuidesByCategory(category.slug);
    const boosts = GUIDE_CATEGORY_PHRASE_BOOSTS[category.slug];
    const guideTitles = guides.slice(0, MAX_GUIDE_TITLES).map((g) => g.title);

    return {
      id: `guide-category:${category.slug}`,
      source: `guide category — ${category.name}`,
      topics: ["claim_guides", ...GUIDE_CATEGORY_TOPICS[category.slug]],
      phrases: [
        `${category.slug.replace(/-/g, " ")} guides`,
        `${category.name.toLowerCase()} guides`,
        `${category.name.toLowerCase()} checklists`,
        ...(boosts?.phrases ?? []),
      ],
      keywords: [
        "claim guides",
        "operational guide",
        "checklist",
        category.slug.replace(/-/g, " "),
        ...(boosts?.keywords ?? []),
      ],
      text: [
        category.name,
        category.description,
        `URL: ${getGuideCategoryPath(category.slug)}`,
        `${getGuideCategoryGuideCount(category.slug)} guides`,
        guideTitles.length > 0 ? `Guides: ${guideTitles.join("; ")}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    };
  });
}

export type { GuideKnowledgeChunk };
