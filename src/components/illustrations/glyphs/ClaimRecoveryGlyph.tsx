import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function ClaimRecoveryGlyph({ className }: GlyphProps) {
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
      <rect x="18" y="28" width="28" height="26" rx="2" />
      <path d="M26 28V22a6 6 0 0112 0v6" />
      <path d="M24 38h16M24 44h10" opacity="0.7" />
      <path d="M32 8v14M28 14l4-4 4 4" strokeWidth="2" />
    </svg>
  );
}
