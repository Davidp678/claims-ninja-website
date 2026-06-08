"use client";

import { useState } from "react";
import type { ContactInquiryType } from "@/lib/calculator-lead";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n/config";
import { getContactContent } from "@/lib/i18n/content/contact";
import { ContactRoutingCards } from "./ContactRoutingCards";
import { ContactInquiryFormSection } from "./ContactInquiryForm";

export function ContactInquirySection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const [inquiryType, setInquiryType] =
    useState<ContactInquiryType>("general-question");
  const content = getContactContent(locale);

  return (
    <>
      <Section bordered compact>
        <SectionHeading
          eyebrow={content.routing.eyebrow}
          title={content.routing.title}
          description={content.routing.description}
          align="left"
          className="max-w-3xl"
        />
        <ContactRoutingCards
          selectedInquiryType={inquiryType}
          onSelect={setInquiryType}
          locale={locale}
        />
      </Section>

      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={content.form.eyebrow}
          title={content.form.title}
          align="left"
          className="max-w-3xl"
        />
        <div className="mt-10 max-w-3xl">
          <ContactInquiryFormSection
            inquiryType={inquiryType}
            onInquiryTypeChange={setInquiryType}
            locale={locale}
          />
        </div>
      </Section>
    </>
  );
}
