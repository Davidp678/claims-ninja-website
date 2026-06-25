/**
 * Chatbot knowledge chunks built from approved site content.
 * Update source files (faq-data.ts, marketing-pages.ts, etc.) — chunks rebuild on deploy.
 */

import type { FaqItem } from "@/lib/faq-page";
import { getCategoryTitle } from "@/lib/faq-page";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { blogToChunks, blogCategoryToChunks } from "./chat-knowledge-blog";
import { guideToChunks, guideCategoryToChunks } from "./chat-knowledge-guides";
import { aboutPageToChunks } from "./chat-knowledge-about";
import { pricingPageToChunks } from "./chat-knowledge-pricing";
import { partnerNetworkToChunks } from "./chat-knowledge-partner-network";
import { resultsInsightsToChunks } from "./chat-knowledge-results-insights";
import { AI_CLAIM_WORKFLOW } from "@/lib/ai-claim-analysis-page";
import { CLAIM_GUIDES } from "@/lib/guides";
import {
  CLIENT_PORTAL_CAPABILITIES,
  CLIENT_PORTAL_HERO,
  CLIENT_PORTAL_WORKFLOW,
} from "@/lib/client-portal-page";
import { CONTENTS_RESTORATION_HERO, CONTENTS_RESTORATION_SEGMENTS, CONTENTS_RESTORATION_WORKFLOW } from "@/lib/contents-restoration-page";
import {
  CONTACT_HERO,
  CONTACT_INFO,
  CONTACT_META,
  CONTACT_ROUTING,
} from "@/lib/contact-page";
import { FIRE_DAMAGE_HERO, FIRE_DAMAGE_SEGMENTS, FIRE_DAMAGE_WORKFLOW } from "@/lib/fire-damage-page";
import { MOLD_HERO, MOLD_SEGMENTS, MOLD_WORKFLOW } from "@/lib/mold-page";
import type { MarketingPageConfig } from "@/lib/marketing-pages";
import {
  aiClaimAnalysisPage,
  billingPaymentsPage,
  caseStudiesPage,
  claimTrackingPage,
  clientPortalPage,
  communicationHubPage,
  contentsPage,
  fireDamagePage,
  guidesPage,
  moldPage,
  platformOverviewPage,
  pricingPage,
  reviewsPage,
  roofingPage,
  waterDamagePage,
} from "@/lib/marketing-pages";
import { ROOFING_HERO, ROOFING_SEGMENTS, ROOFING_WORKFLOW } from "@/lib/roofing-page";
import { SITE } from "@/lib/constants";
import {
  PLATFORM_AI,
  PLATFORM_HERO,
  PLATFORM_PILLARS,
} from "@/lib/platform-overview";
import { CLIENT_REVIEWS } from "@/lib/testimonials";
import { WATER_DAMAGE_HERO, WATER_DAMAGE_SEGMENTS, WATER_DAMAGE_WORKFLOW } from "@/lib/water-damage-page";

export type ChatKnowledgeChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

const TOPIC_ALIASES: Record<string, readonly string[]> = {
  getting_started: ["onboarding", "intake"],
  pricing: ["billing", "fees"],
  insurance_supplements: ["supplements", "supplement"],
  roofing_claims: ["roofing"],
  water_damage_claims: ["water damage", "mitigation"],
  fire_damage_claims: ["fire damage"],
  mold_claims: ["mold"],
  contents_restoration: ["contents"],
  carrier_negotiations: ["carrier", "negotiation"],
  documentation: ["documentation", "photos"],
  platform_security: ["platform", "security", "portal"],
  ai_claim_analysis: ["ai", "analysis"],
  results_insights: ["results and insights", "recovery results", "portfolio review"],
};

function questionPhrases(question: string): string[] {
  const normalized = question
    .toLowerCase()
    .replace(/[^\w\s%&/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const phrases: string[] = [];
  if (normalized.length >= 8) {
    phrases.push(normalized);
  }
  const words = normalized.split(" ").filter((w) => w.length >= 3);
  for (let i = 0; i < words.length - 1; i++) {
    phrases.push(`${words[i]} ${words[i + 1]}`);
  }
  return phrases;
}

const FAQ_ID_BOOSTS: Record<
  string,
  { phrases?: readonly string[]; keywords?: readonly string[]; topics?: readonly string[] }
> = {
  "water-commercial-claims-documentation": {
    phrases: [
      "commercial water loss documentation",
      "commercial mitigation documentation",
      "how are commercial water claims documented",
    ],
    keywords: ["commercial water", "commercial mitigation"],
    topics: ["commercial_water"],
  },
  "water-apartment-loss-documentation": {
    phrases: [
      "apartment water damage documentation",
      "apartment water losses",
      "apartment water loss documentation",
    ],
    keywords: ["apartment water", "apartment documentation"],
    topics: ["commercial_water"],
  },
  "water-multifamily-loss-documentation": {
    phrases: ["multifamily water claims documentation", "multifamily water damage"],
    keywords: ["multifamily", "multifamily water"],
    topics: ["commercial_water"],
  },
  "water-commercial-claims-scrutiny": {
    phrases: ["commercial water claims scrutinized", "commercial water claims scrutiny"],
    keywords: ["commercial scrutiny", "commercial water claims"],
    topics: ["commercial_water"],
  },
  "water-commercial-mitigation-package": {
    phrases: [
      "commercial mitigation package",
      "what should be in a commercial mitigation package",
    ],
    keywords: ["commercial mitigation package", "commercial closeout"],
    topics: ["commercial_water"],
  },
  "water-tenant-impact-documentation": {
    phrases: ["tenant impact documentation water damage", "tenant impact documentation"],
    keywords: ["tenant impact", "tenant documentation"],
    topics: ["commercial_water"],
  },
  "water-business-interruption-documentation": {
    phrases: [
      "business interruption documentation water damage",
      "business interruption documentation",
    ],
    keywords: ["business interruption"],
    topics: ["commercial_water"],
  },
  "water-commercial-claims-underpaid": {
    phrases: [
      "commercial water claims underpaid",
      "commercial water claims underpayment",
    ],
    keywords: ["commercial underpaid", "commercial underpayment"],
    topics: ["commercial_water"],
  },
  "water-apartment-complex-documentation": {
    phrases: [
      "apartment complex water damage documentation",
      "how should water damage be documented in apartment complexes",
      "apartment water loss documentation",
    ],
    keywords: ["apartment complex", "apartment documentation", "HOA documentation"],
    topics: ["commercial_water"],
  },
  "water-apartment-unit-separate-tracking": {
    phrases: [
      "track each apartment unit separately",
      "unit-by-unit documentation water damage",
      "apartment unit tracking water loss",
    ],
    keywords: ["unit-by-unit", "unit tracking", "separate unit"],
    topics: ["commercial_water"],
  },
  "water-apartment-equipment-usage-documentation": {
    phrases: [
      "equipment usage apartment water losses",
      "apartment equipment documentation",
      "equipment per unit apartment water",
    ],
    keywords: ["apartment equipment", "equipment per unit"],
    topics: ["commercial_water", "equipment_charges"],
  },
  "water-apartment-mitigation-claims-disputed": {
    phrases: [
      "apartment water mitigation claims disputed",
      "why apartment water claims disputed",
      "multifamily water claims disputed",
    ],
    keywords: ["apartment disputed", "multifamily disputed"],
    topics: ["commercial_water"],
  },
  "water-apartment-tenant-impact-required": {
    phrases: [
      "tenant impacts apartment water losses",
      "document tenant impact apartment",
      "tenant impact documentation apartment complex",
    ],
    keywords: ["tenant impact apartment", "apartment tenant"],
    topics: ["commercial_water"],
  },
  "water-multifamily-claims-underpaid": {
    phrases: [
      "multifamily water claims underpaid",
      "apartment water claim underpayment",
      "multifamily claim reductions",
      "why multifamily water claims underpaid",
    ],
    keywords: ["multifamily underpaid", "apartment underpayment", "multifamily reductions"],
    topics: ["commercial_water", "water_damage_claims"],
  },
  "water-multifamily-units-documentation": {
    phrases: [
      "unit-by-unit documentation multifamily",
      "document affected units multifamily water",
      "multifamily unit documentation water damage",
    ],
    keywords: ["unit-by-unit", "multifamily units", "unit documentation"],
    topics: ["commercial_water"],
  },
  "water-multifamily-equipment-reductions": {
    phrases: [
      "multifamily equipment reductions",
      "carriers reduce equipment multifamily water",
      "apartment equipment charge reductions",
    ],
    keywords: ["multifamily equipment", "equipment reductions", "apartment equipment"],
    topics: ["commercial_water", "equipment_charges"],
  },
  "water-multifamily-tenant-impact-documentation": {
    phrases: [
      "tenant impact documentation multifamily",
      "document tenant impact multifamily water claims",
      "multifamily tenant impact records",
    ],
    keywords: ["tenant impact multifamily", "multifamily tenant"],
    topics: ["commercial_water"],
  },
  "water-multifamily-full-payment-support": {
    phrases: [
      "support full payment multifamily water claims",
      "multifamily water claim recovery documentation",
      "documentation to invoice mismatch multifamily",
    ],
    keywords: ["full payment", "multifamily recovery", "invoice mismatch"],
    topics: ["commercial_water", "mitigation"],
  },
  "water-commercial-documentation-missing": {
    phrases: [
      "documentation missing commercial water claims",
      "what documentation is missing commercial water",
      "commercial water documentation gaps",
    ],
    keywords: ["commercial documentation", "missing documentation", "documentation mistakes"],
    topics: ["commercial_water", "water_damage_claims"],
  },
  "water-commercial-invoice-reduced-why": {
    phrases: [
      "why are commercial water mitigation invoices reduced",
      "commercial invoice reductions water damage",
      "commercial mitigation invoice reduced",
    ],
    keywords: ["commercial invoice", "invoice reduction", "commercial mitigation"],
    topics: ["commercial_water", "mitigation"],
  },
  "water-commercial-tenant-impact-required": {
    phrases: [
      "tenant impacts commercial water losses",
      "should tenant impacts be documented commercial water",
      "commercial tenant impact documentation",
    ],
    keywords: ["tenant impact", "commercial tenant", "occupied commercial"],
    topics: ["commercial_water"],
  },
  "water-commercial-common-area-documentation": {
    phrases: [
      "common area documentation commercial water mitigation",
      "how to document common areas commercial water",
      "commercial common area water damage documentation",
    ],
    keywords: ["common area", "common area documentation", "hallway documentation"],
    topics: ["commercial_water"],
  },
  "water-commercial-documentation-invoice-match": {
    phrases: [
      "documentation match mitigation invoice commercial",
      "why must documentation match invoice commercial water",
      "documentation to invoice alignment commercial",
    ],
    keywords: ["invoice alignment", "documentation match", "invoice defense"],
    topics: ["commercial_water", "mitigation"],
  },
  "water-mitigation-invoice-reductions": {
    phrases: [
      "why do carriers reduce water mitigation invoices",
      "carrier invoice reductions mitigation",
      "mitigation invoice reduced",
    ],
    keywords: ["invoice reduction", "carrier invoice reduction", "mitigation invoice"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-mitigation-invoice-documentation": {
    phrases: [
      "documentation supports water mitigation invoices",
      "mitigation documentation requirements",
      "what documentation supports mitigation invoice",
    ],
    keywords: ["mitigation documentation", "invoice documentation", "indexed packet"],
    topics: ["water_damage_claims", "dry_logs"],
  },
  "water-defend-drying-day-charges": {
    phrases: [
      "defend drying day charges",
      "drying day disputes",
      "how to defend drying days",
    ],
    keywords: ["drying day dispute", "drying days", "defend drying"],
    topics: ["water_damage_claims", "dry_logs"],
  },
  "water-equipment-invoice-documentation": {
    phrases: [
      "equipment usage documented for invoice review",
      "equipment invoice documentation",
      "document equipment for invoice review",
    ],
    keywords: ["equipment invoice", "equipment documentation", "equipment dispute"],
    topics: ["water_damage_claims", "equipment_charges"],
  },
  "water-mitigation-invoice-review-failures": {
    phrases: [
      "mitigation invoices fail review",
      "water mitigation invoice review failures",
      "why mitigation invoice fails review",
    ],
    keywords: ["invoice review", "invoice fail", "desk review"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-large-loss-qualifies": {
    phrases: [
      "what qualifies as a large-loss water mitigation project",
      "large loss water mitigation project",
      "enterprise water loss qualification",
      "hospital water loss documentation",
      "catastrophic water event mitigation",
    ],
    keywords: ["large loss", "enterprise water", "large-loss", "catastrophic water"],
    topics: ["commercial_water", "water_damage_claims"],
  },
  "water-large-loss-documentation": {
    phrases: [
      "how should large-loss water damage be documented",
      "large loss water damage documentation",
      "large-loss documentation systems",
      "enterprise water mitigation documentation",
    ],
    keywords: ["large loss documentation", "enterprise documentation", "documentation command structure"],
    topics: ["commercial_water", "water_damage_claims", "mitigation"],
  },
  "water-large-loss-scrutiny": {
    phrases: [
      "why are large-loss water claims heavily scrutinized",
      "large loss water claim scrutiny",
      "enterprise water claim review",
    ],
    keywords: ["large loss scrutiny", "specialist desk review", "consultant involvement"],
    topics: ["commercial_water", "water_damage_claims", "mitigation"],
  },
  "water-large-loss-drying-zones": {
    phrases: [
      "how should multiple drying zones be documented",
      "drying zones documentation large loss",
      "multi-zone drying documentation",
      "zone-by-zone water mitigation documentation",
    ],
    keywords: ["drying zones", "multi-zone", "zone documentation", "work area segmentation"],
    topics: ["commercial_water", "water_damage_claims", "moisture_mapping", "dry_logs"],
  },
  "water-large-loss-invoice-documentation": {
    phrases: [
      "documentation supports large commercial water mitigation invoices",
      "large loss mitigation invoice documentation",
      "enterprise water mitigation invoice support",
      "executive reporting water mitigation invoice",
    ],
    keywords: ["large loss invoice", "commercial mitigation invoice", "executive summary", "vendor documentation"],
    topics: ["commercial_water", "water_damage_claims", "mitigation"],
  },
  "water-class-4-drying-definition": {
    phrases: [
      "what is class 4 water damage drying",
      "class 4 water damage drying",
      "class 4 drying definition",
      "bound water class 4",
    ],
    keywords: ["class 4", "bound water", "low-permeance", "class 4 drying"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-class-4-documentation-required": {
    phrases: [
      "why does class 4 drying require additional documentation",
      "class 4 documentation requirements",
      "class 4 drying documentation",
    ],
    keywords: ["class 4 documentation", "additional documentation", "specialty drying"],
    topics: ["water_damage_claims", "dry_logs", "mitigation"],
  },
  "water-class-4-specialty-equipment-documentation": {
    phrases: [
      "how should specialty drying equipment be documented",
      "specialty drying equipment documentation",
      "document injectidry floor mats desiccant",
    ],
    keywords: ["specialty drying", "injectidry", "floor mat", "desiccant", "heat drying"],
    topics: ["water_damage_claims", "equipment_charges", "mitigation"],
  },
  "water-class-4-drying-duration": {
    phrases: [
      "why do class 4 drying projects take longer",
      "class 4 drying duration",
      "extended drying class 4",
      "bound water takes longer to dry",
    ],
    keywords: ["class 4 duration", "extended drying", "bound water", "low-permeance"],
    topics: ["water_damage_claims", "dry_logs", "mitigation"],
  },
  "water-class-4-carrier-disputes": {
    phrases: [
      "why do carriers dispute class 4 drying charges",
      "class 4 drying charge disputes",
      "carrier disputes class 4",
      "class 4 drying disputes",
    ],
    keywords: ["class 4 dispute", "drying charge dispute", "carrier dispute", "class 4 charges"],
    topics: ["water_damage_claims", "equipment_charges", "mitigation"],
  },
  "water-reinspection-when-request": {
    phrases: [
      "when should contractors request a water damage reinspection",
      "when to request water damage reinspection",
      "request water damage reinspection",
    ],
    keywords: ["reinspection", "water damage reinspection", "when to request"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-reinspection-documentation-prep": {
    phrases: [
      "what documentation should be prepared before a reinspection",
      "documentation before reinspection",
      "prepare for water reinspection",
    ],
    keywords: ["reinspection documentation", "documentation prep", "before reinspection"],
    topics: ["water_damage_claims", "dry_logs", "moisture_mapping"],
  },
  "water-reinspection-additional-damage-documented": {
    phrases: [
      "can additional damage be documented after the initial inspection",
      "document additional damage after inspection",
      "additional damage after initial inspection",
    ],
    keywords: ["additional damage", "after inspection", "discovered damage"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-reinspection-denial-reasons": {
    phrases: [
      "why do carriers deny reinspection requests",
      "carriers deny reinspection",
      "reinspection request denied",
    ],
    keywords: ["reinspection denied", "deny reinspection", "reinspection refusal"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-reinspection-organize-documentation": {
    phrases: [
      "how should contractors organize documentation for a reinspection",
      "organize documentation for reinspection",
      "reinspection documentation organization",
    ],
    keywords: ["organize documentation", "reinspection packet", "indexed documentation"],
    topics: ["water_damage_claims", "mitigation", "dry_logs"],
  },
};

function faqToChunks(items: readonly FaqItem[]): ChatKnowledgeChunk[] {
  return items.map((item) => {
    const categoryTitle = getCategoryTitle(item.category);
    const aliases = TOPIC_ALIASES[item.category] ?? [];
    const boosts = FAQ_ID_BOOSTS[item.id];
    return {
      id: `faq:${item.id}`,
      source: `faq — ${categoryTitle}`,
      topics: [item.category, ...aliases, ...(boosts?.topics ?? [])],
      phrases: [...questionPhrases(item.question), ...(boosts?.phrases ?? [])],
      keywords: [
        ...aliases,
        ...item.question
          .toLowerCase()
          .split(/\s+/)
          .filter((w) => w.length >= 4),
        ...(boosts?.keywords ?? []),
      ],
      text: `Q: ${item.question}\nA: ${item.answer}`,
    };
  });
}

function pageToChunks(
  page: MarketingPageConfig,
  topics: readonly string[],
  keywords?: readonly string[],
  extraPhrases?: readonly string[],
): ChatKnowledgeChunk[] {
  const featureText = page.features
    .map((f) => `• ${f.title}: ${f.description}`)
    .join("\n");

  const summary = [
    `${page.title}`,
    page.description,
    featureText ? `\n${featureText}` : "",
    `URL: ${page.path}`,
  ]
    .filter(Boolean)
    .join("\n");

  return [
    {
      id: `page:${page.path}`,
      source: `page:${page.path}`,
      topics,
      keywords: keywords ?? topics,
      phrases: [
        page.title.toLowerCase(),
        page.eyebrow.toLowerCase(),
        ...(extraPhrases ?? []),
      ],
      text: summary,
    },
  ];
}

type SolutionSegmentBlock = {
  title: string;
  description: string;
  items: readonly { title: string; description: string }[];
};

type SolutionWorkflowBlock = {
  title: string;
  steps: readonly { title: string; description: string }[];
};

type SolutionEnrichment = {
  hero: { title: string; description: string };
  segments: SolutionSegmentBlock;
  workflow: SolutionWorkflowBlock;
};

function formatSolutionEnrichment(enrichment: SolutionEnrichment): string {
  const segmentLines = enrichment.segments.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");
  const workflowLines = enrichment.workflow.steps
    .map((step) => `• ${step.title}: ${step.description}`)
    .join("\n");

  return [
    enrichment.hero.title,
    enrichment.hero.description,
    `${enrichment.segments.title}: ${enrichment.segments.description}`,
    segmentLines,
    enrichment.workflow.title,
    workflowLines,
  ].join("\n");
}

function solutionPageChunks(
  page: MarketingPageConfig,
  enrichment: SolutionEnrichment,
  topics: readonly string[],
  keywords?: readonly string[],
): ChatKnowledgeChunk[] {
  const featureText = page.features
    .map((f) => `• ${f.title}: ${f.description}`)
    .join("\n");

  return [
    {
      id: `page:${page.path}`,
      source: `page:${page.path}`,
      topics,
      keywords: keywords ?? topics,
      phrases: [
        page.title.toLowerCase(),
        enrichment.hero.title.toLowerCase(),
        `${page.path.split("/").pop()?.replace(/-/g, " ")} claims`,
      ],
      text: [
        formatSolutionEnrichment(enrichment),
        featureText,
        `URL: ${page.path}`,
      ]
        .filter(Boolean)
        .join("\n"),
    },
  ];
}

function clientPortalChunks(): ChatKnowledgeChunk[] {
  const capabilityText = CLIENT_PORTAL_CAPABILITIES.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");
  const workflowText = CLIENT_PORTAL_WORKFLOW.steps
    .map((step) => `• ${step.title}: ${step.description}`)
    .join("\n");

  return [
    {
      id: "page:/platform/client-portal",
      source: "page:/platform/client-portal",
      topics: ["platform", "platform_security", "onboarding", "documentation"],
      keywords: [
        "client portal",
        "portal",
        "document upload",
        "claim file",
        "project tracking",
      ],
      phrases: [
        "client portal",
        "claims command center",
        "what can i do in the portal",
        "upload documents to the platform",
      ],
      text: [
        CLIENT_PORTAL_HERO.title,
        CLIENT_PORTAL_HERO.description,
        `${CLIENT_PORTAL_CAPABILITIES.title}: ${CLIENT_PORTAL_CAPABILITIES.description}`,
        capabilityText,
        `${CLIENT_PORTAL_WORKFLOW.title}: ${CLIENT_PORTAL_WORKFLOW.description}`,
        workflowText,
        `URL: ${clientPortalPage.path}`,
      ].join("\n"),
    },
  ];
}

function companyAndToolChunks(): ChatKnowledgeChunk[] {
  const reviewLines = CLIENT_REVIEWS.map(
    (review) =>
      `"${review.quote}" — ${review.author}, ${review.location}`,
  ).join("\n\n");

  return [
    {
      id: "page:/reviews",
      source: "page:/reviews",
      topics: ["contractor_fit", "onboarding", "platform"],
      keywords: ["review", "testimonial", "contractor", "partner"],
      phrases: [
        "what do contractors say",
        "reviews",
        "testimonials",
        "contractor reviews",
      ],
      text: [
        reviewsPage.title,
        reviewsPage.description,
        reviewLines,
        `URL: ${reviewsPage.path}`,
      ].join("\n\n"),
    },
    {
      id: "page:/contact",
      source: "page:/contact",
      topics: ["onboarding", "getting_started"],
      keywords: ["contact", "phone", "email", "reach", "call"],
      phrases: [
        "phone number",
        "contact claims ninja",
        "how do i contact",
        "how do i contact claims ninja",
        "email address",
        "what is your phone number",
      ],
      text: [
        CONTACT_HERO.title,
        CONTACT_HERO.description,
        CONTACT_ROUTING.description,
        CONTACT_ROUTING.cards
          .map((card) => `• ${card.title}: ${card.description}`)
          .join("\n"),
        `Phone: ${SITE.phone}`,
        `Email: ${SITE.email}`,
        CONTACT_INFO.description,
        `URL: ${CONTACT_META.path}`,
      ].join("\n\n"),
    },
    {
      id: "tool:homepage-calculator",
      source: "homepage:/#calculator",
      topics: ["ai", "ai_claim_analysis", "pricing", "onboarding"],
      keywords: [
        "calculator",
        "roi",
        "claim review",
        "free claim review",
        "organization roi",
        "triage",
      ],
      phrases: [
        "claim review calculator",
        "single claim review",
        "organization roi calculator",
        "free claim review",
        "how does the calculator work",
      ],
      text: [
        "Homepage calculators at /#calculator",
        "Single Claim Review: AI-assisted preliminary triage on the homepage. Contractors upload claim files (photos, estimates), select claim type, enter carrier estimate and scope notes, and receive a preliminary analysis of scope gaps and recovery opportunities before expert review.",
        "Organization ROI: Models monthly and annual net uplift across your book using average carrier estimate, jobs per month, assumed uplift percentage, and in-house claims team cost. Compares outsourced Claims Ninja fee structure (15% of documented increase or ~4% of RCV when no carrier estimate) against in-house overhead.",
        "Both calculators include optional lead capture to connect with the Claims Ninja team. For full claim intake use the onboarding form; for strategy discussions use the schedule link.",
        "URL: /#calculator",
      ].join("\n"),
    },
  ];
}

function platformOverviewChunks(): ChatKnowledgeChunk[] {
  const pillarText = PLATFORM_PILLARS.map(
    (p) => `• ${p.title}: ${p.description}`,
  ).join("\n");

  return [
    {
      id: "platform:hero",
      source: "page:/platform",
      topics: ["platform", "how_it_works", "onboarding"],
      keywords: ["platform", "contractor", "operations", "claims"],
      phrases: ["how claims ninja works", "contractor claims operations"],
      text: `${PLATFORM_HERO.title}\n${PLATFORM_HERO.description}`,
    },
    {
      id: "platform:pillars",
      source: "page:/platform",
      topics: ["platform", "public_adjuster", "supplements", "ai"],
      keywords: [
        "public adjuster",
        "supplement",
        "portal",
        "ai",
        "negotiation",
      ],
      phrases: ["expert claim support", "claims management technology"],
      text: `Platform pillars:\n${pillarText}`,
    },
    ...pageToChunks(platformOverviewPage, ["platform", "how_it_works"]),
  ];
}

function platformAiChunks(): ChatKnowledgeChunk[] {
  const capabilityText = PLATFORM_AI.capabilities
    .map((c) => `• ${c.title}: ${c.description}`)
    .join("\n");

  const workflowCards = AI_CLAIM_WORKFLOW.cards
    .map(
      (card) =>
        `${card.title}:\n${card.items.map((item) => `  - ${item}`).join("\n")}`,
    )
    .join("\n\n");

  return [
    {
      id: "platform:ai-overview",
      source: "page:/platform/ai-claim-analysis",
      topics: ["ai", "ai_claim_analysis"],
      keywords: ["ai", "analysis", "triage", "scope gap", "opportunity"],
      phrases: ["ai claim analysis", "scope gap detection"],
      text: `${PLATFORM_AI.title}\n${PLATFORM_AI.description}\n\n${capabilityText}`,
    },
    {
      id: "platform:ai-workflow",
      source: "page:/platform/ai-claim-analysis",
      topics: ["ai", "ai_claim_analysis"],
      keywords: [
        "carrier estimate",
        "line item",
        "documentation",
        "supplement",
      ],
      phrases: ["what the ai reviews", "ai workflow"],
      text: `${AI_CLAIM_WORKFLOW.title}\n${AI_CLAIM_WORKFLOW.description}\n\n${workflowCards}`,
    },
    ...pageToChunks(aiClaimAnalysisPage, ["ai", "ai_claim_analysis"]),
  ];
}

export const CHAT_KNOWLEDGE_CHUNKS: readonly ChatKnowledgeChunk[] = [
  ...faqToChunks(FAQ_ITEMS),
  ...resultsInsightsToChunks(),
  ...pageToChunks(
    caseStudiesPage,
    ["results_insights"],
    [
      "results and insights",
      "case studies",
      "recovery patterns",
      "portfolio review",
      "trade recovery",
    ],
    ["results and insights", "case studies", "/case-studies"],
  ),
  ...blogToChunks(BLOG_POSTS),
  ...blogCategoryToChunks(),
  ...guideToChunks(CLAIM_GUIDES),
  ...guideCategoryToChunks(),
  ...pageToChunks(guidesPage, ["claim_guides", "documentation"], [
    "guides",
    "checklist",
    "playbook",
    "claim guides",
    "operational",
  ]),
  ...pageToChunks(pricingPage, ["pricing", "billing"], [
    "pricing",
    "fee",
    "cost",
    "charge",
    "rcv",
    "15%",
    "4%",
  ]),
  ...pageToChunks(billingPaymentsPage, ["billing", "pricing"], [
    "billing",
    "invoice",
    "payment",
    "rcv",
    "fee",
  ]),
  ...platformOverviewChunks(),
  ...platformAiChunks(),
  ...clientPortalChunks(),
  ...pageToChunks(
    claimTrackingPage,
    ["platform", "platform_security"],
    ["claim tracking", "pipeline", "claim status", "recovery metrics"],
    [
      "claim tracking",
      "track claim status",
      "how do i track claim status",
      "pipeline visibility",
    ],
  ),
  ...pageToChunks(
    communicationHubPage,
    ["platform", "platform_security"],
    ["communication hub", "messages", "correspondence", "claim communication"],
    [
      "communication hub",
      "how does the communication hub work",
      "claim messages",
    ],
  ),
  ...companyAndToolChunks(),
  ...aboutPageToChunks(),
  ...pricingPageToChunks(),
  ...partnerNetworkToChunks(),
  ...solutionPageChunks(
    roofingPage,
    {
      hero: ROOFING_HERO,
      segments: ROOFING_SEGMENTS,
      workflow: ROOFING_WORKFLOW,
    },
    ["roofing_claims", "contractor_fit"],
    ["roofing", "storm", "roof supplement"],
  ),
  ...solutionPageChunks(
    waterDamagePage,
    {
      hero: WATER_DAMAGE_HERO,
      segments: WATER_DAMAGE_SEGMENTS,
      workflow: WATER_DAMAGE_WORKFLOW,
    },
    ["water_damage_claims", "contractor_fit", "mitigation"],
    ["water", "mitigation", "restoration", "dry log"],
  ),
  ...solutionPageChunks(
    fireDamagePage,
    {
      hero: FIRE_DAMAGE_HERO,
      segments: FIRE_DAMAGE_SEGMENTS,
      workflow: FIRE_DAMAGE_WORKFLOW,
    },
    ["fire_damage_claims", "contractor_fit"],
    ["fire", "smoke", "soot"],
  ),
  ...solutionPageChunks(
    moldPage,
    {
      hero: MOLD_HERO,
      segments: MOLD_SEGMENTS,
      workflow: MOLD_WORKFLOW,
    },
    ["mold_claims", "contractor_fit"],
    ["mold", "remediation", "containment"],
  ),
  ...solutionPageChunks(
    contentsPage,
    {
      hero: CONTENTS_RESTORATION_HERO,
      segments: CONTENTS_RESTORATION_SEGMENTS,
      workflow: CONTENTS_RESTORATION_WORKFLOW,
    },
    ["contents_restoration", "contractor_fit"],
    ["contents", "inventory", "pack-out"],
  ),
];
