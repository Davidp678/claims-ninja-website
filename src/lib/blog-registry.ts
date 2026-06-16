import { BLOG_POSTS } from "@/lib/blog-posts";
import type { BlogCategorySlug } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { isPublished } from "@/lib/content-dates";

/**
 * Publish gate: only posts whose `publishedAt` is on or before now are exposed
 * to the public surface. Future-dated posts are treated as scheduled and stay
 * hidden until a rebuild on/after their date. See `src/lib/content-dates.ts`.
 */
function getPublishedPosts(): readonly BlogPost[] {
  return BLOG_POSTS.filter((post) => isPublished(post.publishedAt));
}

export function getAllBlogPosts(): readonly BlogPost[] {
  return [...getPublishedPosts()].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** Slug lookup that respects the publish gate (returns undefined for scheduled posts). */
export function getPublishedPostBySlug(slug: string): BlogPost | undefined {
  const post = getBlogPostBySlug(slug);
  return post && isPublished(post.publishedAt) ? post : undefined;
}

export function getAllBlogSlugs(): string[] {
  return getPublishedPosts().map((post) => post.slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return getPublishedPosts().find((post) => post.featured);
}

export function getLatestPosts(limit = 6): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

export function getRecommendedPosts(limit = 4): BlogPost[] {
  return getPublishedPosts()
    .filter((post) => post.recommended)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getPostsByCategory(category: BlogCategorySlug): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

export function getPostsByCategorySlug(slug: BlogCategorySlug): BlogPost[] {
  return getPostsByCategory(slug);
}
