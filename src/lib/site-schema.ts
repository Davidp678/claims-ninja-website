import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { DEFAULT_OG_IMAGE_PATH, getAbsoluteUrl, SITE_URL } from "@/lib/site-seo";

/** Stable entity id for The Claims Ninja Organization graph. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Stable entity id for the WebSite node. */
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationRef() {
  return {
    "@type": "Organization" as const,
    "@id": ORGANIZATION_ID,
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    url: SITE_URL,
    logo: getAbsoluteUrl(DEFAULT_OG_IMAGE_PATH),
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    publisher: organizationRef(),
  };
}
