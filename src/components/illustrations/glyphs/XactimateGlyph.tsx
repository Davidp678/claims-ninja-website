import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function XactimateGlyph({ className }: GlyphProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      className={cn(GLYPH_BASE, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="12" y="14" width="40" height="36" rx="2" />
      <path d="M12 26h40M12 38h40M28 14v36M44 14v36" opacity="0.5" />
      <rect x="30" y="28" width="12" height="8" rx="1" strokeWidth="2" />
      <path d="M48 20l2 2-2 2" opacity="0.7" />
    </svg>
  );
}
