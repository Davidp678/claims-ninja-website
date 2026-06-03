import type { BlogCategory } from "@/lib/blog-categories";
import { getCategoryPath } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { getBlogPostPath } from "@/lib/blog-page";
import { getAbsoluteUrl } from "@/lib/site-seo";

type BuildCategoryCollectionSchemaInput = {
  category: BlogCategory;
  postCount: number;
  posts: readonly BlogPost[];
};

export function buildCategoryCollectionSchema({
  category,
  postCount,
  posts,
}: BuildCategoryCollectionSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: getAbsoluteUrl(getCategoryPath(category.slug)),
    numberOfItems: postCount,
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      name: post.title,
      url: getAbsoluteUrl(getBlogPostPath(post.slug)),
    })),
  };
}
