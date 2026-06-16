import {
  BLOG_CATEGORY_REGISTRY,
  getCategoryBySlug,
  getCategoryMeta,
  getCategoryName,
  getCategoryPath,
  getAllCategorySlugs,
  BLOG_CATEGORY_BASE_PATH,
  type BlogCategorySlug,
} from "@/lib/blog-categories";
import {
  getAllBlogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
  getPublishedPostBySlug,
  getFeaturedPost,
  getLatestPosts,
  getPostsByCategory,
  getPostsByCategorySlug,
  getRecommendedPosts,
} from "@/lib/blog-registry";
import {
  getFallbackRelatedPosts,
  getManualRelatedPosts,
  getRelatedPostsByCategory,
  getRelatedPostsByTags,
  getSuggestedRelatedPosts,
  resolveRelatedPosts,
} from "@/lib/blog-related";
import { resolveBlogAuthor } from "@/lib/blog-authors";
import {
  getPracticeGuidesForBlog,
} from "@/lib/blog-guide-companions";

export { BLOG_CATEGORY_REGISTRY as BLOG_CATEGORIES };
export type { BlogCategorySlug };
export {
  getAllBlogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
  getPublishedPostBySlug,
  getFeaturedPost,
  getLatestPosts,
  getPostsByCategory,
  getRecommendedPosts,
  resolveRelatedPosts,
  getCategoryBySlug,
  getCategoryName,
  getCategoryName as getCategoryTitle,
  getCategoryPath,
  getCategoryMeta,
  getAllCategorySlugs,
  getPostsByCategorySlug,
  BLOG_CATEGORY_BASE_PATH,
  getManualRelatedPosts,
  getRelatedPostsByCategory,
  getRelatedPostsByTags,
  getFallbackRelatedPosts,
  getSuggestedRelatedPosts,
  resolveBlogAuthor,
  getPracticeGuidesForBlog,
};

export const BLOG_BASE_PATH = "/resources/blog" as const;

export const BLOG_META = {
  path: BLOG_BASE_PATH,
  metaTitle: "Blog",
  metaDescription:
    "Claims Ninja blog: expert guidance on insurance supplementing, carrier estimates, claim documentation, and contractor revenue recovery — without adding in-house overhead.",
} as const;

export const BLOG_HERO = {
  eyebrow: "Resources",
  title: "Claim recovery intelligence for contractors",
  description:
    "Practical education on insurance supplementing, estimate accuracy, documentation, and building a stronger recovery engine — from the team that helps contractors maximize claim payouts as an outsourced claims partner.",
} as const;

export const BLOG_FEATURED_SECTION = {
  eyebrow: "Featured",
  title: "Start here",
  description:
    "Our most comprehensive guides on supplement strategy, carrier gaps, and contractor revenue recovery.",
} as const;

export const BLOG_CATEGORY_SECTION = {
  eyebrow: "Topics",
  title: "Browse by category",
  description:
    "Filter articles by the claim workflow topics that matter most to your operation.",
} as const;

export const BLOG_EXPLORE_TOPICS_SECTION = {
  eyebrow: "Topic hubs",
  title: "Explore by topic",
  description:
    "Dedicated category pages with curated articles on supplements, estimating, documentation, and contractor claim recovery.",
} as const;

export const BLOG_CATEGORY_RELATED_SECTION = {
  eyebrow: "More topics",
  title: "Explore related categories",
  description: "Continue building topical depth across claims operations and recovery.",
} as const;

export const BLOG_LATEST_SECTION = {
  eyebrow: "Latest",
  title: "Recent articles",
  description: "Fresh perspectives on supplements, documentation, and carrier negotiations.",
} as const;

export const BLOG_RECOMMENDED_SECTION = {
  eyebrow: "Recommended",
  title: "Popular reads",
  description:
    "High-impact articles contractors return to when scaling supplement volume or evaluating partnership.",
} as const;

export const BLOG_POST_CTA = {
  eyebrow: "Partner with Claims Ninja",
  title: "Ready to recover more on your next claim?",
  description:
    "Get a free claim review. We assess scope gaps, documentation, and supplement opportunities — then outline a recovery plan aligned with your operation.",
} as const;

export const BLOG_HUB_CTA = {
  eyebrow: "Put this knowledge to work",
  title: "Start with a free claim review",
  description:
    "Tell us about your operation. We'll assess your claim workflow, identify recovery opportunities, and outline how outsourced supplementing fits your team.",
} as const;

export const BLOG_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export const BLOG_ANCHOR_SCROLL_CLASS =
  "scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32";

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getBlogPostPath(slug: string): string {
  return `${BLOG_BASE_PATH}/${slug}`;
}
