import type { Metadata } from "next";

import type { HelpArticle, HelpPortal } from "@/lib/help-center/types";
import { getArticlePath, getPortalHome } from "@/lib/help-center/registry";

const NOINDEX: Metadata["robots"] = { index: false, follow: false };

export function helpPortalMetadata(portal: HelpPortal): Metadata {
  const isClient = portal === "client";
  return {
    title: isClient ? "Client Help Center" : "Internal Help Center",
    description: isClient
      ? "Onboarding, training, and documentation for Claims Ninja contractor clients."
      : "Operations bible, SOPs, and training for Claims Ninja team members.",
    robots: NOINDEX,
    alternates: { canonical: getPortalHome(portal) },
  };
}

export function helpArticleMetadata(article: HelpArticle): Metadata {
  const path = getArticlePath(article.portal, article.sectionSlug, article.slug);
  return {
    title: article.title,
    description: article.excerpt,
    robots: NOINDEX,
    alternates: { canonical: path },
  };
}
