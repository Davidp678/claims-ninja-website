import type { Metadata } from "next";

import type { BlogCategorySlug } from "@/lib/blog-categories";
import { getCategoryMeta } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-data";
import { BLOG_META, getBlogPostPath } from "@/lib/blog-page";
import type { GuideCategorySlug } from "@/lib/guide-categories";
import { getGuideCategoryMeta } from "@/lib/guide-categories";
import type { Guide } from "@/lib/guide-data";
import { GUIDE_META, getGuidePathForGuide } from "@/lib/guide-page";
import { DEFAULT_OG_IMAGE_PATH } from "@/lib/site-seo";

const DEFAULT_OG_IMAGE = [{ url: DEFAULT_OG_IMAGE_PATH }];

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
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
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
