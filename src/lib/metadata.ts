import type { Metadata } from "next";

import type { BlogCategorySlug } from "@/lib/blog-categories";
import { getCategoryMeta } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-data";
import { BLOG_META, getBlogPostPath } from "@/lib/blog-page";
import type { GuideCategorySlug } from "@/lib/guide-categories";
import { getGuideCategoryMeta } from "@/lib/guide-categories";
import type { Guide } from "@/lib/guide-data";
import { GUIDE_META, getGuidePathForGuide } from "@/lib/guide-page";
import { ES_INDEXING_ENABLED, type Locale } from "@/lib/i18n/config";
import {
  ES_PATH_BY_EN_PATH,
  isEsMarketingEnPath,
  stripLocalePrefix,
  type EsMarketingEnPath,
} from "@/lib/i18n/paths";
import { DEFAULT_OG_IMAGE_PATH, getAbsoluteUrl } from "@/lib/site-seo";

const DEFAULT_OG_IMAGE = [{ url: DEFAULT_OG_IMAGE_PATH }];

export function buildLanguageAlternates(path: string): Record<string, string> {
  if (!ES_INDEXING_ENABLED) {
    return {};
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const enPath = stripLocalePrefix(normalized);
  const esPath = isEsMarketingEnPath(enPath)
    ? ES_PATH_BY_EN_PATH[enPath as EsMarketingEnPath]
    : undefined;

  if (!esPath) {
    return {};
  }

  return {
    en: getAbsoluteUrl(enPath),
    es: getAbsoluteUrl(esPath),
    "x-default": getAbsoluteUrl("/"),
  };
}

export function pageMetadataWithLocale({
  title,
  description,
  path,
  locale = "en",
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): Metadata {
  const base = pageMetadata({ title, description, path });
  const languages = buildLanguageAlternates(path);
  const noindex = locale === "es" && !ES_INDEXING_ENABLED;

  return {
    ...base,
    alternates: {
      canonical: path,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      ...base.openGraph,
      locale: locale === "es" ? "es_US" : "en_US",
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

const TWITTER_CARD = "summary_large_image" as const;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const languages = buildLanguageAlternates(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      images: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: TWITTER_CARD,
      title,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function blogHubMetadata(): Metadata {
  const { metaTitle, metaDescription, path } = BLOG_META;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: path,
      images: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: TWITTER_CARD,
      title: metaTitle,
      description: metaDescription,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function blogCategoryMetadata(slug: BlogCategorySlug): Metadata {
  const { metaTitle, metaDescription, path } = getCategoryMeta(slug);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: path,
      images: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: TWITTER_CARD,
      title: metaTitle,
      description: metaDescription,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function guideHubMetadata(): Metadata {
  const { metaTitle, metaDescription, path } = GUIDE_META;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: path,
      images: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: TWITTER_CARD,
      title: metaTitle,
      description: metaDescription,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function guideCategoryMetadata(slug: GuideCategorySlug): Metadata {
  const { metaTitle, metaDescription, path } = getGuideCategoryMeta(slug);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: path,
      images: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: TWITTER_CARD,
      title: metaTitle,
      description: metaDescription,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function guideDetailMetadata(guide: Guide): Metadata {
  const path = getGuidePathForGuide(guide);
  const modifiedTime = guide.updatedAt ?? guide.publishedAt;

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    keywords: [...guide.tags],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: path,
      publishedTime: guide.publishedAt,
      modifiedTime,
      tags: [...guide.tags],
      images: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: TWITTER_CARD,
      title: guide.seoTitle,
      description: guide.seoDescription,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function blogArticleMetadata(post: BlogPost): Metadata {
  const path = getBlogPostPath(post.slug);
  const modifiedTime = post.updatedAt ?? post.publishedAt;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.tags,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url: path,
      publishedTime: post.publishedAt,
      modifiedTime,
      tags: post.tags,
      images: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: TWITTER_CARD,
      title: post.seoTitle,
      description: post.seoDescription,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}
