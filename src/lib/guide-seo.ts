import type { GuideCategorySlug } from "@/lib/guide-categories";
import { getAbsoluteUrl } from "@/lib/site-seo";
import type { Guide } from "@/lib/guide-types";
import { getGuidePathForGuide } from "@/lib/guide-page";

function usesHowToSchema(guide: Guide): boolean {
  return (
    (guide.guideType === "workflow" || guide.guideType === "field-procedure") &&
    guide.steps.length >= 2
  );
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
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} Guides`,
    description,
    url: getAbsoluteUrl(`/resources/guides/${categorySlug}`),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: getAbsoluteUrl(getGuidePathForGuide(guide)),
      })),
    },
  };
}

export function buildGuideHubCollectionSchema(guides: readonly Guide[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Claim Guides",
    description:
      "Operational claim guides for contractors: checklists, workflows, documentation standards, and field procedures.",
    url: getAbsoluteUrl("/resources/guides"),
    numberOfItems: guides.length,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: getAbsoluteUrl(getGuidePathForGuide(guide)),
      })),
    },
  };
}

export function buildGuideFaqSchema(faq: readonly { question: string; answer: string }[]) {
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
