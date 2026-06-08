export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";

/**
 * Controls public SEO exposure of Spanish Wave 1 pages.
 * While false: /es routes stay live and usable, but are noindex,
 * excluded from the sitemap, and no hreflang is emitted.
 * Flip to true once Spanish body copy is translated.
 */
export const ES_INDEXING_ENABLED = false;

export const localeLabels: Record<
  Locale,
  { short: string; full: string; available: boolean }
> = {
  en: { short: "US", full: "US English", available: true },
  es: { short: "ES", full: "Español", available: true },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
