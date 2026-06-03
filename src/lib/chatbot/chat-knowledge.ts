/**
 * Chatbot knowledge chunks built from approved site content.
 * Update source files (faq-data.ts, marketing-pages.ts, etc.) — chunks rebuild on deploy.
 */

import type { FaqItem } from "@/lib/faq-page";
import { getCategoryTitle } from "@/lib/faq-page";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { AI_CLAIM_WORKFLOW } from "@/lib/ai-claim-analysis-page";
import type { MarketingPageConfig } from "@/lib/marketing-pages";
import {
  aboutPage,
  aiClaimAnalysisPage,
  billingPaymentsPage,
  contentsPage,
  fireDamagePage,
  moldPage,
  platformOverviewPage,
  pricingPage,
  roofingPage,
  waterDamagePage,
} from "@/lib/marketing-pages";
import {
  PLATFORM_AI,
  PLATFORM_HERO,
  PLATFORM_PILLARS,
} from "@/lib/platform-overview";

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
): ChatKnowledgeChunk[] {
  const featureText = page.features
    .map((f) => `• ${f.title}: ${f.description}`)
    .join("\n");

  const summary = [
    `${page.title}`,
    page.description,
    featureText ? `\n${featureText}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return [
    {
      id: `page:${page.path}`,
      source: `page:${page.path}`,
      topics,
      keywords: keywords ?? topics,
      phrases: [page.title.toLowerCase(), page.eyebrow.toLowerCase()],
      text: summary,
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
  ...pageToChunks(aboutPage, ["how_it_works", "onboarding"], [
    "about",
    "contractor",
    "partnership",
  ]),
  ...pageToChunks(roofingPage, ["roofing_claims", "contractor_fit"], [
    "roofing",
    "storm",
  ]),
  ...pageToChunks(waterDamagePage, ["water_damage_claims", "contractor_fit"], [
    "water",
    "mitigation",
    "restoration",
  ]),
  ...pageToChunks(fireDamagePage, ["fire_damage_claims", "contractor_fit"], [
    "fire",
    "smoke",
  ]),
  ...pageToChunks(moldPage, ["mold_claims", "contractor_fit"], ["mold"]),
  ...pageToChunks(contentsPage, ["contents_restoration", "contractor_fit"], [
    "contents",
    "inventory",
  ]),
];
