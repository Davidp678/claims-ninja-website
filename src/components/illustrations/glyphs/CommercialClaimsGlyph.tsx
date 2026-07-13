import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function CommercialClaimsGlyph({ className }: GlyphProps) {
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
      <rect x="16" y="14" width="32" height="38" rx="1" />
      <path d="M24 14V10h16v4" />
      <path d="M22 26h20M22 34h20M22 42h20M22 50h20" opacity="0.6" />
      <rect x="28" y="38" width="8" height="14" opacity="0.7" />
    </svg>
  );
}
