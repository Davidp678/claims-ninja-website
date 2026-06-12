import type { BlogPost } from "@/lib/blog-types";

import { claimDocumentationApprovalRates } from "./claim-documentation-approval-rates";
import { dryLogDocumentationGuideInsuranceClaims } from "./dry-log-documentation-guide-insurance-claims";
import { moistureMappingBestPracticesInsuranceClaims } from "./moisture-mapping-best-practices-insurance-claims";
import { howCarriersReduceDryingDays } from "./how-carriers-reduce-drying-days";
import { moistureMappingMistakesThatCostContractorsMoney } from "./moisture-mapping-mistakes-that-cost-contractors-money";
import { fireDamageClaimDocumentationGuide } from "./fire-damage-claim-documentation-guide";
import { fireDamageSupplementPlaybookForContractors } from "./fire-damage-supplement-playbook-for-contractors";
import { smokeAndSootDamageDocumentationGuide } from "./smoke-and-soot-damage-documentation-guide";
import { hvacContaminationInFireDamageClaims } from "./hvac-contamination-in-fire-damage-claims";
import { fireDamageSupplementDenialRecovery } from "./fire-damage-supplement-denial-recovery";
import { odorMitigationInFireDamageClaims } from "./odor-mitigation-in-fire-damage-claims";
import { dailyMonitoringDocumentationBestPractices } from "./daily-monitoring-documentation-best-practices";
import { equipmentChargesWaterDamageClaims } from "./equipment-charges-water-damage-claims";
import { waterDamageSupplementDenialRecovery } from "./water-damage-supplement-denial-recovery";
import { whyCategory3WaterClaimsGetUnderpaid } from "./why-category-3-water-claims-get-underpaid";
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
  whyCategory3WaterClaimsGetUnderpaid,
  moistureMappingMistakesThatCostContractorsMoney,
  howCarriersReduceDryingDays,
  fireDamageClaimDocumentationGuide,
  fireDamageSupplementPlaybookForContractors,
  smokeAndSootDamageDocumentationGuide,
  hvacContaminationInFireDamageClaims,
  fireDamageSupplementDenialRecovery,
  odorMitigationInFireDamageClaims,
  opOnInsuranceClaims,
  supplementDenialRecoveryGuide,
  first48HoursAfterCarrierEstimate,
  xactimateEstimateReviewChecklistContractors,
  xactimateVsMarketPricing,
  whenToBringInSupplementingPartner,
  claimDocumentationApprovalRates,
] as const;
