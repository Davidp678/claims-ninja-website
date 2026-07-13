import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function ContractorOperationsGlyph({ className }: GlyphProps) {
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
      <circle cx="32" cy="32" r="10" />
      <circle cx="32" cy="32" r="4" />
      <path d="M32 14v8M32 42v8M14 32h8M42 32h8" />
      <path d="M19 19l6 6M39 39l6 6M45 19l-6 6M25 39l-6 6" opacity="0.7" />
    </svg>
  );
}
