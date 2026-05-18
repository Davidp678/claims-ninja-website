import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/12 bg-brand-black">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={64}
                height={64}
                className="h-12 w-12"
              />
              <span className="font-display text-lg font-semibold text-white">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              {SITE.tagline} Built for homeowners, property managers, and
              businesses navigating complex insurance claims.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
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
