import type { Locale } from "@/lib/i18n/config";

/** EN paths with published Spanish equivalents (Wave 1). */
export const WAVE1_EN_PATHS = ["/", "/pricing", "/contact", "/platform"] as const;

export type Wave1EnPath = (typeof WAVE1_EN_PATHS)[number];

export const ES_PATH_BY_EN_PATH: Record<Wave1EnPath, string> = {
  "/": "/es",
  "/pricing": "/es/pricing",
  "/contact": "/es/contact",
  "/platform": "/es/platform",
};

const ES_PREFIX = "/es";

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

export function isWave1EnPath(path: string): path is Wave1EnPath {
  return (WAVE1_EN_PATHS as readonly string[]).includes(path);
}

export function localizePath(locale: Locale, enPath: string): string {
  const normalized = enPath.startsWith("/") ? enPath : `/${enPath}`;
  if (locale === "en") {
    return normalized;
  }
  if (isWave1EnPath(normalized)) {
    return ES_PATH_BY_EN_PATH[normalized];
  }
  return normalized;
}

export function localizePathname(pathname: string, locale: Locale): string {
  const enPath = stripLocalePrefix(pathname);
  return localizePath(locale, enPath);
}

export function getWave1EsSitemapPaths(): string[] {
  return WAVE1_EN_PATHS.map((enPath) => ES_PATH_BY_EN_PATH[enPath]);
}
