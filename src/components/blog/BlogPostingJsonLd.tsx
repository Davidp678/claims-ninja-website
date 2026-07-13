import type { BlogPost } from "@/lib/blog-data";
import { buildBlogFaqSchema, buildBlogPostingSchema } from "@/lib/blog-seo";

type BlogPostingJsonLdProps = {
  post: BlogPost;
};

export function BlogPostingJsonLd({ post }: BlogPostingJsonLdProps) {
  const schema = buildBlogPostingSchema(post);
  const faqSchema = buildBlogFaqSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}
