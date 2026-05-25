import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { ProofIntelligenceOperationsPanel } from "./proof-intelligence/ProofIntelligenceOperationsPanel";

export function ProofIntelligenceSection() {
  return (
    <Section bordered className="py-14 sm:py-16 lg:py-20" containerClassName="max-w-[90rem]">
      <SectionHeading
        eyebrow="High-speed claims operations"
        title="AI-Assisted Claims Operations For Restoration Contractors"
        description="Claims Ninja combines AI-assisted review, experienced supplement professionals, public adjuster support, and a centralized contractor platform to accelerate estimate delivery and supplement resolution — without an in-house estimator."
        align="left"
        className="max-w-2xl"
      />

      <ProofIntelligenceOperationsPanel />
    </Section>
  );
}
