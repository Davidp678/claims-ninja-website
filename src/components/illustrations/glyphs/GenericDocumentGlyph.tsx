import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function GenericDocumentGlyph({ className }: GlyphProps) {
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
      <path d="M20 8h16l8 8v40H20V8z" />
      <path d="M36 8v8h8" />
      <path d="M26 28h16M26 36h16M26 44h10" opacity="0.7" />
      <path d="M32 52l-4-4 4-4 4 4-4 4z" opacity="0.5" />
    </svg>
  );
}
