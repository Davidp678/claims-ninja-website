import {
  GUIDE_CATEGORY_REGISTRY,
  getGuideCategoryBySlug,
  getGuideCategoryMeta,
  getGuideCategoryName,
  getGuideCategoryPath,
  getAllGuideCategorySlugs,
  GUIDE_CATEGORY_BASE_PATH,
  type GuideCategorySlug,
} from "@/lib/guide-categories";
import {
  getAllGuides,
  getAllGuidePathParams,
  getFeaturedGuides,
  getGuideBySlug,
  getGuideCount,
  getGuidesByCategory,
  getGuidesByPhase,
  getGuidesByRole,
  getGuidesByType,
  getGuidesForCategoryPreview,
  getRecommendedGuides,
} from "@/lib/guide-registry";
import {
  resolveRelatedBlogs,
  resolveRelatedGuides,
} from "@/lib/guide-related";

export { GUIDE_CATEGORY_REGISTRY as GUIDE_CATEGORIES };
export type { GuideCategorySlug };
export {
  getAllGuides,
  getAllGuidePathParams,
  getGuideBySlug,
  getFeaturedGuides,
  getRecommendedGuides,
  getGuidesByCategory,
  getGuidesByRole,
  getGuidesByPhase,
  getGuidesByType,
  getGuideCount,
  getGuidesForCategoryPreview,
  resolveRelatedGuides,
  resolveRelatedBlogs,
  getGuideCategoryBySlug,
  getGuideCategoryName,
  getGuideCategoryPath,
  getGuideCategoryMeta,
  getAllGuideCategorySlugs,
  GUIDE_CATEGORY_BASE_PATH,
};

export const GUIDE_BASE_PATH = "/resources/guides" as const;

export const GUIDE_META = {
  path: GUIDE_BASE_PATH,
  metaTitle: "Claim Guides",
  metaDescription:
    "Operational claim guides for contractors: checklists, workflows, documentation standards, and field procedures for supplement-ready claim files.",
} as const;

export const GUIDE_HERO = {
  eyebrow: "Operational Resources",
  title: "Claim Guides for Field & Office Teams",
  description:
    "Checklists, workflows, and documentation standards built for restoration and roofing teams — not articles, but field-ready operating procedures.",
} as const;

export const GUIDE_FEATURED_SECTION = {
  eyebrow: "Essential playbooks",
  title: "Start here",
  description:
    "Pinned operational guides every contractor team should have in their claim workflow.",
} as const;

export const GUIDE_ROLE_SECTION = {
  eyebrow: "Quick start",
  title: "Guides by role",
  description: "Jump to the playbooks most relevant to your position on the claim file.",
} as const;

export const GUIDE_CATEGORY_SECTION = {
  eyebrow: "By discipline",
  title: "Browse by category",
  description: "Operational guides organized by claim type and restoration discipline.",
} as const;

export const GUIDE_PHASE_SECTION = {
  eyebrow: "By workflow",
  title: "Browse by claim phase",
  description: "Find the right guide based on where you are in the claim lifecycle.",
} as const;

export const GUIDE_CATEGORY_HUB_RELATED = {
  eyebrow: "Learn the strategy",
  title: "Related education",
  description: "Articles that explain why these procedures matter and how carriers evaluate them.",
} as const;

export const GUIDE_DETAIL_CTA = {
  eyebrow: "Partner with Claims Ninja",
  title: "Need help executing on your next claim?",
  description:
    "Get a free claim review. We assess scope gaps, documentation, and supplement opportunities — then outline a recovery plan aligned with your operation.",
} as const;

export const GUIDE_HUB_CTA = {
  eyebrow: "Put these playbooks to work",
  title: "Start with a free claim review",
  description:
    "Tell us about your operation. We'll assess your claim workflow, identify recovery opportunities, and outline how outsourced supplementing fits your team.",
} as const;

export const GUIDE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export const GUIDE_ANCHOR_SCROLL_CLASS =
  "scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32";

export const GUIDE_TYPE_LABELS: Record<
  import("@/lib/guide-types").GuideType,
  string
> = {
  checklist: "Checklist",
  workflow: "Workflow",
  "documentation-standard": "Documentation Standard",
  "field-procedure": "Field Procedure",
};

export const GUIDE_ROLE_LABELS: Record<
  import("@/lib/guide-types").GuideRole,
  string
> = {
  field: "Field",
  office: "Office",
  "supplement-coordinator": "Supplement Coordinator",
  "project-manager": "Project Manager",
};

export const CLAIM_PHASE_LABELS: Record<
  import("@/lib/guide-types").ClaimPhase,
  string
> = {
  intake: "Intake",
  mitigation: "Mitigation",
  documentation: "Documentation",
  supplement: "Supplement",
  negotiation: "Negotiation",
  closeout: "Closeout",
};

export const GUIDE_ROLES = [
  "field",
  "office",
  "supplement-coordinator",
  "project-manager",
] as const satisfies readonly import("@/lib/guide-types").GuideRole[];

export const GUIDE_TYPES = [
  "checklist",
  "workflow",
  "documentation-standard",
  "field-procedure",
] as const satisfies readonly import("@/lib/guide-types").GuideType[];

export const CLAIM_PHASES = [
  "intake",
  "mitigation",
  "documentation",
  "supplement",
  "negotiation",
  "closeout",
] as const satisfies readonly import("@/lib/guide-types").ClaimPhase[];

export function formatGuideDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getGuidePath(category: GuideCategorySlug, slug: string): string {
  return `${GUIDE_BASE_PATH}/${category}/${slug}`;
}

export function getGuidePathForGuide(guide: { category: GuideCategorySlug; slug: string }): string {
  return getGuidePath(guide.category, guide.slug);
}
