import { buildBlogHubCollectionSchema } from "@/lib/blog-seo";
import { getAllBlogPosts } from "@/lib/blog-registry";
import type { Locale } from "@/lib/i18n/config";

export function BlogHubJsonLd({ locale = "en" }: { locale?: Locale }) {
  const schema = buildBlogHubCollectionSchema(getAllBlogPosts(), locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
