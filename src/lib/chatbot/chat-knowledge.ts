/**
 * Chatbot knowledge chunks built from approved site content.
 * Update source files (faq-data.ts, marketing-pages.ts, etc.) — chunks rebuild on deploy.
 */

import type { FaqItem } from "@/lib/faq-page";
import { getCategoryTitle } from "@/lib/faq-page";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { blogToChunks, blogCategoryToChunks } from "./chat-knowledge-blog";
import { guideToChunks, guideCategoryToChunks } from "./chat-knowledge-guides";
import { aboutPageToChunks } from "./chat-knowledge-about";
import { pricingPageToChunks } from "./chat-knowledge-pricing";
import { partnerNetworkToChunks } from "./chat-knowledge-partner-network";
import { resultsInsightsToChunks } from "./chat-knowledge-results-insights";
import { AI_CLAIM_WORKFLOW } from "@/lib/ai-claim-analysis-page";
import { CLAIM_GUIDES } from "@/lib/guides";
import {
  CLIENT_PORTAL_CAPABILITIES,
  CLIENT_PORTAL_HERO,
  CLIENT_PORTAL_WORKFLOW,
} from "@/lib/client-portal-page";
import { CONTENTS_RESTORATION_HERO, CONTENTS_RESTORATION_SEGMENTS, CONTENTS_RESTORATION_WORKFLOW } from "@/lib/contents-restoration-page";
import {
  CONTACT_HERO,
  CONTACT_INFO,
  CONTACT_META,
  CONTACT_ROUTING,
} from "@/lib/contact-page";
import { FIRE_DAMAGE_HERO, FIRE_DAMAGE_SEGMENTS, FIRE_DAMAGE_WORKFLOW } from "@/lib/fire-damage-page";
import { MOLD_HERO, MOLD_SEGMENTS, MOLD_WORKFLOW } from "@/lib/mold-page";
import type { MarketingPageConfig } from "@/lib/marketing-pages";
import {
  aiClaimAnalysisPage,
  billingPaymentsPage,
  caseStudiesPage,
  claimTrackingPage,
  clientPortalPage,
  commercialPage,
  communicationHubPage,
  contentsPage,
  fireDamagePage,
  guidesPage,
  moldPage,
  platformOverviewPage,
  pricingPage,
  reviewsPage,
  roofingPage,
  waterDamagePage,
} from "@/lib/marketing-pages";
import {
  COMMERCIAL_HELP,
  COMMERCIAL_HERO,
  COMMERCIAL_PROPERTY_TYPES,
} from "@/lib/commercial-page";
import { ROOFING_HERO, ROOFING_SEGMENTS, ROOFING_WORKFLOW } from "@/lib/roofing-page";
import { SITE } from "@/lib/constants";
import {
  PLATFORM_AI,
  PLATFORM_HERO,
  PLATFORM_PILLARS,
} from "@/lib/platform-overview";
import { CLIENT_REVIEWS } from "@/lib/testimonials";
import { WATER_DAMAGE_HERO, WATER_DAMAGE_SEGMENTS, WATER_DAMAGE_WORKFLOW } from "@/lib/water-damage-page";

export type ChatKnowledgeChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

const TOPIC_ALIASES: Record<string, readonly string[]> = {
  getting_started: ["onboarding", "intake"],
  pricing: ["billing", "fees"],
  insurance_supplements: ["supplements", "supplement"],
  roofing_claims: ["roofing"],
  water_damage_claims: ["water damage", "mitigation"],
  fire_damage_claims: ["fire damage"],
  mold_claims: ["mold"],
  contents_restoration: ["contents"],
  carrier_negotiations: ["carrier", "negotiation"],
  documentation: ["documentation", "photos"],
  platform_security: ["platform", "security", "portal"],
  ai_claim_analysis: ["ai", "analysis"],
  results_insights: ["results and insights", "recovery results", "portfolio review"],
};

function questionPhrases(question: string): string[] {
  const normalized = question
    .toLowerCase()
    .replace(/[^\w\s%&/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const phrases: string[] = [];
  if (normalized.length >= 8) {
    phrases.push(normalized);
  }
  const words = normalized.split(" ").filter((w) => w.length >= 3);
  for (let i = 0; i < words.length - 1; i++) {
    phrases.push(`${words[i]} ${words[i + 1]}`);
  }
  return phrases;
}

const FAQ_ID_BOOSTS: Record<
  string,
  { phrases?: readonly string[]; keywords?: readonly string[]; topics?: readonly string[] }
> = {
  "water-commercial-claims-documentation": {
    phrases: [
      "commercial water loss documentation",
      "commercial mitigation documentation",
      "how are commercial water claims documented",
    ],
    keywords: ["commercial water", "commercial mitigation"],
    topics: ["commercial_water"],
  },
  "water-apartment-loss-documentation": {
    phrases: [
      "apartment water damage documentation",
      "apartment water losses",
      "apartment water loss documentation",
    ],
    keywords: ["apartment water", "apartment documentation"],
    topics: ["commercial_water"],
  },
  "water-multifamily-loss-documentation": {
    phrases: ["multifamily water claims documentation", "multifamily water damage"],
    keywords: ["multifamily", "multifamily water"],
    topics: ["commercial_water"],
  },
  "water-commercial-claims-scrutiny": {
    phrases: ["commercial water claims scrutinized", "commercial water claims scrutiny"],
    keywords: ["commercial scrutiny", "commercial water claims"],
    topics: ["commercial_water"],
  },
  "water-commercial-mitigation-package": {
    phrases: [
      "commercial mitigation package",
      "what should be in a commercial mitigation package",
    ],
    keywords: ["commercial mitigation package", "commercial closeout"],
    topics: ["commercial_water"],
  },
  "water-tenant-impact-documentation": {
    phrases: ["tenant impact documentation water damage", "tenant impact documentation"],
    keywords: ["tenant impact", "tenant documentation"],
    topics: ["commercial_water"],
  },
  "water-business-interruption-documentation": {
    phrases: [
      "business interruption documentation water damage",
      "business interruption documentation",
    ],
    keywords: ["business interruption"],
    topics: ["commercial_water"],
  },
  "water-commercial-claims-underpaid": {
    phrases: [
      "commercial water claims underpaid",
      "commercial water claims underpayment",
    ],
    keywords: ["commercial underpaid", "commercial underpayment"],
    topics: ["commercial_water"],
  },
  "water-apartment-complex-documentation": {
    phrases: [
      "apartment complex water damage documentation",
      "how should water damage be documented in apartment complexes",
      "apartment water loss documentation",
    ],
    keywords: ["apartment complex", "apartment documentation", "HOA documentation"],
    topics: ["commercial_water"],
  },
  "water-apartment-unit-separate-tracking": {
    phrases: [
      "track each apartment unit separately",
      "unit-by-unit documentation water damage",
      "apartment unit tracking water loss",
    ],
    keywords: ["unit-by-unit", "unit tracking", "separate unit"],
    topics: ["commercial_water"],
  },
  "water-apartment-equipment-usage-documentation": {
    phrases: [
      "equipment usage apartment water losses",
      "apartment equipment documentation",
      "equipment per unit apartment water",
    ],
    keywords: ["apartment equipment", "equipment per unit"],
    topics: ["commercial_water", "equipment_charges"],
  },
  "water-apartment-mitigation-claims-disputed": {
    phrases: [
      "apartment water mitigation claims disputed",
      "why apartment water claims disputed",
      "multifamily water claims disputed",
    ],
    keywords: ["apartment disputed", "multifamily disputed"],
    topics: ["commercial_water"],
  },
  "water-apartment-tenant-impact-required": {
    phrases: [
      "tenant impacts apartment water losses",
      "document tenant impact apartment",
      "tenant impact documentation apartment complex",
    ],
    keywords: ["tenant impact apartment", "apartment tenant"],
    topics: ["commercial_water"],
  },
  "water-multifamily-claims-underpaid": {
    phrases: [
      "multifamily water claims underpaid",
      "apartment water claim underpayment",
      "multifamily claim reductions",
      "why multifamily water claims underpaid",
    ],
    keywords: ["multifamily underpaid", "apartment underpayment", "multifamily reductions"],
    topics: ["commercial_water", "water_damage_claims"],
  },
  "water-multifamily-units-documentation": {
    phrases: [
      "unit-by-unit documentation multifamily",
      "document affected units multifamily water",
      "multifamily unit documentation water damage",
    ],
    keywords: ["unit-by-unit", "multifamily units", "unit documentation"],
    topics: ["commercial_water"],
  },
  "water-multifamily-equipment-reductions": {
    phrases: [
      "multifamily equipment reductions",
      "carriers reduce equipment multifamily water",
      "apartment equipment charge reductions",
    ],
    keywords: ["multifamily equipment", "equipment reductions", "apartment equipment"],
    topics: ["commercial_water", "equipment_charges"],
  },
  "water-multifamily-tenant-impact-documentation": {
    phrases: [
      "tenant impact documentation multifamily",
      "document tenant impact multifamily water claims",
      "multifamily tenant impact records",
    ],
    keywords: ["tenant impact multifamily", "multifamily tenant"],
    topics: ["commercial_water"],
  },
  "water-multifamily-full-payment-support": {
    phrases: [
      "support full payment multifamily water claims",
      "multifamily water claim recovery documentation",
      "documentation to invoice mismatch multifamily",
    ],
    keywords: ["full payment", "multifamily recovery", "invoice mismatch"],
    topics: ["commercial_water", "mitigation"],
  },
  "water-commercial-documentation-missing": {
    phrases: [
      "documentation missing commercial water claims",
      "what documentation is missing commercial water",
      "commercial water documentation gaps",
    ],
    keywords: ["commercial documentation", "missing documentation", "documentation mistakes"],
    topics: ["commercial_water", "water_damage_claims"],
  },
  "water-commercial-invoice-reduced-why": {
    phrases: [
      "why are commercial water mitigation invoices reduced",
      "commercial invoice reductions water damage",
      "commercial mitigation invoice reduced",
    ],
    keywords: ["commercial invoice", "invoice reduction", "commercial mitigation"],
    topics: ["commercial_water", "mitigation"],
  },
  "water-commercial-tenant-impact-required": {
    phrases: [
      "tenant impacts commercial water losses",
      "should tenant impacts be documented commercial water",
      "commercial tenant impact documentation",
    ],
    keywords: ["tenant impact", "commercial tenant", "occupied commercial"],
    topics: ["commercial_water"],
  },
  "water-commercial-common-area-documentation": {
    phrases: [
      "common area documentation commercial water mitigation",
      "how to document common areas commercial water",
      "commercial common area water damage documentation",
    ],
    keywords: ["common area", "common area documentation", "hallway documentation"],
    topics: ["commercial_water"],
  },
  "water-commercial-documentation-invoice-match": {
    phrases: [
      "documentation match mitigation invoice commercial",
      "why must documentation match invoice commercial water",
      "documentation to invoice alignment commercial",
    ],
    keywords: ["invoice alignment", "documentation match", "invoice defense"],
    topics: ["commercial_water", "mitigation"],
  },
  "water-mitigation-invoice-reductions": {
    phrases: [
      "why do carriers reduce water mitigation invoices",
      "carrier invoice reductions mitigation",
      "mitigation invoice reduced",
    ],
    keywords: ["invoice reduction", "carrier invoice reduction", "mitigation invoice"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-mitigation-invoice-documentation": {
    phrases: [
      "documentation supports water mitigation invoices",
      "mitigation documentation requirements",
      "what documentation supports mitigation invoice",
    ],
    keywords: ["mitigation documentation", "invoice documentation", "indexed packet"],
    topics: ["water_damage_claims", "dry_logs"],
  },
  "water-defend-drying-day-charges": {
    phrases: [
      "defend drying day charges",
      "drying day disputes",
      "how to defend drying days",
    ],
    keywords: ["drying day dispute", "drying days", "defend drying"],
    topics: ["water_damage_claims", "dry_logs"],
  },
  "water-equipment-invoice-documentation": {
    phrases: [
      "equipment usage documented for invoice review",
      "equipment invoice documentation",
      "document equipment for invoice review",
    ],
    keywords: ["equipment invoice", "equipment documentation", "equipment dispute"],
    topics: ["water_damage_claims", "equipment_charges"],
  },
  "water-mitigation-invoice-review-failures": {
    phrases: [
      "mitigation invoices fail review",
      "water mitigation invoice review failures",
      "why mitigation invoice fails review",
    ],
    keywords: ["invoice review", "invoice fail", "desk review"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-large-loss-qualifies": {
    phrases: [
      "what qualifies as a large-loss water mitigation project",
      "large loss water mitigation project",
      "enterprise water loss qualification",
      "hospital water loss documentation",
      "catastrophic water event mitigation",
    ],
    keywords: ["large loss", "enterprise water", "large-loss", "catastrophic water"],
    topics: ["commercial_water", "water_damage_claims"],
  },
  "water-large-loss-documentation": {
    phrases: [
      "how should large-loss water damage be documented",
      "large loss water damage documentation",
      "large-loss documentation systems",
      "enterprise water mitigation documentation",
    ],
    keywords: ["large loss documentation", "enterprise documentation", "documentation command structure"],
    topics: ["commercial_water", "water_damage_claims", "mitigation"],
  },
  "water-large-loss-scrutiny": {
    phrases: [
      "why are large-loss water claims heavily scrutinized",
      "large loss water claim scrutiny",
      "enterprise water claim review",
    ],
    keywords: ["large loss scrutiny", "specialist desk review", "consultant involvement"],
    topics: ["commercial_water", "water_damage_claims", "mitigation"],
  },
  "water-large-loss-drying-zones": {
    phrases: [
      "how should multiple drying zones be documented",
      "drying zones documentation large loss",
      "multi-zone drying documentation",
      "zone-by-zone water mitigation documentation",
    ],
    keywords: ["drying zones", "multi-zone", "zone documentation", "work area segmentation"],
    topics: ["commercial_water", "water_damage_claims", "moisture_mapping", "dry_logs"],
  },
  "water-large-loss-invoice-documentation": {
    phrases: [
      "documentation supports large commercial water mitigation invoices",
      "large loss mitigation invoice documentation",
      "enterprise water mitigation invoice support",
      "executive reporting water mitigation invoice",
    ],
    keywords: ["large loss invoice", "commercial mitigation invoice", "executive summary", "vendor documentation"],
    topics: ["commercial_water", "water_damage_claims", "mitigation"],
  },
  "water-class-4-drying-definition": {
    phrases: [
      "what is class 4 water damage drying",
      "class 4 water damage drying",
      "class 4 drying definition",
      "bound water class 4",
    ],
    keywords: ["class 4", "bound water", "low-permeance", "class 4 drying"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-class-4-documentation-required": {
    phrases: [
      "why does class 4 drying require additional documentation",
      "class 4 documentation requirements",
      "class 4 drying documentation",
    ],
    keywords: ["class 4 documentation", "additional documentation", "specialty drying"],
    topics: ["water_damage_claims", "dry_logs", "mitigation"],
  },
  "water-class-4-specialty-equipment-documentation": {
    phrases: [
      "how should specialty drying equipment be documented",
      "specialty drying equipment documentation",
      "document injectidry floor mats desiccant",
    ],
    keywords: ["specialty drying", "injectidry", "floor mat", "desiccant", "heat drying"],
    topics: ["water_damage_claims", "equipment_charges", "mitigation"],
  },
  "water-class-4-drying-duration": {
    phrases: [
      "why do class 4 drying projects take longer",
      "class 4 drying duration",
      "extended drying class 4",
      "bound water takes longer to dry",
    ],
    keywords: ["class 4 duration", "extended drying", "bound water", "low-permeance"],
    topics: ["water_damage_claims", "dry_logs", "mitigation"],
  },
  "water-class-4-carrier-disputes": {
    phrases: [
      "why do carriers dispute class 4 drying charges",
      "class 4 drying charge disputes",
      "carrier disputes class 4",
      "class 4 drying disputes",
    ],
    keywords: ["class 4 dispute", "drying charge dispute", "carrier dispute", "class 4 charges"],
    topics: ["water_damage_claims", "equipment_charges", "mitigation"],
  },
  "water-reinspection-when-request": {
    phrases: [
      "when should contractors request a water damage reinspection",
      "when to request water damage reinspection",
      "request water damage reinspection",
    ],
    keywords: ["reinspection", "water damage reinspection", "when to request"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-reinspection-documentation-prep": {
    phrases: [
      "what documentation should be prepared before a reinspection",
      "documentation before reinspection",
      "prepare for water reinspection",
    ],
    keywords: ["reinspection documentation", "documentation prep", "before reinspection"],
    topics: ["water_damage_claims", "dry_logs", "moisture_mapping"],
  },
  "water-reinspection-additional-damage-documented": {
    phrases: [
      "can additional damage be documented after the initial inspection",
      "document additional damage after inspection",
      "additional damage after initial inspection",
    ],
    keywords: ["additional damage", "after inspection", "discovered damage"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-reinspection-denial-reasons": {
    phrases: [
      "why do carriers deny reinspection requests",
      "carriers deny reinspection",
      "reinspection request denied",
    ],
    keywords: ["reinspection denied", "deny reinspection", "reinspection refusal"],
    topics: ["water_damage_claims", "mitigation"],
  },
  "water-reinspection-organize-documentation": {
    phrases: [
      "how should contractors organize documentation for a reinspection",
      "organize documentation for reinspection",
      "reinspection documentation organization",
    ],
    keywords: ["organize documentation", "reinspection packet", "indexed documentation"],
    topics: ["water_damage_claims", "mitigation", "dry_logs"],
  },
  "roof-matching-insurance-claim": {
    phrases: [
      "what is roof matching in an insurance claim",
      "roof matching insurance claim",
      "what is roof matching",
    ],
    keywords: ["roof matching", "material matching", "matching claim"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-matching-contractor-documentation": {
    phrases: [
      "how should contractors document roof matching issues",
      "document roof matching issues",
      "roof matching documentation for contractors",
    ],
    keywords: ["roof matching documentation", "document matching", "matching issues"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-matching-dispute-photos": {
    phrases: [
      "what photos help support a roof matching dispute",
      "roof matching dispute photos",
      "photos for roof matching",
    ],
    keywords: ["matching photos", "roof matching photos", "elevation photos"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-matching-supplement-denials": {
    phrases: [
      "why do carriers deny roof matching supplements",
      "roof matching supplement denied",
      "carriers deny roof matching",
    ],
    keywords: ["matching denied", "matching supplement denial", "deny matching"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-matching-discontinued-shingles": {
    phrases: [
      "can discontinued shingles support a roof matching supplement",
      "discontinued shingles roof matching",
      "discontinued shingle supplement",
    ],
    keywords: ["discontinued shingle", "discontinued shingles", "unavailable shingle"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-repairability-insurance-claim": {
    phrases: [
      "what is roof repairability",
      "roof repairability insurance claim",
      "roof repairability definition",
    ],
    keywords: ["roof repairability", "repairability", "repair versus replacement"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-repairability-contractor-documentation": {
    phrases: [
      "how should contractors document roof repairability",
      "document roof repairability",
      "roof repairability documentation for contractors",
    ],
    keywords: ["repairability documentation", "document repairability", "repairability testing"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-brittle-test-roofing": {
    phrases: [
      "what is a brittle test on a roof",
      "brittle test roof",
      "how do i perform a brittle test on shingles",
    ],
    keywords: ["brittle test", "brittle shingles", "test square", "lift test"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-repairability-documentation-evidence": {
    phrases: [
      "what documentation supports roof repairability concerns",
      "roof repairability documentation evidence",
      "repairability documentation package",
    ],
    keywords: ["repairability evidence", "repairability documentation", "collateral damage photos"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-repairability-carrier-disputes": {
    phrases: [
      "why do carriers dispute roof repairability",
      "carriers dispute roof repairability",
      "roof repairability denied",
    ],
    keywords: ["repairability dispute", "repairability denied", "dispute repairability"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-reinspection-when-request": {
    phrases: [
      "when should contractors request a roof reinspection",
      "roof reinspection when to request",
      "when to request roof reinspection",
    ],
    keywords: ["roof reinspection", "request reinspection", "when reinspection"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-reinspection-documentation-prep": {
    phrases: [
      "what documentation should be prepared for a roof reinspection",
      "roof reinspection documentation prep",
      "prepare documentation for roof reinspection",
    ],
    keywords: ["reinspection documentation", "reinspection prep", "documentation package"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-reinspection-missed-damage": {
    phrases: [
      "can missed roof damage be documented after the initial inspection",
      "missed roof damage after inspection",
      "document missed roof damage",
    ],
    keywords: ["missed roof damage", "missed damage", "additional roof damage"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-reinspection-denial-reasons": {
    phrases: [
      "why do carriers deny roof reinspection requests",
      "roof reinspection denied",
      "carriers deny roof reinspection",
    ],
    keywords: ["reinspection denied", "deny reinspection", "reinspection denial"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-reinspection-organize-photos": {
    phrases: [
      "how should contractors organize photos for a roof reinspection",
      "organize photos for roof reinspection",
      "roof reinspection photo organization",
    ],
    keywords: ["organize photos", "reinspection photos", "slope labeling"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-hail-vs-wind-documentation": {
    phrases: [
      "hail vs wind roof documentation",
      "how does hail damage documentation differ from wind",
      "document hail and wind roof damage",
    ],
    keywords: ["hail documentation", "wind documentation", "hail vs wind"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-layered-tear-off-discovery": {
    phrases: [
      "document layered roofing during tear-off",
      "layered roofing tear-off discovery",
      "additional layer roof supplement",
    ],
    keywords: ["layered roofing", "tear-off discovery", "roof layers"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-flashing-supplement-qualification": {
    phrases: [
      "when does flashing qualify for roof supplement",
      "flashing supplement vs patch",
      "document flashing roof supplement",
    ],
    keywords: ["flashing supplement", "flashing patch", "roof flashing"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-commercial-damage-documentation": {
    phrases: [
      "how do you document commercial roof damage for insurance",
      "document commercial roof damage",
      "commercial roof damage documentation",
    ],
    keywords: [
      "commercial roof damage",
      "commercial roofing documentation",
      "membrane damage",
      "roof plan",
    ],
    topics: ["roofing_claims", "commercial_claims", "supplements"],
  },
  "roof-commercial-supplement-documentation": {
    phrases: [
      "commercial roofing supplement documentation",
      "documentation required for commercial roofing supplements",
      "commercial roof supplement requirements",
    ],
    keywords: [
      "commercial roofing supplement",
      "commercial supplement documentation",
      "low slope supplement",
    ],
    topics: ["roofing_claims", "commercial_claims", "supplements"],
  },
  "roof-commercial-moisture-survey-payment": {
    phrases: [
      "do insurance companies pay for moisture surveys",
      "moisture survey commercial roof insurance",
      "commercial roof moisture survey payment",
    ],
    keywords: [
      "moisture survey",
      "core sampling",
      "wet insulation",
      "commercial roof moisture",
    ],
    topics: ["roofing_claims", "commercial_claims"],
  },
  "roof-commercial-inspection-photos": {
    phrases: [
      "what should be photographed during a commercial roof inspection",
      "commercial roof inspection photos",
      "photograph commercial roof inspection",
    ],
    keywords: [
      "commercial roof inspection",
      "commercial roof photos",
      "membrane photos",
      "roof inspection documentation",
    ],
    topics: ["roofing_claims", "commercial_claims"],
  },
  "roof-commercial-system-replacement-documentation": {
    phrases: [
      "documentation supports replacing commercial roofing system",
      "commercial roofing system replacement documentation",
      "replace commercial roof insurance documentation",
    ],
    keywords: [
      "commercial roof replacement",
      "system replacement",
      "membrane replacement",
      "wet insulation replacement",
    ],
    topics: ["roofing_claims", "commercial_claims", "supplements"],
  },
  "roof-hoa-responsible-damage": {
    phrases: [
      "who is responsible for roof damage in an HOA",
      "HOA roof damage responsibility",
      "condominium roof responsibility",
    ],
    keywords: ["HOA responsibility", "roof damage HOA", "common elements", "CC&R"],
    topics: ["roofing_claims"],
  },
  "roof-hoa-insurance-covers-replacement": {
    phrases: [
      "does HOA insurance cover roof replacement",
      "HOA master policy roof replacement",
      "condo insurance roof replacement",
    ],
    keywords: ["HOA insurance", "master policy", "roof replacement HOA"],
    topics: ["roofing_claims"],
  },
  "roof-hoa-damage-documentation": {
    phrases: [
      "how should HOA roof damage be documented",
      "HOA roof damage documentation",
      "document HOA roofing claim",
      "condominium roof documentation",
    ],
    keywords: [
      "HOA documentation",
      "multi-building roof",
      "building inventory",
      "community association documentation",
    ],
    topics: ["roofing_claims", "documentation", "supplements"],
  },
  "roof-hoa-partial-building-replacement": {
    phrases: [
      "can every building be replaced if only some are damaged",
      "HOA partial building replacement",
      "replace all buildings HOA roof claim",
    ],
    keywords: ["partial building replacement", "HOA matching", "multi-building replacement"],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-hoa-supplement-documentation": {
    phrases: [
      "what documentation helps HOA roofing supplements",
      "HOA roofing supplement documentation",
      "HOA roof supplement requirements",
    ],
    keywords: [
      "HOA supplement",
      "HOA roofing supplement",
      "multi-building mobilization",
      "board authorization",
    ],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-multi-building-carrier-handling": {
    phrases: [
      "how do insurance companies handle multi-building roof claims",
      "multi-building roof claim carrier review",
      "insurance multi-building roofing claim",
    ],
    keywords: [
      "multi-building carrier",
      "sampling dispute",
      "portfolio roofing claim",
      "campus roof claim",
    ],
    topics: ["roofing_claims", "documentation"],
  },
  "roof-multi-building-partial-replacement": {
    phrases: [
      "can insurance replace every roof if only some buildings are damaged",
      "multi-building partial roof replacement",
      "replace all buildings roof claim",
    ],
    keywords: [
      "partial building replacement",
      "multi-building matching",
      "campus roof replacement",
    ],
    topics: ["roofing_claims", "supplements"],
  },
  "roof-multi-building-apartment-documentation": {
    phrases: [
      "how should contractors document apartment complex roof damage",
      "apartment complex roof documentation",
      "document apartment roof damage insurance",
    ],
    keywords: [
      "apartment complex roofing",
      "multi-building documentation",
      "building inventory",
      "per-building photos",
    ],
    topics: ["roofing_claims", "documentation", "supplements"],
  },
  "roof-multi-building-matching": {
    phrases: [
      "what supports matching across multiple buildings",
      "multi-building roof matching",
      "matching roofs across campus",
    ],
    keywords: [
      "multi-building matching",
      "uniform appearance",
      "campus roof matching",
    ],
    topics: ["roofing_claims", "documentation", "supplements"],
  },
  "roof-multi-building-supplement-documentation": {
    phrases: [
      "what documentation helps large commercial roofing supplements",
      "multi-building roofing supplement documentation",
      "large commercial roof supplement documentation",
    ],
    keywords: [
      "multi-building supplement",
      "campus roofing supplement",
      "building-indexed scope",
      "multi-building mobilization",
    ],
    topics: ["roofing_claims", "supplements", "commercial_claims"],
  },
  "fire-damage-documentation-insurance": {
    phrases: [
      "how should fire damage be documented for insurance",
      "document fire damage for insurance",
      "fire damage documentation for insurance claims",
    ],
    keywords: ["fire documentation", "fire damage documentation"],
    topics: ["fire_damage_claims"],
  },
  "fire-damage-photos-required": {
    phrases: [
      "what photos are required after a fire",
      "fire damage photos required",
      "photos after a fire insurance claim",
    ],
    keywords: ["fire photos", "fire damage photos"],
    topics: ["fire_damage_claims"],
  },
  "fire-smoke-damage-insurance-coverage": {
    phrases: [
      "does insurance pay for smoke damage",
      "smoke damage insurance coverage",
      "insurance cover smoke damage fire",
    ],
    keywords: ["smoke damage insurance", "smoke coverage"],
    topics: ["fire_damage_claims"],
  },
  "fire-hidden-damage-documentation": {
    phrases: [
      "how should hidden fire damage be documented",
      "hidden fire damage documentation",
      "document hidden fire damage during demolition",
    ],
    keywords: ["hidden fire damage", "demolition discovery"],
    topics: ["fire_damage_claims"],
  },
  "fire-supplement-documentation-support": {
    phrases: [
      "what documentation supports fire damage supplements",
      "fire damage supplement documentation",
      "fire supplement documentation support",
    ],
    keywords: ["fire supplement documentation", "fire supplement evidence"],
    topics: ["fire_damage_claims", "supplements"],
  },
  "mold-remediation-docs": {
    phrases: [
      "what documentation supports mold remediation claims",
      "mold remediation claim documentation",
      "mold remediation docs",
    ],
    keywords: ["mold remediation documentation", "mold remediation claims"],
    topics: ["mold_claims"],
  },
  "mold-testing": {
    phrases: [
      "how do testing and clearance reports factor into mold claims",
      "mold testing clearance reports",
      "mold clearance testing claims",
    ],
    keywords: ["mold testing", "mold clearance", "clearance reports"],
    topics: ["mold_claims"],
  },
  "mold-carrier-pushback": {
    phrases: [
      "why do carriers often push back on mold line items",
      "carrier pushback mold",
      "mold line item pushback",
    ],
    keywords: ["mold carrier pushback", "mold line items"],
    topics: ["mold_claims", "carrier_review"],
  },
  "mold-containment-equipment": {
    phrases: [
      "are containment and air scrubbing commonly underpaid",
      "mold containment underpaid",
      "air scrubbing underpaid mold",
    ],
    keywords: ["mold containment", "air scrubbing", "negative air"],
    topics: ["mold_claims", "equipment_charges"],
  },
  "mold-water-relationship": {
    phrases: [
      "can mold supplements tie back to a water loss claim",
      "mold water loss relationship",
      "mold follows water event",
    ],
    keywords: ["mold water relationship", "mold water loss"],
    topics: ["mold_claims", "water_damage_claims"],
  },
  "mold-damage-documentation-insurance": {
    phrases: [
      "how should contractors document mold damage for insurance",
      "document mold damage for insurance",
      "mold damage documentation for insurance claims",
    ],
    keywords: ["mold documentation", "mold damage documentation"],
    topics: ["mold_claims"],
  },
  "mold-claim-photos-required": {
    phrases: [
      "what photos should be taken for mold claims",
      "mold claim photos required",
      "photos for mold insurance claim",
    ],
    keywords: ["mold photos", "mold damage photos"],
    topics: ["mold_claims"],
  },
  "mold-moisture-readings-support": {
    phrases: [
      "do moisture readings help support mold claims",
      "moisture readings mold claims",
      "mold claim moisture readings",
    ],
    keywords: ["mold moisture readings", "moisture meter mold"],
    topics: ["mold_claims", "mitigation"],
  },
  "mold-insurance-documentation-required": {
    phrases: [
      "what documentation do insurance companies request for mold damage",
      "mold insurance documentation required",
      "insurance documentation mold damage",
    ],
    keywords: ["mold insurance documentation", "mold carrier documentation"],
    topics: ["mold_claims"],
  },
  "mold-hidden-damage-documentation": {
    phrases: [
      "how should hidden mold be documented",
      "hidden mold documentation",
      "document hidden mold in walls",
    ],
    keywords: ["hidden mold", "cavity mold documentation"],
    topics: ["mold_claims"],
  },
  "mold-remediation-work-documentation": {
    phrases: [
      "how should contractors document mold remediation work",
      "document mold remediation for insurance",
      "mold remediation work documentation",
    ],
    keywords: ["mold remediation documentation", "remediation work documentation"],
    topics: ["mold_claims"],
  },
  "mold-remediation-photos-required": {
    phrases: [
      "what photos should be taken during mold remediation",
      "mold remediation photos required",
      "photos during mold remediation",
    ],
    keywords: ["remediation photos", "mold remediation photos"],
    topics: ["mold_claims"],
  },
  "mold-remediation-moisture-readings-support": {
    phrases: [
      "should moisture readings be included with mold remediation documentation",
      "moisture readings mold remediation",
      "mold remediation moisture readings",
    ],
    keywords: ["remediation moisture readings", "mold remediation readings"],
    topics: ["mold_claims"],
  },
  "mold-remediation-insurance-documentation": {
    phrases: [
      "what documentation supports mold remediation insurance claims",
      "mold remediation insurance documentation",
      "documentation supports mold remediation claims",
    ],
    keywords: ["remediation insurance documentation", "mold remediation claims"],
    topics: ["mold_claims"],
  },
  "mold-remediation-containment-documentation": {
    phrases: [
      "how should contractors document containment during mold remediation",
      "containment documentation mold remediation",
      "document containment mold remediation",
    ],
    keywords: ["containment documentation", "mold containment photos"],
    topics: ["mold_claims"],
  },
  "mold-prv-definition": {
    phrases: [
      "what is post remediation verification",
      "what is PRV mold",
      "post remediation verification definition",
    ],
    keywords: ["PRV", "post remediation verification", "mold closeout"],
    topics: ["mold_claims"],
  },
  "mold-prv-documentation-insurance": {
    phrases: [
      "how should contractors document PRV for insurance",
      "document post remediation verification for insurance claims",
      "PRV documentation mold insurance",
    ],
    keywords: ["PRV documentation", "mold closeout documentation"],
    topics: ["mold_claims"],
  },
  "mold-prv-moisture-readings-required": {
    phrases: [
      "are moisture readings required during PRV",
      "moisture readings post remediation verification",
      "terminal moisture readings mold closeout",
    ],
    keywords: ["PRV moisture readings", "terminal moisture mold"],
    topics: ["mold_claims", "mitigation"],
  },
  "mold-prv-closeout-package": {
    phrases: [
      "what documentation belongs in a mold project closeout package",
      "mold closeout package documentation",
      "mold project closeout documentation",
    ],
    keywords: ["mold closeout package", "project closeout mold"],
    topics: ["mold_claims"],
  },
  "mold-prv-clearance-documentation-required": {
    phrases: [
      "do insurance companies require clearance documentation after mold remediation",
      "clearance documentation mold remediation required",
      "mold clearance documentation insurance",
    ],
    keywords: ["clearance documentation mold", "mold clearance required"],
    topics: ["mold_claims"],
  },
  "mold-protocol-definition": {
    phrases: [
      "what is a mold remediation protocol",
      "what is a mold protocol",
      "mold remediation protocol definition",
    ],
    keywords: ["mold remediation protocol", "mold protocol"],
    topics: ["mold_claims"],
  },
  "mold-protocol-follow-exactly": {
    phrases: [
      "should contractors follow a mold protocol exactly",
      "follow mold protocol exactly",
      "mold protocol compliance contractors",
    ],
    keywords: ["follow mold protocol", "mold protocol compliance"],
    topics: ["mold_claims"],
  },
  "mold-protocol-change-documentation": {
    phrases: [
      "how should protocol changes be documented",
      "document mold protocol changes",
      "protocol change documentation mold",
    ],
    keywords: ["protocol changes documentation", "mold protocol deviations"],
    topics: ["mold_claims"],
  },
  "mold-protocol-supporting-documentation": {
    phrases: [
      "what documentation should accompany a mold protocol",
      "documentation accompany mold protocol",
      "mold protocol supporting documentation",
      "how should contractors document mold remediation protocols for insurance",
      "how should contractors document mold remediation protocols for insurance?",
      "document mold remediation protocols for insurance",
      "document mold remediation protocols",
    ],
    keywords: [
      "mold protocol documentation",
      "protocol supporting documentation",
      "document mold remediation protocols",
    ],
    topics: ["mold_claims"],
  },
  "mold-protocol-field-conditions-differ": {
    phrases: [
      "can field conditions differ from the remediation protocol",
      "field conditions differ from mold protocol",
      "mold protocol field conditions",
    ],
    keywords: ["field conditions mold protocol", "protocol field conditions"],
    topics: ["mold_claims"],
  },
  "mold-iaq-documentation": {
    phrases: [
      "what is IAQ testing documentation on a mold insurance claim",
      "what is IAQ testing documentation",
      "IAQ testing documentation mold claim",
      "indoor air quality testing documentation insurance",
    ],
    keywords: ["IAQ testing documentation", "indoor air quality documentation"],
    topics: ["mold_claims"],
  },
  "mold-iaq-air-sampling": {
    phrases: [
      "how should contractors document air sampling on mold claims",
      "document air sampling mold claims",
      "air sampling documentation mold",
    ],
    keywords: ["air sampling documentation", "mold air sampling"],
    topics: ["mold_claims"],
  },
  "mold-iaq-clearance-testing": {
    phrases: [
      "how should clearance testing be documented after mold remediation",
      "document clearance testing mold remediation",
      "clearance testing documentation after mold",
    ],
    keywords: ["clearance testing documentation", "mold clearance testing"],
    topics: ["mold_claims"],
  },
  "mold-iaq-lab-reports": {
    phrases: [
      "how should laboratory reports be organized in a mold claim file",
      "organize laboratory reports mold claim",
      "mold lab reports documentation",
    ],
    keywords: ["mold laboratory reports", "lab reports mold claim"],
    topics: ["mold_claims"],
  },
  "mold-iaq-documentation-requirements": {
    phrases: [
      "what documentation is typically required for IAQ and mold testing on insurance claims",
      "documentation required for IAQ mold testing",
      "IAQ testing documentation requirements insurance",
      "what documentation is required for mold testing",
      "how should contractors document indoor air quality testing for insurance",
      "how should contractors document IAQ testing for insurance",
      "document indoor air quality testing for insurance",
      "how do i document indoor air quality testing for mold insurance claims",
      "how do i document IAQ and clearance testing for insurance",
    ],
    keywords: [
      "IAQ documentation requirements",
      "mold testing documentation required",
      "indoor air quality testing documentation",
    ],
    topics: ["mold_claims"],
  },
  "mold-commercial-claims-vs-residential": {
    phrases: [
      "how do commercial mold claims differ from residential",
      "commercial mold claims vs residential",
      "difference commercial residential mold claims",
      "commercial mold claims different from residential",
    ],
    keywords: [
      "commercial mold vs residential",
      "commercial mold claims differ",
      "residential vs commercial mold",
    ],
    topics: ["commercial_claims"],
  },
  "mold-commercial-documentation-organization": {
    phrases: [
      "how should contractors organize documentation for commercial mold claims",
      "organize documentation commercial mold",
      "commercial mold documentation organization",
      "building floor unit mold documentation",
    ],
    keywords: [
      "organize commercial mold documentation",
      "commercial mold documentation plan",
      "mold documentation organization",
    ],
    topics: ["commercial_claims"],
  },
  "mold-commercial-multi-unit-documentation": {
    phrases: [
      "how should multi-unit mold claims be documented",
      "multi-unit mold claim documentation",
      "document multi-unit mold claims",
      "multifamily mold documentation",
    ],
    keywords: [
      "multi-unit mold",
      "multi unit mold documentation",
      "multifamily mold claims",
    ],
    topics: ["commercial_claims"],
  },
  "mold-commercial-insurance-documentation": {
    phrases: [
      "what documentation supports commercial mold insurance claims",
      "commercial mold insurance documentation",
      "documentation for commercial mold claims",
      "commercial mold claim package",
      "documentation supports commercial mold insurance claims",
    ],
    keywords: [
      "commercial mold insurance documentation",
      "commercial mold claim support",
      "commercial mold package",
      "supports commercial mold insurance",
    ],
    topics: ["commercial_claims"],
  },
  "mold-commercial-phased-remediation": {
    phrases: [
      "phased commercial mold remediation documentation",
      "document phased commercial mold remediation",
      "phased mold remediation commercial",
      "commercial mold remediation by phase",
      "area by area commercial mold remediation documentation",
    ],
    keywords: [
      "phased commercial mold",
      "phased mold remediation",
      "commercial mold phasing",
      "area-level mold remediation",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-claim-documentation": {
    phrases: [
      "how should contractors document commercial insurance claims",
      "commercial claim documentation",
      "document commercial insurance claims",
      "commercial insurance claim documentation",
      "commercial claim documentation standards",
    ],
    keywords: [
      "commercial claim documentation",
      "commercial insurance claim documentation",
      "document commercial claims",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-large-loss-project-documentation": {
    phrases: [
      "how should contractors document large-loss commercial projects",
      "documenting large-loss commercial projects",
      "large-loss commercial project documentation",
      "large loss commercial documentation",
    ],
    keywords: [
      "large-loss commercial documentation",
      "large loss project documentation",
      "document large-loss commercial",
    ],
    topics: ["commercial_claims", "large_loss"],
  },
  "commercial-multi-building-documentation": {
    phrases: [
      "how should contractors document multiple buildings on a commercial claim",
      "documenting multiple buildings commercial claim",
      "multi-building commercial documentation",
      "document multiple buildings commercial",
    ],
    keywords: [
      "multi-building documentation",
      "multiple buildings commercial claim",
      "campus commercial documentation",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-tenant-improvements-documentation": {
    phrases: [
      "how should contractors document tenant improvements on commercial claims",
      "tenant improvements commercial claim documentation",
      "document tenant improvements commercial",
      "leasehold improvements documentation commercial",
    ],
    keywords: [
      "tenant improvements documentation",
      "TI documentation commercial",
      "leasehold documentation",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-insurance-documentation-requirements": {
    phrases: [
      "what documentation do commercial insurance claims require",
      "commercial insurance documentation requirements",
      "required documentation commercial insurance claims",
      "commercial insurance claim documentation requirements",
    ],
    keywords: [
      "commercial insurance documentation requirements",
      "required commercial documentation",
      "commercial claim package requirements",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-property-claims-underpaid": {
    phrases: [
      "why do commercial property insurance claims get underpaid",
      "why commercial property insurance claims get underpaid",
      "commercial property claims underpaid",
      "commercial insurance claims underpayment",
      "why commercial insurance claims get underpaid",
    ],
    keywords: [
      "commercial property underpaid",
      "commercial underpayment",
      "commercial claims underpaid",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-documentation-gaps-underpayment": {
    phrases: [
      "how do documentation gaps cause commercial claim underpayment",
      "documentation gaps commercial underpayment",
      "commercial documentation gaps underpayment",
      "incomplete building documentation commercial claims",
    ],
    keywords: [
      "documentation gaps",
      "commercial documentation gaps",
      "building documentation",
      "commercial underpayment",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-estimate-accuracy": {
    phrases: [
      "why does estimate accuracy matter on commercial insurance claims",
      "commercial estimate accuracy",
      "quantity validation commercial claims",
      "commercial estimate quantity accuracy",
    ],
    keywords: [
      "estimate accuracy",
      "quantity validation",
      "commercial estimate",
      "mismatched quantities",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-code-ordinance-upgrades": {
    phrases: [
      "how should contractors document code and ordinance upgrades on commercial claims",
      "commercial code ordinance upgrades",
      "code upgrades commercial claims",
      "ordinance and law commercial documentation",
    ],
    keywords: [
      "code ordinance",
      "code upgrades",
      "ordinance and law",
      "commercial code documentation",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-settlement-documentation": {
    phrases: [
      "how does better documentation improve commercial claim settlements",
      "improve commercial claim settlements",
      "better documentation commercial settlements",
      "commercial settlement documentation",
    ],
    keywords: [
      "commercial settlements",
      "settlement documentation",
      "improve commercial settlements",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-documentation-checklist": {
    phrases: [
      "what should a commercial claims documentation checklist include",
      "commercial claims documentation checklist",
      "commercial documentation checklist",
      "commercial insurance documentation checklist",
    ],
    keywords: [
      "commercial documentation checklist",
      "commercial claims checklist",
      "commercial insurance checklist",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-inspection-checklist": {
    phrases: [
      "what should a commercial insurance inspection checklist cover",
      "commercial insurance inspection checklist",
      "commercial inspection checklist",
      "commercial claim inspection checklist",
    ],
    keywords: [
      "commercial inspection checklist",
      "commercial insurance inspection",
      "commercial site inspection checklist",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-photo-documentation": {
    phrases: [
      "how should contractors handle commercial photo documentation",
      "commercial photo documentation",
      "commercial claims photo documentation",
      "photograph commercial insurance claims",
    ],
    keywords: [
      "commercial photo documentation",
      "commercial claim photos",
      "commercial photo checklist",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-claim-file-organization": {
    phrases: [
      "how should contractors organize a commercial claim file",
      "commercial claim file organization",
      "organize commercial claim file",
      "commercial claim file index",
    ],
    keywords: [
      "commercial claim file",
      "commercial file organization",
      "commercial claim index",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-final-submission": {
    phrases: [
      "what belongs in a commercial claim final submission package",
      "commercial claim final submission",
      "commercial final submission package",
      "commercial claim submission checklist",
    ],
    keywords: [
      "commercial final submission",
      "commercial submission package",
      "commercial claim package",
    ],
    topics: ["commercial_claims"],
  },
  "mold-supplement-included-items": {
    phrases: [
      "what should be included in a mold damage supplement",
      "mold damage supplement package contents",
      "what goes in a mold supplement",
    ],
    keywords: [
      "mold supplement included",
      "mold supplement package",
      "mold supplement contents",
    ],
    topics: ["mold_claims", "supplements", "documentation"],
  },
  "mold-supplement-when-to-submit": {
    phrases: [
      "when should contractors submit a mold supplement",
      "when to submit mold damage supplement",
      "mold supplement timing",
    ],
    keywords: [
      "mold supplement when",
      "submit mold supplement",
      "mold supplement timing",
    ],
    topics: ["mold_claims", "supplements"],
  },
  "mold-supplement-documentation-evidence": {
    phrases: [
      "what documentation supports a mold damage supplement",
      "mold damage supplement documentation evidence",
      "mold supplement documentation required",
    ],
    keywords: [
      "mold supplement documentation",
      "mold supplement evidence",
      "mold supplement proof",
    ],
    topics: ["mold_claims", "supplements", "documentation"],
  },
  "mold-supplement-multiple-submissions": {
    phrases: [
      "can multiple supplements be submitted during a mold claim",
      "multiple mold supplements same claim",
      "phased mold supplements",
    ],
    keywords: [
      "multiple mold supplements",
      "phased mold supplement",
      "mold supplement phases",
    ],
    topics: ["mold_claims", "supplements"],
  },
  "mold-supplement-commonly-missed-items": {
    phrases: [
      "most commonly missed mold supplement items",
      "commonly missed mold claim line items",
      "mold supplement missed items",
    ],
    keywords: [
      "missed mold supplement",
      "mold supplement line items",
      "mold claim missed scope",
    ],
    topics: ["mold_claims", "supplements"],
  },
  "mold-claims-underpaid-why": {
    phrases: [
      "why are mold insurance claims underpaid",
      "why mold claims underpaid",
      "mold insurance claims underpaid why",
    ],
    keywords: ["mold claims underpaid", "mold underpayment"],
    topics: ["mold_claims"],
  },
  "mold-documentation-affects-claim-outcomes": {
    phrases: [
      "how does documentation affect mold insurance claims",
      "documentation affect mold claims",
      "mold documentation claim outcomes",
    ],
    keywords: ["mold documentation", "mold claim documentation"],
    topics: ["mold_claims", "documentation"],
  },
  "mold-moisture-readings-settlement-support": {
    phrases: [
      "do moisture readings help support mold claim settlements",
      "moisture readings mold claim settlement",
      "mold moisture readings settlement",
    ],
    keywords: ["mold moisture readings", "moisture readings mold claims"],
    topics: ["mold_claims", "mitigation"],
  },
  "mold-hidden-damage-affects-payment": {
    phrases: [
      "can hidden mold affect claim payments",
      "hidden mold claim payment",
      "hidden mold affects payment",
    ],
    keywords: ["hidden mold payment", "hidden mold claim"],
    topics: ["mold_claims"],
  },
  "mold-documentation-improves-settlement": {
    phrases: [
      "what documentation improves mold insurance settlements",
      "mold documentation improves settlement",
      "mold insurance settlement documentation",
    ],
    keywords: ["mold settlement documentation", "mold documentation settlement"],
    topics: ["mold_claims", "documentation"],
  },
  "mold-common-documentation-mistakes": {
    phrases: [
      "what are the most common mold documentation mistakes",
      "most common mold documentation mistakes",
      "common mold documentation mistakes",
    ],
    keywords: [
      "common mold documentation mistakes",
      "mold documentation mistakes common",
    ],
    topics: ["mold_claims", "documentation"],
  },
  "mold-poor-documentation-reduces-payment": {
    phrases: [
      "can poor documentation reduce mold insurance payments",
      "poor documentation reduce mold payments",
      "poor mold documentation reduces payment",
    ],
    keywords: [
      "poor mold documentation",
      "mold documentation reduce payment",
    ],
    topics: ["mold_claims", "documentation"],
  },
  "mold-moisture-readings-why-important": {
    phrases: [
      "why are moisture readings important on mold claims",
      "why moisture readings important mold claims",
      "moisture readings important on mold claims",
    ],
    keywords: [
      "moisture readings mold claims important",
      "why moisture readings mold",
    ],
    topics: ["mold_claims", "documentation", "mitigation"],
  },
  "mold-claim-documentation-organization": {
    phrases: [
      "how should contractors organize mold claim documentation",
      "organize mold claim documentation",
      "mold claim documentation organization",
    ],
    keywords: [
      "organize mold documentation",
      "mold claim documentation organization",
    ],
    topics: ["mold_claims", "documentation"],
  },
  "mold-documentation-package-contents": {
    phrases: [
      "what should be included in a mold documentation package",
      "mold documentation package contents",
      "what to include in mold documentation package",
    ],
    keywords: [
      "mold documentation package",
      "mold documentation package contents",
    ],
    topics: ["mold_claims", "documentation"],
  },
  "mold-supplement-checklist-documents": {
    phrases: [
      "what documents should contractors include with a mold insurance supplement",
      "mold supplement documents checklist",
      "documents to include with mold supplement",
      "mold insurance supplement documentation package",
    ],
    keywords: [
      "mold supplement documents",
      "mold supplement checklist",
      "mold claim documentation checklist",
    ],
    topics: ["mold_claims", "documentation", "supplements"],
  },
  "mold-claim-photo-volume": {
    phrases: [
      "how many photos should be taken during a mold claim",
      "how many photos mold claim",
      "mold claim photo volume",
    ],
    keywords: [
      "mold claim photos",
      "mold claim photo volume",
      "how many photos mold",
    ],
    topics: ["mold_claims", "documentation"],
  },
  "mold-moisture-containment-documentation-support": {
    phrases: [
      "what documentation supports moisture mapping and containment on mold claims",
      "moisture mapping and containment documentation mold",
      "mold moisture mapping containment support",
    ],
    keywords: [
      "mold moisture mapping documentation",
      "mold containment documentation",
      "moisture containment mold claims",
    ],
    topics: ["mold_claims", "documentation", "mitigation"],
  },
  "mold-daily-progress-documentation-required": {
    phrases: [
      "should contractors document daily drying and remediation progress on mold claims",
      "daily drying and remediation progress mold",
      "document daily mold remediation progress",
    ],
    keywords: [
      "daily mold documentation",
      "mold remediation progress documentation",
      "daily drying mold claims",
    ],
    topics: ["mold_claims", "documentation", "mitigation"],
  },
  "mold-carrier-additional-documentation-why": {
    phrases: [
      "why do carriers request additional documentation during mold claims",
      "carriers request additional mold documentation",
      "why carriers ask for more mold documentation",
    ],
    keywords: [
      "additional mold documentation",
      "carrier mold documentation request",
      "mold claim RFI",
    ],
    topics: ["mold_claims", "documentation", "carrier_review"],
  },
  "mold-supplement-denied-why": {
    phrases: [
      "why are mold supplements denied",
      "why mold supplements get denied",
      "mold supplement denial reasons",
      "why mold damage supplements denied",
    ],
    keywords: [
      "mold supplement denied",
      "mold supplement denial",
      "mold supplements denied",
    ],
    topics: ["mold_claims", "denial_recovery", "documentation", "supplements"],
  },
  "mold-supplement-denial-documentation-gaps": {
    phrases: [
      "can documentation gaps cause a mold supplement denial",
      "documentation gaps mold supplement denial",
      "missing documentation mold supplement denied",
    ],
    keywords: [
      "mold documentation gaps",
      "mold supplement documentation gaps",
      "missing mold documentation denial",
    ],
    topics: ["mold_claims", "documentation", "denial_recovery"],
  },
  "mold-supplement-denial-carrier-objections": {
    phrases: [
      "how should contractors respond to carrier objections on mold supplements",
      "carrier objections mold supplements",
      "respond to mold supplement RFI",
    ],
    keywords: [
      "mold carrier objections",
      "mold supplement RFI",
      "mold supplement carrier response",
    ],
    topics: ["mold_claims", "carrier_review", "denial_recovery"],
  },
  "mold-supplement-denial-estimate-support": {
    phrases: [
      "how should estimate support be organized on mold supplements",
      "mold supplement estimate organization",
      "organize mold estimate for supplement",
    ],
    keywords: [
      "mold estimate support",
      "mold estimate organization",
      "mold supplement estimate",
    ],
    topics: ["mold_claims", "documentation", "supplements"],
  },
  "mold-supplement-denial-reinspection": {
    phrases: [
      "when is reinspection appropriate on mold supplements",
      "mold supplement reinspection",
      "when to request mold reinspection",
    ],
    keywords: [
      "mold reinspection",
      "mold supplement reinspection",
      "mold reinspection appropriate",
    ],
    topics: ["mold_claims", "carrier_review", "denial_recovery"],
  },
  "smoke-damage-documentation-insurance": {
    phrases: [
      "how should smoke damage be documented for insurance",
      "document smoke damage for insurance",
      "smoke damage documentation for insurance claims",
    ],
    keywords: ["smoke documentation", "smoke damage documentation"],
    topics: ["fire_damage_claims"],
  },
  "soot-damage-insurance-coverage": {
    phrases: [
      "does insurance cover soot damage",
      "soot damage insurance coverage",
      "insurance cover soot damage fire",
    ],
    keywords: ["soot damage insurance", "soot coverage"],
    topics: ["fire_damage_claims"],
  },
  "smoke-damage-photos-required": {
    phrases: [
      "what photographs should be taken after smoke damage",
      "smoke damage photos required",
      "photos after smoke damage insurance claim",
    ],
    keywords: ["smoke photos", "smoke damage photos"],
    topics: ["fire_damage_claims"],
  },
  "smoke-damage-clean-vs-replace": {
    phrases: [
      "when should smoke-damaged materials be replaced instead of cleaned",
      "smoke damaged materials replaced instead of cleaned",
      "clean vs replace smoke damage",
    ],
    keywords: ["smoke clean vs replace", "smoke replacement"],
    topics: ["fire_damage_claims"],
  },
  "smoke-damage-supplement-documentation": {
    phrases: [
      "what documentation supports smoke damage supplements",
      "smoke damage supplement documentation",
      "smoke supplement documentation support",
    ],
    keywords: ["smoke supplement documentation", "smoke supplement evidence"],
    topics: ["fire_damage_claims", "supplements"],
  },
  "smoke-damage-contractor-documentation-insurance": {
    phrases: [
      "how do contractors document smoke damage for insurance claims",
      "contractor smoke damage documentation insurance",
      "document smoke damage for insurance claims contractors",
    ],
    keywords: [
      "contractor smoke documentation",
      "smoke damage insurance claims",
      "smoke damage documentation contractors",
    ],
    topics: ["fire_damage_claims"],
  },
  "smoke-damage-claim-photos-required": {
    phrases: [
      "what photos should be taken for smoke damage claims",
      "smoke damage claim photos required",
      "photos for smoke damage insurance claim",
    ],
    keywords: ["smoke damage claim photos", "smoke claim photography"],
    topics: ["fire_damage_claims"],
  },
  "smoke-damage-hvac-documentation-required": {
    phrases: [
      "does smoke damage require hvac documentation",
      "smoke damage hvac documentation required",
      "hvac documentation smoke damage claims",
    ],
    keywords: ["smoke hvac documentation", "hvac smoke damage"],
    topics: ["fire_damage_claims", "hvac_fire"],
  },
  "smoke-damage-claims-underpaid-why": {
    phrases: [
      "why do smoke damage insurance claims get underpaid",
      "smoke damage claims underpaid",
      "smoke claim underpayment why",
    ],
    keywords: ["smoke damage underpaid", "smoke claim underpayment"],
    topics: ["fire_damage_claims"],
  },
  "smoke-damage-invisible-without-soot": {
    phrases: [
      "can smoke damage exist without visible soot",
      "invisible smoke damage without soot",
      "smoke damage no visible soot",
    ],
    keywords: ["invisible smoke damage", "smoke without visible soot"],
    topics: ["fire_damage_claims"],
  },
  "fire-supplement-checklist-documents": {
    phrases: [
      "what documents should contractors include with a fire insurance supplement",
      "fire supplement documents checklist",
      "documents to include with fire supplement",
      "fire insurance supplement documentation package",
    ],
    keywords: [
      "fire supplement documents",
      "fire supplement checklist",
      "fire claim documentation checklist",
    ],
    topics: ["fire_damage_claims", "documentation", "supplements"],
  },
  "fire-claim-photo-volume": {
    phrases: [
      "how many photos should be taken during a fire claim",
      "how many fire claim photos",
      "fire claim photo volume",
      "number of photos for fire damage claim",
    ],
    keywords: ["fire claim photos", "fire damage photos", "how many photos fire"],
    topics: ["fire_damage_claims", "documentation"],
  },
  "fire-smoke-documentation-support": {
    phrases: [
      "what documentation supports smoke damage on fire claims",
      "smoke damage documentation support fire claim",
      "documentation for smoke damage supplement",
    ],
    keywords: ["smoke documentation support", "smoke damage documentation fire"],
    topics: ["fire_damage_claims", "documentation"],
  },
  "fire-hidden-damage-required": {
    phrases: [
      "should contractors document hidden fire damage",
      "document hidden fire damage required",
      "hidden fire damage documentation required",
    ],
    keywords: ["hidden fire damage", "document hidden fire damage"],
    topics: ["fire_damage_claims", "documentation"],
  },
  "fire-carrier-additional-documentation-why": {
    phrases: [
      "why do carriers request additional documentation during fire claims",
      "carrier request additional fire documentation",
      "fire claim additional documentation request",
    ],
    keywords: [
      "additional documentation fire claim",
      "carrier documentation request fire",
    ],
    topics: ["fire_damage_claims", "documentation", "carrier_review"],
  },
  "fire-supplement-denied-why": {
    phrases: [
      "why are fire damage supplements denied",
      "why fire supplements denied",
      "fire supplement denial reasons",
      "why do fire supplements get denied",
    ],
    keywords: [
      "fire supplement denied",
      "fire supplement denial",
      "fire damage supplement denied",
    ],
    topics: ["fire_damage_claims", "denial_recovery", "supplements"],
  },
  "fire-supplement-denial-missing-documentation": {
    phrases: [
      "can missing documentation cause a supplement denial",
      "missing documentation fire supplement denial",
      "documentation cause fire supplement denial",
    ],
    keywords: [
      "missing documentation supplement",
      "documentation denial fire",
    ],
    topics: ["fire_damage_claims", "documentation", "denial_recovery"],
  },
  "fire-supplement-denial-response": {
    phrases: [
      "how should contractors respond to a denied fire supplement",
      "respond to denied fire supplement",
      "denied fire supplement response",
    ],
    keywords: [
      "denied fire supplement",
      "fire supplement response",
      "fire denial response",
    ],
    topics: ["fire_damage_claims", "denial_recovery"],
  },
  "fire-supplement-denial-additional-docs": {
    phrases: [
      "can contractors submit additional documentation after a denial",
      "additional documentation after fire supplement denial",
      "submit more documentation fire supplement denied",
    ],
    keywords: [
      "additional documentation denial",
      "resubmit fire supplement",
      "fire supplement resubmission",
    ],
    topics: ["fire_damage_claims", "denial_recovery", "documentation"],
  },
  "fire-supplement-denial-common-reason": {
    phrases: [
      "most common reason fire supplements fail",
      "common reason fire supplement denied",
      "why fire supplements fail most often",
    ],
    keywords: [
      "fire supplement fail",
      "common fire supplement denial",
      "fire supplement mistakes",
    ],
    topics: ["fire_damage_claims", "documentation", "denial_recovery"],
  },
  "contents-inventory-documentation-insurance": {
    phrases: [
      "how should contents be documented after a fire",
      "document contents after fire for insurance",
      "contents documentation after fire",
      "contents inventory documentation for insurance",
    ],
    keywords: ["contents documentation", "contents inventory fire"],
    topics: ["fire_damage_claims"],
  },
  "contents-inventory-insurance-required": {
    phrases: [
      "what inventory is required for insurance claims",
      "inventory required for insurance claims",
      "contents inventory required insurance",
    ],
    keywords: ["contents inventory required", "insurance inventory"],
    topics: ["fire_damage_claims"],
  },
  "contents-smoke-damage-documentation": {
    phrases: [
      "how do contractors document smoke-damaged personal property",
      "document smoke damaged personal property",
      "smoke damaged contents documentation",
    ],
    keywords: ["smoke damaged contents", "personal property smoke"],
    topics: ["fire_damage_claims"],
  },
  "contents-clean-vs-replace": {
    phrases: [
      "when should contents be replaced instead of cleaned",
      "contents replaced instead of cleaned",
      "clean vs replace contents fire",
    ],
    keywords: ["contents clean vs replace", "contents replacement"],
    topics: ["fire_damage_claims"],
  },
  "contents-supplement-documentation": {
    phrases: [
      "what documentation supports contents supplements",
      "contents supplement documentation",
      "contents supplement documentation support",
    ],
    keywords: ["contents supplement documentation", "contents supplement evidence"],
    topics: ["fire_damage_claims", "supplements"],
  },
  "pack-out-documentation-insurance": {
    phrases: [
      "how should a pack-out be documented for insurance",
      "document pack-out for insurance",
      "pack-out documented for insurance",
    ],
    keywords: ["pack-out documentation", "pack-out insurance"],
    topics: ["fire_damage_claims"],
  },
  "pack-out-chain-of-custody-documentation": {
    phrases: [
      "what chain of custody documentation is required",
      "chain of custody documentation pack-out",
      "pack-out chain of custody",
    ],
    keywords: ["chain of custody", "custody documentation"],
    topics: ["fire_damage_claims"],
  },
  "pack-out-storage-tracking": {
    phrases: [
      "how should contents be tracked during storage",
      "contents tracked during storage",
      "pack-out storage tracking",
    ],
    keywords: ["storage tracking", "contents storage"],
    topics: ["fire_damage_claims"],
  },
  "pack-out-charges-documentation": {
    phrases: [
      "what documentation supports pack-out charges",
      "pack-out charges documentation",
      "documentation supports pack-out charges",
    ],
    keywords: ["pack-out charges", "pack-out billing"],
    topics: ["fire_damage_claims", "supplements"],
  },
  "pack-out-return-documentation": {
    phrases: [
      "how should returned contents be documented",
      "returned contents documented",
      "pack-out return documentation",
    ],
    keywords: ["return delivery", "returned contents"],
    topics: ["fire_damage_claims"],
  },
  "fire-claims-underpaid-why": {
    phrases: [
      "why are fire damage claims underpaid",
      "fire damage claims underpaid",
      "fire claim underpayment",
    ],
    keywords: ["fire underpaid", "fire underpayment", "fire claim underpaid"],
    topics: ["fire_damage_claims"],
  },
  "fire-claim-documentation-required": {
    phrases: [
      "what documentation do insurance companies require after a fire",
      "fire claim documentation required",
      "documentation required after fire",
    ],
    keywords: ["fire documentation required", "fire claim documentation"],
    topics: ["fire_damage_claims"],
  },
  "fire-supplement-contractor-documentation": {
    phrases: [
      "how do contractors support fire damage supplements",
      "fire supplement contractor documentation",
      "contractor fire supplement support",
    ],
    keywords: ["fire supplement", "fire damage supplement"],
    topics: ["fire_damage_claims"],
  },
  "fire-claim-documentation-delays": {
    phrases: [
      "what documentation mistakes delay fire claims",
      "fire claim documentation delays",
      "fire claim delay documentation",
    ],
    keywords: ["fire claim delay", "fire documentation mistake"],
    topics: ["fire_damage_claims"],
  },
  "fire-claim-documentation-improve": {
    phrases: [
      "how can contractors improve fire claim documentation",
      "improve fire claim documentation",
      "fire documentation improve",
    ],
    keywords: ["fire documentation improve", "fire claim documentation"],
    topics: ["fire_damage_claims"],
  },
  "fire-commercial-claims-documentation": {
    phrases: [
      "commercial fire claims documentation",
      "how are commercial fire claims documented",
      "document commercial fire damage",
      "commercial fire loss documentation",
    ],
    keywords: ["commercial fire", "commercial fire documentation", "large loss fire"],
    topics: ["fire_damage_claims", "commercial_fire"],
  },
  "fire-commercial-tenant-owner-responsibility": {
    phrases: [
      "commercial fire tenant owner responsibility",
      "owner tenant responsibility commercial fire",
      "shell versus tenant fire claim",
      "triple net lease fire claim",
    ],
    keywords: ["tenant owner", "shell tenant", "triple net", "tenant improvement"],
    topics: ["fire_damage_claims", "commercial_fire"],
  },
  "fire-commercial-large-loss-scrutiny": {
    phrases: [
      "commercial fire claims scrutinized",
      "commercial fire claims scrutiny",
      "large loss fire claim scrutiny",
    ],
    keywords: ["commercial fire scrutiny", "large loss scrutiny", "commercial fire audit"],
    topics: ["fire_damage_claims", "commercial_fire"],
  },
  "fire-commercial-business-interruption-role": {
    phrases: [
      "contractor role business interruption fire",
      "business interruption documentation contractor fire",
      "fire claim business interruption contractor",
    ],
    keywords: ["business interruption", "BI documentation", "contractor BI role"],
    topics: ["fire_damage_claims", "commercial_fire"],
  },
  "fire-commercial-supplement-opportunities": {
    phrases: [
      "commercial fire supplement opportunities",
      "commercial fire supplement triggers",
      "supplement opportunities commercial fire",
    ],
    keywords: ["commercial fire supplement", "commercial supplement opportunities"],
    topics: ["fire_damage_claims", "commercial_fire", "supplements"],
  },
  "fire-code-upgrade-insurance-coverage": {
    phrases: [
      "does insurance pay for fire code upgrades",
      "fire code upgrade insurance coverage",
      "insurance pay code upgrades fire",
    ],
    keywords: ["fire code upgrade", "insurance pay", "code upgrade coverage"],
    topics: ["fire_damage_claims", "supplements"],
  },
  "fire-ordinance-law-coverage": {
    phrases: [
      "what is ordinance and law coverage",
      "ordinance and law coverage fire",
      "ordinance law insurance fire claim",
    ],
    keywords: ["ordinance and law", "ordinance law", "coverage A", "coverage B"],
    topics: ["fire_damage_claims", "insurance_supplements"],
  },
  "fire-code-upgrade-contractor-documentation": {
    phrases: [
      "how do contractors document code upgrades",
      "document required code upgrades fire",
      "fire code upgrade documentation contractor",
    ],
    keywords: ["code upgrade documentation", "document code upgrades", "AHJ documentation"],
    topics: ["fire_damage_claims", "documentation"],
  },
  "fire-code-upgrade-who-determines-required": {
    phrases: [
      "who determines code upgrade required",
      "who decides code upgrade fire rebuild",
      "AHJ determines code upgrade",
    ],
    keywords: ["who determines", "AHJ", "authority having jurisdiction", "code required"],
    topics: ["fire_damage_claims"],
  },
  "fire-code-upgrade-supplement-denials": {
    phrases: [
      "why are fire code upgrade supplements denied",
      "fire code upgrade supplement denied",
      "code upgrade supplement denial fire",
    ],
    keywords: ["code upgrade denied", "supplement denial", "fire code denial"],
    topics: ["fire_damage_claims", "supplements", "carrier_negotiations"],
  },
  "fire-supplement-included-items": {
    phrases: [
      "what should be included in a fire damage supplement",
      "fire damage supplement package contents",
      "what goes in a fire supplement",
    ],
    keywords: [
      "fire supplement included",
      "fire supplement package",
      "fire supplement contents",
    ],
    topics: ["fire_damage_claims", "supplements", "documentation"],
  },
  "fire-supplement-when-to-submit": {
    phrases: [
      "when should contractors submit a fire supplement",
      "when to submit fire damage supplement",
      "fire supplement timing",
    ],
    keywords: [
      "fire supplement when",
      "submit fire supplement",
      "fire supplement timing",
    ],
    topics: ["fire_damage_claims", "supplements"],
  },
  "fire-supplement-documentation-evidence": {
    phrases: [
      "what documentation supports a fire damage supplement",
      "fire damage supplement documentation evidence",
      "fire supplement documentation required",
    ],
    keywords: [
      "fire supplement documentation",
      "fire supplement evidence",
      "fire supplement proof",
    ],
    topics: ["fire_damage_claims", "supplements", "documentation"],
  },
  "fire-supplement-multiple-submissions": {
    phrases: [
      "can multiple supplements be submitted during a fire claim",
      "multiple fire supplements same claim",
      "phased fire supplements",
    ],
    keywords: [
      "multiple fire supplements",
      "phased fire supplement",
      "fire supplement phases",
    ],
    topics: ["fire_damage_claims", "supplements"],
  },
  "fire-supplement-commonly-missed-items": {
    phrases: [
      "most commonly missed fire supplement items",
      "commonly missed fire claim line items",
      "fire supplement missed items",
    ],
    keywords: [
      "missed fire supplement",
      "fire supplement line items",
      "fire claim missed scope",
    ],
    topics: ["fire_damage_claims", "supplements"],
  },
  "commercial-claims-handled": {
    phrases: [
      "does claims ninja handle commercial insurance claims",
      "do you handle commercial claims",
      "commercial insurance claims",
      "commercial property insurance claims",
      "commercial claim support",
    ],
    keywords: [
      "commercial_claims",
      "commercial insurance",
      "commercial claims",
      "commercial property",
    ],
    topics: ["commercial_claims", "insurance_supplements"],
  },
  "commercial-apartment-complex-claims": {
    phrases: [
      "apartment complex insurance claims",
      "help with apartment complex claims",
      "multifamily commercial claims",
    ],
    keywords: ["apartment complex", "multifamily", "commercial_claims"],
    topics: ["commercial_claims", "commercial_water"],
  },
  "commercial-apartment-insurance-claims": {
    phrases: [
      "how do apartment insurance claims work for contractors",
      "apartment insurance claims",
      "how apartment insurance claims work",
      "commercial apartment claims",
    ],
    keywords: [
      "apartment insurance claims",
      "apartment claims",
      "commercial apartment",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-multifamily-documentation": {
    phrases: [
      "how should contractors document multifamily insurance claims",
      "multifamily documentation",
      "document multifamily insurance claims",
      "multifamily restoration documentation",
    ],
    keywords: [
      "multifamily documentation",
      "multifamily insurance claims",
      "apartment damage documentation",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-unit-inspections": {
    phrases: [
      "how should contractors organize unit inspections on apartment claims",
      "unit inspections apartment",
      "unit-by-unit documentation",
      "apartment unit inspections",
    ],
    keywords: [
      "unit inspections",
      "unit-by-unit",
      "apartment unit documentation",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-multifamily-common-areas": {
    phrases: [
      "how should common areas be documented on multifamily claims",
      "common areas multifamily",
      "multifamily common area documentation",
      "document common areas apartment",
    ],
    keywords: [
      "common areas",
      "multifamily common areas",
      "common area documentation",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-property-manager-coordination": {
    phrases: [
      "how should contractors work with property managers on apartment insurance claims",
      "property managers apartment claims",
      "working with property managers",
      "property manager coordination multifamily",
    ],
    keywords: [
      "property managers",
      "property manager coordination",
      "apartment property manager",
    ],
    topics: ["commercial_claims"],
  },
  "commercial-hoa-insurance-claims": {
    phrases: [
      "how do HOA insurance claims work for contractors",
      "HOA insurance claims",
      "condominium association insurance claims",
      "community association insurance claims",
    ],
    keywords: [
      "HOA insurance claims",
      "condominium association",
      "community association",
      "HOA claims",
    ],
    topics: ["commercial_claims", "hoa_claims"],
  },
  "commercial-hoa-association-documentation": {
    phrases: [
      "how should contractors document association insurance claims",
      "association documentation",
      "HOA property damage documentation",
      "document HOA insurance claims",
    ],
    keywords: [
      "association documentation",
      "HOA documentation",
      "HOA property damage documentation",
    ],
    topics: ["commercial_claims", "hoa_claims"],
  },
  "commercial-hoa-master-policies": {
    phrases: [
      "how do association master policies differ from homeowner policies",
      "association master policies",
      "master policy vs homeowner policy",
      "HOA master policy",
    ],
    keywords: [
      "master policy",
      "association master",
      "homeowner policy",
      "HO-6",
    ],
    topics: ["commercial_claims", "hoa_claims"],
  },
  "commercial-hoa-common-elements": {
    phrases: [
      "how should common elements be documented on HOA claims",
      "common elements HOA",
      "HOA common element documentation",
      "document common elements association",
    ],
    keywords: [
      "common elements",
      "HOA common elements",
      "association common elements",
    ],
    topics: ["commercial_claims", "hoa_claims"],
  },
  "commercial-hoa-claim-coordination": {
    phrases: [
      "how should contractors coordinate HOA claims with boards and managers",
      "HOA claim coordination",
      "board and manager coordination HOA",
      "working with HOA boards",
    ],
    keywords: [
      "HOA claim coordination",
      "HOA board",
      "association manager",
      "board coordination",
    ],
    topics: ["commercial_claims", "hoa_claims"],
  },
  "commercial-warehouse-insurance-claims": {
    phrases: [
      "how do warehouse insurance claims work for contractors",
      "warehouse insurance claims",
      "commercial warehouse insurance claims",
      "distribution center insurance claims",
    ],
    keywords: [
      "warehouse insurance claims",
      "commercial warehouse",
      "distribution center",
      "warehouse claims",
    ],
    topics: ["commercial_claims", "industrial_warehouse_claims"],
  },
  "commercial-industrial-property-documentation": {
    phrases: [
      "how should contractors document industrial property insurance claims",
      "industrial property documentation",
      "document industrial insurance claims",
      "industrial insurance claims documentation",
    ],
    keywords: [
      "industrial property documentation",
      "industrial insurance claims",
      "industrial documentation",
    ],
    topics: ["commercial_claims", "industrial_warehouse_claims"],
  },
  "commercial-equipment-documentation": {
    phrases: [
      "how should equipment and machinery be documented on industrial insurance claims",
      "equipment documentation industrial claims",
      "machinery documentation warehouse claims",
      "document equipment industrial insurance",
    ],
    keywords: [
      "equipment documentation",
      "machinery documentation",
      "industrial equipment",
      "equipment and machinery",
    ],
    topics: ["commercial_claims", "industrial_warehouse_claims"],
  },
  "commercial-warehouse-inspections": {
    phrases: [
      "how should warehouse inspections be structured for insurance claims",
      "warehouse inspections insurance claims",
      "warehouse inspection workflow",
      "inspect warehouse insurance claim",
    ],
    keywords: [
      "warehouse inspections",
      "warehouse inspection",
      "warehouse inspection workflow",
    ],
    topics: ["commercial_claims", "industrial_warehouse_claims"],
  },
  "commercial-industrial-restoration-claims": {
    phrases: [
      "how do industrial restoration claims differ from other commercial restoration claims",
      "industrial restoration claims",
      "industrial restoration documentation",
      "manufacturing facility restoration claims",
    ],
    keywords: [
      "industrial restoration claims",
      "industrial restoration",
      "manufacturing restoration",
    ],
    topics: ["commercial_claims", "industrial_warehouse_claims"],
  },
  "commercial-retail-insurance-claims": {
    phrases: [
      "how do retail property insurance claims work for contractors",
      "retail insurance claims",
      "retail property insurance claims",
      "shopping center insurance claims",
      "retail center insurance claims",
    ],
    keywords: [
      "retail insurance claims",
      "retail property",
      "shopping center",
      "retail center",
    ],
    topics: ["commercial_claims", "retail_office_claims"],
  },
  "commercial-office-building-insurance-claims": {
    phrases: [
      "how do office building insurance claims work for contractors",
      "office building insurance claims",
      "office insurance claims",
      "professional office insurance claims",
    ],
    keywords: [
      "office building insurance claims",
      "office insurance claims",
      "office building",
      "professional office",
    ],
    topics: ["commercial_claims", "retail_office_claims"],
  },
  "commercial-retail-office-tenant-improvements": {
    phrases: [
      "how should contractors document leasehold and tenant improvements on retail and office claims",
      "retail office tenant improvements",
      "leasehold documentation retail office",
      "document tenant improvements retail office",
      "tenant improvement damage retail",
    ],
    keywords: [
      "leasehold",
      "tenant improvements",
      "retail tenant improvements",
      "office tenant improvements",
    ],
    topics: ["commercial_claims", "retail_office_claims"],
  },
  "commercial-multi-tenant-damage-documentation": {
    phrases: [
      "how should multi-tenant commercial damage be documented",
      "multi-tenant commercial damage documentation",
      "multi-tenant commercial losses",
      "document multi-tenant commercial property",
    ],
    keywords: [
      "multi-tenant",
      "multi-tenant commercial",
      "multi-tenant damage",
      "suite documentation",
    ],
    topics: ["commercial_claims", "retail_office_claims"],
  },
  "commercial-occupied-business-restoration": {
    phrases: [
      "how should contractors restore occupied commercial businesses during a claim",
      "occupied commercial restoration",
      "occupied business restoration",
      "after-hours commercial restoration",
      "occupied business insurance claim",
    ],
    keywords: [
      "occupied commercial",
      "occupied business",
      "occupied restoration",
      "after-hours restoration",
    ],
    topics: ["commercial_claims", "retail_office_claims"],
  },
  "commercial-large-loss-insurance-claims": {
    phrases: [
      "what qualifies as a large-loss commercial insurance claim for contractors",
      "large-loss commercial insurance claims",
      "large loss commercial insurance claim",
      "what is a large-loss commercial claim",
      "large commercial property damage claims",
    ],
    keywords: [
      "large-loss commercial",
      "large loss commercial",
      "large-loss claim",
      "commercial large-loss",
    ],
    topics: ["commercial_claims", "large_loss"],
  },
  "commercial-large-loss-multi-area-documentation": {
    phrases: [
      "how should contractors document multiple buildings or areas on a large commercial loss",
      "document multiple buildings large commercial loss",
      "campus multi-area large-loss documentation",
      "multi-area commercial documentation large loss",
    ],
    keywords: [
      "multi-area documentation",
      "campus documentation",
      "multiple buildings or areas",
      "large-loss multi-area",
    ],
    topics: ["commercial_claims", "large_loss"],
  },
  "commercial-large-loss-mitigation-documentation": {
    phrases: [
      "how should contractors document emergency mitigation on a large commercial loss",
      "large-loss emergency mitigation documentation",
      "large-loss mitigation documentation",
      "document mitigation on large commercial loss",
    ],
    keywords: [
      "large-loss mitigation",
      "emergency mitigation large loss",
      "large commercial mitigation",
    ],
    topics: ["commercial_claims", "large_loss"],
  },
  "commercial-large-loss-estimate-organization": {
    phrases: [
      "how should contractors organize estimates on large commercial losses",
      "large-loss estimate organization",
      "organize large-loss commercial estimates",
      "complex commercial estimate organization",
    ],
    keywords: [
      "large-loss estimate",
      "estimate organization",
      "complex commercial estimate",
      "phased estimate",
    ],
    topics: ["commercial_claims", "large_loss"],
  },
  "commercial-large-loss-reinspection-supplements": {
    phrases: [
      "how should contractors prepare for large-loss reinspections and supplements",
      "large-loss reinspection preparation",
      "large-loss supplement strategy",
      "commercial reinspection preparation large loss",
    ],
    keywords: [
      "large-loss reinspection",
      "large-loss supplement",
      "reinspection preparation",
      "supplement strategy",
    ],
    topics: ["commercial_claims", "large_loss", "supplements"],
  },
  "commercial-insurance-supplements": {
    phrases: [
      "what are commercial insurance supplements for contractors",
      "commercial insurance supplements",
      "commercial insurance supplement",
      "what is a commercial insurance supplement",
      "commercial supplements for contractors",
    ],
    keywords: [
      "commercial insurance supplements",
      "commercial supplement",
      "commercial insurance supplement",
      "commercial claim supplement",
    ],
    topics: ["commercial_claims", "supplements"],
  },
  "commercial-supplement-documentation": {
    phrases: [
      "how should contractors document commercial insurance supplements",
      "commercial supplement documentation",
      "document commercial supplements",
      "commercial insurance supplement documentation",
    ],
    keywords: [
      "commercial supplement documentation",
      "document commercial supplements",
      "commercial supplement evidence",
    ],
    topics: ["commercial_claims", "supplements"],
  },
  "commercial-supplement-package": {
    phrases: [
      "what belongs in a commercial supplement package",
      "commercial supplement package",
      "commercial insurance supplement package",
      "what to include in a commercial supplement",
    ],
    keywords: [
      "commercial supplement package",
      "supplement package",
      "commercial supplement contents",
    ],
    topics: ["commercial_claims", "supplements"],
  },
  "commercial-reinspection-support": {
    phrases: [
      "how should contractors support commercial reinspections",
      "commercial reinspection support",
      "prepare for a commercial reinspection",
      "commercial insurance reinspection",
    ],
    keywords: [
      "commercial reinspection",
      "commercial reinspection support",
      "reinspection preparation",
    ],
    topics: ["commercial_claims", "supplements", "large_loss"],
  },
  "commercial-supplement-timelines": {
    phrases: [
      "what timelines should contractors follow on commercial supplements",
      "commercial supplement timelines",
      "when to submit commercial supplements",
      "commercial supplement follow-up",
      "multiple commercial supplement cycles",
      "how should contractors handle large-loss commercial supplements",
      "large-loss commercial supplements",
    ],
    keywords: [
      "commercial supplement timelines",
      "commercial supplement timing",
      "supplement cycles",
      "3-7-14 follow-up",
      "large-loss commercial supplements",
    ],
    topics: ["commercial_claims", "supplements", "large_loss"],
  },
  "commercial-national-restoration-programs": {
    phrases: [
      "support national restoration companies",
      "national restoration programs",
      "multi-market restoration program",
    ],
    keywords: ["national restoration", "national program", "commercial_claims"],
    topics: ["commercial_claims"],
  },
  "commercial-large-loss-support": {
    phrases: [
      "large loss commercial claims",
      "assist with large loss commercial claims",
      "large-loss insurance claims",
    ],
    keywords: ["large loss", "large-loss", "commercial_claims", "reconstruction"],
    topics: ["commercial_claims", "large_loss"],
  },
  "commercial-property-types-supported": {
    phrases: [
      "what commercial property types does claims ninja support",
      "commercial property types",
      "commercial buildings supported",
      "do you handle hotels",
      "do you handle retail centers",
      "do you work retail centers",
      "can you work with property managers",
      "do you support property managers",
      "do you handle multi-building losses",
      "can you support multi-building losses",
    ],
    keywords: [
      "commercial property types",
      "commercial_claims",
      "property types",
      "hotel",
      "hotels",
      "hospitality",
      "retail center",
      "retail centers",
      "property manager",
      "property managers",
      "multi-building",
      "multi-building losses",
    ],
    topics: ["commercial_claims"],
  },
  "overlooked-insurance-estimate-items": {
    phrases: [
      "most overlooked line items in insurance estimates",
      "overlooked insurance estimate items",
      "overlooked line items insurance estimates",
      "commonly overlooked estimate items",
    ],
    keywords: [
      "overlooked line items",
      "overlooked estimate",
      "temporary protection",
      "general conditions",
      "detach reset",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "missing-line-items-insurance-estimates": {
    phrases: [
      "why are line items missing from carrier estimates",
      "missing line items insurance estimates",
      "carrier estimate missing line items",
      "why line items missing from insurance estimates",
    ],
    keywords: ["missing line items", "carrier estimate gaps", "estimate omissions"],
    topics: ["supplements", "xactimate"],
  },
  "documentation-supporting-supplements": {
    phrases: [
      "documentation supporting supplements",
      "what documentation supports insurance estimate supplements",
      "documentation that supports supplements",
      "supplement supporting documentation",
    ],
    keywords: [
      "supplement documentation",
      "supporting documentation",
      "attachment index",
      "estimate supplements",
    ],
    topics: ["documentation", "supplements"],
  },
  "estimate-review-best-practices": {
    phrases: [
      "estimate review best practices",
      "estimate review best practices for contractors",
      "best practices for insurance estimate review",
      "how should contractors review carrier estimates",
    ],
    keywords: ["estimate review", "best practices", "gap list", "48 hours"],
    topics: ["supplements", "xactimate"],
  },
  "common-estimate-mistakes-contractors": {
    phrases: [
      "common insurance estimate mistakes contractors make",
      "common estimate mistakes contractors",
      "contractor estimate review mistakes",
      "mistakes reviewing insurance estimates",
    ],
    keywords: [
      "estimate mistakes",
      "contractor mistakes",
      "carrier estimate as final",
      "estimate review mistakes",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "missing-scope-insurance-estimates": {
    phrases: [
      "what does missing scope mean on an insurance estimate",
      "missing scope insurance estimate",
      "insurance estimate missing scope",
      "missing scope on carrier estimate",
    ],
    keywords: [
      "missing scope",
      "scope gap",
      "estimate missing scope",
      "under-scoped estimate",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "estimate-red-flags-missing-scope": {
    phrases: [
      "what are red flags that an insurance estimate is missing scope",
      "insurance estimate red flags",
      "estimate red flags missing scope",
      "red flags carrier estimate missing scope",
    ],
    keywords: [
      "estimate red flags",
      "missing scope red flags",
      "scope warning signs",
      "under-scoped warning",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "carrier-estimate-review-missing-scope": {
    phrases: [
      "how should contractors review a carrier estimate for missing scope",
      "carrier estimate review missing scope",
      "review carrier estimate for missing scope",
      "estimate review for missing scope",
    ],
    keywords: [
      "carrier estimate review",
      "missing scope review",
      "estimate comparison",
      "gap list",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "identifying-estimate-omissions": {
    phrases: [
      "how do contractors identify omissions on an insurance estimate",
      "identifying estimate omissions",
      "identify estimate omissions",
      "find omissions on insurance estimate",
    ],
    keywords: [
      "estimate omissions",
      "identify omissions",
      "scope omissions",
      "gap list",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "documentation-supporting-missing-scope": {
    phrases: [
      "what documentation supports missing scope findings",
      "documentation supporting missing scope",
      "docs for missing scope",
      "evidence for missing scope estimate",
    ],
    keywords: [
      "missing scope documentation",
      "scope evidence",
      "attachment index",
      "comparison worksheet",
    ],
    topics: ["documentation", "supplements", "xactimate"],
  },
  "estimate-review-for-contractors": {
    phrases: [
      "how should contractors review an insurance estimate against field conditions",
      "estimate review for contractors",
      "review insurance estimate against field conditions",
    ],
    keywords: [
      "estimate review",
      "field conditions",
      "comparison worksheet",
      "gap list",
      "scope validation",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "estimate-review-workflow": {
    phrases: [
      "what is the contractor estimate review workflow from receipt to settlement",
      "contractor estimate review workflow",
      "estimate review workflow from receipt to settlement",
      "complete estimate review workflow",
      "estimate review workflow for contractors",
    ],
    keywords: [
      "estimate review workflow",
      "receipt to settlement",
      "operational estimate review",
      "estimate review playbook",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "scope-audit-workflow": {
    phrases: [
      "how do contractors run a scope audit workflow on a carrier estimate",
      "scope audit workflow",
      "run a scope audit workflow",
      "contractor scope audit workflow",
    ],
    keywords: [
      "scope audit",
      "scope audit workflow",
      "comparison worksheet",
      "specialty passes",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "supplement-preparation": {
    phrases: [
      "how should contractors prepare supplements after estimate review",
      "supplement preparation after estimate review",
      "prepare supplements after estimate review",
      "supplement preparation checklist",
    ],
    keywords: [
      "supplement preparation",
      "supplement-ready gaps",
      "cover letter",
      "exhibit references",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "estimate-organization": {
    phrases: [
      "how should contractors organize estimate review files and versions",
      "estimate organization for contractors",
      "organize estimate review files",
      "estimate version organization",
    ],
    keywords: [
      "estimate organization",
      "estimate versions",
      "comparison worksheet",
      "area labels",
    ],
    topics: ["supplements", "documentation"],
  },
  "reinspection-preparation": {
    phrases: [
      "how should contractors prepare for reinspection after estimate review",
      "reinspection preparation after estimate review",
      "prepare for reinspection after estimate review",
      "reinspection checklist estimate review",
    ],
    keywords: [
      "reinspection preparation",
      "reinspection packet",
      "disputed areas",
      "briefing summary",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "scope-validation-carrier-estimates": {
    phrases: [
      "how do contractors validate scope on a carrier estimate",
      "scope validation carrier estimates",
      "validate scope on carrier estimate",
      "carrier estimate scope validation",
    ],
    keywords: [
      "scope validation",
      "carrier estimate scope",
      "truncated rooms",
      "missing phases",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "quantity-validation-insurance-estimates": {
    phrases: [
      "how should contractors validate quantities on insurance estimates",
      "quantity validation insurance estimates",
      "validate quantities on carrier estimates",
      "insurance estimate quantity verification",
    ],
    keywords: [
      "quantity validation",
      "quantity verification",
      "field measurements",
      "takeoff",
      "square footage",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "quantity-validation-for-contractors": {
    phrases: [
      "what is quantity validation for contractors on insurance estimates",
      "what is quantity validation for contractors",
      "quantity validation for contractors",
      "contractor quantity validation definition",
    ],
    keywords: [
      "quantity validation",
      "estimate quantities",
      "field measurements",
      "comparison worksheet",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "quantity-discrepancies-insurance-estimates": {
    phrases: [
      "what are quantity discrepancies on insurance estimates",
      "quantity discrepancies insurance estimates",
      "quantity discrepancy on carrier estimate",
      "estimate quantity shortfalls",
    ],
    keywords: [
      "quantity discrepancies",
      "quantity shortfall",
      "carrier qty",
      "field qty",
      "quantity delta",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "field-measurements-estimate-quantities": {
    phrases: [
      "how should contractors use field measurements to review estimate quantities",
      "field measurements for estimate quantities",
      "field measurements estimate review",
      "independent field measurements insurance estimate",
    ],
    keywords: [
      "field measurements",
      "measurement context",
      "takeoff methodology",
      "estimate quantities",
    ],
    topics: ["supplements", "documentation"],
  },
  "estimate-quantities-contractor-review": {
    phrases: [
      "how should contractors review estimate quantities on a carrier insurance estimate",
      "how should contractors review estimate quantities",
      "estimate quantities contractor review",
      "review carrier estimate quantities",
    ],
    keywords: [
      "estimate quantities",
      "quantity review",
      "carrier estimate quantities",
      "quantity validation",
    ],
    topics: ["supplements", "xactimate", "documentation"],
  },
  "documenting-quantity-changes-insurance-estimates": {
    phrases: [
      "how should contractors document quantity changes on insurance estimates",
      "documenting quantity changes on insurance estimates",
      "document quantity changes insurance estimate",
      "how to document revised estimate quantities",
    ],
    keywords: [
      "documenting quantity changes",
      "revised quantities",
      "quantity supplement",
      "comparison worksheet",
    ],
    topics: ["supplements", "documentation"],
  },
  "carrier-estimate-anatomy-contractors": {
    phrases: [
      "what is the anatomy of a carrier insurance estimate",
      "anatomy of a carrier estimate",
      "carrier estimate anatomy for contractors",
      "parts of a carrier insurance estimate",
    ],
    keywords: [
      "carrier estimate anatomy",
      "estimate sketch",
      "trade sections",
      "price list",
      "macros",
    ],
    topics: ["supplements", "xactimate"],
  },
  "estimate-documentation-requirements": {
    phrases: [
      "what documentation is required for estimate review and scope validation",
      "estimate documentation requirements",
      "documentation required for estimate review",
      "estimate review supporting documentation",
    ],
    keywords: [
      "estimate documentation",
      "comparison worksheet",
      "gap list",
      "labeled photos",
      "field scope worksheet",
    ],
    topics: ["documentation", "supplements", "xactimate"],
  },
};

function faqToChunks(items: readonly FaqItem[]): ChatKnowledgeChunk[] {
  return items.map((item) => {
    const categoryTitle = getCategoryTitle(item.category);
    const aliases = TOPIC_ALIASES[item.category] ?? [];
    const boosts = FAQ_ID_BOOSTS[item.id];
    return {
      id: `faq:${item.id}`,
      source: `faq — ${categoryTitle}`,
      topics: [item.category, ...aliases, ...(boosts?.topics ?? [])],
      phrases: [...questionPhrases(item.question), ...(boosts?.phrases ?? [])],
      keywords: [
        ...aliases,
        ...item.question
          .toLowerCase()
          .split(/\s+/)
          .filter((w) => w.length >= 4),
        ...(boosts?.keywords ?? []),
      ],
      text: `Q: ${item.question}\nA: ${item.answer}`,
    };
  });
}

function pageToChunks(
  page: MarketingPageConfig,
  topics: readonly string[],
  keywords?: readonly string[],
  extraPhrases?: readonly string[],
): ChatKnowledgeChunk[] {
  const featureText = page.features
    .map((f) => `• ${f.title}: ${f.description}`)
    .join("\n");

  const summary = [
    `${page.title}`,
    page.description,
    featureText ? `\n${featureText}` : "",
    `URL: ${page.path}`,
  ]
    .filter(Boolean)
    .join("\n");

  return [
    {
      id: `page:${page.path}`,
      source: `page:${page.path}`,
      topics,
      keywords: keywords ?? topics,
      phrases: [
        page.title.toLowerCase(),
        page.eyebrow.toLowerCase(),
        ...(extraPhrases ?? []),
      ],
      text: summary,
    },
  ];
}

type SolutionSegmentBlock = {
  title: string;
  description: string;
  items: readonly { title: string; description: string }[];
};

type SolutionWorkflowBlock = {
  title: string;
  steps: readonly { title: string; description: string }[];
};

type SolutionEnrichment = {
  hero: { title: string; description: string };
  segments: SolutionSegmentBlock;
  workflow: SolutionWorkflowBlock;
};

function formatSolutionEnrichment(enrichment: SolutionEnrichment): string {
  const segmentLines = enrichment.segments.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");
  const workflowLines = enrichment.workflow.steps
    .map((step) => `• ${step.title}: ${step.description}`)
    .join("\n");

  return [
    enrichment.hero.title,
    enrichment.hero.description,
    `${enrichment.segments.title}: ${enrichment.segments.description}`,
    segmentLines,
    enrichment.workflow.title,
    workflowLines,
  ].join("\n");
}

function solutionPageChunks(
  page: MarketingPageConfig,
  enrichment: SolutionEnrichment,
  topics: readonly string[],
  keywords?: readonly string[],
): ChatKnowledgeChunk[] {
  const featureText = page.features
    .map((f) => `• ${f.title}: ${f.description}`)
    .join("\n");

  return [
    {
      id: `page:${page.path}`,
      source: `page:${page.path}`,
      topics,
      keywords: keywords ?? topics,
      phrases: [
        page.title.toLowerCase(),
        enrichment.hero.title.toLowerCase(),
        `${page.path.split("/").pop()?.replace(/-/g, " ")} claims`,
      ],
      text: [
        formatSolutionEnrichment(enrichment),
        featureText,
        `URL: ${page.path}`,
      ]
        .filter(Boolean)
        .join("\n"),
    },
  ];
}

function clientPortalChunks(): ChatKnowledgeChunk[] {
  const capabilityText = CLIENT_PORTAL_CAPABILITIES.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");
  const workflowText = CLIENT_PORTAL_WORKFLOW.steps
    .map((step) => `• ${step.title}: ${step.description}`)
    .join("\n");

  return [
    {
      id: "page:/platform/client-portal",
      source: "page:/platform/client-portal",
      topics: ["platform", "platform_security", "onboarding", "documentation"],
      keywords: [
        "client portal",
        "portal",
        "document upload",
        "claim file",
        "project tracking",
      ],
      phrases: [
        "client portal",
        "claims command center",
        "what can i do in the portal",
        "upload documents to the platform",
      ],
      text: [
        CLIENT_PORTAL_HERO.title,
        CLIENT_PORTAL_HERO.description,
        `${CLIENT_PORTAL_CAPABILITIES.title}: ${CLIENT_PORTAL_CAPABILITIES.description}`,
        capabilityText,
        `${CLIENT_PORTAL_WORKFLOW.title}: ${CLIENT_PORTAL_WORKFLOW.description}`,
        workflowText,
        `URL: ${clientPortalPage.path}`,
      ].join("\n"),
    },
  ];
}

function companyAndToolChunks(): ChatKnowledgeChunk[] {
  const reviewLines = CLIENT_REVIEWS.map(
    (review) =>
      `"${review.quote}" — ${review.author}, ${review.location}`,
  ).join("\n\n");

  return [
    {
      id: "page:/reviews",
      source: "page:/reviews",
      topics: ["contractor_fit", "onboarding", "platform"],
      keywords: ["review", "testimonial", "contractor", "partner"],
      phrases: [
        "what do contractors say",
        "reviews",
        "testimonials",
        "contractor reviews",
      ],
      text: [
        reviewsPage.title,
        reviewsPage.description,
        reviewLines,
        `URL: ${reviewsPage.path}`,
      ].join("\n\n"),
    },
    {
      id: "page:/contact",
      source: "page:/contact",
      topics: ["onboarding", "getting_started"],
      keywords: ["contact", "phone", "email", "reach", "call"],
      phrases: [
        "phone number",
        "contact claims ninja",
        "how do i contact",
        "how do i contact claims ninja",
        "email address",
        "what is your phone number",
      ],
      text: [
        CONTACT_HERO.title,
        CONTACT_HERO.description,
        CONTACT_ROUTING.description,
        CONTACT_ROUTING.cards
          .map((card) => `• ${card.title}: ${card.description}`)
          .join("\n"),
        `Phone: ${SITE.phone}`,
        `Email: ${SITE.email}`,
        CONTACT_INFO.description,
        `URL: ${CONTACT_META.path}`,
      ].join("\n\n"),
    },
    {
      id: "tool:homepage-calculator",
      source: "homepage:/#calculator",
      topics: ["ai", "ai_claim_analysis", "pricing", "onboarding"],
      keywords: [
        "calculator",
        "roi",
        "claim review",
        "free claim review",
        "organization roi",
        "triage",
      ],
      phrases: [
        "claim review calculator",
        "single claim review",
        "organization roi calculator",
        "free claim review",
        "how does the calculator work",
      ],
      text: [
        "Homepage calculators at /#calculator",
        "Single Claim Review: AI-assisted preliminary triage on the homepage. Contractors upload claim files (photos, estimates), select claim type, enter carrier estimate and scope notes, and receive a preliminary analysis of scope gaps and recovery opportunities before expert review.",
        "Organization ROI: Models monthly and annual net uplift across your book using average carrier estimate, jobs per month, assumed uplift percentage, and in-house claims team cost. Compares outsourced Claims Ninja fee structure (15% of documented increase or ~4% of RCV when no carrier estimate) against in-house overhead.",
        "Both calculators include optional lead capture to connect with the Claims Ninja team. For full claim intake use the onboarding form; for strategy discussions use the schedule link.",
        "URL: /#calculator",
      ].join("\n"),
    },
  ];
}

function platformOverviewChunks(): ChatKnowledgeChunk[] {
  const pillarText = PLATFORM_PILLARS.map(
    (p) => `• ${p.title}: ${p.description}`,
  ).join("\n");

  return [
    {
      id: "platform:hero",
      source: "page:/platform",
      topics: ["platform", "how_it_works", "onboarding"],
      keywords: ["platform", "contractor", "operations", "claims"],
      phrases: ["how claims ninja works", "contractor claims operations"],
      text: `${PLATFORM_HERO.title}\n${PLATFORM_HERO.description}`,
    },
    {
      id: "platform:pillars",
      source: "page:/platform",
      topics: ["platform", "public_adjuster", "supplements", "ai"],
      keywords: [
        "public adjuster",
        "supplement",
        "portal",
        "ai",
        "negotiation",
      ],
      phrases: ["expert claim support", "claims management technology"],
      text: `Platform pillars:\n${pillarText}`,
    },
    ...pageToChunks(platformOverviewPage, ["platform", "how_it_works"]),
  ];
}

function platformAiChunks(): ChatKnowledgeChunk[] {
  const capabilityText = PLATFORM_AI.capabilities
    .map((c) => `• ${c.title}: ${c.description}`)
    .join("\n");

  const workflowCards = AI_CLAIM_WORKFLOW.cards
    .map(
      (card) =>
        `${card.title}:\n${card.items.map((item) => `  - ${item}`).join("\n")}`,
    )
    .join("\n\n");

  return [
    {
      id: "platform:ai-overview",
      source: "page:/platform/ai-claim-analysis",
      topics: ["ai", "ai_claim_analysis"],
      keywords: ["ai", "analysis", "triage", "scope gap", "opportunity"],
      phrases: ["ai claim analysis", "scope gap detection"],
      text: `${PLATFORM_AI.title}\n${PLATFORM_AI.description}\n\n${capabilityText}`,
    },
    {
      id: "platform:ai-workflow",
      source: "page:/platform/ai-claim-analysis",
      topics: ["ai", "ai_claim_analysis"],
      keywords: [
        "carrier estimate",
        "line item",
        "documentation",
        "supplement",
      ],
      phrases: ["what the ai reviews", "ai workflow"],
      text: `${AI_CLAIM_WORKFLOW.title}\n${AI_CLAIM_WORKFLOW.description}\n\n${workflowCards}`,
    },
    ...pageToChunks(aiClaimAnalysisPage, ["ai", "ai_claim_analysis"]),
  ];
}

export const CHAT_KNOWLEDGE_CHUNKS: readonly ChatKnowledgeChunk[] = [
  ...faqToChunks(FAQ_ITEMS),
  ...resultsInsightsToChunks(),
  ...pageToChunks(
    caseStudiesPage,
    ["results_insights"],
    [
      "results and insights",
      "case studies",
      "recovery patterns",
      "portfolio review",
      "trade recovery",
    ],
    ["results and insights", "case studies", "/case-studies"],
  ),
  ...blogToChunks(BLOG_POSTS),
  ...blogCategoryToChunks(),
  ...guideToChunks(CLAIM_GUIDES),
  ...guideCategoryToChunks(),
  ...pageToChunks(guidesPage, ["claim_guides", "documentation"], [
    "guides",
    "checklist",
    "playbook",
    "claim guides",
    "operational",
  ]),
  ...pageToChunks(pricingPage, ["pricing", "billing"], [
    "pricing",
    "fee",
    "cost",
    "charge",
    "rcv",
    "15%",
    "4%",
  ]),
  ...pageToChunks(billingPaymentsPage, ["billing", "pricing"], [
    "billing",
    "invoice",
    "payment",
    "rcv",
    "fee",
  ]),
  ...platformOverviewChunks(),
  ...platformAiChunks(),
  ...clientPortalChunks(),
  ...pageToChunks(
    claimTrackingPage,
    ["platform", "platform_security"],
    ["claim tracking", "pipeline", "claim status", "recovery metrics"],
    [
      "claim tracking",
      "track claim status",
      "how do i track claim status",
      "pipeline visibility",
    ],
  ),
  ...pageToChunks(
    communicationHubPage,
    ["platform", "platform_security"],
    ["communication hub", "messages", "correspondence", "claim communication"],
    [
      "communication hub",
      "how does the communication hub work",
      "claim messages",
    ],
  ),
  ...companyAndToolChunks(),
  ...aboutPageToChunks(),
  ...pricingPageToChunks(),
  ...partnerNetworkToChunks(),
  ...solutionPageChunks(
    roofingPage,
    {
      hero: ROOFING_HERO,
      segments: ROOFING_SEGMENTS,
      workflow: ROOFING_WORKFLOW,
    },
    ["roofing_claims", "contractor_fit"],
    ["roofing", "storm", "roof supplement"],
  ),
  ...solutionPageChunks(
    commercialPage,
    {
      hero: COMMERCIAL_HERO,
      segments: COMMERCIAL_PROPERTY_TYPES,
      workflow: { title: COMMERCIAL_HELP.title, steps: COMMERCIAL_HELP.items },
    },
    ["commercial_claims", "contractor_fit", "large_loss"],
    [
      "commercial_claims",
      "commercial insurance",
      "commercial property",
      "large loss",
      "commercial restoration",
      "commercial supplement",
    ],
  ),
  ...solutionPageChunks(
    waterDamagePage,
    {
      hero: WATER_DAMAGE_HERO,
      segments: WATER_DAMAGE_SEGMENTS,
      workflow: WATER_DAMAGE_WORKFLOW,
    },
    ["water_damage_claims", "contractor_fit", "mitigation"],
    ["water", "mitigation", "restoration", "dry log"],
  ),
  ...solutionPageChunks(
    fireDamagePage,
    {
      hero: FIRE_DAMAGE_HERO,
      segments: FIRE_DAMAGE_SEGMENTS,
      workflow: FIRE_DAMAGE_WORKFLOW,
    },
    ["fire_damage_claims", "contractor_fit"],
    ["fire", "smoke", "soot"],
  ),
  ...solutionPageChunks(
    moldPage,
    {
      hero: MOLD_HERO,
      segments: MOLD_SEGMENTS,
      workflow: MOLD_WORKFLOW,
    },
    ["mold_claims", "contractor_fit"],
    ["mold", "remediation", "containment"],
  ),
  ...solutionPageChunks(
    contentsPage,
    {
      hero: CONTENTS_RESTORATION_HERO,
      segments: CONTENTS_RESTORATION_SEGMENTS,
      workflow: CONTENTS_RESTORATION_WORKFLOW,
    },
    ["contents_restoration", "contractor_fit"],
    ["contents", "inventory", "pack-out"],
  ),
];
