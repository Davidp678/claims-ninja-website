import type { ContactInquiryType } from "@/lib/calculator-lead";

export const CONTACT_META = {
  path: "/contact",
  metaTitle: "Contact",
  metaDescription:
    "Contact Claims Ninja for claim reviews, partnership inquiries, client support, or strategic partner opportunities. Tell us about your operation and claim workflow.",
} as const;

export const CONTACT_HERO = {
  eyebrow: "Company",
  title: "Let's talk about your operation",
  description:
    "Tell us about your business, claim workflow, or current challenges. We'll review your situation, identify opportunities, and recommend next steps.",
  primaryCtaLabel: "Scroll to form",
  secondaryCtaLabel: "Schedule Strategy Call",
} as const;

export type ContactRoutingCard = {
  title: string;
  description: string;
  inquiryType: ContactInquiryType;
};

export const CONTACT_ROUTING = {
  eyebrow: "How can we help?",
  title: "Route your inquiry to the right team",
  description:
    "Select the option that best matches your situation. We'll pre-fill the form so you can send your message in seconds.",
  cards: [
    {
      title: "Review a claim",
      description:
        "Get a second set of eyes on active claims and identify potential recovery opportunities.",
      inquiryType: "claim-review",
    },
    {
      title: "Explore a partnership",
      description:
        "Learn how Claims Ninja can support your team and claim workflow.",
      inquiryType: "partnership-inquiry",
    },
    {
      title: "Existing client support",
      description:
        "Questions about active files, documentation, communication, or claim status.",
      inquiryType: "existing-client-support",
    },
    {
      title: "Strategic partnerships",
      description:
        "Interested in becoming part of the Claims Ninja strategic partner ecosystem.",
      inquiryType: "strategic-partner-inquiry",
    },
  ] satisfies readonly ContactRoutingCard[],
} as const;

export const CONTACT_FORM = {
  eyebrow: "Send a message",
  title: "Tell us what you need",
  description:
    "Share a few details about your operation and we'll follow up with next steps tailored to your inquiry.",
  submitLabel: "Send inquiry",
  successMessage:
    "Thank you — your inquiry has been received. A member of our team will review your message and respond using the contact details you provided.",
} as const;

export const CONTACT_INQUIRY_TYPE_LABELS: Record<ContactInquiryType, string> = {
  "claim-review": "Claim Review",
  "partnership-inquiry": "Partnership Inquiry",
  "existing-client-support": "Existing Client Support",
  "strategic-partner-inquiry": "Strategic Partner Inquiry",
  "general-question": "General Question",
};

export const CONTACT_INFO = {
  eyebrow: "Contact information",
  title: "Reach Claims Ninja directly",
  description:
    "Most inquiries receive a response within one business day.",
} as const;
