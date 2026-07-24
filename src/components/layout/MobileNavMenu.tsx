"use client";

import Link from "next/link";
import { useState } from "react";
import { CTA_LINKS } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import { ES_CTA_LABELS } from "@/lib/i18n/es-navigation";
import type { NavEntry } from "@/lib/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

type MobileNavMenuProps = {
  nav: readonly NavEntry[];
  locale?: Locale;
  onNavigate?: () => void;
};

export function MobileNavMenu({
  nav,
  locale = "en",
  onNavigate,
}: MobileNavMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (label: string) => {
    setExpanded((current) => (current === label ? null : label));
  };

  return (
    <ul className="flex flex-col gap-1 px-5 py-6">
      {nav.map((entry) => {
        if (entry.type === "link") {
          return (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-200 hover:bg-white/8"
                onClick={onNavigate}
              >
                {entry.label}
              </Link>
            </li>
          );
        }

        const isOpen = expanded === entry.label;

        return (
          <li key={entry.label}>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-zinc-200 hover:bg-white/8"
              aria-expanded={isOpen}
              onClick={() => toggle(entry.label)}
            >
              {entry.label}
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" />
              </svg>
            </button>
            {isOpen ? (
              <ul className="mt-1 space-y-1 border-l border-white/10 pl-4">
                {entry.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 hover:bg-white/8"
                      onClick={onNavigate}
                    >
                      <span className="block text-base font-medium text-white">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-zinc-400">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}

      <li className="mt-4 space-y-3 px-4 md:hidden">
        <Button
          href={CTA_LINKS.schedule}
          size="sm"
          external
          className="w-full rounded-full"
          onClick={onNavigate}
        >
          {locale === "es" ? ES_CTA_LABELS.scheduleCall : "Schedule Call"}
        </Button>
      </li>
    </ul>
  );
}
