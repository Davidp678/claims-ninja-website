import type { ClaimRecoveryCaseStudy } from "@/lib/case-study-types";
import { getCaseStudyPath } from "@/lib/claim-recovery-case-studies";
import { organizationRef } from "@/lib/site-schema";
import { getAbsoluteUrl } from "@/lib/site-seo";

export function buildCaseStudyArticleSchema(study: ClaimRecoveryCaseStudy) {
  const url = getAbsoluteUrl(getCaseStudyPath(study.slug));

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.seoDescription,
    datePublished: study.publishedAt,
    dateModified: study.updatedAt ?? study.publishedAt,
    author: organizationRef(),
    publisher: organizationRef(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    about: {
      "@type": "Thing",
      name: study.lossType,
    },
  };
}
