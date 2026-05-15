import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Subtle top border + gradient fade for section transitions */
  bordered?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        bordered && "border-t border-white/5",
        className,
      )}
    >
      {bordered ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent"
        />
      ) : null}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
