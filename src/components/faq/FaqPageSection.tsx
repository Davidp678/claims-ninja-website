import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FaqPageSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  bordered?: boolean;
  tight?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function FaqPageSection({
  eyebrow,
  title,
  description,
  bordered = true,
  tight = false,
  className,
  children,
}: FaqPageSectionProps) {
  return (
    <Section
      compact={!tight}
      tight={tight}
      bordered={bordered}
      className={className}
    >
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="left"
      />
      {children}
    </Section>
  );
}
