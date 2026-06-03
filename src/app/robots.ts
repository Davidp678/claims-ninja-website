import type { MetadataRoute } from "next";

import { SITEMAP_URL } from "@/lib/site-seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/login", "/claim-report/", "/api/"],
    },
    sitemap: SITEMAP_URL,
  };
}
