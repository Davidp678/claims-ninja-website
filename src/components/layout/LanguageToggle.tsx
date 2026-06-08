"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { setLocaleCookieClient } from "@/lib/i18n/locale-cookie";
import { localeFromPathname, localizePathname } from "@/lib/i18n/paths";
import { cn } from "@/lib/cn";

type LanguageToggleProps = {
  compact?: boolean;
};

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.6 9h16.8M3.6 15h16.8M12 3c-2.2 2.4-3.3 5.1-3.3 9s1.1 6.6 3.3 9c2.2-2.4 3.3-5.1 3.3-9s-1.1-6.6-3.3-9Z"
      />
    </svg>
  );
}

export function LanguageToggle({ compact = false }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

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

  const selectLocale = (next: Locale) => {
    const meta = localeLabels[next];
    if (!meta.available) return;

    setLocaleCookieClient(next);
    setOpen(false);
    router.push(localizePathname(pathname, next));
  };

  const current = localeLabels[locale];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 font-medium text-zinc-300 transition-colors hover:text-white",
          compact
            ? "h-10 rounded-lg border border-white/18 px-2.5 text-sm"
            : "text-sm",
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={panelId}
        aria-label={`Language: ${current.full}`}
        onClick={() => setOpen((value) => !value)}
      >
        <GlobeIcon className="h-4 w-4 shrink-0" />
        <span>{current.short}</span>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" />
        </svg>
      </button>

      <div
        id={panelId}
        role="listbox"
        aria-label="Select language"
        className={cn(
          "absolute top-full z-50 pt-3 transition-all duration-200",
          "right-0 left-auto",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <div className="w-[min(calc(100vw-1.25rem),14rem)] rounded-xl border border-white/15 bg-brand-elevated/95 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl ring-1 ring-white/10">
          <ul className="space-y-0.5">
            {locales.map((code) => {
              const meta = localeLabels[code];
              const selected = locale === code;

              return (
                <li key={code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    disabled={!meta.available && !selected}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                      selected
                        ? "bg-white/10 text-white"
                        : meta.available
                          ? "text-zinc-200 hover:bg-white/8"
                          : "cursor-not-allowed text-zinc-500",
                    )}
                    onClick={() => selectLocale(code)}
                  >
                    <span className="w-6 shrink-0 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      {meta.short}
                    </span>
                    <span className="flex-1 text-sm font-medium">{meta.full}</span>
                    {selected ? (
                      <svg
                        aria-hidden
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 shrink-0 text-brand-red-light"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 1 1 1.414-1.414l2.543 2.543 6.543-6.543a1 1 0 0 1 1.412 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
