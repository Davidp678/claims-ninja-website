import type { BlogSection } from "@/lib/blog-data";
import { BLOG_ANCHOR_SCROLL_CLASS } from "@/lib/blog-page";
import { cn } from "@/lib/cn";

type BlogTableOfContentsProps = {
  sections: readonly BlogSection[];
};

export function BlogTableOfContents({ sections }: BlogTableOfContentsProps) {
  const tocSections = sections.filter((section) => (section.level ?? 2) === 2);

  if (tocSections.length < 2) {
    return null;
  }

  return (
    <nav aria-label="Table of contents" className="lg:sticky lg:top-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        On this page
      </p>
      <ol className="mt-4 space-y-2 border-l border-white/10 pl-4">
        {tocSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "text-sm text-zinc-400 transition-colors hover:text-brand-red-light",
                BLOG_ANCHOR_SCROLL_CLASS,
              )}
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
