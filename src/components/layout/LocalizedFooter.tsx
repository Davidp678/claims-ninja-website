"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { translateFooterLabel } from "@/lib/i18n/es-navigation";
import { localizePath } from "@/lib/i18n/paths";
import { useMarketingLocale } from "@/lib/i18n/use-marketing-locale";
import { Container } from "@/components/ui/Container";

import { FooterSocialLinks } from "./FooterSocialLinks";

const footerLinkClass =
  "text-sm font-medium text-zinc-300 transition-colors hover:text-white";

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterNavLink({
  link,
  locale,
}: {
  link: FooterLinkItem;
  locale: ReturnType<typeof useMarketingLocale>;
}) {
  const label =
    locale === "es" ? translateFooterLabel(link.label) : link.label;
  const href =
    link.external || link.href.startsWith("http")
      ? link.href
      : localizePath(locale, link.href);

  if (link.external || link.href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={footerLinkClass}
      >
        {label}
      </a>
    );
  }

  // Hash intake CTAs use a native anchor so same-page scroll is reliable.
  if (href.includes("#")) {
    return (
      <a href={href} className={footerLinkClass}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={footerLinkClass}>
      {label}
    </Link>
  );
}

function isOnboardingPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    pathname === "/onboarding" ||
    pathname.startsWith("/onboarding/") ||
    pathname === "/es/onboarding" ||
    pathname.startsWith("/es/onboarding/")
  );
}

export function LocalizedFooter() {
  const locale = useMarketingLocale();
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const homeHref = localizePath(locale, "/");

  if (isOnboardingPath(pathname)) {
    return null;
  }

  return (
    <footer className="border-t border-white/12 bg-brand-black">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={homeHref} className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={120}
                height={120}
                className="h-20 w-20"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-300">
              {locale === "es"
                ? "The Claims Ninja le ayuda a obtener la máxima compensación. Como empresa de suplementos de seguros, gestionamos evaluaciones, documentación y negociación experta con las aseguradoras. Apoyamos reclamaciones de seguros residenciales, comerciales y de grandes pérdidas en todo el país."
                : "The Claims Ninja ensures you get maximum compensation. As an insurance supplementing company, we handle everything: thorough claim assessments, contractor settlement agreements, detailed documentation, and expert negotiation with insurance companies. When additional advocacy is required, our Public Adjuster team provides policyholder representation and strategic claim support to help achieve the best possible outcome. We support residential, commercial, and large-loss insurance claims nationwide."}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300">
              {locale === "es" ? "Empresa" : "Company"}
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} locale={locale} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300">
              {locale === "es" ? "Recursos" : "Resources"}
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} locale={locale} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/12 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-zinc-400">
            © {year} {SITE.name}.{" "}
            {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <FooterSocialLinks />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
              <a
                href="tel:+16154792438"
                className="font-medium transition-colors hover:text-white"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
