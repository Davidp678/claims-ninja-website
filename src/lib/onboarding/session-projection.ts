import { normalizeIntakeFileList } from "./file-summary";
import type {
  BillingAddressDraft,
  BillingContactDraft,
  ClaimDraft,
  CompanyDraft,
  IntakeSessionProjection,
} from "./types";

type PlatformFormBlob = {
  claim?: ClaimDraft;
  company?: CompanyDraft;
  billingContact?: BillingContactDraft;
  billingAddress?: BillingAddressDraft;
};

/**
 * Platform projectSession nests drafts under `form`; website stages read
 * top-level `claim` / `company` / billing drafts. Prefer already-flat fields.
 */
export function normalizeSessionProjection(
  data: IntakeSessionProjection & { form?: PlatformFormBlob },
): IntakeSessionProjection {
  const form = data.form && typeof data.form === "object" ? data.form : undefined;

  const { form: _drop, ...rest } = data as IntakeSessionProjection & {
    form?: PlatformFormBlob;
  };

  return {
    ...rest,
    claim: data.claim ?? form?.claim,
    company: data.company ?? form?.company,
    billingContact: data.billingContact ?? form?.billingContact,
    billingAddress: data.billingAddress ?? form?.billingAddress,
    files: normalizeIntakeFileList(data.files),
  };
}
