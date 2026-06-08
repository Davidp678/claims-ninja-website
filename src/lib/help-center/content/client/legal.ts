import { defineArticle, h, link, p, ul } from "@/lib/help-center/builder";
import { EXTERNAL_LINKS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

const PREFACE_BLOCKS = [
  h(2, "Insurance Claim Administration, Estimating Authorization, Assignment of Benefits, and Limited Representation Provisions"),
  p(
    "This section governs the role of The Claims Ninja (\"TCN\"), a project-administration and insurance claim support partner of Contractor. This section is incorporated into and made part of Contractor's Agreement with Owner/Policyholder (\"Owner\") and applies to the property identified elsewhere in this Agreement (\"Property\").",
  ),
  p("If Owner name, Property address, Insurance Carrier, Policy Number, or Claim Number are not already identified in this Agreement, input them in the contract fields provided."),
  p("Execution of Contractor's Agreement constitutes full acceptance of this section and all authorizations contained herein."),
];

function contractSection(
  num: number,
  title: string,
  blocks: ReturnType<typeof defineArticle>["blocks"],
) {
  return defineArticle({
    slug: `contract-section-${num}`,
    sectionSlug: "legal-appendix",
    title: `Section ${num}: ${title}`,
    excerpt: `ICA/AOB contract section ${num} — copy into your client agreement.`,
    portal: "client",
    updatedAt: UPDATED,
    tags: ["legal", "contract"],
    blocks: num === 1 ? [...PREFACE_BLOCKS, ...blocks] : blocks,
  });
}

export const legalArticles = [
  contractSection(1, "Purpose of Engagement", [
    p("Owner has reported or intends to report an insurance claim relating to damage at the Property. Contractor has been retained to perform mitigation, restoration, reconstruction, or repair services."),
    p("The Claims Ninja may assist Contractor and Owner with technical claim support services relating to Contractor's scope of work, including estimating, documentation, pricing analysis, and claim administration. These services are administrative and technical in nature."),
  ]),
  contractSection(2, "Estimating, Scope, and Pricing Advocacy Authorization", [
    p("Owner authorizes The Claims Ninja to provide technical insurance claim support services relating to Contractor's scope of work, including but not limited to:"),
    ul([
      "Preparing independent estimates",
      "Reviewing and analyzing insurer estimates",
      "Preparing pricing comparisons and line-item rebuttals",
      "Drafting supplement requests",
      "Conducting documentation reviews",
      "Organizing and submitting photographs, reports, and invoices",
      "Preparing scope clarifications",
      "Communicating technical pricing and scope issues to the insurer",
      "Coordinating inspections related to Contractor's work",
      "Assisting with resolution of scope discrepancies",
    ]),
    p("This authorization applies solely to matters relating to Contractor's scope of work."),
  ]),
  contractSection(3, "Limited Appraisal Coordination Authority", [
    p("If the insurance policy contains an appraisal clause and a dispute arises regarding the amount of loss relating to Contractor's scope, Owner authorizes TCN to assist in invoking appraisal, coordinate appointment of a competent appraiser, participate in umpire selection, prepare documentation, and attend appraisal-related inspections."),
    p("Appraisal authority is limited to valuation disputes tied to Contractor's work."),
  ]),
  contractSection(4, "Post-Loss Assignment of Benefits", [
    p("To the extent permitted by applicable law, Owner assigns to Contractor post-loss rights, benefits, proceeds, and causes of action under the applicable insurance policy that relate solely to Contractor's authorized scope of work."),
    p("Where an assignment of benefits is restricted or prohibited by applicable law, this provision operates as a direction to pay and authorization to communicate and cooperate."),
    p("This is a post-loss assignment only. It does not transfer ownership of the insurance policy or authorize Contractor to adjust claims beyond its contractual scope unless separately authorized in writing."),
  ]),
  contractSection(5, "Direct Payment Authorization and Cooperation", [
    p("Owner authorizes and directs the insurance carrier and any mortgage company to include Contractor as a payee and issue payment directly to Contractor for all amounts attributable to Contractor's authorized scope of work."),
    ul([
      "Owner shall notify Contractor within three (3) business days of receipt of proceeds",
      "Owner shall endorse and remit payment to Contractor within five (5) business days",
      "Owner shall fully cooperate with any mortgage company endorsement process",
      "Owner shall not use funds assigned to Contractor for any other purpose",
    ]),
    p("Failure to remit proceeds constitutes a material breach and may result in suspension of work and pursuit of all available remedies."),
  ]),
  contractSection(6, "Anti-Circumvention and Settlement Protection", [
    p("Owner agrees not to settle Contractor's assigned scope without written consent, execute releases impairing assigned rights, divert proceeds, or replace Contractor after benefits are secured without honoring compensation terms."),
    p("Contractor retains all lien rights and statutory remedies independent of insurance recovery."),
  ]),
  contractSection(7, "Cooperation Requirement", [
    p("Owner agrees to provide requested documentation, attend inspections, execute claim-related documents, disclose direct insurer communications affecting Contractor's scope, and avoid actions that impair assigned rights."),
    p("Failure to cooperate constitutes material breach and may result in suspension of services."),
  ]),
  contractSection(8, "Supplements and Post-Project Review", [
    p("Owner acknowledges that supplements may be pursued when additional scope becomes identifiable, additional recoverable benefits may become apparent during or after project execution, and post-completion review may reveal recoverable items not reasonably identifiable at initial inspection."),
    p("Such efforts do not imply prior withholding of scope and are part of comprehensive claim review."),
  ]),
  contractSection(9, "No Guarantee of Coverage", [
    p("TCN and Contractor do not guarantee claim approval, payment amount, or coverage determination. All insurance payments remain subject to policy terms and insurer evaluation."),
  ]),
  contractSection(10, "Non-Waiver of Rights", [
    p("Acceptance of partial payment does not waive Contractor's right to pursue remaining amounts. Nothing herein waives mechanic's lien rights, bond claims, statutory remedies, or contractual remedies."),
  ]),
  contractSection(11, "Severability and Multi-State Compliance", [
    p("This section is intended to comply with applicable state laws governing post-loss assignments and insurance claim assistance. If any provision is deemed unenforceable in a specific jurisdiction, remaining provisions remain in effect to the maximum extent permitted by law."),
    p("State-specific riders may supplement this section where required."),
  ]),
  contractSection(12, "Binding Effect", [
    p("This section is binding upon Owner, heirs, successors, and assigns. Execution constitutes acknowledgment and acceptance of estimating authorization, limited appraisal coordination, post-loss assignment of benefits, direct payment authorization, and anti-circumvention protections."),
    p("No separate signature is required unless mandated by state statute."),
  ]),
];

export const affiliateArticle = defineArticle({
  slug: "affiliate-referral-program",
  sectionSlug: "legal-appendix",
  title: "Affiliate Referral Program",
  excerpt: "Earn rewards for referring producing clients to The Claims Ninja.",
  portal: "client",
  updatedAt: UPDATED,
  blocks: [
    p(
      "Earn compensation for referring your network to The Claims Ninja as producing clients. This is automatically enacted if you signed up after March 9, 2026. If you signed up before that date, we will reach out manually for an agreement.",
    ),
    link(EXTERNAL_LINKS.affiliateProgram, "Affiliate Program Details"),
  ],
});
