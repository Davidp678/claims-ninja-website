import type { GuideCategorySlug } from "@/lib/guide-categories";
import { getFaqItemsByIds } from "@/lib/faq-page";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedGuidePath } from "@/lib/guide-localization";
import { localizePath } from "@/lib/i18n/paths";
import { ORGANIZATION_ID } from "@/lib/site-schema";
import { getAbsoluteUrl } from "@/lib/site-seo";
import type { Guide } from "@/lib/guide-types";
import { getGuidePathForGuide } from "@/lib/guide-page";

function usesHowToSchema(guide: Guide): boolean {
  return (
    (guide.guideType === "workflow" || guide.guideType === "field-procedure") &&
    guide.steps.length >= 2
  );
}

function guidePublisherSchema() {
  return {
    "@type": "Organization" as const,
    "@id": ORGANIZATION_ID,
  };
}

/** Match GuideDetailFaq: inline faq first, then faqIds from the library. */
export function resolveGuideFaqItems(
  guide: Pick<Guide, "faq" | "faqIds">,
): readonly { question: string; answer: string }[] {
  const inlineFaq = guide.faq ?? [];
  const linkedFaq =
    guide.faqIds && guide.faqIds.length > 0
      ? getFaqItemsByIds(guide.faqIds).map((item) => ({
          question: item.question,
          answer: item.answer,
        }))
      : [];

  return [...inlineFaq, ...linkedFaq];
}

export function buildGuideHowToSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.excerpt,
    url: getAbsoluteUrl(getGuidePathForGuide(guide)),
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt ?? guide.publishedAt,
    totalTime: `PT${guide.estimatedMinutes}M`,
    publisher: guidePublisherSchema(),
    step: guide.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.actions.join(" "),
    })),
  };
}

export function buildGuideTechArticleSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    name: guide.title,
    description: guide.excerpt,
    url: getAbsoluteUrl(getGuidePathForGuide(guide)),
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt ?? guide.publishedAt,
    proficiencyLevel: "Expert",
    articleSection: guide.guideType,
    publisher: guidePublisherSchema(),
  };
}

export function buildGuideDetailSchema(guide: Guide) {
  return usesHowToSchema(guide)
    ? buildGuideHowToSchema(guide)
    : buildGuideTechArticleSchema(guide);
}

export function buildGuideCategoryCollectionSchema(
  categorySlug: GuideCategorySlug,
  categoryName: string,
  description: string,
  guides: readonly Guide[],
  locale: Locale = "en",
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} Guides`,
    description,
    url: getAbsoluteUrl(
      localizePath(locale, `/resources/guides/${categorySlug}`),
    ),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: getAbsoluteUrl(getLocalizedGuidePath(guide, locale)),
      })),
    },
  };
}

export function buildGuideHubCollectionSchema(
  guides: readonly Guide[],
  locale: Locale = "en",
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Claim Guides",
    description:
      "Operational claim guides for contractors: checklists, workflows, documentation standards, and field procedures.",
    url: getAbsoluteUrl(localizePath(locale, "/resources/guides")),
    numberOfItems: guides.length,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: getAbsoluteUrl(getLocalizedGuidePath(guide, locale)),
      })),
    },
  };
}

export function buildGuideFaqSchema(
  faq: readonly { question: string; answer: string }[],
) {
  if (faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildGuideDetailFaqSchema(guide: Pick<Guide, "faq" | "faqIds">) {
  return buildGuideFaqSchema(resolveGuideFaqItems(guide));
}
