import Link from "next/link";

import type { Guide } from "@/lib/guide-data";
import {
  buildGuideBlogLinks,
  buildGuideGuideLinks,
} from "@/lib/guide-related";
import { FAQ_ITEMS } from "@/lib/faq-data";

type GuideRelatedResourcesProps = {
  guide: Guide;
};

export function GuideRelatedResources({ guide }: GuideRelatedResourcesProps) {
  const guideLinks = buildGuideGuideLinks(guide);
  const blogLinks = buildGuideBlogLinks(guide);
  const faqLinks = (guide.faqIds ?? [])
    .map((id) => FAQ_ITEMS.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const customLinks = guide.relatedResources ?? [];

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
        Related resources
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {guideLinks.length > 0 ? (
          <ResourceGroup title="Other guides">
            {guideLinks.map((link) => (
              <ResourceLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ResourceGroup>
        ) : null}
        {blogLinks.length > 0 ? (
          <ResourceGroup title="Learn the strategy">
            {blogLinks.map((link) => (
              <ResourceLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ResourceGroup>
        ) : null}
        {faqLinks.length > 0 ? (
          <ResourceGroup title="FAQ">
            {faqLinks.map((item) => (
              <ResourceLink
                key={item.id}
                href={`/faq#faq-${item.id}`}
                label={item.question}
              />
            ))}
          </ResourceGroup>
        ) : null}
        {customLinks.length > 0 ? (
          <ResourceGroup title="More resources">
            {customLinks.map((link) => (
              <ResourceLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ResourceGroup>
        ) : null}
        {guide.relatedSolutionPath ? (
          <ResourceGroup title="Solutions">
            <ResourceLink href={guide.relatedSolutionPath} label="Claims Ninja solution page" />
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
