import type { GuideCategorySlug } from "@/lib/guide-categories";
import { getGuideCategoryBySlug } from "@/lib/guide-categories";
import type { Guide } from "@/lib/guide-data";
import type { Locale } from "@/lib/i18n/config";
import { GUIDE_SUMMARIES_ES } from "@/lib/i18n/content/guide-summaries-es";
import { getResourcesContent } from "@/lib/i18n/content/resources";

export type LocalizedGuideSummary = {
  title: string;
  excerpt: string;
};

export type LocalizedGuideCategory = {
  name: string;
  description: string;
  guidesSectionTitle: string;
};

function guideSummaryKey(guide: { category: GuideCategorySlug; slug: string }): string {
  return `${guide.category}/${guide.slug}`;
}

export function getLocalizedGuideSummary(
  guide: Guide,
  locale: Locale,
): LocalizedGuideSummary {
  if (locale === "en") {
    return { title: guide.title, excerpt: guide.excerpt };
  }

  const localized = GUIDE_SUMMARIES_ES[guideSummaryKey(guide)];
  if (!localized) {
    throw new Error(`Missing Spanish summary for guide: ${guideSummaryKey(guide)}`);
  }

  return localized;
}

export function getLocalizedGuideCategory(
  slug: GuideCategorySlug,
  locale: Locale,
): LocalizedGuideCategory {
  if (locale === "en") {
    const category = getGuideCategoryBySlug(slug);
    return {
      name: category.name,
      description: category.description,
      guidesSectionTitle: `${category.name} guides`,
    };
  }

  return getResourcesContent(locale).guides.categoryLabels[slug];
}

export function getGuideHubUi(locale: Locale) {
  return getResourcesContent(locale).guides.hubUi;
}

export function getGuideTypeLabels(locale: Locale) {
  return getResourcesContent(locale).guides.typeLabels;
}
