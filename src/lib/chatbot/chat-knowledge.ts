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
    topics: ["roofing_claims", "commercial", "supplements"],
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
    topics: ["roofing_claims", "commercial", "supplements"],
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
    topics: ["roofing_claims", "commercial"],
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
    topics: ["roofing_claims", "commercial"],
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
    topics: ["roofing_claims", "commercial", "supplements"],
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
    topics: ["roofing_claims", "supplements", "commercial"],
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
      "commercial",
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
    keywords: ["apartment complex", "multifamily", "commercial"],
    topics: ["commercial_claims", "commercial_water"],
  },
  "commercial-national-restoration-programs": {
    phrases: [
      "support national restoration companies",
      "national restoration programs",
      "multi-market restoration program",
    ],
    keywords: ["national restoration", "national program", "commercial"],
    topics: ["commercial_claims"],
  },
  "commercial-large-loss-support": {
    phrases: [
      "large loss commercial claims",
      "assist with large loss commercial claims",
      "large-loss insurance claims",
    ],
    keywords: ["large loss", "large-loss", "commercial", "reconstruction"],
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
      "commercial",
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
      "commercial",
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
