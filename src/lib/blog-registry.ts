import { BLOG_POSTS } from "@/lib/blog-posts";
import type { BlogCategorySlug } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";

export function getAllBlogPosts(): readonly BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.featured);
}

export function getLatestPosts(limit = 6): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

export function getRecommendedPosts(limit = 4): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.recommended)
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
