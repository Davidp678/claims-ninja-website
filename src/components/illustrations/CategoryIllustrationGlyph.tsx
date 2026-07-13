import type { ComponentType } from "react";

import type { CategoryIllustrationKey } from "./category-illustration-types";
import { ClaimRecoveryGlyph } from "./glyphs/ClaimRecoveryGlyph";
import { CommercialClaimsGlyph } from "./glyphs/CommercialClaimsGlyph";
import { ContractorOperationsGlyph } from "./glyphs/ContractorOperationsGlyph";
import { DocumentationGlyph } from "./glyphs/DocumentationGlyph";
import { EstimatingGlyph } from "./glyphs/EstimatingGlyph";
import { FireDamageGlyph } from "./glyphs/FireDamageGlyph";
import { GenericDocumentGlyph } from "./glyphs/GenericDocumentGlyph";
import { InsuranceSupplementingGlyph } from "./glyphs/InsuranceSupplementingGlyph";
import { MoldGlyph } from "./glyphs/MoldGlyph";
import { PublicAdjustersGlyph } from "./glyphs/PublicAdjustersGlyph";
import { RoofingGlyph } from "./glyphs/RoofingGlyph";
import { WaterDamageGlyph } from "./glyphs/WaterDamageGlyph";
import { XactimateGlyph } from "./glyphs/XactimateGlyph";

const GLYPH_COMPONENTS: Record<
  CategoryIllustrationKey,
  ComponentType<{ className?: string }>
> = {
  "insurance-supplementing": InsuranceSupplementingGlyph,
  "water-damage": WaterDamageGlyph,
  "fire-damage": FireDamageGlyph,
  roofing: RoofingGlyph,
  documentation: DocumentationGlyph,
  estimating: EstimatingGlyph,
  xactimate: XactimateGlyph,
  "contractor-operations": ContractorOperationsGlyph,
  "public-adjusters": PublicAdjustersGlyph,
  "claim-recovery": ClaimRecoveryGlyph,
  mold: MoldGlyph,
  "commercial-claims": CommercialClaimsGlyph,
  generic: GenericDocumentGlyph,
};

export function CategoryIllustrationGlyph({
  illustrationKey,
  className,
}: {
  illustrationKey: CategoryIllustrationKey;
  className?: string;
}) {
  const Glyph = GLYPH_COMPONENTS[illustrationKey] ?? GenericDocumentGlyph;
  return <Glyph className={className} />;
}

export function getGlyphComponent(illustrationKey: CategoryIllustrationKey) {
  return GLYPH_COMPONENTS[illustrationKey] ?? GenericDocumentGlyph;
}

export { GLYPH_COMPONENTS };
