import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { ContactInquirySection } from "@/components/contact/ContactInquirySection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { CTA_LINKS, SITE } from "@/lib/constants";
import {
  CONTACT_HERO,
  CONTACT_INFO,
} from "@/lib/contact-page";
import { SITE_FAQ } from "@/lib/site-faq-selections";
import { cn } from "@/lib/cn";

function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              {CONTACT_HERO.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {CONTACT_HERO.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {CONTACT_HERO.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#contact-form" size="md" className="whitespace-nowrap">
                {CONTACT_HERO.primaryCtaLabel}
              </Button>
              <Button
                href={CTA_LINKS.schedule}
                variant="secondary"
                size="md"
                className="whitespace-nowrap"
                external
              >
                {CONTACT_HERO.secondaryCtaLabel}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ContactInquirySection />

      <Section bordered compact>
        <SectionHeading
          eyebrow={CONTACT_INFO.eyebrow}
          title={CONTACT_INFO.title}
          description={CONTACT_INFO.description}
          align="left"
          className="max-w-3xl"
        />
        <div
          className={cn(
            ABOUT_CARD_CLASS,
            "mt-10 max-w-2xl border-brand-red/25 bg-brand-black/60 p-8 sm:p-10",
            "shadow-[0_0_64px_-24px_rgba(220,38,38,0.35)]",
          )}
        >
          <dl className="space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={phoneHref(SITE.phone)}
                  className="font-display text-2xl font-semibold text-white transition-colors hover:text-brand-red-light sm:text-3xl"
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-lg font-medium text-white transition-colors hover:text-brand-red-light sm:text-xl"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <SiteFaqSection {...SITE_FAQ.contact} />

      <MarketingCtaPanel />
    </>
  );
}
