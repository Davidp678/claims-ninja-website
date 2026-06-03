import type { MetadataRoute } from "next";

import { getFullSitemap } from "@/lib/site-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return getFullSitemap();
}
