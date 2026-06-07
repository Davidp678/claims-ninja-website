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
    "We help restoration contractors organize fire, smoke, structural, contents, and rebuild documentation into claim support built for complex carrier review.",
  description:
    "We help restoration contractors organize fire, smoke, structural, contents, and rebuild documentation into claim support built for complex carrier review.",
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
    "We help restoration contractors organize mold remediation, containment, clearance, rebuild, and carrier documentation into claim support built for disputed or protocol-driven losses.",
  description:
    "We help restoration contractors organize mold remediation, containment, clearance, rebuild, and carrier documentation into claim support built for disputed or protocol-driven losses.",
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
  title: "Contents Restoration Claims",
  metaTitle: "Contents Restoration Claims",
  metaDescription:
    "Claims support for inventory-heavy, documentation-heavy contents losses—pack-out operations, specialty restoration, chain of custody, and carrier-ready files for contents restoration firms.",
  description:
    "Claims support for inventory-heavy, documentation-heavy contents losses—pack-out operations, specialty restoration, chain of custody, and carrier-ready files for contents restoration firms.",
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
  path: "/resources/blog",
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
  title: "Results & Insights",
  metaTitle: "Results & Insights",
  metaDescription:
    "Industry intelligence from thousands of reviewed insurance claims — trade-specific recovery patterns, common scope gaps, and portfolio-level insights for roofing and restoration contractors.",
  description:
    "Insights gathered from thousands of insurance claims — common recovery opportunities, trade-specific trends, and the claim patterns we see every day.",
  features: [],
});

export const guidesPage = page({
  path: "/resources/guides",
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
  eyebrow: "Claims Knowledge Center",
  title: "Frequently Asked Questions",
  metaTitle: "FAQ",
  metaDescription:
    "Claims Ninja FAQ covers onboarding, pricing, supplements, carrier negotiations, and platform security — clear answers for contractors and restoration professionals.",
  description:
    "Practical answers for contractors, restoration companies, and property claim professionals — from onboarding and pricing to supplements, documentation, and carrier negotiations.",
  features: [],
});

export const aboutPage = page({
  path: "/about",
  eyebrow: "Company",
  title: "About Claims Ninja",
  metaTitle: "About Claims Ninja",
  metaDescription:
    "Claims Ninja is the contractor claims operations platform—expert insurance claim support, claims management technology, and workflows for restoration and roofing contractors nationwide.",
  description:
    "Founded in 2024, Claims Ninja gives contractors claim recovery expertise and enterprise-level execution—systems, workflows, and technology to support claim operations at scale.",
  features: [
    {
      title: "Mission",
      description:
        "Help contractors scale without building an internal claims department.",
    },
    {
      title: "Vision",
      description:
        "Create the most trusted claims operations platform in the industry.",
    },
    {
      title: "Approach",
      description:
        "Combine technology, process, and expert claim support.",
    },
    {
      title: "Impact",
      description:
        "Support contractors with systems that improve efficiency, visibility, and recovery opportunities.",
    },
  ],
});

export const partnerNetworkPage = page({
  path: "/partner-network",
  eyebrow: "Company",
  title: "Strategic partner network",
  metaTitle: "Partner Network | Strategic Industry Partnerships | The Claims Ninja",
  metaDescription:
    "Explore the Claims Ninja partner network, including ProfileGorilla, CORE Group, 911 Restoration, Daylit, and Morgan & Morgan. Trusted resources for contractors, restoration companies, and insurance claim professionals.",
  description:
    "Claims Ninja connects contractors with trusted organizations that strengthen claim outcomes, accelerate cash flow, provide legal resources, and support operational growth.",
  features: [],
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
    "Contact Claims Ninja for claim reviews, partnership inquiries, client support, or strategic partner opportunities. Tell us about your operation and claim workflow.",
  description:
    "Tell us about your business, claim workflow, or current challenges. We'll review your situation, identify opportunities, and recommend next steps.",
  features: [],
});

export const pricingPage = page({
  path: "/pricing",
  eyebrow: "Pricing",
  title: "Transparent pricing for claim operations",
  metaTitle: "Pricing",
  metaDescription:
    "Transparent Claims Ninja pricing for estimate writing, supplement support, insurance negotiation, and advanced claim services — structured by claim stage and value recovered.",
  description:
    "Pricing is structured around the work required, the claim stage, and the value recovered. Whether you need estimate writing, supplement support, negotiation, or advanced claim services, Claims Ninja keeps pricing clear before work begins.",
  features: [
    {
      title: "Estimate writing",
      description:
        "Tiered rates by estimate value — from a $100 minimum on smaller files to percentage-based pricing on larger scopes.",
    },
    {
      title: "Supplement support",
      description:
        "15% of documented increase approved by the carrier from submitted supplemental scope.",
    },
    {
      title: "Insurance negotiation",
      description:
        "$150 minimum; 15% of documented settlement increase when a carrier estimate exists, or 4% of final RCV when none has been provided.",
    },
    {
      title: "Advanced claim support",
      description:
        "Appraisal services, EagleView reports, and payment processing options with clear pass-through or convenience fees.",
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
