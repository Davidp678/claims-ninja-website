import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactInquirySection } from "@/components/contact/ContactInquirySection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA_LINKS } from "@/lib/constants";
import { CONTACT_HERO } from "@/lib/contact-page";
import { SITE_FAQ } from "@/lib/site-faq-selections";

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

      <ContactInfoSection />

      <SiteFaqSection {...SITE_FAQ.contact} />

      <MarketingCtaPanel />
    </>
  );
}
