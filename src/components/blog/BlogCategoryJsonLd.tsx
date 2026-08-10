import { buildCategoryCollectionSchema } from "@/lib/blog-category-seo";
import type { BlogCategory } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import type { Locale } from "@/lib/i18n/config";

type BlogCategoryJsonLdProps = {
  category: BlogCategory;
  posts: readonly BlogPost[];
  locale?: Locale;
};

export function BlogCategoryJsonLd({
  category,
  posts,
  locale = "en",
}: BlogCategoryJsonLdProps) {
  const schema = buildCategoryCollectionSchema({
    category,
    postCount: posts.length,
    posts,
    locale,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
