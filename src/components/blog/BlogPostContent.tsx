import Link from "next/link";

import type { BlogSection } from "@/lib/blog-data";
import { BLOG_ANCHOR_SCROLL_CLASS } from "@/lib/blog-page";
import { cn } from "@/lib/cn";
import { isExternalHref, opensStartHereInNewTab } from "@/lib/urls";

const sectionLinkClass =
  "text-sm font-medium text-brand-red-light transition-colors hover:text-white";

type BlogPostContentProps = {
  sections: readonly BlogSection[];
};

export function BlogPostContent({ sections }: BlogPostContentProps) {
  return (
    <article className="blog-prose max-w-none">
      {sections.map((section) => {
        const level = section.level ?? 2;
        const HeadingTag = level === 3 ? "h3" : "h2";

        return (
          <section
            key={section.id}
            id={section.id}
            className={cn(BLOG_ANCHOR_SCROLL_CLASS, "scroll-mt-28")}
          >
            <HeadingTag
              className={cn(
                "font-display font-semibold text-white",
                level === 3
                  ? "mt-10 text-xl sm:text-2xl"
                  : "mt-12 text-2xl first:mt-0 sm:text-3xl",
              )}
            >
              {section.heading}
            </HeadingTag>

            {section.paragraphs?.map((paragraph, index) => (
              <p
                key={`${section.id}-p-${index}`}
                className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && section.bullets.length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-zinc-300 sm:text-lg">
                {section.bullets.map((item, index) => (
                  <li key={`${section.id}-b-${index}`} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.callout ? (
              <aside className="mt-6 rounded-xl border border-brand-red/35 bg-brand-red/10 p-5 sm:p-6">
                {section.callout.title ? (
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-brand-red-light">
                    {section.callout.title}
                  </p>
                ) : null}
                <p
                  className={cn(
                    "text-sm leading-relaxed text-zinc-200 sm:text-base",
                    section.callout.title && "mt-2",
                  )}
                >
                  {section.callout.body}
                </p>
              </aside>
            ) : null}

            {section.links && section.links.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {isExternalHref(link.href) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={sectionLinkClass}
                      >
                        {link.label} →
                      </a>
                    ) : opensStartHereInNewTab(link.href) ? (
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={sectionLinkClass}
                      >
                        {link.label} →
                      </Link>
                    ) : (
                      <Link href={link.href} className={sectionLinkClass}>
                        {link.label} →
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        );
      })}
    </article>
  );
}
