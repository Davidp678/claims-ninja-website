import { CLIENT_ARTICLES } from "@/lib/help-center/content/client";
import { INTERNAL_ARTICLES } from "@/lib/help-center/content/internal";
import { getSections } from "@/lib/help-center/sections";
import type {
  HelpArticle,
  HelpNavItem,
  HelpPortal,
  InternalRole,
} from "@/lib/help-center/types";

const ARTICLES_BY_PORTAL: Record<HelpPortal, HelpArticle[]> = {
  client: CLIENT_ARTICLES,
  internal: INTERNAL_ARTICLES,
};

export function getArticles(portal: HelpPortal): HelpArticle[] {
  return ARTICLES_BY_PORTAL[portal];
}

export function getArticle(
  portal: HelpPortal,
  sectionSlug: string,
  articleSlug: string,
): HelpArticle | undefined {
  return getArticles(portal).find(
    (a) => a.sectionSlug === sectionSlug && a.slug === articleSlug,
  );
}

export function getSectionArticles(
  portal: HelpPortal,
  sectionSlug: string,
  role?: InternalRole,
): HelpArticle[] {
  return getArticles(portal).filter((a) => {
    if (a.sectionSlug !== sectionSlug || a.hidden) return false;
    if (portal === "internal" && role && role !== "all") {
      const roles = a.roles ?? ["all"];
      if (!roles.includes("all") && !roles.includes(role)) return false;
    }
    return true;
  });
}

export function canAccessArticle(article: HelpArticle, role: InternalRole): boolean {
  if (article.portal === "client") return true;
  const roles = article.roles ?? ["all"];
  if (roles.includes("all")) return true;
  if (role === "all") return true;
  return roles.includes(role);
}

export function getNav(portal: HelpPortal, role: InternalRole = "all"): HelpNavItem[] {
  const sections = getSections(portal);
  const items: HelpNavItem[] = [];

  for (const section of sections) {
    if (
      portal === "internal" &&
      section.roles &&
      role !== "all" &&
      !section.roles.includes(role)
    ) {
      continue;
    }

    const articles = getSectionArticles(portal, section.slug, role).map((a) => ({
      slug: a.slug,
      title: a.title,
      roles: a.roles,
      hidden: a.hidden,
    }));

    if (articles.length === 0) continue;

    items.push({
      sectionSlug: section.slug,
      sectionTitle: section.title,
      articles,
    });
  }

  return items;
}

export function getArticlePath(
  portal: HelpPortal,
  sectionSlug: string,
  articleSlug: string,
): string {
  const base = portal === "client" ? "/help" : "/tcnhc";
  return `${base}/${sectionSlug}/${articleSlug}`;
}

export function getPortalHome(portal: HelpPortal): string {
  return portal === "client" ? "/help" : "/tcnhc";
}

export function getDefaultArticle(portal: HelpPortal): HelpArticle {
  const visible = getArticles(portal).filter((a) => !a.hidden);
  return visible[0] ?? getArticles(portal)[0];
}
