import type { GuideCategorySlug } from "@/lib/guide-categories";

export type GuideType =
  | "checklist"
  | "workflow"
  | "documentation-standard"
  | "field-procedure";

export type GuideRole =
  | "field"
  | "office"
  | "supplement-coordinator"
  | "project-manager";

export type ClaimPhase =
  | "intake"
  | "mitigation"
  | "documentation"
  | "supplement"
  | "negotiation"
  | "closeout";

export type GuideInlineLink = {
  label: string;
  href: string;
};

export type GuideTrigger = {
  condition: string;
  signal?: string;
};

export type ChecklistItem = {
  id: string;
  label: string;
  required: boolean;
  detail?: string;
};

export type GuideStep = {
  id: string;
  title: string;
  actions: string[];
  notes?: string;
  owner?: GuideRole;
};

export type GuideMistake = {
  mistake: string;
  impact: string;
  correction: string;
};

export type GuideSupplementOpportunity = {
  trigger: string;
  documentation: string;
  lineItemHint?: string;
};

export type GuideInlineFaq = {
  question: string;
  answer: string;
};

export type GuideAssets = {
  pdf?: {
    path: string;
    filename: string;
    version: string;
    generatedAt?: string;
  };
  template?: {
    path: string;
    label: string;
  };
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: GuideCategorySlug;
  guideType: GuideType;
  roles: readonly GuideRole[];
  claimPhase: ClaimPhase;
  tags: readonly string[];
  publishedAt: string;
  updatedAt?: string;
  estimatedMinutes: number;
  featured?: boolean;
  recommended?: boolean;
  seoTitle: string;
  seoDescription: string;
  relatedGuideSlugs: readonly string[];
  relatedBlogSlugs: readonly string[];
  relatedSolutionPath?: string;
  claimTypes?: readonly string[];
  purpose: string;
  whenToUse: readonly GuideTrigger[];
  prerequisites?: readonly string[];
  requiredDocumentation: readonly ChecklistItem[];
  steps: readonly GuideStep[];
  qualityGates?: readonly ChecklistItem[];
  commonMistakes: readonly GuideMistake[];
  supplementOpportunities?: readonly GuideSupplementOpportunity[];
  relatedResources?: readonly GuideInlineLink[];
  faq?: readonly GuideInlineFaq[];
  faqIds?: readonly string[];
  assets?: GuideAssets;
};
