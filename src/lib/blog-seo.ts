import type { BlogPost } from "@/lib/blog-types";
import {
  resolveBlogAuthorProfile,
  type BlogAuthorProfile,
} from "@/lib/blog-authors";
import { getCategoryName } from "@/lib/blog-categories";
import { BLOG_META, getBlogPostPath } from "@/lib/blog-page";
import { getFaqItemsByIds } from "@/lib/faq-page";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { organizationRef } from "@/lib/site-schema";
import {
  DEFAULT_OG_IMAGE_PATH,
  getAbsoluteUrl,
  SITE_URL,
} from "@/lib/site-seo";

function buildAuthorSchema(profile: BlogAuthorProfile) {
  if (profile.schemaType === "Organization") {
    // Keep editorial as a named Organization node linked to the site entity —
    // do not reuse ORGANIZATION_ID with a different display name.
    return {
      "@type": "Organization" as const,
      name: profile.name,
      url: SITE_URL,
      parentOrganization: organizationRef(),
    };
  }

  const person: Record<string, unknown> = {
    "@type": "Person",
    name: profile.name,
  };

  if (profile.role) {
    person.jobTitle = profile.role;
  }
  if (profile.profilePath) {
    person.url = getAbsoluteUrl(profile.profilePath);
  }
  if (profile.sameAs && profile.sameAs.length > 0) {
    person.sameAs = [...profile.sameAs];
  }
  if (profile.worksForOrganization !== false) {
    person.worksFor = organizationRef();
  }

  return person;
}

export function buildBlogPostingSchema(post: BlogPost) {
  const url = getAbsoluteUrl(getBlogPostPath(post.slug));
  const dateModified = post.updatedAt ?? post.publishedAt;
  const authorProfile = resolveBlogAuthorProfile(post);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    dateModified,
    author: buildAuthorSchema(authorProfile),
    publisher: organizationRef(),
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

export function buildBlogHubCollectionSchema(
  posts: readonly BlogPost[],
  locale: Locale = "en",
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: BLOG_META.metaTitle,
    description: BLOG_META.metaDescription,
    url: getAbsoluteUrl(localizePath(locale, BLOG_META.path)),
    numberOfItems: posts.length,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        // Blog detail pages are EN-only; keep item URLs on the canonical EN posts.
        url: getAbsoluteUrl(getBlogPostPath(post.slug)),
      })),
    },
  };
}
