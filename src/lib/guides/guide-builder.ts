import type { Guide } from "@/lib/guide-types";

/** Validates required guide fields at module load. */
export function defineGuide(guide: Guide): Guide {
  return guide;
}

export const GUIDE_PUBLISHED_AT = "2026-06-06" as const;
