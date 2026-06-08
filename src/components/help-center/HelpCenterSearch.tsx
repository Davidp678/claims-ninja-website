"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { getArticlePath } from "@/lib/help-center/registry";
import { searchHelpArticles } from "@/lib/help-center/search";
import type { HelpPortal } from "@/lib/help-center/types";

export function HelpCenterSearch({ portal }: { portal: HelpPortal }) {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () => searchHelpArticles(portal, query, 8),
    [portal, query],
  );

  return (
    <div className="relative">
      <label className="sr-only" htmlFor={`help-search-${portal}`}>
        Search help center
      </label>
      <input
        id={`help-search-${portal}`}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search documentation…"
        className="w-full rounded-xl border border-white/12 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-brand-red-light/40 focus:outline-none focus:ring-1 focus:ring-brand-red-light/30"
      />
      {query.trim() && results.length > 0 && (
        <ul className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-white/12 bg-zinc-950 shadow-2xl">
          {results.map((r) => (
            <li key={`${r.sectionSlug}/${r.articleSlug}`}>
              <Link
                href={getArticlePath(portal, r.sectionSlug, r.articleSlug)}
                onClick={() => setQuery("")}
                className="block px-4 py-3 transition hover:bg-white/5"
              >
                <p className="text-sm font-medium text-white">{r.title}</p>
                <p className="mt-0.5 line-clamp-1 text-xs text-zinc-500">{r.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
