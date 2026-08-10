import type { ClaimRecoveryCaseStudy } from "@/lib/case-study-types";
import {
  CASE_STUDIES_RECOVERY_EXAMPLES,
  CASE_STUDIES_TRADE_CARDS,
} from "@/lib/case-studies-page";

const METHODOLOGY_NOTE =
  "Representative, anonymized benchmark from reviewed claims. Outcomes vary by carrier, documentation quality, policy terms, and loss conditions. Figures illustrate recovery patterns — not a guarantee for any individual file.";

const ROOFING_TRADE = CASE_STUDIES_TRADE_CARDS.find((card) => card.id === "roofing")!;
const WATER_TRADE = CASE_STUDIES_TRADE_CARDS.find(
  (card) => card.id === "water-mitigation",
)!;
const FIRE_TRADE = CASE_STUDIES_TRADE_CARDS.find(
  (card) => card.id === "fire-restoration",
)!;

const COMMERCIAL = CASE_STUDIES_RECOVERY_EXAMPLES[0];
const MULTI_FAMILY = CASE_STUDIES_RECOVERY_EXAMPLES[1];
const FIRE = CASE_STUDIES_RECOVERY_EXAMPLES[2];

/**
 * Detail pages for the existing anonymized recovery examples on Results & Insights.
 * Dollar figures, findings, and review focus areas are sourced only from
 * CASE_STUDIES_RECOVERY_EXAMPLES and CASE_STUDIES_TRADE_CARDS.
 */
export const CLAIM_RECOVERY_CASE_STUDIES: readonly ClaimRecoveryCaseStudy[] = [
  {
    slug: "commercial-roofing-portfolio",
    hubExampleId: COMMERCIAL.id,
    title: `${COMMERCIAL.title} Recovery Review`,
    summary:
      "Anonymized commercial roofing portfolio benchmark from Results & Insights: carrier estimate, additional recovery identified, and documented finding areas.",
    seoTitle: "Commercial Roofing Portfolio Case Study | Results & Insights",
    seoDescription:
      "Anonymized commercial roofing claim recovery example: carrier estimate, additional recovery identified, key documentation gaps, and related roofing resources.",
    lossType: COMMERCIAL.title,
    tradeFocus: ROOFING_TRADE.title,
    carrierEstimate: COMMERCIAL.carrierEstimate,
    additionalRecovery: COMMERCIAL.additionalRecovery,
    recoveryIncrease: COMMERCIAL.recoveryIncrease,
    keyFindings: COMMERCIAL.keyFindings,
    situation:
      "This representative Results & Insights example covers a commercial roofing portfolio review. Published figures and findings are anonymized benchmarks from reviewed claims — not a named customer story.",
    documentationGaps: COMMERCIAL.keyFindings,
    recoveryApproach: ROOFING_TRADE.areasReviewed.map(
      (area) => `Areas commonly reviewed on roofing files: ${area}`,
    ),
    outcomeSummary:
      `Published benchmark: carrier estimate ${COMMERCIAL.carrierEstimate}; additional recovery identified ${COMMERCIAL.additionalRecovery}; recovery increase ${COMMERCIAL.recoveryIncrease}. Key findings match the Results & Insights hub example.`,
    methodologyNote: METHODOLOGY_NOTE,
    relatedSolutionPaths: [
      { label: "Roofing claims", href: "/solutions/roofing" },
      { label: "Commercial claims", href: "/solutions/commercial" },
    ],
    relatedGuidePaths: [
      {
        label: "Commercial roofing documentation guide",
        href: "/resources/guides/roofing-claims/commercial-roofing-documentation-guide",
      },
      {
        label: "Insurance Estimate Review & Scope Validation Guide",
        href: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
      },
    ],
    relatedBlogSlugs: [
      "roofing-supplement-playbook",
      "hail-damage-roof-claims-documentation-supplement",
      "how-to-choose-insurance-supplementing-partner",
    ],
    publishedAt: "2026-08-10",
  },
  {
    slug: "multi-family-water-loss",
    hubExampleId: MULTI_FAMILY.id,
    title: `${MULTI_FAMILY.title} Recovery Review`,
    summary:
      "Anonymized multi-family water loss benchmark from Results & Insights: carrier estimate, additional recovery identified, and documented finding areas.",
    seoTitle: "Multi-Family Water Loss Case Study | Results & Insights",
    seoDescription:
      "Anonymized multi-family water claim recovery example: carrier estimate, additional recovery, mitigation documentation gaps, and related water resources.",
    lossType: MULTI_FAMILY.title,
    tradeFocus: WATER_TRADE.title,
    carrierEstimate: MULTI_FAMILY.carrierEstimate,
    additionalRecovery: MULTI_FAMILY.additionalRecovery,
    recoveryIncrease: MULTI_FAMILY.recoveryIncrease,
    keyFindings: MULTI_FAMILY.keyFindings,
    situation:
      "This representative Results & Insights example covers a multi-family water loss review. Published figures and findings are anonymized benchmarks from reviewed claims — not a named customer story.",
    documentationGaps: MULTI_FAMILY.keyFindings,
    recoveryApproach: WATER_TRADE.areasReviewed.map(
      (area) => `Areas commonly reviewed on water mitigation files: ${area}`,
    ),
    outcomeSummary:
      `Published benchmark: carrier estimate ${MULTI_FAMILY.carrierEstimate}; additional recovery identified ${MULTI_FAMILY.additionalRecovery}; recovery increase ${MULTI_FAMILY.recoveryIncrease}. Key findings match the Results & Insights hub example.`,
    methodologyNote: METHODOLOGY_NOTE,
    relatedSolutionPaths: [
      { label: "Water damage claims", href: "/solutions/water-damage" },
      { label: "Commercial claims", href: "/solutions/commercial" },
    ],
    relatedGuidePaths: [
      {
        label: "Dry log collection guide",
        href: "/resources/guides/water-damage/dry-log-collection-guide",
      },
      {
        label: "Missing Line Item Documentation Guide for Contractors",
        href: "/resources/guides/general-claims/missing-line-item-documentation-guide-for-contractors",
      },
    ],
    relatedBlogSlugs: [
      "water-damage-mitigation-supplement-playbook",
      "multifamily-water-claims-that-get-underpaid",
      "how-to-choose-insurance-supplementing-partner",
    ],
    publishedAt: "2026-08-10",
  },
  {
    slug: "fire-restoration-project",
    hubExampleId: FIRE.id,
    title: `${FIRE.title} Recovery Review`,
    summary:
      "Anonymized fire restoration benchmark from Results & Insights: carrier estimate, additional recovery identified, and documented finding areas.",
    seoTitle: "Fire Restoration Case Study | Results & Insights",
    seoDescription:
      "Anonymized fire restoration claim recovery example: carrier estimate, additional recovery, smoke and rebuild documentation gaps, and related fire resources.",
    lossType: FIRE.title,
    tradeFocus: FIRE_TRADE.title,
    carrierEstimate: FIRE.carrierEstimate,
    additionalRecovery: FIRE.additionalRecovery,
    recoveryIncrease: FIRE.recoveryIncrease,
    keyFindings: FIRE.keyFindings,
    situation:
      "This representative Results & Insights example covers a fire restoration project review. Published figures and findings are anonymized benchmarks from reviewed claims — not a named customer story.",
    documentationGaps: FIRE.keyFindings,
    recoveryApproach: FIRE_TRADE.areasReviewed.map(
      (area) => `Areas commonly reviewed on fire restoration files: ${area}`,
    ),
    outcomeSummary:
      `Published benchmark: carrier estimate ${FIRE.carrierEstimate}; additional recovery identified ${FIRE.additionalRecovery}; recovery increase ${FIRE.recoveryIncrease}. Key findings match the Results & Insights hub example.`,
    methodologyNote: METHODOLOGY_NOTE,
    relatedSolutionPaths: [
      { label: "Fire damage claims", href: "/solutions/fire-damage" },
      { label: "Contents restoration", href: "/solutions/contents" },
    ],
    relatedGuidePaths: [
      {
        label: "Fire damage supplement playbook",
        href: "/resources/guides/fire-damage/fire-damage-supplement-playbook-for-contractors",
      },
      {
        label: "Insurance Estimate Review & Scope Validation Guide",
        href: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
      },
    ],
    relatedBlogSlugs: [
      "why-carrier-estimates-miss-required-trades",
      "fire-damage-supplement-playbook-for-contractors",
      "smoke-and-soot-damage-documentation-guide",
      "how-to-choose-insurance-supplementing-partner",
    ],
    publishedAt: "2026-08-10",
  },
] as const;

export const CASE_STUDY_BASE_PATH = "/case-studies" as const;

export function getCaseStudyPath(slug: string): string {
  return `${CASE_STUDY_BASE_PATH}/${slug}`;
}

export function getAllClaimRecoveryCaseStudies(): readonly ClaimRecoveryCaseStudy[] {
  return CLAIM_RECOVERY_CASE_STUDIES;
}

export function getClaimRecoveryCaseStudyBySlug(
  slug: string,
): ClaimRecoveryCaseStudy | undefined {
  return CLAIM_RECOVERY_CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllClaimRecoveryCaseStudySlugs(): readonly string[] {
  return CLAIM_RECOVERY_CASE_STUDIES.map((study) => study.slug);
}

export function getClaimRecoveryCaseStudyByHubExampleId(
  hubExampleId: string,
): ClaimRecoveryCaseStudy | undefined {
  return CLAIM_RECOVERY_CASE_STUDIES.find(
    (study) => study.hubExampleId === hubExampleId,
  );
}
