import { buildCategoryCollectionSchema } from "@/lib/blog-category-seo";
import type { BlogCategory } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";

type BlogCategoryJsonLdProps = {
  category: BlogCategory;
  posts: readonly BlogPost[];
};

export function BlogCategoryJsonLd({ category, posts }: BlogCategoryJsonLdProps) {
  const schema = buildCategoryCollectionSchema({
    category,
    postCount: posts.length,
    posts,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
