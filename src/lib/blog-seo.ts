import type { BlogPost } from "@/lib/blog-types";
import { resolveBlogAuthor } from "@/lib/blog-authors";
import { getCategoryName } from "@/lib/blog-categories";
import { BLOG_META, getBlogPostPath } from "@/lib/blog-page";
import { SITE } from "@/lib/constants";
import {
  DEFAULT_OG_IMAGE_PATH,
  getAbsoluteUrl,
  SITE_URL,
} from "@/lib/site-seo";

export function buildBlogPostingSchema(post: BlogPost) {
  const url = getAbsoluteUrl(getBlogPostPath(post.slug));
  const dateModified = post.updatedAt ?? post.publishedAt;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    dateModified,
    author: {
      "@type": "Person",
      name: resolveBlogAuthor(post).name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image: getAbsoluteUrl(DEFAULT_OG_IMAGE_PATH),
    articleSection: getCategoryName(post.category),
    keywords: post.tags.join(", "),
  };
}

export function buildBlogHubCollectionSchema(posts: readonly BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: BLOG_META.metaTitle,
    description: BLOG_META.metaDescription,
    url: getAbsoluteUrl(BLOG_META.path),
    numberOfItems: posts.length,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: getAbsoluteUrl(getBlogPostPath(post.slug)),
      })),
    },
  };
}
