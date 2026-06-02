export type MarketingFeature = {
  title: string;
  description: string;
};

export type MarketingPageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  features: readonly MarketingFeature[];
};

function page(config: MarketingPageConfig): MarketingPageConfig {
  return config;
}

export const platformOverviewPage = page({
  path: "/platform",
  eyebrow: "Platform",
  title: "The contractor claims operations platform",
  metaTitle: "Platform Overview",
  metaDescription:
    "Explore Claims Ninja's contractor platform—portal, tracking, communications, billing, and AI analysis backed by expert claim support for restoration teams.",
  description:
    "A unified contractor claims operations platform connecting your team, documents, and recovery workflows in one place.",
  features: [
    {
      title: "Operational visibility",
      description:
        "See claim activity, assignments, and recovery progress across your entire book of business.",
    },
    {
      title: "Expert claim support",
      description:
        "Pair platform tools with seasoned supplement professionals and negotiation support.",
    },
    {
      title: "AI-assisted intelligence",
      description:
        "Surface missed line items and recovery opportunities before they leave money on the table.",
    },
    {
      title: "Workflow integration",
      description:
        "Designed to fit how restoration and roofing teams already run projects—not replace them.",
    },
  ],
});

export const clientPortalPage = page({
  path: "/platform/client-portal",
  eyebrow: "Client Portal",
  title: "Your Claims Command Center",
  metaTitle: "Client Portal",
  metaDescription:
    "Claims Ninja Client Portal is your contractor command center—submit claim documents, communicate with our team, track projects, and keep billing connected in one workspace.",
  description:
    "Contractors get a centralized workspace to submit claim documents, communicate with the Claims Ninja team, monitor project progress, and keep claim activity organized from intake through recovery.",
  features: [
    {
      title: "Document Uploads",
      description: "Submit photos, estimates, scopes, and carrier correspondence directly to the claim file.",
    },
    {
      title: "Claim File Management",
      description: "Every job stays organized with a dedicated claim workspace for field and office teams.",
    },
    {
      title: "Real-Time Communication",
      description: "Message the Claims Ninja team inside the portal so conversations stay tied to the claim.",
    },
    {
      title: "Project Tracking",
      description: "Monitor milestones, open requests, and claim activity in real time.",
    },
    {
      title: "Billing Visibility",
      description: "Keep invoices, payment status, and claim-related billing connected to the job.",
    },
    {
      title: "Team Collaboration",
      description: "Give field teams, project managers, and leadership the right visibility on every job.",
    },
  ],
});

export const claimTrackingPage = page({
  path: "/platform/claim-tracking",
  eyebrow: "Platform",
  title: "Claim Tracking",
  metaTitle: "Claim Tracking",
  metaDescription:
    "Track every claim from intake through supplement and payment with Claims Ninja pipeline visibility, recovery metrics, and team accountability.",
  description:
    "Monitor every claim from intake through supplement, negotiation, and payment—with clear status at each stage.",
  features: [
    {
      title: "Pipeline visibility",
      description: "View open claims, aging buckets, and recovery stages across your organization.",
    },
    {
      title: "Recovery metrics",
      description: "Track uplift, supplement outcomes, and cycle time to improve operations.",
    },
    {
      title: "Carrier milestones",
      description: "Know when inspections, reviews, and approvals are due or overdue.",
    },
    {
      title: "Team accountability",
      description: "Assign ownership so nothing stalls between field, office, and claims support.",
    },
  ],
});

export const communicationHubPage = page({
  path: "/platform/communication-hub",
  eyebrow: "Platform",
  title: "Communication Hub",
  metaTitle: "Communication Hub",
  metaDescription:
    "Claims Ninja Communication Hub keeps claim conversations tied to the job with threaded context, faster expert responses, and audit-ready history.",
  description:
    "Collaborate directly with the Claims Ninja team and keep claim conversations tied to the work.",
  features: [
    {
      title: "Threaded claim context",
      description: "Messages stay attached to the job—not lost in generic inboxes.",
    },
    {
      title: "Faster responses",
      description: "Get answers from supplement experts without chasing status updates.",
    },
    {
      title: "Internal + external notes",
      description: "Separate contractor-facing updates from carrier-sensitive strategy.",
    },
    {
      title: "Audit-ready history",
      description: "Maintain a record of decisions and communications for leadership review.",
    },
  ],
});

export const billingPaymentsPage = page({
  path: "/platform/billing-payments",
  eyebrow: "Platform",
  title: "Billing & Payments",
  metaTitle: "Billing & Payments",
  metaDescription:
    "Manage claim-related billing on Claims Ninja with invoice visibility, predictable fee models, and finance-friendly exports built for contractor operations.",
  description:
    "Manage invoices, fee structures, and claim-related billing with clarity for finance and operations.",
  features: [
    {
      title: "Invoice visibility",
      description: "See what is billed, pending, and paid per claim or contract.",
    },
    {
      title: "Predictable fee models",
      description: "Align billing with your partnership structure and volume.",
    },
    {
      title: "Finance-friendly exports",
      description: "Support accounting workflows with organized payment records.",
    },
    {
      title: "Fewer billing surprises",
      description: "Transparent line items tied to claim activity and deliverables.",
    },
  ],
});

export const aiClaimAnalysisPage = page({
  path: "/platform/ai-claim-analysis",
  eyebrow: "Platform",
  title: "AI Claim Analysis",
  metaTitle: "AI Claim Analysis",
  metaDescription:
    "Claims Ninja AI claim analysis scores recovery opportunity, detects scope gaps, and pairs intelligent triage with expert supplement validation.",
  description:
    "Identify missed opportunities and claim recovery potential with AI-assisted triage before expert review.",
  features: [
    {
      title: "Opportunity scoring",
      description: "Prioritize claims with the highest supplement and recovery upside.",
    },
    {
      title: "Scope gap detection",
      description: "Flag line items and documentation gaps common in carrier estimates.",
    },
    {
      title: "Expert validation",
      description: "AI accelerates triage; specialists drive final strategy and negotiation.",
    },
    {
      title: "Calculator integration",
      description: "Connect field intake to intelligence reports your team can act on.",
    },
  ],
});

export const roofingPage = page({
  path: "/solutions/roofing",
  eyebrow: "Solutions",
  title: "Roofing Claims",
  metaTitle: "Roofing Claims",
  metaDescription:
    "Maximize recoveries on residential and commercial roofing losses with Claims Ninja documentation, supplement strategy, and carrier negotiation built for real roofing operations.",
  description:
    "Maximize recoveries on residential and commercial roofing losses with documentation, supplement strategy, and carrier negotiation built for real roofing operations.",
  features: [
    {
      title: "Scope accuracy",
      description: "Line-item detail aligned to manufacturer specs, code, and damage patterns.",
    },
    {
      title: "Supplement strategy",
      description: "Structured approach to revisions when carriers under-scope steep-slope and flat work.",
    },
    {
      title: "Volume-ready workflows",
      description: "Support storm books and ongoing retail with repeatable claim processes.",
    },
    {
      title: "Carrier negotiation",
      description: "Expert advocacy when adjusters push back on quantity, waste, or matching.",
    },
  ],
});

export const waterDamagePage = page({
  path: "/solutions/water-damage",
  eyebrow: "Solutions",
  title: "Water Damage Claims",
  metaTitle: "Water Damage Claims",
  metaDescription:
    "Water damage claim support from Claims Ninja—mitigation documentation, moisture readings, rebuild scopes, and supplement strategy built for restoration contractors.",
  description:
    "Turn mitigation documentation, moisture readings, rebuild scopes, and carrier correspondence into organized claim support built for restoration contractors.",
  features: [
    {
      title: "Mitigation documentation",
      description: "Capture drying, equipment, and moisture protocols carriers expect.",
    },
    {
      title: "Rebuild scope alignment",
      description: "Bridge from emergency work to full restoration estimates.",
    },
    {
      title: "Category-driven detail",
      description: "Account for class of water and affected assemblies in scope development.",
    },
    {
      title: "Faster approvals",
      description: "Reduce back-and-forth with organized submissions and expert review.",
    },
  ],
});

export const fireDamagePage = page({
  path: "/solutions/fire-damage",
  eyebrow: "Solutions",
  title: "Fire Damage Claims",
  metaTitle: "Fire Damage Claims",
  metaDescription:
    "Fire and smoke loss support with Claims Ninja: multi-trade scopes, code and ordinance items, and long-cycle carrier advocacy for complex rebuilds.",
  description:
    "Complex reconstruction and carrier negotiation support for fire, smoke, and structural losses.",
  features: [
    {
      title: "Multi-trade coordination",
      description: "Estimates that reflect demolition, structural, and finish scope accurately.",
    },
    {
      title: "Code and ordinance",
      description: "Identify upgrade and compliance items carriers often omit initially.",
    },
    {
      title: "Contents coordination",
      description: "Align structure and personal property workflows when both are in play.",
    },
    {
      title: "Long-cycle advocacy",
      description: "Stay engaged through extended reviews and rebuild timelines.",
    },
  ],
});

export const moldPage = page({
  path: "/solutions/mold",
  eyebrow: "Solutions",
  title: "Mold Claims",
  metaTitle: "Mold Claims",
  metaDescription:
    "Mold remediation and rebuild claim support from Claims Ninja with protocol-driven documentation and dispute-ready files restoration teams rely on.",
  description:
    "Claim support for remediation and rebuild projects where documentation and protocol matter most.",
  features: [
    {
      title: "Remediation protocols",
      description: "Scope containment, removal, and clearance steps carriers require.",
    },
    {
      title: "Rebuild continuity",
      description: "Transition from remediation estimates to reconstruction without gaps.",
    },
    {
      title: "Health and safety framing",
      description: "Present scope with the technical detail adjusters expect on mold jobs.",
    },
    {
      title: "Dispute-ready files",
      description: "Build files that hold up when carriers challenge extent or cause.",
    },
  ],
});

export const contentsPage = page({
  path: "/solutions/contents",
  eyebrow: "Solutions",
  title: "Contents Claims",
  metaTitle: "Contents Claims",
  metaDescription:
    "Contents claim inventory and valuation support from Claims Ninja—structured documentation and recovery optimization for personal property losses.",
  description:
    "Inventory, valuation, and documentation assistance for personal property and commercial contents losses.",
  features: [
    {
      title: "Structured inventory",
      description: "Organize line items, depreciation, and replacement values clearly.",
    },
    {
      title: "Documentation support",
      description: "Photos, receipts, and narratives that strengthen carrier submissions.",
    },
    {
      title: "Coordination with structure",
      description: "Keep contents strategy aligned when structure claims run in parallel.",
    },
    {
      title: "Recovery optimization",
      description: "Pursue fair settlement when carriers undervalue specialty items.",
    },
  ],
});

export const blogPage = page({
  path: "/blog",
  eyebrow: "Resources",
  title: "Blog",
  metaTitle: "Blog",
  metaDescription:
    "Claims Ninja blog: insights on contractor claims operations, supplement strategy, and scaling your recovery engine without adding internal overhead.",
  description:
    "Insights on contractor claims operations, supplement strategy, and building a stronger recovery engine.",
  features: [
    {
      title: "Operations playbooks",
      description: "Practical guidance for scaling claim volume without losing quality.",
    },
    {
      title: "Industry trends",
      description: "What carriers, adjusters, and contractors are changing—and how to adapt.",
    },
    {
      title: "Platform updates",
      description: "News on Claims Ninja tools, workflows, and partner programs.",
    },
  ],
});

export const caseStudiesPage = page({
  path: "/case-studies",
  eyebrow: "Resources",
  title: "Case Studies",
  metaTitle: "Case Studies",
  metaDescription:
    "Claims Ninja case studies show how restoration and roofing contractors improve recovery, cycle time, and claim operations with expert partnership.",
  description:
    "Real outcomes from restoration and roofing contractors who partner with Claims Ninja for claim operations.",
  features: [
    {
      title: "Recovery benchmarks",
      description: "See uplift examples across claim types and carrier environments.",
    },
    {
      title: "Workflow transformation",
      description: "How teams reduced cycle time and improved supplement capture.",
    },
    {
      title: "Partnership models",
      description: "Ways contractors integrate expert support without building in-house teams.",
    },
  ],
});

export const guidesPage = page({
  path: "/guides",
  eyebrow: "Resources",
  title: "Claim Guides",
  metaTitle: "Claim Guides",
  metaDescription:
    "Practical Claims Ninja guides for documentation, supplement triggers, and carrier communication—built for restoration field and office teams.",
  description:
    "Practical playbooks for documentation, supplements, and carrier communication—built for field and office teams.",
  features: [
    {
      title: "Intake checklists",
      description: "Capture the right photos and facts on day one.",
    },
    {
      title: "Supplement triggers",
      description: "Know when and how to push for revised scopes.",
    },
    {
      title: "Carrier communication",
      description: "Templates and tone that keep negotiations productive.",
    },
  ],
});

export const videosPage = page({
  path: "/videos",
  eyebrow: "Resources",
  title: "Videos",
  metaTitle: "Videos",
  metaDescription:
    "Claims Ninja videos: platform walkthroughs, supplement explainers, and onboarding for contractors using expert claim support and our platform.",
  description:
    "Walkthroughs and operational best practices for contractors using Claims Ninja and expert claim support.",
  features: [
    {
      title: "Platform tours",
      description: "See how portal, tracking, and analysis tools work together.",
    },
    {
      title: "Expert sessions",
      description: "Short explainers on supplements, negotiations, and common denials.",
    },
    {
      title: "Onboarding series",
      description: "Get new team members productive on claim workflows quickly.",
    },
  ],
});

export const faqPage = page({
  path: "/faq",
  eyebrow: "Resources",
  title: "FAQ",
  metaTitle: "FAQ",
  metaDescription:
    "Claims Ninja FAQ covers onboarding, pricing, platform security, and what expert claim teams handle versus your field operation—clear, direct answers.",
  description:
    "Answers to common questions about Claims Ninja platform capabilities, partnerships, and claim support services.",
  features: [
    {
      title: "Getting started",
      description: "How onboarding, intake, and first claim reviews work.",
    },
    {
      title: "Pricing & billing",
      description: "Fee structures, invoicing, and what is included in partnership tiers.",
    },
    {
      title: "Platform & security",
      description: "Data handling, access controls, and document storage practices.",
    },
    {
      title: "Claim support scope",
      description: "What expert teams handle versus what stays with your field operation.",
    },
  ],
});

export const aboutPage = page({
  path: "/about",
  eyebrow: "Company",
  title: "About Claims Ninja",
  metaTitle: "About",
  metaDescription:
    "Claims Ninja helps restoration contractors and roofing companies run claims like a professional operation with expert support and management technology.",
  description:
    "We help restoration contractors, roofing companies, and multi-location operators run claims like a professional operation—not a side task.",
  features: [
    {
      title: "Contractor-first mission",
      description: "Built by operators who understand production schedules and carrier pressure.",
    },
    {
      title: "Expert + platform",
      description: "Technology accelerates triage; people drive negotiation and outcomes.",
    },
    {
      title: "Nationwide support",
      description: "Scale supplement and PA capabilities without hiring a full in-house team.",
    },
    {
      title: "Long-term partnerships",
      description: "We grow with your book of business and operational maturity.",
    },
  ],
});

export const partnerNetworkPage = page({
  path: "/partner-network",
  eyebrow: "Company",
  title: "Partner Network",
  metaTitle: "Partner Network",
  metaDescription:
    "Claims Ninja partner network connects restoration and roofing contractors with vetted collaborators for complex, trade-aligned claim outcomes.",
  description:
    "Trusted partners across restoration, roofing, and adjacent trades who work with Claims Ninja on complex claims.",
  features: [
    {
      title: "Vetted collaborators",
      description: "Relationships that strengthen outcomes on large or specialized losses.",
    },
    {
      title: "Trade alignment",
      description: "Partners who understand documentation standards carriers require.",
    },
    {
      title: "Referral integrity",
      description: "Introductions that serve the contractor and policyholder—not noise.",
    },
  ],
});

export const reviewsPage = page({
  path: "/reviews",
  eyebrow: "Company",
  title: "Reviews",
  metaTitle: "Reviews",
  metaDescription:
    "Read what restoration and roofing contractors say about partnering with Claims Ninja on claim operations, deadlines, and recovery results.",
  description:
    "What restoration and roofing contractors say about partnering with Claims Ninja on claim operations.",
  features: [],
});

export const contactPage = page({
  path: "/contact",
  eyebrow: "Company",
  title: "Contact",
  metaTitle: "Contact",
  metaDescription:
    "Contact Claims Ninja for partnership inquiries, platform demos, or active claim support. Tell us about your operation and claim workflow goals.",
  description:
    "Tell us about your operation. We will assess your claim workflow, identify recovery opportunities, and outline next steps.",
  features: [
    {
      title: "Partnership inquiries",
      description: "For restoration, roofing, and contractors scaling claim volume.",
    },
    {
      title: "Platform demos",
      description: "See portal, tracking, and AI analysis in context for your team.",
    },
    {
      title: "Existing partners",
      description: "Reach your Claims Ninja team for active claim support.",
    },
  ],
});

export const pricingPage = page({
  path: "/pricing",
  eyebrow: "Pricing",
  title: "Pricing built for contractor operations",
  metaTitle: "Pricing",
  metaDescription:
    "Claims Ninja pricing aligns to your claim volume and service level with transparent fees, volume tiers, and ROI-focused partnership models for contractors.",
  description:
    "Flexible partnership models aligned to claim volume, service level, and how much expert support your team needs.",
  features: [
    {
      title: "Volume-based tiers",
      description: "Structure that scales with your book of business—not one-size-fits-all.",
    },
    {
      title: "Transparent fees",
      description: "Understand what is included in platform access versus per-claim support.",
    },
    {
      title: "ROI-focused",
      description: "Designed so recovery uplift and operational efficiency justify investment.",
    },
    {
      title: "Custom enterprise",
      description: "Multi-location operators can discuss dedicated workflows and SLAs.",
    },
  ],
});

/** All marketing page configs keyed by path for route generation. */
export const MARKETING_PAGES_BY_PATH: Record<string, MarketingPageConfig> = {
  [platformOverviewPage.path]: platformOverviewPage,
  [clientPortalPage.path]: clientPortalPage,
  [claimTrackingPage.path]: claimTrackingPage,
  [communicationHubPage.path]: communicationHubPage,
  [billingPaymentsPage.path]: billingPaymentsPage,
  [aiClaimAnalysisPage.path]: aiClaimAnalysisPage,
  [roofingPage.path]: roofingPage,
  [waterDamagePage.path]: waterDamagePage,
  [fireDamagePage.path]: fireDamagePage,
  [moldPage.path]: moldPage,
  [contentsPage.path]: contentsPage,
  [blogPage.path]: blogPage,
  [caseStudiesPage.path]: caseStudiesPage,
  [guidesPage.path]: guidesPage,
  [videosPage.path]: videosPage,
  [faqPage.path]: faqPage,
  [aboutPage.path]: aboutPage,
  [partnerNetworkPage.path]: partnerNetworkPage,
  [reviewsPage.path]: reviewsPage,
  [contactPage.path]: contactPage,
  [pricingPage.path]: pricingPage,
};
