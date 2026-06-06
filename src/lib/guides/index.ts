import type { Guide } from "@/lib/guide-types";

import { EXTERIOR_RESTORATION_GUIDES } from "./exterior-restoration";
import { FIRE_DAMAGE_GUIDES } from "./fire-damage";
import { GENERAL_CLAIMS_GUIDES } from "./general-claims";
import { ROOFING_CLAIMS_GUIDES } from "./roofing-claims";
import { WATER_DAMAGE_GUIDES } from "./water-damage";

export const CLAIM_GUIDES: readonly Guide[] = [
  ...GENERAL_CLAIMS_GUIDES,
  ...ROOFING_CLAIMS_GUIDES,
  ...WATER_DAMAGE_GUIDES,
  ...FIRE_DAMAGE_GUIDES,
  ...EXTERIOR_RESTORATION_GUIDES,
];
