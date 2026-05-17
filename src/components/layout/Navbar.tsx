"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function Navbar() {
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
          ? "border-b border-white/15 bg-brand-black/85 py-2 backdrop-blur-xl"
          : "bg-transparent py-3",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label={SITE.name}
        >
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={64}
            height={64}
            priority
            className="h-16 w-16"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Free claim review
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/18 text-white md:hidden"
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
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[88px] z-40 bg-brand-black/95 backdrop-blur-xl transition-opacity md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-200 hover:bg-white/8"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4 px-4">
            <Button href="#contact" className="w-full" onClick={() => setMenuOpen(false)}>
              Free claim review
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
