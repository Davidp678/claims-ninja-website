import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Subtle top border + gradient fade for section transitions */
  bordered?: boolean;
  /** Tighter vertical padding (py-16 sm:py-20) instead of default section rhythm */
  compact?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  bordered = false,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        compact ? "py-16 sm:py-20" : "py-20 sm:py-24 lg:py-28",
        bordered && "border-t border-white/12",
        className,
      )}
    >
      {bordered ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_-15%,rgba(220,38,38,0.11),transparent_52%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_100%_50%,rgba(220,38,38,0.08),transparent_48%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_0%_100%,rgba(0,0,0,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/30" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-brand-red/65 to-transparent"
          />
        </>
      ) : null}
      <Container className={cn("relative z-10", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
