import type { Guide } from "@/lib/guide-data";
import { getGuideDetailUi, getLocalizedGuideCategory } from "@/lib/guide-display";
import { getGuideCategoryPath } from "@/lib/guide-categories";
import type { Locale } from "@/lib/i18n/config";

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
  locale?: Locale;
};

export function GuideDetailPage({ guide, locale = "en" }: GuideDetailPageProps) {
  const detailUi = getGuideDetailUi(locale);
  const isChecklist = guide.guideType === "checklist";
  const processHeading = isChecklist ? detailUi.executionChecklist : detailUi.processHeading;
  const category = getLocalizedGuideCategory(guide.category, locale);

  return (
    <>
      {locale === "en" ? <GuideHowToJsonLd guide={guide} /> : null}
      <GuideDetailHero guide={guide} locale={locale} />
      <Section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <GuideBreadcrumbs
            categoryLabel={category.name}
            categoryPath={getGuideCategoryPath(guide.category)}
            currentLabel={guide.title}
            locale={locale}
          />

          <div className="mt-10 space-y-12">
            <section>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {detailUi.purpose}
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-300">{guide.purpose}</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {detailUi.whenToUse}
              </h2>
              <ul className="mt-4 space-y-3">
                {guide.whenToUse.map((trigger) => (
                  <li
                    key={trigger.condition}
                    className="rounded-xl border border-white/10 bg-brand-surface/40 p-4"
                  >
                    <p className="text-sm font-medium text-white">{trigger.condition}</p>
                    {trigger.signal ? (
                      <p className="mt-1 text-sm text-zinc-400">
                        {detailUi.signalPrefix} {trigger.signal}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            {guide.prerequisites && guide.prerequisites.length > 0 ? (
              <section>
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {detailUi.prerequisites}
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
              title={detailUi.requiredDocumentation}
              items={guide.requiredDocumentation}
            />

            {isChecklist && guide.qualityGates && guide.qualityGates.length > 0 ? (
              <GuideChecklist title={detailUi.qualityGates} items={guide.qualityGates} />
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
                  <GuideStepBlock steps={guide.steps} locale={locale} />
                </div>
              </section>
            ) : null}

            {!isChecklist && guide.qualityGates && guide.qualityGates.length > 0 ? (
              <GuideChecklist
                title={
                  guide.guideType === "documentation-standard"
                    ? detailUi.documentationQcChecklist
                    : detailUi.qualityGates
                }
                items={guide.qualityGates}
              />
            ) : null}

            <section>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {detailUi.commonMistakes}
              </h2>
              <div className="mt-5">
                <GuideMistakesTable mistakes={guide.commonMistakes} locale={locale} />
              </div>
            </section>

            {guide.supplementOpportunities && guide.supplementOpportunities.length > 0 ? (
              <GuideSupplementCallout
                opportunities={guide.supplementOpportunities}
                locale={locale}
              />
            ) : null}

            <GuideRelatedResources guide={guide} locale={locale} />
          </div>
        </Container>
      </Section>
      <GuideDetailFaq faq={guide.faq} faqIds={guide.faqIds} locale={locale} />
    </>
  );
}
