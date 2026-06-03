import type { BlogAuthorId } from "@/lib/blog-authors";
import type { BlogCategorySlug } from "@/lib/blog-categories";

export type { BlogAuthor } from "@/lib/blog-authors";

export type BlogVisualVariant = "redGlow" | "darkGrid" | "ember";

export type BlogInlineLink = {
  label: string;
  href: string;
};

export type BlogSection = {
  id: string;
  heading: string;
  level?: 2 | 3;
  paragraphs?: string[];
  bullets?: string[];
  callout?: { title?: string; body: string };
  links?: BlogInlineLink[];
};

export type BlogInlineFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategorySlug;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  visualVariant: BlogVisualVariant;
  featured?: boolean;
  recommended?: boolean;
  authorId: BlogAuthorId;
  seoTitle: string;
  seoDescription: string;
  relatedPostSlugs: string[];
  faq?: BlogInlineFaq[];
  faqIds?: string[];
  sections: BlogSection[];
};
