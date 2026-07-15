import type { BlogCategorySlug } from "@/lib/blog-categories";
import type { GuideCategorySlug } from "@/lib/guide-categories";

import type { CategoryIllustrationKey } from "./category-illustration-types";

const BLOG_CATEGORY_ILLUSTRATIONS: Record<
  BlogCategorySlug,
  CategoryIllustrationKey
> = {
  "insurance-supplementing": "insurance-supplementing",
  "roofing-claims": "roofing",
  "water-damage-claims": "water-damage",
  "fire-damage-claims": "fire-damage",
  xactimate: "xactimate",
  "claim-documentation": "documentation",
  "contractor-operations": "contractor-operations",
  "public-adjusters": "public-adjusters",
  "insurance-estimating": "estimating",
  "claim-recovery": "claim-recovery",
};

const GUIDE_CATEGORY_ILLUSTRATIONS: Record<
  GuideCategorySlug,
  CategoryIllustrationKey
> = {
  "general-claims": "generic",
  "roofing-claims": "roofing",
  "water-damage": "water-damage",
  "fire-damage": "fire-damage",
  "exterior-restoration": "commercial-claims",
  mold: "mold",
};

export function resolveCategoryIllustration(
  category: BlogCategorySlug,
): CategoryIllustrationKey {
  return BLOG_CATEGORY_ILLUSTRATIONS[category] ?? "generic";
}

export function resolveGuideCategoryIllustration(
  category: GuideCategorySlug,
): CategoryIllustrationKey {
  return GUIDE_CATEGORY_ILLUSTRATIONS[category] ?? "generic";
}

export function resolveIllustrationKey(
  key: CategoryIllustrationKey,
): CategoryIllustrationKey {
  return key;
}

export { BLOG_CATEGORY_ILLUSTRATIONS, GUIDE_CATEGORY_ILLUSTRATIONS };
