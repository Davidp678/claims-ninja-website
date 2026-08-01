"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import {
  handleSameDocumentHomepageIntakeClick,
  homepageIntakeHref,
  hrefHasHash,
  isHomepageIntakeHref,
} from "@/lib/homepage-intake";
import { localeFromPathname } from "@/lib/i18n/paths";
import { isExternalHref } from "@/lib/urls";

const variants = {
  primary:
    "bg-brand-red text-white shadow-[0_10px_30px_-12px_rgba(220,38,38,0.85)] ring-1 ring-white/20 hover:brightness-110 hover:shadow-[0_14px_38px_-14px_rgba(220,38,38,0.9)] focus-visible:ring-brand-red-light",
  secondary:
    "border border-white/30 bg-brand-elevated/92 text-white shadow-[0_10px_26px_-16px_rgba(0,0,0,0.95)] backdrop-blur-sm hover:border-white/50 hover:bg-brand-elevated focus-visible:ring-white/60",
  ghost:
    "text-zinc-200 hover:text-white hover:bg-white/8 focus-visible:ring-white/35",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-[3.25rem] px-9 text-base font-semibold",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  /** Open an external href in a new tab with noopener. Internal hrefs always stay in the current tab. */
  external?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  onClick,
  disabled = false,
  external,
}: ButtonProps) {
  const pathname = usePathname();
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:pointer-events-none disabled:opacity-55",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const hrefIsExternal = isExternalHref(href);
    const openNewTab = hrefIsExternal && external !== false;
    const resolvedHref =
      !hrefIsExternal && isHomepageIntakeHref(href)
        ? homepageIntakeHref(localeFromPathname(pathname ?? "/"))
        : href;

    if (openNewTab) {
      return (
        <a
          href={resolvedHref}
          className={classes}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    if (hrefIsExternal) {
      return (
        <a href={resolvedHref} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }

    // Hash destinations: native <a> for cross-document reliability, plus
    // same-document scroll handling (Next <Link> often skips hash scroll).
    if (hrefHasHash(resolvedHref)) {
      return (
        <a
          href={resolvedHref}
          className={classes}
          onClick={(event) => {
            onClick?.();
            if (handleSameDocumentHomepageIntakeClick(resolvedHref)) {
              event.preventDefault();
            }
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={resolvedHref} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-busy={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
