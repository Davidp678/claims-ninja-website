import type { Guide } from "@/lib/guide-data";
import { getGuideCategoryPath } from "@/lib/guide-categories";
import { getGuideCategoryName } from "@/lib/guide-page";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

import { GuideBreadcrumbs } from "./GuideBreadcrumbs";
import { GuideChecklist } from "./GuideChecklist";
import { GuideDetailFaq } from "./GuideDetailFaq";
import { GuideDetailHero } from "./GuideDetailHero";
import { GuideHowToJsonLd } from "./GuideHowToJsonLd";
import { GuideMistakesTable } from "./GuideMistakesTable";
import { GuideRelatedResources } from "./GuideRelatedResources";
import { GuideStepBlock } from "./GuideStepBlock";
import { GuideSupplementCallout } from "./GuideSupplementCallout";

type GuideDetailPageProps = {
  guide: Guide;
};

export function GuideDetailPage({ guide }: GuideDetailPageProps) {
  const isChecklist = guide.guideType === "checklist";
  const processHeading = isChecklist ? "Execution checklist" : "Step-by-step process";

  return (
    <>
      <GuideHowToJsonLd guide={guide} />
      <GuideDetailHero guide={guide} />
      <Section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <GuideBreadcrumbs
            categoryLabel={getGuideCategoryName(guide.category)}
            categoryPath={getGuideCategoryPath(guide.category)}
            currentLabel={guide.title}
          />

          <div className="mt-10 space-y-12">
            <section>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">Purpose</h2>
              <p className="mt-4 leading-relaxed text-zinc-300">{guide.purpose}</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                When to use
              </h2>
              <ul className="mt-4 space-y-3">
                {guide.whenToUse.map((trigger) => (
                  <li
                    key={trigger.condition}
                    className="rounded-xl border border-white/10 bg-brand-surface/40 p-4"
                  >
                    <p className="text-sm font-medium text-white">{trigger.condition}</p>
                    {trigger.signal ? (
                      <p className="mt-1 text-sm text-zinc-400">Signal: {trigger.signal}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            {guide.prerequisites && guide.prerequisites.length > 0 ? (
              <section>
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  Prerequisites
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  {guide.prerequisites.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            <GuideChecklist
              id="required-documentation"
              title="Required documentation"
              items={guide.requiredDocumentation}
            />

            {isChecklist && guide.qualityGates && guide.qualityGates.length > 0 ? (
              <GuideChecklist title="Quality gates" items={guide.qualityGates} />
            ) : null}

            {guide.steps.length > 0 ? (
              <section id="process">
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {processHeading}
                </h2>
                <div
                  className={cn(
                    "mt-6",
                    isChecklist && "rounded-2xl border border-white/10 bg-brand-surface/30 p-6",
                  )}
                >
                  <GuideStepBlock steps={guide.steps} />
                </div>
              </section>
            ) : null}

            {!isChecklist && guide.qualityGates && guide.qualityGates.length > 0 ? (
              <GuideChecklist
                title={
                  guide.guideType === "documentation-standard"
                    ? "Documentation quality control checklist"
                    : "Quality gates"
                }
                items={guide.qualityGates}
              />
            ) : null}

            <section>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                Common mistakes
              </h2>
              <div className="mt-5">
                <GuideMistakesTable mistakes={guide.commonMistakes} />
              </div>
            </section>

            {guide.supplementOpportunities && guide.supplementOpportunities.length > 0 ? (
              <GuideSupplementCallout opportunities={guide.supplementOpportunities} />
            ) : null}

            <GuideRelatedResources guide={guide} />
          </div>
        </Container>
      </Section>
      <GuideDetailFaq faq={guide.faq} faqIds={guide.faqIds} />
    </>
  );
}
