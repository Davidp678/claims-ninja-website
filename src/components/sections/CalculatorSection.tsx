"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { SingleClaimReview } from "./calculator/SingleClaimReview";
import { OrganizationRoi } from "./calculator/OrganizationRoi";

type Tab = "single" | "org";

const TABS = [
  { id: "single", label: "Single Claim Review" },
  { id: "org", label: "Organization ROI" },
] as const;

export function CalculatorSection() {
  const [tab, setTab] = useState<Tab>("single");

  return (
    <Section id="calculator" bordered>
      <SectionHeading
        eyebrow="Calculators"
        title="Evaluate one claim or your entire pipeline"
        description="Run a quick AI-assisted single-claim triage, or model how Claims Ninja stacks up against an in-house team across all your jobs."
      />

      <div
        className="mt-12 flex justify-center lg:mt-14"
        role="tablist"
        aria-label="Calculator selector"
      >
        <div className="inline-flex max-w-full overflow-hidden rounded-full border border-white/15 bg-brand-elevated/70 p-1 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.85)]">
          {TABS.map((opt) => {
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
        {tab === "single" ? <SingleClaimReview /> : <OrganizationRoi />}
      </div>
    </Section>
  );
}
