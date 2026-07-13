import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function FireDamageGlyph({ className }: GlyphProps) {
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
      <path d="M32 54c8-6 12-12 12-20a12 12 0 00-24 0c0 8 4 14 12 20z" />
      <path d="M32 54V34" />
      <path d="M26 14c-2 4-2 8 0 12M32 10c0 4 0 8 2 12M38 14c2 4 2 8 0 12" opacity="0.7" />
    </svg>
  );
}
