import type { MetadataRoute } from "next";

import { getAllCategorySlugs, getCategoryPath } from "@/lib/blog-categories";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BLOG_BASE_PATH, getBlogPostPath } from "@/lib/blog-page";
import { MARKETING_PAGES_BY_PATH } from "@/lib/marketing-pages";

export const SITE_URL = "https://theclaimsninja.com" as const;

export const DEFAULT_OG_IMAGE_PATH = "/logo.png" as const;

export const SITEMAP_URL = `${SITE_URL}/sitemap.xml` as const;

/** Public marketing paths for sitemap (excludes redirect-only /blog). */
export const INDEXABLE_MARKETING_PATHS: readonly string[] = [
  "/",
  ...Object.keys(MARKETING_PAGES_BY_PATH),
] as const;

const HIGH_PRIORITY_PATHS = new Set(["/pricing", "/platform"]);

type SitemapEntryConfig = {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

function getMarketingSitemapConfig(path: string): SitemapEntryConfig {
  if (path === "/") {
    return { priority: 1, changeFrequency: "weekly" };
  }
  if (HIGH_PRIORITY_PATHS.has(path)) {
    return { priority: 0.9, changeFrequency: "weekly" };
  }
  if (path === BLOG_BASE_PATH) {
    return { priority: 0.85, changeFrequency: "weekly" };
  }
  return { priority: 0.8, changeFrequency: "monthly" };
}

export function getAbsoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function getMarketingSitemapEntries(): MetadataRoute.Sitemap {
  return INDEXABLE_MARKETING_PATHS.map((path) => {
    const { priority, changeFrequency } = getMarketingSitemapConfig(path);
    return {
      url: path,
      lastModified: undefined,
      changeFrequency,
      priority,
    };
  });
}

export function getBlogSitemapEntries(): MetadataRoute.Sitemap {
  return BLOG_POSTS.map((post) => ({
    url: getBlogPostPath(post.slug),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

export function getBlogCategorySitemapEntries(): MetadataRoute.Sitemap {
  return getAllCategorySlugs().map((slug) => ({
    url: getCategoryPath(slug),
    lastModified: undefined,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));
}

export function getFullSitemap(): MetadataRoute.Sitemap {
  return [
    ...getMarketingSitemapEntries(),
    ...getBlogCategorySitemapEntries(),
    ...getBlogSitemapEntries(),
  ];
}
