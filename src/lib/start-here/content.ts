export type RoadmapStep = {
  step: number;
  title: string;
  description: string;
};

export type ResourceLink = {
  label: string;
  href: string;
  description: string;
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
  primaryCta: "Begin Onboarding Agreement",
  secondaryCta: "See what happens next",
  secondaryAnchor: "#launch-roadmap",
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
      href: "/contact",
      description: "Reach our team before or during onboarding.",
    },
  ] satisfies readonly ResourceLink[],
} as const;

export const FINAL_CTA_SECTION = {
  eyebrow: "Ready to launch",
  title: "Ready to launch your Claims Ninja partnership?",
  description:
    "The onboarding agreement includes your service agreement, company setup, billing authorization, team configuration, and workspace enrollment.",
  primaryCta: "Complete Onboarding Agreement",
  secondaryCta: "Visit Help Center",
  secondaryHref: "/help",
} as const;
