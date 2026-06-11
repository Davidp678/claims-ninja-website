import type { GuideCategorySlug } from "@/lib/guide-categories";
import type { Guide } from "@/lib/guide-data";
import type { Locale } from "@/lib/i18n/config";
import { getGuideBySlug } from "@/lib/guide-registry";
import { getGuidePathForGuide } from "@/lib/guide-page";

import { CATEGORY_3_WATER_DAMAGE_DOCUMENTATION_GUIDE_ES } from "@/lib/i18n/guides/category-3-water-damage-documentation-guide.es";

const ES_PREFIX = "/es";

const SPANISH_GUIDE_DETAILS: Record<string, Guide> = {
  "water-damage/category-3-water-damage-documentation-guide":
    CATEGORY_3_WATER_DAMAGE_DOCUMENTATION_GUIDE_ES,
};

function guideDetailKey(category: GuideCategorySlug, slug: string): string {
  return `${category}/${slug}`;
}

export function hasSpanishGuideDetail(category: string, slug: string): boolean {
  return guideDetailKey(category as GuideCategorySlug, slug) in SPANISH_GUIDE_DETAILS;
}

export function getSpanishGuideDetail(
  category: GuideCategorySlug,
  slug: string,
): Guide | undefined {
  return SPANISH_GUIDE_DETAILS[guideDetailKey(category, slug)];
}

export function getSpanishGuideDetailParams(): { category: string; slug: string }[] {
  return Object.keys(SPANISH_GUIDE_DETAILS).map((key) => {
    const [category, ...slugParts] = key.split("/");
    return { category, slug: slugParts.join("/") };
  });
}

export function getLocalizedGuidePath(
  guide: { category: GuideCategorySlug; slug: string },
  locale: Locale,
): string {
  const enPath = getGuidePathForGuide(guide);
  if (locale === "en") {
    return enPath;
  }
  if (hasSpanishGuideDetail(guide.category, guide.slug)) {
    return `${ES_PREFIX}${enPath}`;
  }
  return enPath;
}

export function resolveGuideForLocale(
  category: GuideCategorySlug,
  slug: string,
  locale: Locale,
): Guide | undefined {
  if (locale === "es") {
    return getSpanishGuideDetail(category, slug);
  }
  return getGuideBySlug(category, slug);
}

export function parseGuideSubpath(
  enPath: string,
): { category: GuideCategorySlug; slug: string } | undefined {
  const match = enPath.match(/^\/resources\/guides\/([^/]+)\/([^/]+)$/);
  if (!match) return undefined;
  return { category: match[1] as GuideCategorySlug, slug: match[2] };
}
