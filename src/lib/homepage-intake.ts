import type { Locale } from "@/lib/i18n/config";

/** Stable homepage hero / claim-intake anchor id (must match Hero.tsx). */
export const HOMEPAGE_INTAKE_ANCHOR_ID = "top";

export const HOMEPAGE_INTAKE_HASH = `#${HOMEPAGE_INTAKE_ANCHOR_ID}`;

/** Canonical EN conversion destination for non-meeting intake CTAs. */
export const HOMEPAGE_INTAKE_HREF = `/#${HOMEPAGE_INTAKE_ANCHOR_ID}`;

export function homepageIntakeHref(locale: Locale = "en"): string {
  return locale === "es" ? `/es${HOMEPAGE_INTAKE_HASH}` : HOMEPAGE_INTAKE_HREF;
}

export function isHomepageIntakeHref(href: string): boolean {
  try {
    const url = new URL(href, "http://local.invalid");
    if (url.hash !== HOMEPAGE_INTAKE_HASH) return false;
    return url.pathname === "/" || url.pathname === "/es";
  } catch {
    return href === HOMEPAGE_INTAKE_HASH || href.endsWith(HOMEPAGE_INTAKE_HASH);
  }
}

export function hrefHasHash(href: string): boolean {
  return href.includes("#");
}

export function scrollToHomepageIntake(
  behavior: ScrollBehavior = "smooth",
): boolean {
  const el = document.getElementById(HOMEPAGE_INTAKE_ANCHOR_ID);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

/**
 * Same-document intake navigation. Returns true when the click was handled
 * (caller should prevent soft-nav / default as needed).
 */
export function handleSameDocumentHomepageIntakeClick(
  href: string,
): boolean {
  if (typeof window === "undefined") return false;
  if (!isHomepageIntakeHref(href)) return false;

  const url = new URL(href, window.location.origin);
  if (window.location.pathname !== url.pathname) return false;

  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (current !== next) {
    window.history.pushState(null, "", next);
  } else {
    // Re-assert hash so repeated clicks still scroll.
    window.history.replaceState(null, "", next);
  }
  scrollToHomepageIntake("smooth");
  return true;
}
