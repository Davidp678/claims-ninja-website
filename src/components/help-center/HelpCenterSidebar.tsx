"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/cn";
import { getArticlePath } from "@/lib/help-center/registry";
import type { HelpNavItem, HelpPortal } from "@/lib/help-center/types";

export function HelpCenterSidebar({
  portal,
  nav,
  onNavigate,
}: {
  portal: HelpPortal;
  nav: HelpNavItem[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(nav.map((n) => [n.sectionSlug, true])),
  );

  const toggle = (slug: string) => {
    setOpenSections((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <nav aria-label="Help center sections" className="space-y-1">
      {nav.map((section) => {
        const isOpen = openSections[section.sectionSlug] ?? true;
        return (
          <div key={section.sectionSlug} className="rounded-lg border border-white/8 bg-white/[0.02]">
            <button
              type="button"
              onClick={() => toggle(section.sectionSlug)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-semibold text-zinc-200 transition hover:text-white"
            >
              <span>{section.sectionTitle}</span>
              <span className="text-xs text-zinc-500">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <ul className="space-y-0.5 border-t border-white/8 px-2 py-2">
                {section.articles.map((article) => {
                  const href = getArticlePath(portal, section.sectionSlug, article.slug);
                  const active = pathname === href;
                  return (
                    <li key={article.slug}>
                      <Link
                        href={href}
                        onClick={onNavigate}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm transition",
                          active
                            ? "bg-brand-red-light/15 font-medium text-brand-red-light"
                            : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200",
                        )}
                      >
                        {article.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
