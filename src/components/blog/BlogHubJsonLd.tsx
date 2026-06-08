import { buildBlogHubCollectionSchema } from "@/lib/blog-seo";
import { getAllBlogPosts } from "@/lib/blog-registry";

export function BlogHubJsonLd() {
  const schema = buildBlogHubCollectionSchema(getAllBlogPosts());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
