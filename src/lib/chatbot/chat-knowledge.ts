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
import { resultsInsightsToChunks } from "./chat-knowledge-results-insights";
import { AI_CLAIM_WORKFLOW } from "@/lib/ai-claim-analysis-page";
import { CLAIM_GUIDES } from "@/lib/guides";
import {
  CLIENT_PORTAL_CAPABILITIES,
  CLIENT_PORTAL_HERO,
  CLIENT_PORTAL_WORKFLOW,
} from "@/lib/client-portal-page";
import { CONTENTS_RESTORATION_HERO, CONTENTS_RESTORATION_SEGMENTS, CONTENTS_RESTORATION_WORKFLOW } from "@/lib/contents-restoration-page";
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
  contactPage,
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

function faqToChunks(items: readonly FaqItem[]): ChatKnowledgeChunk[] {
  return items.map((item) => {
    const categoryTitle = getCategoryTitle(item.category);
    const aliases = TOPIC_ALIASES[item.category] ?? [];
    return {
      id: `faq:${item.id}`,
      source: `faq — ${categoryTitle}`,
      topics: [item.category, ...aliases],
      phrases: questionPhrases(item.question),
      keywords: [
        ...aliases,
        ...item.question
          .toLowerCase()
          .split(/\s+/)
          .filter((w) => w.length >= 4),
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
        contactPage.title,
        contactPage.description,
        `Phone: ${SITE.phone}`,
        `Email: ${SITE.email}`,
        contactPage.features
          .map((feature) => `• ${feature.title}: ${feature.description}`)
          .join("\n"),
        `URL: ${contactPage.path}`,
      ].join("\n"),
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
