import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { BlogPost } from "@/lib/blog-data";
import { resolveRelatedPosts } from "@/lib/blog-page";

import { BlogPostingJsonLd } from "./BlogPostingJsonLd";
import { BlogBackLink } from "./BlogBackLink";
import { BlogPostContent } from "./BlogPostContent";
import { BlogPostCta } from "./BlogPostCta";
import { BlogPostFaq } from "./BlogPostFaq";
import { BlogPostHero } from "./BlogPostHero";
import { BlogRelatedPosts } from "./BlogRelatedPosts";
import { BlogTableOfContents } from "./BlogTableOfContents";

type BlogPostPageProps = {
  post: BlogPost;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
  const relatedPosts = resolveRelatedPosts(post);

  return (
    <>
      <BlogPostingJsonLd post={post} />
      <BlogPostHero post={post} />
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="mb-8">
            <BlogBackLink />
          </div>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
            <div className="hidden lg:block">
              <BlogTableOfContents sections={post.sections} />
            </div>
            <div className="min-w-0 max-w-3xl">
              <BlogPostContent sections={post.sections} />
              <BlogPostCta />
            </div>
          </div>
        </Container>
      </Section>
      <BlogPostFaq faq={post.faq} faqIds={post.faqIds} />
      <BlogRelatedPosts posts={relatedPosts} />
    </>
  );
}
