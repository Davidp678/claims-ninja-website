import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type FaqPageSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function FaqPageSection({
  eyebrow,
  title,
  description,
  bordered = true,
  className,
  children,
}: FaqPageSectionProps) {
  return (
    <Section bordered={bordered} className={cn("py-16 sm:py-20", className)}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="left"
        className="max-w-3xl"
      />
      {children}
    </Section>
  );
}
