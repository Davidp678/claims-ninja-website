import Link from "next/link";
import Image from "next/image";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { getPartnerLogo } from "@/lib/partners";
import {
  PARTNER_NETWORK_BECOME,
  PARTNER_NETWORK_BENEFITS,
  PARTNER_NETWORK_CARD_CLASS,
  PARTNER_NETWORK_ECOSYSTEM,
  PARTNER_NETWORK_HERO,
  PARTNER_NETWORK_PARTNERS,
  type PartnerCardConfig,
} from "@/lib/partner-network-page";
import { SITE_FAQ } from "@/lib/site-faq-selections";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-300">
          <span
            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-red-light"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PartnerLogo({ partnerId }: { partnerId: string }) {
  const logo = getPartnerLogo(partnerId);

  if (!logo) {
    return null;
  }

  return (
    <div className="flex h-16 items-center justify-center rounded-lg border border-white/10 bg-brand-black/40 px-4">
      <div className={`relative h-full w-full max-w-[180px] ${logo.wrapperClassName}`}>
        <Image
          src={logo.src}
          alt={logo.name}
          fill
          className={`object-contain ${logo.imageClassName}`}
          sizes="180px"
        />
        {logo.textOverlay ? (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]">
            {logo.textOverlay}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: PartnerCardConfig }) {
  return (
    <article
      className={cn(
        PARTNER_NETWORK_CARD_CLASS,
        "group flex h-full flex-col",
      )}
    >
      <PartnerLogo partnerId={partner.id} />
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-red-light">
        {partner.category}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-white transition-colors group-hover:text-brand-red-light">
        {partner.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
        {partner.description}
      </p>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
          {partner.bulletLabel}
        </p>
        <div className="mt-3">
          <BulletList items={partner.bullets} />
        </div>
      </div>
      <a
        href={partner.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm font-medium text-brand-red-light transition-colors hover:text-white"
      >
        {partner.ctaLabel}
      </a>
    </article>
  );
}

export function PartnerNetworkPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              {PARTNER_NETWORK_HERO.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {PARTNER_NETWORK_HERO.title}
            </h1>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {PARTNER_NETWORK_HERO.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <ConversionCtaGroup
              className="mt-10"
              size="md"
              primaryLabel="Begin Claim Intake"
              secondaryLabel="Schedule Strategy Call"
            />
          </div>
        </Container>
      </section>

      <Section bordered compact>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={PARTNER_NETWORK_ECOSYSTEM.eyebrow}
              title={PARTNER_NETWORK_ECOSYSTEM.title}
              align="left"
              className="max-w-none"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-300">
              {PARTNER_NETWORK_ECOSYSTEM.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside
            className={cn(
              PARTNER_NETWORK_CARD_CLASS,
              "border-brand-red/25 bg-brand-black/60 p-8 lg:self-center lg:p-10",
              "shadow-[0_0_64px_-24px_rgba(220,38,38,0.35)]",
            )}
          >
            <h3 className="font-display text-lg font-semibold text-white">
              {PARTNER_NETWORK_ECOSYSTEM.supportAreasTitle}
            </h3>
            <div className="mt-4">
              <BulletList items={PARTNER_NETWORK_ECOSYSTEM.supportAreas} />
            </div>
          </aside>
        </div>
      </Section>

      <Section bordered compact className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          title="Featured strategic partners"
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {PARTNER_NETWORK_PARTNERS.map((partner) => (
            <li key={partner.id}>
              <PartnerCard partner={partner} />
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered compact>
        <SectionHeading
          title={PARTNER_NETWORK_BENEFITS.title}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_NETWORK_BENEFITS.items.map((item) => (
            <li key={item.title} className={cn(PARTNER_NETWORK_CARD_CLASS, "group")}>
              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered compact className="bg-brand-elevated">
        <div className="max-w-3xl">
          <SectionHeading
            title={PARTNER_NETWORK_BECOME.title}
            align="left"
            className="max-w-none"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {PARTNER_NETWORK_BECOME.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={PARTNER_NETWORK_BECOME.ctaHref}
            className="mt-8 inline-block text-sm font-medium text-brand-red-light transition-colors hover:text-white"
          >
            {PARTNER_NETWORK_BECOME.ctaLabel} →
          </Link>
        </div>
      </Section>

      <SiteFaqSection {...SITE_FAQ.partnerNetwork} />
      <MarketingCtaPanel />
    </>
  );
}
