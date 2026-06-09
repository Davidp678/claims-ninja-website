export type RoadmapStep = {
  step: number;
  title: string;
  description: string;
};

export type ResourceLink = {
  label: string;
  href?: string;
  description: string;
  action?: "contact";
};

export const START_HERE_META = {
  path: "/starthere",
  title: "Start Here | The Claims Ninja",
  description:
    "Begin your Claims Ninja onboarding and launch your claims support partnership.",
} as const;

export const START_HERE_HERO = {
  badge: "Client Launch Center",
  title: "Welcome to Claims Ninja",
  subheadline:
    "Your launch center for getting set up, understanding the process, and preparing your team to submit claims with confidence.",
  timeEstimate: "10–15 minutes",
  audioBadge: "Audio Recommended",
  primaryCta: "Begin Onboarding Agreement",
  secondaryCta: "Schedule Strategy Call",
  ctaHelper:
    "Complete the agreement to begin setup, or schedule a strategy call if you'd prefer to speak with our team first.",
} as const;

export const START_HERE_WELCOME_VIDEO = {
  embedUrl:
    "https://customer-qmgpb08arenbn1zo.cloudflarestream.com/8d71bb8ce5f40e0d48386bb366a5cda0/iframe?poster=https%3A%2F%2Fcustomer-qmgpb08arenbn1zo.cloudflarestream.com%2F8d71bb8ce5f40e0d48386bb366a5cda0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&letterboxColor=transparent",
  title: "Claims Ninja onboarding welcome video",
  sourceAspect: 360 / 640,
  embedFit: "contain" as const,
  mediaAspect: "aspect-[9/16]" as const,
} as const;

export const LAUNCH_ROADMAP = {
  eyebrow: "Partnership Launch Roadmap",
  title: "Your path from agreement to first claim",
  description:
    "A clear sequence so your team knows what to expect at every stage of onboarding.",
  steps: [
    {
      step: 1,
      title: "Complete Onboarding Agreement",
      description:
        "Review and complete the onboarding agreement, billing authorization, company information, and team setup form.",
    },
    {
      step: 2,
      title: "Workspace Preparation",
      description:
        "Our team reviews your onboarding details and prepares your Claims Ninja workspace.",
    },
    {
      step: 3,
      title: "Access Your Claims Workspace",
      description:
        "You'll receive access instructions once your workspace is ready.",
    },
    {
      step: 4,
      title: "Launch Strategy Call",
      description:
        "We'll walk through your workflow, answer questions, and make sure your team knows how to submit claims correctly.",
    },
    {
      step: 5,
      title: "Submit Your First Claim",
      description:
        "Send your first claim through the workspace and our team will begin review according to the Claims Ninja process.",
    },
  ] satisfies readonly RoadmapStep[],
} as const;

export const PREPARATION_SECTION = {
  eyebrow: "Before you begin",
  title: "What you'll need before starting",
  description:
    "The onboarding agreement collects the information needed to activate your partnership and prepare your workspace.",
  items: [
    "Business contact information",
    "Billing information",
    "Primary onboarding contact",
    "Project manager / team member details",
    "Electronic signature authority",
  ],
} as const;

export const AFTER_SUBMIT_SECTION = {
  eyebrow: "After submission",
  title: "What happens after you submit",
  description:
    "Once your onboarding agreement is complete, our team takes it from here.",
  items: [
    "Your onboarding information is reviewed",
    "Your Claims Ninja workspace is prepared",
    "Our team configures your account",
    "You'll receive workspace access instructions",
    "We'll schedule your Launch Strategy Call",
    "You'll be ready to submit your first claim",
  ],
} as const;

export const TEAM_SECTION = {
  eyebrow: "Your partnership team",
  title: "Meet your Claims team",
  description:
    "Dedicated specialists who guide your onboarding and support your claims operations from day one.",
} as const;

export const RESOURCES_SECTION = {
  eyebrow: "Resources & support",
  title: "Help along the way",
  description:
    "Need help? Contact Claims Ninja before submitting if you are unsure who should complete the onboarding agreement.",
  links: [
    {
      label: "Getting Started Guide",
      href: "/help/getting-started/welcome",
      description: "Step-by-step orientation for new clients.",
    },
    {
      label: "Help Center",
      href: "/help",
      description: "Guides, workflows, and platform documentation.",
    },
    {
      label: "FAQ",
      href: "/faq",
      description: "Answers to common onboarding and service questions.",
    },
    {
      label: "Contact Support",
      description: "Reach our team before or during onboarding.",
      action: "contact",
    },
  ] satisfies readonly ResourceLink[],
} as const;

export const FINAL_CTA_SECTION = {
  eyebrow: "Ready to launch",
  title: "Ready to launch your Claims Ninja partnership?",
  description:
    "The onboarding agreement includes your service agreement, company setup, billing authorization, team configuration, and workspace enrollment.",
  primaryCta: "Complete Onboarding Agreement",
  footerNote: {
    lead: "Not quite ready to begin?",
    body: "Schedule a strategy call with our team.",
    linkLabel: "Schedule a strategy call",
  },
} as const;
