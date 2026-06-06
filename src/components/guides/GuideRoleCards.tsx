"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import type { GuideRole } from "@/lib/guide-types";
import { GUIDE_ROLE_LABELS, GUIDE_ROLE_SECTION, GUIDE_ROLES } from "@/lib/guide-page";
import { cn } from "@/lib/cn";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ROLE_DESCRIPTIONS: Record<GuideRole, string> = {
  field: "Intake, documentation, and field execution checklists.",
  office: "File management, audit, and carrier-ready documentation.",
  "supplement-coordinator": "Estimate review, supplement submission, and O&P qualification.",
  "project-manager": "Intake oversight, estimate review, and reinspection coordination.",
};

export function GuideRoleCards() {
  const searchParams = useSearchParams();
  const activeRole = searchParams.get("role") as GuideRole | null;
  const isValidRole = activeRole && GUIDE_ROLES.includes(activeRole);

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={GUIDE_ROLE_SECTION.eyebrow}
        title={GUIDE_ROLE_SECTION.title}
        description={GUIDE_ROLE_SECTION.description}
        align="left"
      />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {GUIDE_ROLES.map((role) => (
          <li key={role}>
            <Link
              href={`?role=${role}#guide-search`}
              className={cn(
                "block h-full rounded-2xl border p-5 transition-colors",
                isValidRole && activeRole === role
                  ? "border-brand-red/45 bg-brand-red/10"
                  : "border-white/15 bg-brand-surface hover:border-brand-red/30",
              )}
            >
              <h3 className="font-display text-base font-semibold text-white">
                {GUIDE_ROLE_LABELS[role]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {ROLE_DESCRIPTIONS[role]}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function GuideActiveRoleChip() {
  const searchParams = useSearchParams();
  const activeRole = searchParams.get("role") as GuideRole | null;

  if (!activeRole || !GUIDE_ROLES.includes(activeRole)) {
    return null;
  }

  return (
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <span className="rounded-full border border-brand-red/35 bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red-light">
        Role: {GUIDE_ROLE_LABELS[activeRole]}
      </span>
      <Link
        href="/resources/guides#guide-search"
        className="text-xs font-medium text-zinc-400 transition-colors hover:text-white"
      >
        Clear filter
      </Link>
    </div>
  );
}
