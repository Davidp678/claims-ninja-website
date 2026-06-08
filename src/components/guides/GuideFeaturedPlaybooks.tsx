import Link from "next/link";

import type { Guide } from "@/lib/guide-data";
import { GUIDE_CARD_CLASS, getGuidePathForGuide } from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";
import { cn } from "@/lib/cn";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { GuideTypeBadge } from "./GuideTypeBadge";

type GuideFeaturedPlaybooksProps = {
  guides: readonly Guide[];
  locale?: Locale;
};

export function GuideFeaturedPlaybooks({
  guides,
  locale = "en",
}: GuideFeaturedPlaybooksProps) {
  const section = getResourcesContent(locale).guides.featuredSection;
  if (guides.length === 0) return null;

  const [primary, ...secondary] = guides;

  return (
    <>
      {primary ? <GuideFeaturedPlaybookBanner guide={primary} /> : null}
      {secondary.length > 0 ? (
        <Section bordered compact className="pt-0">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            align="left"
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {secondary.map((guide) => (
              <li key={`${guide.category}-${guide.slug}`}>
                <GuideFeaturedCompactCard guide={guide} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}

export function GuideFeaturedPlaybookBanner({ guide }: { guide: Guide }) {
  const href = getGuidePathForGuide(guide);

  return (
    <Section bordered compact className="pb-8">
      <div className="relative overflow-hidden rounded-2xl border border-brand-red/30 bg-gradient-to-br from-brand-red/15 via-brand-surface to-brand-black p-8 sm:p-10 lg:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            Essential playbook
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <GuideTypeBadge type={guide.guideType} />
            <span className="text-xs text-zinc-500">{guide.estimatedMinutes} min execution</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            {guide.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">{guide.excerpt}</p>
          <Link
            href={href}
            className="mt-8 inline-flex items-center rounded-full border border-brand-red/40 bg-brand-red/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-red/60 hover:bg-brand-red/25"
          >
            Open guide →
          </Link>
        </div>
      </div>
    </Section>
  );
}

function GuideFeaturedCompactCard({ guide }: { guide: Guide }) {
  const href = getGuidePathForGuide(guide);

  return (
    <Link
      href={href}
      className={cn("group flex h-full flex-col", GUIDE_CARD_CLASS, "p-5")}
    >
      <GuideTypeBadge type={guide.guideType} />
      <h3 className="mt-3 font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
        {guide.title}
      </h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-zinc-400">{guide.excerpt}</p>
      <p className="mt-4 text-sm font-medium text-brand-red-light transition-colors group-hover:text-white">
        Open guide →
      </p>
    </Link>
  );
}
