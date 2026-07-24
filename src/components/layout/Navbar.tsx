"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CTA_LINKS, SITE } from "@/lib/constants";
import { ES_CTA_LABELS, getLocalizedMainNav } from "@/lib/i18n/es-navigation";
import { localizePath } from "@/lib/i18n/paths";
import { useMarketingLocale } from "@/lib/i18n/use-marketing-locale";
import { MAIN_NAV } from "@/lib/navigation";
import { cn } from "@/lib/cn";

import { LanguageToggle } from "./LanguageToggle";
import { MobileNavMenu } from "./MobileNavMenu";
import { NavDropdown } from "./NavDropdown";

export function Navbar() {
  const locale = useMarketingLocale();
  const nav = locale === "es" ? getLocalizedMainNav() : MAIN_NAV;
  const homeHref = localizePath(locale, "/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/12 bg-brand-black/90 py-2 backdrop-blur-xl"
          : "border-b border-white/10 bg-transparent py-3",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link
          href={homeHref}
          className="flex shrink-0 items-center"
          aria-label={SITE.name}
        >
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={160}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <ul className="hidden items-center gap-5 md:flex lg:gap-7">
          {nav.map((entry) =>
            entry.type === "dropdown" ? (
              <NavDropdown
                key={entry.label}
                label={entry.label}
                items={entry.items}
                align={entry.label === "Company" ? "end" : "start"}
              />
            ) : (
              <li key={entry.href}>
                <Link
                  href={entry.href}
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {entry.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden shrink-0 items-center gap-3 md:flex md:gap-4">
          <LanguageToggle />
          <Link
            href="/login"
            className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            {locale === "es" ? "Iniciar sesión" : "Log in"}
          </Link>
          <a
            href={CTA_LINKS.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-brand-red px-3.5 text-sm font-medium text-white transition hover:bg-brand-red/10"
          >
            {locale === "es" ? ES_CTA_LABELS.scheduleCall : "Schedule Call"}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <LanguageToggle compact />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/18 text-white"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
              aria-hidden
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[3.75rem] z-40 overflow-y-auto bg-brand-black/95 backdrop-blur-xl transition-opacity md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <MobileNavMenu
          nav={nav}
          locale={locale}
          onNavigate={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
}
