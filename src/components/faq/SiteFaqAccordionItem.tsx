"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { FaqItem } from "@/lib/faq-page";
import { cn } from "@/lib/cn";

type SiteFaqAccordionItemProps = Pick<
  FaqItem,
  "id" | "question" | "answer" | "relatedLinks"
>;

export function SiteFaqAccordionItem({
  id,
  question,
  answer,
  relatedLinks,
}: SiteFaqAccordionItemProps) {
  const [open, setOpen] = useState(false);
  const triggerId = useId();
  const panelId = `site-faq-${id}-panel`;

  return (
    <div
      className={cn(
        "border-b border-white/10 last:border-b-0",
        open && "border-brand-red/20",
      )}
    >
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "flex w-full items-start justify-between gap-5 px-1 py-4 text-left transition-colors sm:px-2 sm:py-5",
            "hover:text-brand-red-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black",
            open && "text-brand-red-light",
          )}
        >
          <span className="font-display text-base font-semibold text-white sm:text-lg">
            {question}
          </span>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className={cn(
              "mt-0.5 h-5 w-5 shrink-0 text-zinc-400 transition-colors duration-200 motion-reduce:transition-none",
              open && "text-brand-red-light",
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14"
              className={cn(
                "origin-center transition-opacity duration-200 motion-reduce:transition-none",
                open && "opacity-0",
              )}
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-1 pb-5 pr-6 sm:px-2">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              {answer}
            </p>
            {relatedLinks && relatedLinks.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-brand-red-light transition-colors hover:text-white"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
