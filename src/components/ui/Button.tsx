import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand-red text-white shadow-lg shadow-brand-red/40 ring-1 ring-white/15 hover:brightness-110 hover:shadow-brand-red/55 focus-visible:ring-brand-red-light",
  secondary:
    "border border-white/25 bg-brand-elevated/85 text-white shadow-md shadow-black/40 backdrop-blur-sm hover:border-white/45 hover:bg-brand-elevated focus-visible:ring-white/60",
  ghost:
    "text-zinc-200 hover:text-white hover:bg-white/8 focus-visible:ring-white/35",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base font-semibold",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
