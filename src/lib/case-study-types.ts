/**
 * Anonymized Claim Recovery Case Study model.
 *
 * Only publish studies backed by approved, anonymized outcomes already
 * represented in Results & Insights. Do not invent customers, claim numbers,
 * or recovery amounts.
 */

export type CaseStudyRelatedLink = {
  label: string;
  href: string;
};

export type ClaimRecoveryCaseStudy = {
  /** URL slug under /case-studies/[slug] */
  slug: string;
  /** Matches CASE_STUDIES_RECOVERY_EXAMPLES id on the hub when applicable */
  hubExampleId?: string;
  title: string;
  /** Short hub card summary */
  summary: string;
  seoTitle: string;
  seoDescription: string;
  /** Loss / trade framing (anonymized) */
  lossType: string;
  tradeFocus: string;
  carrierEstimate: string;
  additionalRecovery: string;
  recoveryIncrease: string;
  keyFindings: readonly string[];
  /** Structured narrative sections — only use approved facts */
  situation: string;
  documentationGaps: readonly string[];
  recoveryApproach: readonly string[];
  outcomeSummary: string;
  methodologyNote: string;
  relatedSolutionPaths: readonly CaseStudyRelatedLink[];
  relatedGuidePaths: readonly CaseStudyRelatedLink[];
  relatedBlogSlugs: readonly string[];
  publishedAt: string;
  updatedAt?: string;
};
