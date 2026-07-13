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
  image,
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  image?: string;
}): Metadata {
  const base = pageMetadata({ title, description, path, image });
  const languages = buildLanguageAlternates(path);
  const noindex = locale === "es" && !ES_INDEXING_ENABLED;
  const absoluteUrl = getAbsoluteUrl(path);

  return {
    ...base,
    alternates: {
      canonical: absoluteUrl,
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
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const languages = buildLanguageAlternates(path);
  const absoluteUrl = getAbsoluteUrl(path);
  const ogImages = image ? [{ url: image }] : DEFAULT_OG_IMAGE;
  const twitterImages = image ? [image] : [DEFAULT_OG_IMAGE_PATH];

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: absoluteUrl,
      images: ogImages,
    },
    twitter: {
      card: TWITTER_CARD,
      title,
      description,
      images: twitterImages,
    },
  };
}

export function blogHubMetadata(): Metadata {
  const { metaTitle, metaDescription, path } = BLOG_META;
  const absoluteUrl = getAbsoluteUrl(path);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: absoluteUrl,
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
  const absoluteUrl = getAbsoluteUrl(path);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: absoluteUrl,
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
  const absoluteUrl = getAbsoluteUrl(path);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: absoluteUrl,
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
  const absoluteUrl = getAbsoluteUrl(path);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "website",
      title: metaTitle,
      description: metaDescription,
      url: absoluteUrl,
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

export function guideDetailMetadataWithLocale(
  guide: Guide,
  {
    path,
    locale = "en",
  }: {
    path: string;
    locale?: Locale;
  },
): Metadata {
  const base = pageMetadataWithLocale({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path,
    locale,
  });
  const modifiedTime = guide.updatedAt ?? guide.publishedAt;

  return {
    ...base,
    keywords: [...guide.tags],
    openGraph: {
      type: "article",
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: getAbsoluteUrl(path),
      publishedTime: guide.publishedAt,
      modifiedTime,
      tags: [...guide.tags],
      images: DEFAULT_OG_IMAGE,
      locale: locale === "es" ? "es_US" : "en_US",
    },
    twitter: {
      card: TWITTER_CARD,
      title: guide.seoTitle,
      description: guide.seoDescription,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function guideDetailMetadata(guide: Guide): Metadata {
  return guideDetailMetadataWithLocale(guide, {
    path: getGuidePathForGuide(guide),
    locale: "en",
  });
}

export function blogArticleMetadata(post: BlogPost): Metadata {
  const path = getBlogPostPath(post.slug);
  const absoluteUrl = getAbsoluteUrl(path);
  const modifiedTime = post.updatedAt ?? post.publishedAt;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.tags,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url: absoluteUrl,
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
