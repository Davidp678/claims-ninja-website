import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { DEFAULT_OG_IMAGE_PATH, getAbsoluteUrl, SITE_URL } from "@/lib/site-seo";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
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
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE_URL,
    },
  };
}
