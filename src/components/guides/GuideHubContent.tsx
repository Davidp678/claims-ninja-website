"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import type { GuideCategorySlug } from "@/lib/guide-categories";
import { GUIDE_CATEGORY_REGISTRY, getGuideCategoryPath } from "@/lib/guide-categories";
import type { GuideRole, GuideType } from "@/lib/guide-types";
import {
  GUIDE_CATEGORY_SECTION,
  GUIDE_TYPES,
  GUIDE_TYPE_LABELS,
  GUIDE_ROLE_LABELS,
  getAllGuides,
} from "@/lib/guide-page";
import { filterGuides } from "@/lib/guide-search";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

import { GuideGrid } from "./GuideGrid";
import { GuideActiveRoleChip } from "./GuideRoleCards";

export function GuideHubContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") as GuideRole | null;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GuideCategorySlug | "all">("all");
  const [guideType, setGuideType] = useState<GuideType | "all">("all");

  const allGuides = getAllGuides();

  const filteredGuides = useMemo(
    () => filterGuides(allGuides, query, category, guideType, roleParam ?? "all"),
    [allGuides, query, category, guideType, roleParam],
  );

  const isFiltering = query.length > 0 || category !== "all" || guideType !== "all" || roleParam;

  return (
    <>
      <Section bordered compact id="guide-search">
        <SectionHeading
          eyebrow={GUIDE_CATEGORY_SECTION.eyebrow}
          title={isFiltering ? "Search results" : GUIDE_CATEGORY_SECTION.title}
          description={
            roleParam
              ? `Showing guides for ${GUIDE_ROLE_LABELS[roleParam as GuideRole] ?? roleParam.replace(/-/g, " ")}.`
              : GUIDE_CATEGORY_SECTION.description
          }
          align="left"
        />
        <GuideActiveRoleChip />
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="sr-only" htmlFor="guide-search-input">
            Search guides
          </label>
          <input
            id="guide-search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides by title, tag, or checklist item..."
            className="w-full rounded-xl border border-white/15 bg-brand-black/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-brand-red/45 focus:outline-none lg:max-w-md"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <FilterPill
            active={category === "all"}
            onClick={() => setCategory("all")}
            label="All categories"
          />
          {GUIDE_CATEGORY_REGISTRY.map((cat) => (
            <FilterPill
              key={cat.slug}
              active={category === cat.slug}
              onClick={() => setCategory(cat.slug)}
              label={cat.name}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterPill
            active={guideType === "all"}
            onClick={() => setGuideType("all")}
            label="All types"
          />
          {GUIDE_TYPES.map((type) => (
            <FilterPill
              key={type}
              active={guideType === type}
              onClick={() => setGuideType(type)}
              label={GUIDE_TYPE_LABELS[type]}
            />
          ))}
        </div>
        {isFiltering ? (
          <GuideGrid guides={filteredGuides} showCategory />
        ) : null}
      </Section>

      {!isFiltering
        ? GUIDE_CATEGORY_REGISTRY.map((cat) => {
            const guides = allGuides.filter((g) => g.category === cat.slug).slice(0, 4);
            const count = allGuides.filter((g) => g.category === cat.slug).length;
            if (guides.length === 0) return null;

            return (
              <Section key={cat.slug} bordered compact>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <SectionHeading
                    eyebrow={cat.name}
                    title={`${cat.name} guides`}
                    description={cat.description}
                    align="left"
                  />
                  <Link
                    href={getGuideCategoryPath(cat.slug)}
                    className="shrink-0 text-sm font-medium text-brand-red-light transition-colors hover:text-white"
                  >
                    View all {count} guides →
                  </Link>
                </div>
                <GuideGrid guides={guides} />
              </Section>
            );
          })
        : null}
    </>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-brand-red/45 bg-brand-red/15 text-white"
          : "border-white/10 bg-brand-surface text-zinc-400 hover:border-white/20 hover:text-zinc-200",
      )}
    >
      {label}
    </button>
  );
}
