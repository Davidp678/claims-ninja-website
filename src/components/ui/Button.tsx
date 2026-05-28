import Link from "next/link";
import { cn } from "@/lib/cn";

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

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  /** Open external href in a new tab with noopener. Auto-detected for http(s) URLs. */
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
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:pointer-events-none disabled:opacity-55",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const openExternal = external ?? isExternalHref(href);

    if (openExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
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
