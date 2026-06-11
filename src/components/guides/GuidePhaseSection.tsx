import Link from "next/link";

import type { Guide } from "@/lib/guide-data";
import {
  getGuideHubUi,
  getGuideTypeLabels,
  getLocalizedGuideSummary,
} from "@/lib/guide-display";
import { getLocalizedGuidePath } from "@/lib/guide-localization";
import { CLAIM_PHASES } from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";
import { getGuidesByPhaseGrouped } from "@/lib/guide-search";
import { getAllGuides } from "@/lib/guide-registry";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

import { GuideTypeBadge } from "./GuideTypeBadge";

type GuidePhaseSectionProps = {
  guides?: readonly Guide[];
};

export function GuidePhaseSection({
  guides: guidesProp,
  locale = "en",
}: GuidePhaseSectionProps & { locale?: Locale }) {
  const guidesContent = getResourcesContent(locale).guides;
  const hubUi = getGuideHubUi(locale);
  const typeLabels = getGuideTypeLabels(locale);
  const source = guidesProp ?? getAllGuides();
  const grouped = getGuidesByPhaseGrouped(source, 3);

  if (CLAIM_PHASES.every((phase) => !grouped[phase]?.length)) {
    return null;
  }

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={guidesContent.phaseSection.eyebrow}
        title={guidesContent.phaseSection.title}
        description={guidesContent.phaseSection.description}
        align="left"
      />
      <div className="mt-8 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible xl:grid-cols-6">
        {CLAIM_PHASES.map((phase) => {
          const phaseGuides = grouped[phase];
          if (!phaseGuides?.length) return null;

          return (
            <div
              key={phase}
              className={cn(
                "min-w-[240px] shrink-0 rounded-2xl border border-white/10 bg-brand-surface/60 p-5",
                "lg:min-w-0",
              )}
            >
              <span className="inline-block rounded-full border border-white/10 bg-brand-black/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                {guidesContent.phaseLabels[phase]}
              </span>
              <ul className="mt-4 space-y-3">
                {phaseGuides.map((guide) => {
                  const summary = getLocalizedGuideSummary(guide, locale);

                  return (
                    <li key={`${guide.category}-${guide.slug}`}>
                      <Link
                        href={getLocalizedGuidePath(guide, locale)}
                        className="group block rounded-xl border border-transparent p-2 transition-colors hover:border-white/10 hover:bg-brand-black/40"
                      >
                        <GuideTypeBadge type={guide.guideType} labels={typeLabels} className="mb-2" />
                        <p className="text-sm font-medium text-white transition-colors group-hover:text-brand-red-light">
                          {summary.title}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {guide.estimatedMinutes} {hubUi.minutesShort}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
