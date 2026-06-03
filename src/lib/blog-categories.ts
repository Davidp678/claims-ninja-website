import { getPostsByCategorySlug } from "@/lib/blog-registry";

export type BlogCategorySlug =
  | "insurance-supplementing"
  | "roofing-claims"
  | "water-damage-claims"
  | "fire-damage-claims"
  | "xactimate"
  | "claim-documentation"
  | "contractor-operations"
  | "public-adjusters"
  | "insurance-estimating"
  | "claim-recovery";

export type BlogCategory = {
  slug: BlogCategorySlug;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
};

export const BLOG_CATEGORY_BASE_PATH = "/resources/blog/category" as const;

export const BLOG_CATEGORY_REGISTRY: readonly BlogCategory[] = [
  {
    slug: "insurance-supplementing",
    name: "Insurance Supplementing",
    description:
      "Supplement strategy, scope review, carrier submissions, and contractor supplementing fundamentals.",
    metaTitle: "Insurance Supplementing Articles",
    metaDescription:
      "Claims Ninja articles on insurance supplementing for contractors: scope gaps, carrier estimates, documentation, and recovery strategy.",
  },
  {
    slug: "roofing-claims",
    name: "Roofing Claims",
    description:
      "Roof supplements, storm documentation, steep charges, and roofing-specific claim recovery.",
    metaTitle: "Roofing Claims Articles",
    metaDescription:
      "Expert guidance on roofing insurance claims, roof supplements, and carrier estimate gaps for contractors.",
  },
  {
    slug: "water-damage-claims",
    name: "Water Damage Claims",
    description:
      "Mitigation scope, drying documentation, and reconstruction supplements on water losses.",
    metaTitle: "Water Damage Claims Articles",
    metaDescription:
      "Contractor resources on water damage insurance claims: mitigation, drying, scope, and supplement approvals.",
  },
  {
    slug: "fire-damage-claims",
    name: "Fire Damage Claims",
    description:
      "Fire and smoke loss documentation, structural scope, and complex reconstruction claims.",
    metaTitle: "Fire Damage Claims Articles",
    metaDescription:
      "Insurance claim guidance for fire damage restoration contractors: scope, documentation, and supplements.",
  },
  {
    slug: "xactimate",
    name: "Xactimate",
    description:
      "Xactimate estimates, unit pricing, macros, and estimate review for insurance claims.",
    metaTitle: "Xactimate Articles",
    metaDescription:
      "Xactimate pricing, estimate review, and line-item strategy for contractor insurance claim recovery.",
  },
  {
    slug: "claim-documentation",
    name: "Claim Documentation",
    description:
      "Photos, scope notes, moisture logs, and evidence that improve supplement approval rates.",
    metaTitle: "Claim Documentation Articles",
    metaDescription:
      "Best practices for insurance claim documentation: photos, measurements, and carrier-ready evidence.",
  },
  {
    slug: "contractor-operations",
    name: "Contractor Operations",
    description:
      "Workflows, partnerships, and scaling claim operations without in-house overhead.",
    metaTitle: "Contractor Operations Articles",
    metaDescription:
      "Operational guidance for contractors: claim workflows, supplementing partners, and revenue recovery.",
  },
  {
    slug: "public-adjusters",
    name: "Public Adjusters",
    description:
      "How public adjusters fit the claim ecosystem and when contractors should coordinate or lead.",
    metaTitle: "Public Adjuster Articles",
    metaDescription:
      "Articles on public adjusters, contractor roles, and insurance claim recovery strategy.",
  },
  {
    slug: "insurance-estimating",
    name: "Insurance Estimating",
    description:
      "Carrier estimate review, line items, scope development, and estimating accuracy.",
    metaTitle: "Insurance Estimating Articles",
    metaDescription:
      "Insurance estimating for contractors: carrier gaps, scope review, and profitable line items.",
  },
  {
    slug: "claim-recovery",
    name: "Claim Recovery",
    description:
      "Maximizing legitimate claim payment through documentation, supplements, and negotiation.",
    metaTitle: "Claim Recovery Articles",
    metaDescription:
      "Contractor claim recovery strategies: supplements, documentation, and carrier negotiations.",
  },
] as const;

export function getCategoryBySlug(slug: BlogCategorySlug): BlogCategory {
  const category = BLOG_CATEGORY_REGISTRY.find((entry) => entry.slug === slug);
  if (!category) {
    throw new Error(`Unknown blog category: ${slug}`);
  }
  return category;
}

export function getCategoryName(slug: BlogCategorySlug): string {
  return getCategoryBySlug(slug).name;
}

export function getAllCategorySlugs(): BlogCategorySlug[] {
  return BLOG_CATEGORY_REGISTRY.map((category) => category.slug);
}

export function getCategoryPath(slug: BlogCategorySlug): string {
  return `${BLOG_CATEGORY_BASE_PATH}/${slug}`;
}

export function getCategoryMeta(slug: BlogCategorySlug) {
  const category = getCategoryBySlug(slug);
  return {
    path: getCategoryPath(slug),
    metaTitle: category.metaTitle,
    metaDescription: category.metaDescription,
  };
}

export function isBlogCategorySlug(slug: string): slug is BlogCategorySlug {
  return BLOG_CATEGORY_REGISTRY.some((category) => category.slug === slug);
}

export function getCategoryBySlugParam(slug: string): BlogCategory | undefined {
  if (!isBlogCategorySlug(slug)) {
    return undefined;
  }
  return getCategoryBySlug(slug);
}

export function getCategoryPostCount(slug: BlogCategorySlug): number {
  return getPostsByCategorySlug(slug).length;
}

export function getRelatedCategories(
  currentSlug: BlogCategorySlug,
  limit = 6,
): BlogCategory[] {
  return BLOG_CATEGORY_REGISTRY.filter((category) => category.slug !== currentSlug)
    .map((category) => ({
      category,
      postCount: getCategoryPostCount(category.slug),
    }))
    .sort((a, b) => {
      if (b.postCount !== a.postCount) {
        return b.postCount - a.postCount;
      }
      return a.category.name.localeCompare(b.category.name);
    })
    .slice(0, limit)
    .map((entry) => entry.category);
}
