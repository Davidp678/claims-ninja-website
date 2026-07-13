import type { BlogPost } from "@/lib/blog-types";
import { resolveBlogAuthor } from "@/lib/blog-authors";
import { getCategoryName } from "@/lib/blog-categories";
import { BLOG_META, getBlogPostPath } from "@/lib/blog-page";
import { SITE } from "@/lib/constants";
import { getFaqItemsByIds } from "@/lib/faq-page";
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

function resolveBlogFaqItems(
  post: BlogPost,
): readonly { question: string; answer: string }[] {
  if (post.faqIds && post.faqIds.length > 0) {
    return getFaqItemsByIds(post.faqIds).map((item) => ({
      question: item.question,
      answer: item.answer,
    }));
  }

  if (post.faq && post.faq.length > 0) {
    return post.faq;
  }

  return [];
}

export function buildBlogFaqSchema(post: BlogPost) {
  const faq = resolveBlogFaqItems(post);
  if (faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
