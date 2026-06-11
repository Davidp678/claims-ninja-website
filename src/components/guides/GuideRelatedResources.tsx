import Link from "next/link";

import type { Guide } from "@/lib/guide-data";
import { getBlogPostBySlug, getBlogPostPath } from "@/lib/blog-page";
import { getGuideDetailUi, getLocalizedGuideSummary } from "@/lib/guide-display";
import { getLocalizedGuidePath } from "@/lib/guide-localization";
import { resolveRelatedGuides } from "@/lib/guide-related";
import type { Locale } from "@/lib/i18n/config";
import { getBlogTitleEs } from "@/lib/i18n/content/blog-titles-es";
import { getLocalizedFaqItems } from "@/lib/i18n/content/faq";
import { localizePath } from "@/lib/i18n/paths";

type GuideRelatedResourcesProps = {
  guide: Guide;
  locale?: Locale;
};

export function GuideRelatedResources({ guide, locale = "en" }: GuideRelatedResourcesProps) {
  const detailUi = getGuideDetailUi(locale);
  const guideLinks = resolveRelatedGuides(guide).map((related) => ({
    label: getLocalizedGuideSummary(related, locale).title,
    href: getLocalizedGuidePath(related, locale),
  }));
  const blogLinks = guide.relatedBlogSlugs
    .map((slug) => {
      const post = getBlogPostBySlug(slug);
      if (!post) return null;
      return {
        label: locale === "es" ? getBlogTitleEs(slug, post.title) : post.title,
        href: getBlogPostPath(slug),
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const faqLinks = (guide.faqIds ?? [])
    .map((id) => getLocalizedFaqItems([id], locale)[0])
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const customLinks = (guide.relatedResources ?? []).map((link) => ({
    ...link,
    href: localizePath(locale, link.href),
  }));

  const hasContent =
    guideLinks.length > 0 ||
    blogLinks.length > 0 ||
    faqLinks.length > 0 ||
    customLinks.length > 0 ||
    guide.relatedSolutionPath;

  if (!hasContent) return null;

  return (
    <section aria-labelledby="guide-related-heading">
      <h2
        id="guide-related-heading"
        className="font-display text-xl font-semibold text-white sm:text-2xl"
      >
        {detailUi.relatedResources}
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {guideLinks.length > 0 ? (
          <ResourceGroup title={detailUi.otherGuides}>
            {guideLinks.map((link) => (
              <ResourceLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ResourceGroup>
        ) : null}
        {blogLinks.length > 0 ? (
          <ResourceGroup title={detailUi.learnStrategy}>
            {blogLinks.map((link) => (
              <ResourceLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ResourceGroup>
        ) : null}
        {faqLinks.length > 0 ? (
          <ResourceGroup title={detailUi.faqSection}>
            {faqLinks.map((item) => (
              <ResourceLink
                key={item.id}
                href={`${localizePath(locale, "/faq")}#faq-${item.id}`}
                label={item.question}
              />
            ))}
          </ResourceGroup>
        ) : null}
        {customLinks.length > 0 ? (
          <ResourceGroup title={detailUi.moreResources}>
            {customLinks.map((link) => (
              <ResourceLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ResourceGroup>
        ) : null}
        {guide.relatedSolutionPath ? (
          <ResourceGroup title={detailUi.solutions}>
            <ResourceLink
              href={localizePath(locale, guide.relatedSolutionPath)}
              label={detailUi.solutionPage}
            />
          </ResourceGroup>
        ) : null}
      </div>
    </section>
  );
}

function ResourceGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">{title}</h3>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-zinc-400 transition-colors hover:text-brand-red-light"
      >
        {label} →
      </Link>
    </li>
  );
}
