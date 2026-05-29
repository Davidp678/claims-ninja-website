import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { HeroVideoCard } from "@/components/sections/HeroVideoCard";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CLIENT_PORTAL_CAPABILITIES,
  CLIENT_PORTAL_CTA,
  CLIENT_PORTAL_FIELD,
  CLIENT_PORTAL_HERO,
  CLIENT_PORTAL_TRUST,
  CLIENT_PORTAL_WORKFLOW,
} from "@/lib/client-portal-page";
import { CLIENT_PORTAL_HERO_VIDEO } from "@/lib/constants";

const FEATURE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export function ClientPortalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 grid grid-cols-1 gap-8 pb-10 pt-24 sm:gap-10 sm:pb-12 sm:pt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:items-center lg:gap-x-16 lg:pb-14 lg:pt-24">
          <div className="max-w-2xl lg:col-start-1 lg:max-w-none">
            <SectionHeading
              eyebrow={CLIENT_PORTAL_HERO.eyebrow}
              title={CLIENT_PORTAL_HERO.title}
              description={CLIENT_PORTAL_HERO.description}
              align="left"
              className="max-w-none"
            />
            <ConversionCtaGroup
              className="mt-10 lg:mt-12"
              size="md"
              primaryLabel="Begin Claim Intake"
              secondaryLabel="Schedule Strategy Call"
            />
          </div>
          <div className="w-full lg:col-start-2 lg:mt-2">
            <HeroVideoCard
              embedSrc={CLIENT_PORTAL_HERO_VIDEO.embedUrl}
              title="Client portal demo"
              mediaAspect={CLIENT_PORTAL_HERO_VIDEO.mediaAspectClass}
            />
          </div>
        </Container>
      </section>

      <Section bordered>
        <SectionHeading
          eyebrow={CLIENT_PORTAL_CAPABILITIES.eyebrow}
          title={CLIENT_PORTAL_CAPABILITIES.title}
          description={CLIENT_PORTAL_CAPABILITIES.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_PORTAL_CAPABILITIES.items.map((capability) => (
            <li key={capability.title} className={FEATURE_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {capability.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={CLIENT_PORTAL_WORKFLOW.eyebrow}
          title={CLIENT_PORTAL_WORKFLOW.title}
          description={CLIENT_PORTAL_WORKFLOW.description}
          align="left"
          className="max-w-3xl"
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {CLIENT_PORTAL_WORKFLOW.steps.map((item) => (
            <li key={item.step} className={`group relative ${FEATURE_CARD_CLASS}`}>
              <span className="font-display text-4xl font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={CLIENT_PORTAL_FIELD.eyebrow}
          title={CLIENT_PORTAL_FIELD.title}
          description={CLIENT_PORTAL_FIELD.description}
          align="left"
          className="max-w-3xl"
        />
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-zinc-300">
          {CLIENT_PORTAL_FIELD.body}
        </p>
        <ul className="mt-10 space-y-4">
          {CLIENT_PORTAL_FIELD.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 rounded-xl border border-white/12 bg-brand-surface/60 px-5 py-4 text-sm leading-relaxed text-zinc-300"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-light"
                aria-hidden
              />
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={CLIENT_PORTAL_TRUST.eyebrow}
          title={CLIENT_PORTAL_TRUST.title}
          description={CLIENT_PORTAL_TRUST.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 space-y-4">
          {CLIENT_PORTAL_TRUST.roles.map((role) => (
            <li
              key={role}
              className="flex gap-3 rounded-xl border border-white/12 bg-brand-surface/60 px-5 py-4 text-sm leading-relaxed text-zinc-300"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-light"
                aria-hidden
              />
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-400">
          {CLIENT_PORTAL_TRUST.closing}
        </p>
      </Section>

      <MarketingCtaPanel
        eyebrow={CLIENT_PORTAL_CTA.eyebrow}
        title={CLIENT_PORTAL_CTA.title}
        description={CLIENT_PORTAL_CTA.description}
      />
    </>
  );
}
