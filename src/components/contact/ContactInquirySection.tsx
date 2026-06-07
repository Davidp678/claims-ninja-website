"use client";

import { useState } from "react";
import type { ContactInquiryType } from "@/lib/calculator-lead";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_FORM, CONTACT_ROUTING } from "@/lib/contact-page";
import { ContactRoutingCards } from "./ContactRoutingCards";
import { ContactInquiryFormSection } from "./ContactInquiryForm";

export function ContactInquirySection() {
  const [inquiryType, setInquiryType] =
    useState<ContactInquiryType>("general-question");

  return (
    <>
      <Section bordered compact>
        <SectionHeading
          eyebrow={CONTACT_ROUTING.eyebrow}
          title={CONTACT_ROUTING.title}
          description={CONTACT_ROUTING.description}
          align="left"
          className="max-w-3xl"
        />
        <ContactRoutingCards
          selectedInquiryType={inquiryType}
          onSelect={setInquiryType}
        />
      </Section>

      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={CONTACT_FORM.eyebrow}
          title={CONTACT_FORM.title}
          align="left"
          className="max-w-3xl"
        />
        <div className="mt-10 max-w-3xl">
          <ContactInquiryFormSection
            inquiryType={inquiryType}
            onInquiryTypeChange={setInquiryType}
          />
        </div>
      </Section>
    </>
  );
}
