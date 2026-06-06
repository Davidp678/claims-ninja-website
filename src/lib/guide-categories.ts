import type { BlogCategorySlug } from "@/lib/blog-categories";
import { getGuidesByCategory } from "@/lib/guide-registry";

export type GuideCategorySlug =
  | "general-claims"
  | "roofing-claims"
  | "water-damage"
  | "fire-damage"
  | "exterior-restoration";

export type GuideCategory = {
  slug: GuideCategorySlug;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  relatedBlogCategories: readonly BlogCategorySlug[];
  relatedSolutionPath?: string;
};

export const GUIDE_CATEGORY_BASE_PATH = "/resources/guides" as const;

export const GUIDE_CATEGORY_REGISTRY: readonly GuideCategory[] = [
  {
    slug: "general-claims",
    name: "General Claims",
    description:
      "Cross-loss operational workflows: intake, file audit, supplement submission, carrier review, O&P, and documentation standards.",
    metaTitle: "General Claims Guides",
    metaDescription:
      "Operational claim guides for contractors: intake checklists, supplement submission, carrier estimate review, O&P qualification, and documentation standards.",
    relatedBlogCategories: [
      "insurance-supplementing",
      "claim-documentation",
      "insurance-estimating",
      "claim-recovery",
    ],
  },
  {
    slug: "roofing-claims",
    name: "Roofing Claims",
    description:
      "Roof-specific field and office procedures: supplements, documentation, reinspection, code upgrades, and steep/high work.",
    metaTitle: "Roofing Claims Guides",
    metaDescription:
      "Roofing claim operation guides: supplement checklists, documentation standards, reinspection prep, code upgrades, and steep/high documentation.",
    relatedBlogCategories: ["roofing-claims", "claim-documentation"],
    relatedSolutionPath: "/solutions/roofing",
  },
  {
    slug: "water-damage",
    name: "Water Damage",
    description:
      "Mitigation and drying operations: dry logs, moisture mapping, equipment, monitoring, and IICRC category/class documentation.",
    metaTitle: "Water Damage Guides",
    metaDescription:
      "Water damage mitigation guides: intake checklists, dry logs, moisture mapping, equipment documentation, daily monitoring, and category/class standards.",
    relatedBlogCategories: ["water-damage-claims", "claim-documentation"],
    relatedSolutionPath: "/solutions/water-damage",
  },
  {
    slug: "fire-damage",
    name: "Fire Damage",
    description:
      "Fire and smoke restoration procedures: intake, smoke/HVAC/odor/contents documentation, and structural stabilization.",
    metaTitle: "Fire Damage Guides",
    metaDescription:
      "Fire damage restoration guides: claim intake, smoke documentation, HVAC contamination, odor documentation, and contents handling.",
    relatedBlogCategories: ["fire-damage-claims", "claim-documentation"],
    relatedSolutionPath: "/solutions/fire-damage",
  },
  {
    slug: "exterior-restoration",
    name: "Exterior Restoration",
    description:
      "Non-roof exterior scope: siding, envelope, and window and door replacement documentation.",
    metaTitle: "Exterior Restoration Guides",
    metaDescription:
      "Exterior restoration claim guides: siding and envelope documentation and window and door replacement procedures for supplement-ready files.",
    relatedBlogCategories: ["roofing-claims", "claim-recovery"],
  },
] as const;

export function getGuideCategoryBySlug(slug: GuideCategorySlug): GuideCategory {
  const category = GUIDE_CATEGORY_REGISTRY.find((entry) => entry.slug === slug);
  if (!category) {
    throw new Error(`Unknown guide category: ${slug}`);
  }
  return category;
}

export function getGuideCategoryName(slug: GuideCategorySlug): string {
  return getGuideCategoryBySlug(slug).name;
}

export function getAllGuideCategorySlugs(): GuideCategorySlug[] {
  return GUIDE_CATEGORY_REGISTRY.map((category) => category.slug);
}

export function getGuideCategoryPath(slug: GuideCategorySlug): string {
  return `${GUIDE_CATEGORY_BASE_PATH}/${slug}`;
}

export function getGuideCategoryMeta(slug: GuideCategorySlug) {
  const category = getGuideCategoryBySlug(slug);
  return {
    path: getGuideCategoryPath(slug),
    metaTitle: category.metaTitle,
    metaDescription: category.metaDescription,
  };
}

export function isGuideCategorySlug(slug: string): slug is GuideCategorySlug {
  return GUIDE_CATEGORY_REGISTRY.some((category) => category.slug === slug);
}

export function getGuideCategoryBySlugParam(slug: string): GuideCategory | undefined {
  if (!isGuideCategorySlug(slug)) {
    return undefined;
  }
  return getGuideCategoryBySlug(slug);
}

export function getGuideCategoryGuideCount(slug: GuideCategorySlug): number {
  return getGuidesByCategory(slug).length;
}

export function getRelatedGuideCategories(
  currentSlug: GuideCategorySlug,
  limit = 4,
): GuideCategory[] {
  return GUIDE_CATEGORY_REGISTRY.filter((category) => category.slug !== currentSlug)
    .map((category) => ({
      category,
      guideCount: getGuideCategoryGuideCount(category.slug),
    }))
    .sort((a, b) => {
      if (b.guideCount !== a.guideCount) {
        return b.guideCount - a.guideCount;
      }
      return a.category.name.localeCompare(b.category.name);
    })
    .slice(0, limit)
    .map((entry) => entry.category);
}
