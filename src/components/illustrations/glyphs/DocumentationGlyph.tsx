import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function DocumentationGlyph({ className }: GlyphProps) {
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
      <rect x="16" y="10" width="32" height="40" rx="2" />
      <path d="M24 20h16M24 28h16M24 36h10" />
      <path d="M28 46h8" opacity="0.7" />
      <path d="M22 14h20" opacity="0.5" />
    </svg>
  );
}
