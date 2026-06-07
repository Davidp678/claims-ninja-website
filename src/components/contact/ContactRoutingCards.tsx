"use client";

import type { ContactInquiryType } from "@/lib/calculator-lead";
import { CONTACT_ROUTING } from "@/lib/contact-page";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { cn } from "@/lib/cn";

type ContactRoutingCardsProps = {
  selectedInquiryType: ContactInquiryType;
  onSelect: (inquiryType: ContactInquiryType) => void;
};

export function ContactRoutingCards({
  selectedInquiryType,
  onSelect,
}: ContactRoutingCardsProps) {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    formSection?.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      const inquirySelect = document.getElementById("contact-inquiry-type");
      inquirySelect?.focus();
    }, 400);
  };

  const handleSelect = (inquiryType: ContactInquiryType) => {
    onSelect(inquiryType);
    scrollToForm();
  };

  return (
    <ul className="mt-14 grid gap-6 sm:grid-cols-2">
      {CONTACT_ROUTING.cards.map((card) => {
        const isSelected = selectedInquiryType === card.inquiryType;

        return (
          <li key={card.inquiryType}>
            <button
              type="button"
              onClick={() => handleSelect(card.inquiryType)}
              aria-label={`${card.title} — preselect ${card.inquiryType} and scroll to contact form`}
              aria-pressed={isSelected}
              className={cn(
                ABOUT_CARD_CLASS,
                "group flex h-full w-full flex-col text-left",
                isSelected &&
                  "border-brand-red/50 ring-1 ring-brand-red/30 shadow-[0_0_48px_-20px_rgba(220,38,38,0.45)]",
              )}
            >
              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
                {card.description}
              </p>
              <span className="mt-4 text-sm font-medium text-brand-red-light">
                {isSelected ? "Selected — continue below →" : "Select & continue →"}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
