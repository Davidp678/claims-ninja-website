import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AI_CLAIM_WORKFLOW } from "@/lib/ai-claim-analysis-page";
import { aiClaimAnalysisPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

const WORKFLOW_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25";

const FEATURE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export function AiClaimAnalysisPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-32 lg:pt-36">
        <SectionHeading
          eyebrow={aiClaimAnalysisPage.eyebrow}
          title={aiClaimAnalysisPage.title}
          description={aiClaimAnalysisPage.description}
          align="left"
          className="max-w-3xl"
        />
      </Section>

      <Section bordered className="py-12 sm:py-14">
        <SectionHeading
          eyebrow={AI_CLAIM_WORKFLOW.eyebrow}
          title={AI_CLAIM_WORKFLOW.title}
          description={AI_CLAIM_WORKFLOW.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_CLAIM_WORKFLOW.cards.map((card) => (
            <li key={card.title} className={WORKFLOW_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-light"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered className="py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiClaimAnalysisPage.features.map((feature) => (
            <li key={feature.title} className={FEATURE_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <SiteFaqSection {...SITE_FAQ.aiClaimAnalysis} />
      <MarketingCtaPanel />
    </>
  );
}
