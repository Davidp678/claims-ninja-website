"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/i18n/content/home";
import { cn } from "@/lib/cn";
import { SingleClaimReview } from "./calculator/SingleClaimReview";
import { OrganizationRoi } from "./calculator/OrganizationRoi";

type Tab = "single" | "org";

export function CalculatorSection({ locale = "en" }: { locale?: Locale }) {
  const [tab, setTab] = useState<Tab>("single");
  const content = getHomeContent(locale).calculator;

  const tabs = [
    { id: "single" as const, label: content.tabSingle },
    { id: "org" as const, label: content.tabOrg },
  ];

  return (
    <Section id="calculator" bordered>
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className="mt-12 flex justify-center lg:mt-14"
        role="tablist"
        aria-label={content.tablistLabel}
      >
        <div className="inline-flex max-w-full overflow-hidden rounded-full border border-white/15 bg-brand-elevated/70 p-1 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.85)]">
          {tabs.map((opt) => {
            const active = tab === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-pressed={active}
                onClick={() => setTab(opt.id)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5",
                  active
                    ? "bg-brand-red text-white shadow-[0_8px_24px_-12px_rgba(220,38,38,0.85)]"
                    : "text-zinc-300 hover:text-white",
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        {tab === "single" ? (
          <SingleClaimReview locale={locale} />
        ) : (
          <OrganizationRoi locale={locale} />
        )}
      </div>
    </Section>
  );
}
