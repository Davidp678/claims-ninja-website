"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavDropdownItem } from "@/lib/navigation";
import { cn } from "@/lib/cn";

type NavDropdownProps = {
  label: string;
  items: readonly NavDropdownItem[];
  align?: "start" | "end";
};

export function NavDropdown({ label, items, align = "start" }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <li
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" />
        </svg>
      </button>

      <div
        id={panelId}
        className={cn(
          "absolute top-full z-50 pt-3 transition-all duration-200",
          align === "end" ? "right-0 left-auto" : "left-0",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <div
          className={cn(
            "w-[min(calc(100vw-1.25rem),22rem)] rounded-xl border border-white/15 bg-brand-elevated/95 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl ring-1 ring-white/10",
            items.length > 4 && "lg:w-[28rem]",
          )}
        >
          <ul
            className={cn(
              "grid gap-0.5",
              items.length > 4 && "lg:grid-cols-2",
            )}
          >
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/8"
                  onClick={() => setOpen(false)}
                >
                  <span className="block text-sm font-medium text-white">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-zinc-400">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
