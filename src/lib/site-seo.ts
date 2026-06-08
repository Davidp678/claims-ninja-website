import type { MetadataRoute } from "next";

import { getAllCategorySlugs, getCategoryPath } from "@/lib/blog-categories";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BLOG_BASE_PATH, getBlogPostPath } from "@/lib/blog-page";
import { getAllGuideCategorySlugs, getGuideCategoryPath } from "@/lib/guide-categories";
import { CLAIM_GUIDES } from "@/lib/guide-data";
import { GUIDE_BASE_PATH, getGuidePathForGuide } from "@/lib/guide-page";
import { ES_INDEXING_ENABLED } from "@/lib/i18n/config";
import { getWave1EsSitemapPaths } from "@/lib/i18n/paths";
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
  if (path === BLOG_BASE_PATH || path === GUIDE_BASE_PATH) {
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

export function getGuideSitemapEntries(): MetadataRoute.Sitemap {
  return CLAIM_GUIDES.map((guide) => ({
    url: getGuidePathForGuide(guide),
    lastModified: new Date(guide.updatedAt ?? guide.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

export function getGuideCategorySitemapEntries(): MetadataRoute.Sitemap {
  return getAllGuideCategorySlugs().map((slug) => ({
    url: getGuideCategoryPath(slug),
    lastModified: undefined,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));
}

export function getSpanishSitemapEntries(): MetadataRoute.Sitemap {
  if (!ES_INDEXING_ENABLED) {
    return [];
  }

  return getWave1EsSitemapPaths().map((path) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      path === "/es" ? "weekly" : "monthly";
    return {
      url: path,
      lastModified: undefined,
      changeFrequency,
      priority: path === "/es" ? 0.95 : 0.85,
    };
  });
}

export function getFullSitemap(): MetadataRoute.Sitemap {
  return [
    ...getMarketingSitemapEntries(),
    ...getSpanishSitemapEntries(),
    ...getBlogCategorySitemapEntries(),
    ...getBlogSitemapEntries(),
    ...getGuideCategorySitemapEntries(),
    ...getGuideSitemapEntries(),
  ];
}
