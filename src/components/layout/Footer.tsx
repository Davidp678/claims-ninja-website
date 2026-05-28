import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const footerLinkClass =
  "text-sm font-medium text-zinc-300 transition-colors hover:text-white";

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterNavLink({ link }: { link: FooterLinkItem }) {
  if (link.external || link.href.startsWith("http")) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={footerLinkClass}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={footerLinkClass}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/12 bg-brand-black">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={120}
                height={120}
                className="h-20 w-20"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              The Claims Ninja ensures you get maximum compensation. As an
              insurance supplementing company, we handle everything: thorough
              claim assessments, contractor settlement agreements, detailed
              documentation, and expert negotiation with insurance companies. If
              needed, we provide appraisal representation, advocating for your
              best interests.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Resources
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
            <a href={`tel:${SITE.phone}`} className="font-medium hover:text-white">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="font-medium hover:text-white">
              {SITE.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
