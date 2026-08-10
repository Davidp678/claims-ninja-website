import type { BlogCategory } from "@/lib/blog-categories";
import { getCategoryPath } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { getBlogPostPath } from "@/lib/blog-page";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { getAbsoluteUrl } from "@/lib/site-seo";

type BuildCategoryCollectionSchemaInput = {
  category: BlogCategory;
  postCount: number;
  posts: readonly BlogPost[];
  locale?: Locale;
};

export function buildCategoryCollectionSchema({
  category,
  postCount,
  posts,
  locale = "en",
}: BuildCategoryCollectionSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: getAbsoluteUrl(localizePath(locale, getCategoryPath(category.slug))),
    numberOfItems: postCount,
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      name: post.title,
      url: getAbsoluteUrl(getBlogPostPath(post.slug)),
    })),
  };
}
