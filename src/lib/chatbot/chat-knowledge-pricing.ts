/**
 * Pricing page knowledge chunks for chatbot retrieval.
 * Sourced from pricing-page.ts and marketing page metadata.
 */

import {
  PRICING_ADDITIONAL_SERVICES,
  PRICING_BILLING,
  PRICING_ESTIMATE_WRITING,
  PRICING_HERO,
  PRICING_META,
  PRICING_NEGOTIATION,
  PRICING_OVERVIEW,
  PRICING_SUPPLEMENT,
} from "@/lib/pricing-page";

type PricingChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

function formatRateRows(
  rows: readonly { range: string; rate: string }[],
): string {
  return rows.map((row) => `• ${row.range}: ${row.rate}`).join("\n");
}

export function pricingPageToChunks(): PricingChunk[] {
  const overviewText = PRICING_OVERVIEW.cards
    .map((card) => `• ${card.title}: ${card.description}`)
    .join("\n");

  const billingStepsText = PRICING_BILLING.steps
    .map((step) => `${step.label}. ${step.title}: ${step.description}`)
    .join("\n");

  const additionalServicesText = PRICING_ADDITIONAL_SERVICES.services
    .map((service) => `• ${service.title}: ${service.description}`)
    .join("\n");

  return [
    {
      id: "pricing:overview",
      source: "pricing — page overview",
      topics: ["pricing", "billing"],
      phrases: [
        "how much does claims ninja cost",
        "claims ninja pricing",
        "transparent pricing",
        "pricing for claim operations",
        "how are fees structured",
      ],
      keywords: [
        "pricing",
        "estimate writing",
        "supplement support",
        "insurance negotiation",
        "advanced claim support",
        "/pricing",
      ],
      text: [
        PRICING_HERO.title,
        PRICING_HERO.description,
        PRICING_OVERVIEW.title,
        overviewText,
        PRICING_META.metaDescription,
        `URL: ${PRICING_META.path}`,
      ].join("\n"),
    },
    {
      id: "pricing:estimate-writing",
      source: "pricing — estimate writing rates",
      topics: ["pricing", "billing"],
      phrases: [
        "how much does estimate writing cost",
        "estimate writing fee",
        "minimum estimate writing fee",
        "estimate writing rates",
        "how are estimate writing fees calculated",
      ],
      keywords: [
        "$100",
        "100 minimum",
        "1.25%",
        "0.75%",
        "0.50%",
        "12500",
        "estimate value",
        "estimate writing",
      ],
      text: [
        PRICING_ESTIMATE_WRITING.title,
        PRICING_ESTIMATE_WRITING.intro,
        formatRateRows(PRICING_ESTIMATE_WRITING.rows),
        PRICING_ESTIMATE_WRITING.invoiceNote,
        `URL: ${PRICING_META.path}`,
      ].join("\n"),
    },
    {
      id: "pricing:negotiation-supplements",
      source: "pricing — negotiation and supplement rates",
      topics: ["pricing", "billing", "supplements"],
      phrases: [
        "what does claims ninja charge for negotiation",
        "negotiation fee",
        "supplement cost",
        "what do supplements cost",
        "when does 15% apply",
        "when does 4% rcv apply",
        "minimum negotiation fee",
      ],
      keywords: [
        "15%",
        "4%",
        "rcv",
        "$150",
        "150 minimum",
        "documented settlement increase",
        "carrier estimate",
        "supplement",
        "approved increase",
      ],
      text: [
        PRICING_NEGOTIATION.title,
        formatRateRows(PRICING_NEGOTIATION.rows),
        PRICING_NEGOTIATION.invoiceNote,
        PRICING_SUPPLEMENT.title,
        formatRateRows(PRICING_SUPPLEMENT.rows),
        PRICING_SUPPLEMENT.invoiceNote,
        `URL: ${PRICING_META.path}`,
      ].join("\n"),
    },
    {
      id: "pricing:additional-services",
      source: "pricing — additional services and payment processing",
      topics: ["pricing", "billing"],
      phrases: [
        "appraisal services cost",
        "what do appraisal services cost",
        "eagleview report cost",
        "what does an eagleview report cost",
        "credit card fee",
        "are there credit card fees",
        "is ach free",
        "payment processing fee",
      ],
      keywords: [
        "appraisal",
        "$500",
        "$1200",
        "eagleview",
        "$60",
        "ach",
        "credit card",
        "3%",
        "convenience fee",
      ],
      text: [
        PRICING_ADDITIONAL_SERVICES.title,
        additionalServicesText,
        `URL: ${PRICING_META.path}`,
      ].join("\n"),
    },
    {
      id: "pricing:billing-process",
      source: "pricing — billing process",
      topics: ["billing", "pricing"],
      phrases: [
        "when are invoices due",
        "when do i get billed",
        "how does billing work",
        "when are fees invoiced",
        "invoice due",
      ],
      keywords: [
        "invoice",
        "immediately",
        "approval",
        "client portal",
        "payment processed",
        "billing",
      ],
      text: [
        PRICING_BILLING.title,
        PRICING_BILLING.description,
        billingStepsText,
        `URL: ${PRICING_META.path}`,
      ].join("\n"),
    },
  ];
}
