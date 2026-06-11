import type { Locale } from "@/lib/i18n/config";

/** EN paths with published Spanish equivalents (all static marketing pages). */
export const ES_MARKETING_EN_PATHS = [
  "/",
  "/pricing",
  "/contact",
  "/platform",
  "/platform/client-portal",
  "/platform/claim-tracking",
  "/platform/communication-hub",
  "/platform/billing-payments",
  "/platform/ai-claim-analysis",
  "/solutions/roofing",
  "/solutions/water-damage",
  "/solutions/fire-damage",
  "/solutions/mold",
  "/solutions/contents",
  "/resources/blog",
  "/resources/guides",
  "/faq",
  "/case-studies",
  "/about",
  "/partner-network",
  "/reviews",
] as const;

export type EsMarketingEnPath = (typeof ES_MARKETING_EN_PATHS)[number];

export const ES_PATH_BY_EN_PATH: Record<EsMarketingEnPath, string> = {
  "/": "/es",
  "/pricing": "/es/pricing",
  "/contact": "/es/contact",
  "/platform": "/es/platform",
  "/platform/client-portal": "/es/platform/client-portal",
  "/platform/claim-tracking": "/es/platform/claim-tracking",
  "/platform/communication-hub": "/es/platform/communication-hub",
  "/platform/billing-payments": "/es/platform/billing-payments",
  "/platform/ai-claim-analysis": "/es/platform/ai-claim-analysis",
  "/solutions/roofing": "/es/solutions/roofing",
  "/solutions/water-damage": "/es/solutions/water-damage",
  "/solutions/fire-damage": "/es/solutions/fire-damage",
  "/solutions/mold": "/es/solutions/mold",
  "/solutions/contents": "/es/solutions/contents",
  "/resources/blog": "/es/resources/blog",
  "/resources/guides": "/es/resources/guides",
  "/faq": "/es/faq",
  "/case-studies": "/es/case-studies",
  "/about": "/es/about",
  "/partner-network": "/es/partner-network",
  "/reviews": "/es/reviews",
};

const ES_PREFIX = "/es";

function isGuideSubpath(enPath: string): boolean {
  return enPath.startsWith("/resources/guides/") && enPath !== "/resources/guides";
}

export function isEsPathname(pathname: string): boolean {
  return pathname === ES_PREFIX || pathname.startsWith(`${ES_PREFIX}/`);
}

export function localeFromPathname(pathname: string): Locale {
  return isEsPathname(pathname) ? "es" : "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === ES_PREFIX) return "/";
  if (pathname.startsWith(`${ES_PREFIX}/`)) {
    return pathname.slice(ES_PREFIX.length) || "/";
  }
  return pathname;
}

export function isEsMarketingEnPath(path: string): path is EsMarketingEnPath {
  return (ES_MARKETING_EN_PATHS as readonly string[]).includes(path);
}

export function localizePath(locale: Locale, enPath: string): string {
  const normalized = enPath.startsWith("/") ? enPath : `/${enPath}`;
  if (locale === "en") {
    return normalized;
  }
  if (locale === "es" && isGuideSubpath(normalized)) {
    return ES_PATH_BY_EN_PATH["/resources/guides"];
  }
  if (isEsMarketingEnPath(normalized)) {
    return ES_PATH_BY_EN_PATH[normalized];
  }
  return ES_PREFIX;
}

export function localizePathname(pathname: string, locale: Locale): string {
  const enPath = stripLocalePrefix(pathname);
  return localizePath(locale, enPath);
}

export function getEsMarketingSitemapPaths(): string[] {
  return ES_MARKETING_EN_PATHS.map((enPath) => ES_PATH_BY_EN_PATH[enPath]);
}
