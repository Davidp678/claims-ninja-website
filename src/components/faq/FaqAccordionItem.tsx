"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { FaqItem } from "@/lib/faq-page";
import { cn } from "@/lib/cn";

type FaqAccordionItemProps = Pick<
  FaqItem,
  "id" | "question" | "answer" | "relatedLinks"
>;

export function FaqAccordionItem({
  id,
  question,
  answer,
  relatedLinks,
}: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false);
  const triggerId = useId();
  const panelId = `${id}-panel`;

  return (
    <div
      id={`faq-${id}`}
      className={cn(
        "scroll-mt-28 border-b border-white/10 last:border-b-0",
        open && "border-brand-red/15",
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
            "flex w-full items-start justify-between gap-4 py-4 text-left transition-colors",
            "hover:text-brand-red-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface",
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
              "mt-0.5 h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 motion-reduce:transition-none",
              open && "rotate-180 text-brand-red-light",
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
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
          <div className="pb-4 pr-2">
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
