import { MOLD_DAMAGE_DOCUMENTATION_GUIDE } from "@/lib/guides/mold-damage-documentation-guide";
import { MOLD_PROTOCOL_DOCUMENTATION_GUIDE } from "@/lib/guides/mold-protocol-documentation-guide";
import { MOLD_REMEDIATION_DOCUMENTATION_GUIDE } from "@/lib/guides/mold-remediation-documentation-guide";
import { POST_REMEDIATION_VERIFICATION_DOCUMENTATION_GUIDE } from "@/lib/guides/post-remediation-verification-documentation-guide";
import type { Guide } from "@/lib/guide-types";

export const MOLD_GUIDES: readonly Guide[] = [
  MOLD_DAMAGE_DOCUMENTATION_GUIDE,
  MOLD_REMEDIATION_DOCUMENTATION_GUIDE,
  POST_REMEDIATION_VERIFICATION_DOCUMENTATION_GUIDE,
  MOLD_PROTOCOL_DOCUMENTATION_GUIDE,
];
