import type { BlogPost } from "@/lib/blog-data";
import { buildBlogPostingSchema } from "@/lib/blog-seo";

type BlogPostingJsonLdProps = {
  post: BlogPost;
};

export function BlogPostingJsonLd({ post }: BlogPostingJsonLdProps) {
  const schema = buildBlogPostingSchema(post);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
