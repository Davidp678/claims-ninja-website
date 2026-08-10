/**
 * Results & Insights knowledge chunks for chatbot retrieval.
 * Sourced from case-studies-page.ts and marketing page metadata.
 */

import {
  CASE_STUDIES_COMMON_FINDINGS,
  CASE_STUDIES_HERO,
  CASE_STUDIES_PORTFOLIO,
  CASE_STUDIES_RECOVERY_EXAMPLES,
  CASE_STUDIES_RECOVERY_EXAMPLES_SECTION,
  CASE_STUDIES_TRADE_CARDS,
  CASE_STUDIES_TRADE_RESULTS,
} from "@/lib/case-studies-page";
import {
  getAllClaimRecoveryCaseStudies,
  getCaseStudyPath,
} from "@/lib/claim-recovery-case-studies";
import { caseStudiesPage } from "@/lib/marketing-pages";

type ResultsInsightsChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

function formatTradeCard(
  card: (typeof CASE_STUDIES_TRADE_CARDS)[number],
): string {
  return [
    `${card.title} — typical recovery improvement: ${card.recoveryRange}`,
    `Common findings: ${card.commonFindings.join("; ")}`,
    `Areas reviewed: ${card.areasReviewed.join("; ")}`,
    `Opportunities: ${card.opportunities.join("; ")}`,
  ].join("\n");
}

function formatCommonFindingCategory(
  category: (typeof CASE_STUDIES_COMMON_FINDINGS.categories)[number],
): string {
  return [
    `${category.title}: ${category.description}`,
    category.items.map((item) => `  - ${item}`).join("\n"),
  ].join("\n");
}

function formatRecoveryExample(
  example: (typeof CASE_STUDIES_RECOVERY_EXAMPLES)[number],
): string {
  return [
    example.title,
    `Carrier estimate: ${example.carrierEstimate}`,
    `Additional recovery: ${example.additionalRecovery}`,
    `Recovery increase: ${example.recoveryIncrease}`,
    `Key findings: ${example.keyFindings.join("; ")}`,
  ].join("\n");
}

export function resultsInsightsToChunks(): ResultsInsightsChunk[] {
  const tradeText = CASE_STUDIES_TRADE_CARDS.map(formatTradeCard).join("\n\n");

  const commonFindingsText = CASE_STUDIES_COMMON_FINDINGS.categories
    .map(formatCommonFindingCategory)
    .join("\n\n");

  const recoveryExamplesText = CASE_STUDIES_RECOVERY_EXAMPLES.map(
    formatRecoveryExample,
  ).join("\n\n");

  return [
    {
      id: "results-insights:page",
      source: "results & insights — page overview",
      topics: ["results_insights", "contractor_fit"],
      phrases: [
        "results and insights",
        "case studies",
        "recovery results",
        "what is the results and insights page",
      ],
      keywords: [
        "results and insights",
        "case studies",
        "recovery patterns",
        "industry intelligence",
        "/case-studies",
      ],
      text: [
        CASE_STUDIES_HERO.title,
        CASE_STUDIES_HERO.description,
        caseStudiesPage.metaDescription,
        `URL: ${caseStudiesPage.path}`,
      ].join("\n"),
    },
    {
      id: "results-insights:trade-results",
      source: "results & insights — recovery by trade",
      topics: [
        "results_insights",
        "roofing_claims",
        "water_damage_claims",
        "fire_damage_claims",
        "mold_claims",
        "contents_restoration",
        "contractor_fit",
      ],
      phrases: [
        "recovery results by trade",
        "roofing recovery",
        "mitigation recovery",
        "fire restoration recovery",
        "mold remediation recovery",
        "reconstruction recovery",
        "contents restoration recovery",
        "which trades see the largest recovery",
      ],
      keywords: [
        "roofing recovery",
        "mitigation recovery",
        "fire restoration recovery",
        "mold remediation recovery",
        "reconstruction recovery",
        "contents restoration recovery",
        "trade recovery",
        "recovery opportunities",
        "25%",
        "50%",
      ],
      text: [
        CASE_STUDIES_TRADE_RESULTS.title,
        CASE_STUDIES_TRADE_RESULTS.description,
        tradeText,
        `URL: ${caseStudiesPage.path}`,
      ].join("\n\n"),
    },
    {
      id: "results-insights:common-findings",
      source: "results & insights — common findings",
      topics: ["results_insights", "supplements", "documentation"],
      phrases: [
        "what we commonly find",
        "scope omissions",
        "code compliance gaps",
        "pricing discrepancies",
        "documentation opportunities",
        "o&p eligibility",
        "coordination costs",
        "what issues does claims ninja commonly find",
      ],
      keywords: [
        "scope omissions",
        "code compliance",
        "pricing discrepancies",
        "documentation deficiencies",
        "revenue leakage",
        "o&p",
        "overhead and profit",
        "coordination costs",
      ],
      text: [
        CASE_STUDIES_COMMON_FINDINGS.title,
        CASE_STUDIES_COMMON_FINDINGS.description,
        commonFindingsText,
        `URL: ${caseStudiesPage.path}`,
      ].join("\n\n"),
    },
    {
      id: "results-insights:portfolio-review",
      source: "results & insights — portfolio recovery review",
      topics: ["results_insights", "supplements", "contractor_fit"],
      phrases: [
        "portfolio recovery review",
        "book of business review",
        "claim portfolio analysis",
        "review an entire book of business",
        "portfolio of claims",
      ],
      keywords: [
        "portfolio recovery",
        "book of business",
        "claim portfolio",
        "revenue leakage",
        "estimate quality",
        "supplement frequency",
        "recovery percentages",
      ],
      text: [
        CASE_STUDIES_PORTFOLIO.title,
        CASE_STUDIES_PORTFOLIO.description,
        `What we analyze: ${CASE_STUDIES_PORTFOLIO.whatWeAnalyze.join("; ")}`,
        CASE_STUDIES_PORTFOLIO.typicalOutcome,
        `URL: ${caseStudiesPage.path}`,
      ].join("\n"),
    },
    {
      id: "results-insights:recovery-examples",
      source: "results & insights — representative recovery examples",
      topics: ["results_insights", "contractor_fit"],
      phrases: [
        "representative recovery",
        "commercial roofing portfolio",
        "multi-family water loss",
        "fire restoration project",
        "are the recovery examples based on real claims",
      ],
      keywords: [
        "representative recovery",
        "commercial roofing",
        "multi-family water",
        "recovery increase",
        "carrier estimate",
        "additional recovery",
      ],
      text: [
        CASE_STUDIES_RECOVERY_EXAMPLES_SECTION.title,
        CASE_STUDIES_RECOVERY_EXAMPLES_SECTION.description,
        recoveryExamplesText,
        "Across thousands of reviewed claims, contractors partnering with Claims Ninja have seen average recovery increases of approximately 40%.",
        `URL: ${caseStudiesPage.path}`,
      ].join("\n\n"),
    },
    ...getAllClaimRecoveryCaseStudies().map((study) => ({
      id: `results-insights:case-study:${study.slug}`,
      source: `results & insights — case study ${study.title}`,
      topics: ["results_insights", "contractor_fit"] as const,
      phrases: [
        study.title.toLowerCase(),
        study.lossType.toLowerCase(),
        `${study.lossType.toLowerCase()} recovery`,
        `${study.tradeFocus.toLowerCase()} case study`,
        "claim recovery case study",
        "recovery case study",
        "case study",
      ],
      keywords: [
        "case study",
        "anonymized",
        "benchmark",
        "recovery increase",
        "carrier estimate",
        "additional recovery",
        study.slug.replaceAll("-", " "),
      ],
      text: [
        study.title,
        study.summary,
        `Loss type: ${study.lossType}`,
        `Trade focus: ${study.tradeFocus}`,
        `Carrier estimate: ${study.carrierEstimate}`,
        `Additional recovery: ${study.additionalRecovery}`,
        `Recovery increase: ${study.recoveryIncrease}`,
        `Situation: ${study.situation}`,
        `Documentation gaps: ${study.documentationGaps.join("; ")}`,
        `Recovery approach: ${study.recoveryApproach.join("; ")}`,
        `Outcome: ${study.outcomeSummary}`,
        study.methodologyNote,
        `URL: ${getCaseStudyPath(study.slug)}`,
      ].join("\n"),
    })),
  ];
}
