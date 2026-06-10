import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const HeadingTag = as === "h1" ? "h1" : "h2";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
