import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function InsuranceSupplementingGlyph({ className }: GlyphProps) {
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
      <rect x="18" y="8" width="28" height="36" rx="2" />
      <path d="M26 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
      <path d="M24 18h16M24 24h16M24 30h10" />
      <path d="M34 38h14a2 2 0 012 2v12a2 2 0 01-2 2H22a2 2 0 01-2-2V40" />
      <path d="M30 44h8M30 50h6" />
    </svg>
  );
}
