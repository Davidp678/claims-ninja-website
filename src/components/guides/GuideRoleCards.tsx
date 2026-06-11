"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import type { GuideRole } from "@/lib/guide-types";
import { GUIDE_ROLES } from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";
import { localizePath } from "@/lib/i18n/paths";
import { cn } from "@/lib/cn";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GuideRoleCards({ locale = "en" }: { locale?: Locale }) {
  const guides = getResourcesContent(locale).guides;
  const searchParams = useSearchParams();
  const activeRole = searchParams.get("role") as GuideRole | null;
  const isValidRole = activeRole && GUIDE_ROLES.includes(activeRole);

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={guides.roleSection.eyebrow}
        title={guides.roleSection.title}
        description={guides.roleSection.description}
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
                {guides.roleLabels[role]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {guides.roleDescriptions[role]}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function GuideActiveRoleChip({ locale = "en" }: { locale?: Locale }) {
  const guides = getResourcesContent(locale).guides;
  const searchParams = useSearchParams();
  const activeRole = searchParams.get("role") as GuideRole | null;

  if (!activeRole || !GUIDE_ROLES.includes(activeRole)) {
    return null;
  }

  return (
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <span className="rounded-full border border-brand-red/35 bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red-light">
        {guides.hubUi.roleFilterLabel} {guides.roleLabels[activeRole]}
      </span>
      <Link
        href={`${localizePath(locale, "/resources/guides")}#guide-search`}
        className="text-xs font-medium text-zinc-400 transition-colors hover:text-white"
      >
        {guides.hubUi.clearFilterLabel}
      </Link>
    </div>
  );
}
