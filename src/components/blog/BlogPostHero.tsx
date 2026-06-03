import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import type { BlogPost } from "@/lib/blog-data";
import { resolveBlogAuthor } from "@/lib/blog-authors";
import { getCategoryName } from "@/lib/blog-categories";
import { formatBlogDate } from "@/lib/blog-page";

type BlogPostHeroProps = {
  post: BlogPost;
};

export function BlogPostHero({ post }: BlogPostHeroProps) {
  const author = resolveBlogAuthor(post);

  return (
    <section
      aria-labelledby="blog-post-heading"
      className="relative overflow-hidden border-b border-white/10 bg-brand-black"
    >
      <HeroBackdrop />
      <Container className="relative z-10 max-w-3xl pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
          {getCategoryName(post.category)}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
          <time dateTime={post.publishedAt}>Published {formatBlogDate(post.publishedAt)}</time>
          {post.updatedAt ? (
            <>
              <span aria-hidden>·</span>
              <time dateTime={post.updatedAt}>Updated {formatBlogDate(post.updatedAt)}</time>
            </>
          ) : null}
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
        <h1
          id="blog-post-heading"
          className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-300">{post.excerpt}</p>
        <p className="mt-6 text-sm text-zinc-500">
          By{" "}
          <span className="font-medium text-zinc-300">{author.name}</span>
          {author.role ? <span className="text-zinc-500"> · {author.role}</span> : null}
        </p>
      </Container>
    </section>
  );
}
