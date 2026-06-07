/**
 * About page knowledge chunks for chatbot retrieval.
 * Sourced from about-page.ts and marketing page metadata.
 */

import {
  ABOUT_AUDIENCE,
  ABOUT_BELIEFS,
  ABOUT_HERO,
  ABOUT_JOURNEY,
  ABOUT_META,
  ABOUT_PARTNERSHIP,
  ABOUT_VALUES,
  ABOUT_WHY_WE_EXIST,
} from "@/lib/about-page";
import { aboutPage } from "@/lib/marketing-pages";

type AboutChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

export function aboutPageToChunks(): AboutChunk[] {
  const beliefText = ABOUT_BELIEFS.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");

  const audienceText = ABOUT_AUDIENCE.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");

  const journeyText = ABOUT_JOURNEY.steps
    .map((step) => `${step.label} — ${step.title}: ${step.description}`)
    .join("\n");

  const valuesText = ABOUT_VALUES.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");

  return [
    {
      id: "about:page",
      source: "about — page overview",
      topics: ["how_it_works", "onboarding", "contractor_fit"],
      phrases: [
        "about claims ninja",
        "who is claims ninja",
        "what is claims ninja",
        "company story",
        "why does claims ninja exist",
      ],
      keywords: [
        "about",
        "contractor",
        "partnership",
        "claims operations",
        "insurance claim support",
        "claims management platform",
        "/about",
      ],
      text: [
        ABOUT_HERO.title,
        ...ABOUT_HERO.paragraphs,
        aboutPage.metaDescription,
        `URL: ${ABOUT_META.path}`,
      ].join("\n"),
    },
    {
      id: "about:why-we-exist",
      source: "about — why we exist",
      topics: ["how_it_works", "onboarding", "contractor_fit"],
      phrases: [
        "why does claims ninja exist",
        "in-house claims department",
        "claims operation at scale",
        "operational complexity",
      ],
      keywords: [
        "claims department",
        "documentation",
        "supplements",
        "carrier communication",
        "workflow management",
        "claim tracking",
      ],
      text: [
        ABOUT_WHY_WE_EXIST.title,
        ...ABOUT_WHY_WE_EXIST.paragraphs,
        ABOUT_WHY_WE_EXIST.closing,
        `Operational demands: ${ABOUT_WHY_WE_EXIST.complexityItems.join("; ")}`,
        `URL: ${ABOUT_META.path}`,
      ].join("\n"),
    },
    {
      id: "about:beliefs",
      source: "about — what we believe",
      topics: ["how_it_works", "contractor_fit"],
      phrases: [
        "what does claims ninja believe",
        "company values",
        "technology and experts",
      ],
      keywords: [
        "process",
        "predictable outcomes",
        "technology",
        "expert support",
        "paid for work performed",
      ],
      text: [ABOUT_BELIEFS.title, beliefText, `URL: ${ABOUT_META.path}`].join(
        "\n\n",
      ),
    },
    {
      id: "about:audience",
      source: "about — who we serve",
      topics: [
        "how_it_works",
        "contractor_fit",
        "roofing_claims",
        "water_damage_claims",
        "fire_damage_claims",
        "mold_claims",
        "contents_restoration",
      ],
      phrases: [
        "who does claims ninja serve",
        "who is claims ninja for",
        "restoration contractors",
        "roofing contractors",
        "multi-location operators",
      ],
      keywords: [
        "roofing",
        "mitigation",
        "fire restoration",
        "mold remediation",
        "reconstruction",
        "contents restoration",
        "growing restoration",
      ],
      text: [
        ABOUT_AUDIENCE.title,
        ABOUT_AUDIENCE.description,
        audienceText,
        `URL: ${ABOUT_META.path}`,
      ].join("\n\n"),
    },
    {
      id: "about:journey",
      source: "about — our journey",
      topics: ["how_it_works", "platform"],
      phrases: [
        "claims ninja history",
        "when was claims ninja founded",
        "claims operations platform",
        "where is claims ninja going",
      ],
      keywords: [
        "2024",
        "2025",
        "claims operations platform",
        "claims intelligence",
        "platform roadmap",
      ],
      text: [
        ABOUT_JOURNEY.title,
        journeyText,
        `URL: ${ABOUT_META.path}`,
      ].join("\n\n"),
    },
    {
      id: "about:values",
      source: "about — mission vision approach impact",
      topics: ["how_it_works", "onboarding"],
      phrases: [
        "claims ninja mission",
        "claims ninja vision",
        "supplementing company",
        "long-term partnership",
      ],
      keywords: [
        "mission",
        "vision",
        "approach",
        "impact",
        "partnership",
        "supplement vendor",
      ],
      text: [
        ABOUT_VALUES.title,
        valuesText,
        ABOUT_PARTNERSHIP.title,
        ...ABOUT_PARTNERSHIP.paragraphs,
        `URL: ${ABOUT_META.path}`,
      ].join("\n"),
    },
  ];
}
