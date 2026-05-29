export const CLIENT_PORTAL_META = {
  path: "/platform/client-portal",
  metaTitle: "Client Portal",
  metaDescription:
    "Claims Ninja Client Portal is your contractor command center—submit claim documents, communicate with our team, track projects, and keep billing connected in one workspace.",
} as const;

export const CLIENT_PORTAL_HERO = {
  eyebrow: "Client Portal",
  title: "Your Claims Command Center",
  description:
    "Contractors get a centralized workspace to submit claim documents, communicate with the Claims Ninja team, monitor project progress, and keep claim activity organized from intake through recovery.",
} as const;

export const CLIENT_PORTAL_CAPABILITIES = {
  eyebrow: "Portal capabilities",
  title: "Everything your claim team needs in one place",
  description:
    "The Client Portal is live today—built for restoration and roofing teams who need operational clarity, not another inbox to manage.",
  items: [
    {
      title: "Document Uploads",
      description:
        "Submit photos, estimates, scopes, and carrier correspondence directly to the claim file—no more lost attachments or duplicate uploads.",
    },
    {
      title: "Claim File Management",
      description:
        "Every job stays organized with a dedicated claim workspace so field crews and office staff always work from the same source of truth.",
    },
    {
      title: "Real-Time Communication",
      description:
        "Message the Claims Ninja team inside the portal so conversations stay tied to the claim—not buried in email threads or text chains.",
    },
    {
      title: "Project Tracking",
      description:
        "Monitor milestones, open requests, and claim activity so you know what is moving, what is waiting, and what needs your attention.",
    },
    {
      title: "Billing Visibility",
      description:
        "Keep invoices, payment status, and claim-related billing connected to the job so finance and operations stay aligned.",
    },
    {
      title: "Team Collaboration",
      description:
        "Give field teams, project managers, and leadership the right visibility so everyone stays coordinated without stepping on each other.",
    },
  ],
} as const;

export const CLIENT_PORTAL_WORKFLOW = {
  eyebrow: "How contractors use it",
  title: "From document upload to recovery, in one workflow",
  description:
    "A straightforward operational flow—designed for crews and office teams who need to keep jobs moving while Claims Ninja handles claim support.",
  steps: [
    {
      step: "01",
      title: "Submit claim documents",
      description:
        "Upload scopes, photos, estimates, and carrier paperwork to the claim file so our team has everything needed to start work.",
    },
    {
      step: "02",
      title: "Collaborate with Claims Ninja",
      description:
        "Communicate directly in the portal—ask questions, respond to requests, and keep every exchange tied to the job.",
    },
    {
      step: "03",
      title: "Track progress and requests",
      description:
        "See claim activity, open items, and project updates in real time so nothing stalls between field, office, and our team.",
    },
    {
      step: "04",
      title: "Review outcomes and billing",
      description:
        "Stay informed on supplement results, approvals, and billing status as the claim moves toward recovery and payment.",
    },
  ],
} as const;

export const CLIENT_PORTAL_FIELD = {
  eyebrow: "Built for the field",
  title: "Built for Contractors, Not Desk Work",
  description:
    "Contractors should not have to manage claims across email threads, random folders, text messages, and spreadsheets.",
  body: "The Client Portal centralizes the claim workflow so crews and office teams can keep moving while Claims Ninja handles the claim support process.",
  points: [
    "Stop chasing documents across inboxes and shared drives",
    "Give field crews a simple way to submit what carriers and adjusters need",
    "Keep office staff aligned on status without constant follow-up calls",
    "Connect claim activity to billing and project workflows in one place",
  ],
} as const;

export const CLIENT_PORTAL_TRUST = {
  eyebrow: "Expert-backed operations",
  title: "Organized by the portal. Driven by real claim experts.",
  description:
    "The portal keeps everything organized. The Claims Ninja team does the heavy lifting.",
  roles: [
    "Estimate writers who build carrier-ready documentation",
    "Supplement specialists who identify and pursue recovery opportunities",
    "Claim coordinators who keep files moving through each stage",
    "Public adjuster support when full claim ownership is required",
  ],
  closing:
    "Software does not replace seasoned claim professionals—it gives your operation a single place to work with them.",
} as const;

export const CLIENT_PORTAL_CTA = {
  eyebrow: "Get started",
  title: "Ready to bring order to your claim workflow?",
  description:
    "Start with a claim intake or schedule a strategy call. We will show you how the portal fits your operation.",
} as const;
