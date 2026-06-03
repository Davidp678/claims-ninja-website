import type { BlogPost } from "@/lib/blog-types";

import { claimDocumentationApprovalRates } from "./claim-documentation-approval-rates";
import { dryLogDocumentationGuideInsuranceClaims } from "./dry-log-documentation-guide-insurance-claims";
import { moistureMappingBestPracticesInsuranceClaims } from "./moisture-mapping-best-practices-insurance-claims";
import { fireDamageClaimDocumentationGuide } from "./fire-damage-claim-documentation-guide";
import { dailyMonitoringDocumentationBestPractices } from "./daily-monitoring-documentation-best-practices";
import { equipmentChargesWaterDamageClaims } from "./equipment-charges-water-damage-claims";
import { waterDamageSupplementDenialRecovery } from "./water-damage-supplement-denial-recovery";
import { whyWaterMitigationClaimsGetUnderpaid } from "./why-water-mitigation-claims-get-underpaid";
import { first48HoursAfterCarrierEstimate } from "./first-48-hours-after-carrier-estimate";
import { INSURANCE_SUPPLEMENTING_PILLAR } from "./insurance-supplementing-guide-contractors";
import { opOnInsuranceClaims } from "./op-on-insurance-claims";
import { recoverRevenueWithoutInHouseClaims } from "./recover-revenue-without-in-house-claims";
import { roofingSupplementPlaybook } from "./roofing-supplement-playbook";
import { supplementDenialRecoveryGuide } from "./supplement-denial-recovery-guide";
import { whatIsARoofSupplement } from "./what-is-a-roof-supplement";
import { waterDamageMitigationSupplementPlaybook } from "./water-damage-mitigation-supplement-playbook";
import { whenToBringInSupplementingPartner } from "./when-to-bring-in-supplementing-partner";
import { whyCarrierEstimatesMissLineItems } from "./why-carrier-estimates-miss-line-items";
import { xactimateEstimateReviewChecklistContractors } from "./xactimate-estimate-review-checklist-contractors";
import { xactimateVsMarketPricing } from "./xactimate-vs-market-pricing";

export const BLOG_POSTS: readonly BlogPost[] = [
  INSURANCE_SUPPLEMENTING_PILLAR,
  whyCarrierEstimatesMissLineItems,
  recoverRevenueWithoutInHouseClaims,
  whatIsARoofSupplement,
  roofingSupplementPlaybook,
  waterDamageMitigationSupplementPlaybook,
  dryLogDocumentationGuideInsuranceClaims,
  moistureMappingBestPracticesInsuranceClaims,
  whyWaterMitigationClaimsGetUnderpaid,
  waterDamageSupplementDenialRecovery,
  equipmentChargesWaterDamageClaims,
  dailyMonitoringDocumentationBestPractices,
  fireDamageClaimDocumentationGuide,
  opOnInsuranceClaims,
  supplementDenialRecoveryGuide,
  first48HoursAfterCarrierEstimate,
  xactimateEstimateReviewChecklistContractors,
  xactimateVsMarketPricing,
  whenToBringInSupplementingPartner,
  claimDocumentationApprovalRates,
] as const;
