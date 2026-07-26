"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FieldLabel,
  SectionCard,
  SelectInput,
  TextInput,
} from "@/components/onboarding/FormField";
import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import type {
  BillingAddressDraft,
  BillingContactDraft,
  CompanyDraft,
} from "@/lib/onboarding/types";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

const ACKNOWLEDGEMENT_FALLBACK =
  "I understand Claims Ninja will collect my payment method securely through QuickBooks before payment is processed, and that payment is handled only according to my agreement and approved invoice workflow.";

type BillingStatus = {
  captureEnabled: boolean;
  continueAllowed: boolean;
  continueMode?: string | null;
  previewSyntheticEnabled?: boolean;
  integrationPending?: boolean;
  profileComplete?: boolean;
  message?: string | null;
  reason?: string | null;
  contact?: BillingContactDraft;
  address?: BillingAddressDraft;
  authorization?: {
    acceptanceLanguage?: string;
    accepted?: boolean;
    legalApprovalPending?: boolean;
  };
  instrument?: {
    isSynthetic?: boolean;
    maskedDisplay?: string | null;
  } | null;
  noChargeDuringOnboarding?: boolean;
  manualChargesOnly?: boolean;
  noPaymentCollected?: boolean;
  paymentMethodOnFile?: boolean;
};

function nonEmpty(value: string | undefined | null): boolean {
  return Boolean(value && value.trim().length > 0);
}

function prefillContact(
  existing: BillingContactDraft | undefined,
  company: CompanyDraft | undefined,
): BillingContactDraft {
  const base = existing ?? {};
  const legacyName = base.name?.trim() ?? "";
  const [legacyFirst, ...legacyRest] = legacyName.split(/\s+/).filter(Boolean);
  return {
    ...base,
    firstName:
      base.firstName || company?.firstName || legacyFirst || undefined,
    lastName:
      base.lastName ||
      company?.lastName ||
      (legacyRest.length > 0 ? legacyRest.join(" ") : undefined),
    title: base.title || company?.jobTitle || undefined,
    email: base.email || company?.workEmail || undefined,
    phone: base.phone || company?.mobilePhone || company?.companyPhone || undefined,
    legalCompanyName:
      base.legalCompanyName || company?.legalCompanyName || undefined,
    dbaName: base.dbaName || company?.dbaName || undefined,
    apEmail: base.apEmail || undefined,
    apPhone: base.apPhone || undefined,
    sameAsCompanyAddress: base.sameAsCompanyAddress ?? true,
  };
}

function prefillAddress(
  existing: BillingAddressDraft | undefined,
  company: CompanyDraft | undefined,
  sameAsCompany: boolean,
): BillingAddressDraft {
  if (sameAsCompany) {
    return {
      streetAddress: company?.streetAddress ?? existing?.streetAddress,
      suite: existing?.suite,
      city: company?.city ?? existing?.city,
      state: company?.state ?? existing?.state,
      postalCode: company?.postalCode ?? existing?.postalCode,
    };
  }
  return existing ?? {};
}

function isProfileComplete(
  contact: BillingContactDraft,
  address: BillingAddressDraft,
): boolean {
  if (
    !nonEmpty(contact.firstName) ||
    !nonEmpty(contact.lastName) ||
    !nonEmpty(contact.title) ||
    !nonEmpty(contact.email) ||
    !nonEmpty(contact.phone) ||
    !nonEmpty(contact.legalCompanyName)
  ) {
    return false;
  }
  return (
    nonEmpty(address.streetAddress) &&
    nonEmpty(address.city) &&
    nonEmpty(address.state) &&
    nonEmpty(address.postalCode)
  );
}

export function BillingStage() {
  const router = useRouter();
  const { session, loading, error, saveState, saveExit, version, setSaveState } =
    useOnboardingSession();
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [contact, setContact] = useState<BillingContactDraft>({});
  const [address, setAddress] = useState<BillingAddressDraft>({});
  const [authorized, setAuthorized] = useState(false);
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    void (async () => {
      const result = await onboardingFetchJson<BillingStatus>(
        "/api/onboarding/billing",
      );
      if (result.ok) {
        setStatus(result.data);
        const nextContact = prefillContact(
          result.data.contact ?? session?.billingContact,
          session?.company,
        );
        const nextAddress = prefillAddress(
          result.data.address ?? session?.billingAddress,
          session?.company,
          Boolean(nextContact.sameAsCompanyAddress),
        );
        setContact(nextContact);
        setAddress(nextAddress);
        if (result.data.authorization?.accepted) {
          setAuthorized(true);
        }
      } else {
        setStatus({
          captureEnabled: false,
          continueAllowed: false,
          continueMode: null,
          integrationPending: true,
          reason: "BILLING_AUTHORIZATION_REQUIRED",
          message:
            "Secure payment-method setup will be completed with our billing team through QuickBooks before any invoice payment is processed.",
        });
        const nextContact = prefillContact(
          session?.billingContact,
          session?.company,
        );
        setContact(nextContact);
        setAddress(
          prefillAddress(
            session?.billingAddress,
            session?.company,
            Boolean(nextContact.sameAsCompanyAddress),
          ),
        );
      }
      setHydrated(true);
    })();
  }, [session]);

  const profileComplete = isProfileComplete(contact, address);

  async function autosaveProfile(
    nextContact: BillingContactDraft,
    nextAddress: BillingAddressDraft,
  ) {
    setSaveState("saving");
    const result = await onboardingFetchJson("/api/onboarding/billing", {
      method: "PATCH",
      json: {
        expectedVersion: version,
        contact: nextContact,
        address: nextAddress,
      },
    });
    setSaveState(result.ok ? "saved" : "error");
  }

  function updateContact<K extends keyof BillingContactDraft>(
    key: K,
    value: BillingContactDraft[K],
  ) {
    setContact((prev) => {
      const next = { ...prev, [key]: value };
      void autosaveProfile(next, address);
      return next;
    });
  }

  function updateAddress<K extends keyof BillingAddressDraft>(
    key: K,
    value: BillingAddressDraft[K],
  ) {
    setAddress((prev) => {
      const next = { ...prev, [key]: value };
      void autosaveProfile(contact, next);
      return next;
    });
  }

  async function handleContinue() {
    setLocalError(null);
    if (!profileComplete) {
      setLocalError("Complete the billing profile to continue.");
      return;
    }
    if (!authorized) {
      setLocalError("Confirm the billing acknowledgement to continue.");
      return;
    }

    setBusy(true);

    const save = await onboardingFetchJson<{ version?: number }>(
      "/api/onboarding/billing",
      {
        method: "PATCH",
        json: {
          expectedVersion: version,
          contact,
          address,
        },
      },
    );
    if (!save.ok) {
      setBusy(false);
      setLocalError(save.message);
      return;
    }

    const signerName = [contact.firstName, contact.lastName]
      .filter((part) => nonEmpty(part))
      .join(" ");

    const authz = await onboardingFetchJson<{
      sessionVersion?: number;
    }>("/api/onboarding/billing/authorization", {
      method: "POST",
      json: {
        expectedVersion: save.data.version ?? version,
        acceptanceLanguage:
          status?.authorization?.acceptanceLanguage ?? ACKNOWLEDGEMENT_FALLBACK,
        signerName,
        signerEmail: contact.email,
      },
    });
    if (!authz.ok) {
      setBusy(false);
      setLocalError(authz.message);
      return;
    }

    const cont = await onboardingFetchJson<{
      noPaymentCollected?: boolean;
      continueMode?: string;
    }>("/api/onboarding/billing/continue", {
      method: "POST",
      json: {
        expectedVersion: authz.data.sessionVersion ?? save.data.version ?? version,
      },
    });
    setBusy(false);
    if (!cont.ok) {
      setLocalError(cont.message);
      return;
    }
    router.push("/onboarding/account");
  }

  if (loading || !hydrated) {
    return <OnboardingLoading />;
  }
  if (!session) {
    return (
      <div className="bg-brand-black px-5 py-24 text-center text-zinc-300">
        <p>{error ?? "No active intake session."}</p>
        <Link href="/" className="mt-4 inline-block text-brand-red-light">
          Start from the homepage
        </Link>
      </div>
    );
  }

  const company =
    session.company?.legalCompanyName ||
    session.company?.dbaName ||
    "your company";
  const authLanguage =
    status?.authorization?.acceptanceLanguage ?? ACKNOWLEDGEMENT_FALLBACK;
  const sameAsCompany = Boolean(contact.sameAsCompanyAddress);
  const canContinue = profileComplete && authorized && !busy;

  return (
    <OnboardingShell
      stage="billing"
      title="Billing setup"
      description={`Confirm billing details for ${company}. No charge happens during onboarding.`}
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel={
        canContinue
          ? "Continue to account →"
          : !profileComplete
            ? "Complete billing profile to continue"
            : "Confirm acknowledgement to continue"
      }
      onContinue={() => void handleContinue()}
      continueDisabled={!canContinue}
      continueLoading={busy}
      hint="Payment method setup happens later through QuickBooks with our billing team."
    >
      {localError ? (
        <p className="mb-4 text-sm text-brand-red-light" role="alert">
          {localError}
        </p>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Billing contact">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="billingFirstName">First name</FieldLabel>
                <TextInput
                  id="billingFirstName"
                  value={contact.firstName ?? ""}
                  onChange={(e) => updateContact("firstName", e.target.value)}
                  autoComplete="given-name"
                />
              </div>
              <div>
                <FieldLabel htmlFor="billingLastName">Last name</FieldLabel>
                <TextInput
                  id="billingLastName"
                  value={contact.lastName ?? ""}
                  onChange={(e) => updateContact("lastName", e.target.value)}
                  autoComplete="family-name"
                />
              </div>
            </div>
            <div>
              <FieldLabel htmlFor="billingTitle">Title / role</FieldLabel>
              <TextInput
                id="billingTitle"
                value={contact.title ?? ""}
                onChange={(e) => updateContact("title", e.target.value)}
                autoComplete="organization-title"
              />
            </div>
            <div>
              <FieldLabel htmlFor="billingEmail">Billing email</FieldLabel>
              <TextInput
                id="billingEmail"
                type="email"
                value={contact.email ?? ""}
                onChange={(e) => updateContact("email", e.target.value)}
                autoComplete="email"
              />
            </div>
            <div>
              <FieldLabel htmlFor="billingPhone">Billing phone</FieldLabel>
              <TextInput
                id="billingPhone"
                value={contact.phone ?? ""}
                onChange={(e) => updateContact("phone", e.target.value)}
                autoComplete="tel"
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Accounts payable">
          <div className="space-y-4">
            <div>
              <FieldLabel htmlFor="legalCompanyName">Legal company name</FieldLabel>
              <TextInput
                id="legalCompanyName"
                value={contact.legalCompanyName ?? ""}
                onChange={(e) =>
                  updateContact("legalCompanyName", e.target.value)
                }
                autoComplete="organization"
              />
            </div>
            <div>
              <FieldLabel htmlFor="dbaName" optional>
                DBA / trade name
              </FieldLabel>
              <TextInput
                id="dbaName"
                value={contact.dbaName ?? ""}
                onChange={(e) => updateContact("dbaName", e.target.value)}
              />
            </div>
            <div>
              <FieldLabel htmlFor="apEmail" optional>
                Accounts payable email
              </FieldLabel>
              <TextInput
                id="apEmail"
                type="email"
                value={contact.apEmail ?? ""}
                onChange={(e) => updateContact("apEmail", e.target.value)}
                placeholder="Same as billing email if left blank"
              />
            </div>
            <div>
              <FieldLabel htmlFor="apPhone" optional>
                Accounts payable phone
              </FieldLabel>
              <TextInput
                id="apPhone"
                value={contact.apPhone ?? ""}
                onChange={(e) => updateContact("apPhone", e.target.value)}
                placeholder="Same as billing phone if left blank"
              />
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Billing address" className="mt-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm text-zinc-300">
            <input
              type="checkbox"
              checked={sameAsCompany}
              onChange={(e) => {
                const checked = e.target.checked;
                const nextContact = {
                  ...contact,
                  sameAsCompanyAddress: checked,
                };
                const nextAddress = checked
                  ? {
                      streetAddress: session.company?.streetAddress,
                      city: session.company?.city,
                      state: session.company?.state,
                      postalCode: session.company?.postalCode,
                      suite: address.suite,
                    }
                  : address;
                setContact(nextContact);
                setAddress(nextAddress);
                void autosaveProfile(nextContact, nextAddress);
              }}
              className="h-4 w-4 rounded border-white/30 bg-brand-black text-brand-red"
            />
            Billing address is the same as company address
          </label>

          <div className={sameAsCompany ? "opacity-60" : undefined}>
            <div>
              <FieldLabel htmlFor="street">Address line 1</FieldLabel>
              <TextInput
                id="street"
                value={address.streetAddress ?? ""}
                onChange={(e) => updateAddress("streetAddress", e.target.value)}
                autoComplete="address-line1"
                disabled={sameAsCompany}
              />
            </div>
            <div className="mt-4">
              <FieldLabel htmlFor="suite" optional>
                Address line 2
              </FieldLabel>
              <TextInput
                id="suite"
                value={address.suite ?? ""}
                onChange={(e) => updateAddress("suite", e.target.value)}
                autoComplete="address-line2"
                disabled={sameAsCompany}
              />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <TextInput
                  id="city"
                  value={address.city ?? ""}
                  onChange={(e) => updateAddress("city", e.target.value)}
                  autoComplete="address-level2"
                  disabled={sameAsCompany}
                />
              </div>
              <div>
                <FieldLabel htmlFor="state">State</FieldLabel>
                <SelectInput
                  id="state"
                  value={address.state ?? ""}
                  onChange={(e) => updateAddress("state", e.target.value)}
                  disabled={sameAsCompany}
                >
                  <option value="">Select</option>
                  {US_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </SelectInput>
              </div>
            </div>
            <div className="mt-4">
              <FieldLabel htmlFor="postal">ZIP</FieldLabel>
              <TextInput
                id="postal"
                value={address.postalCode ?? ""}
                onChange={(e) => updateAddress("postalCode", e.target.value)}
                autoComplete="postal-code"
                disabled={sameAsCompany}
              />
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Payment method on file" className="mt-6">
        <p className="text-sm text-zinc-300">
          Secure payment-method setup will be completed with our billing team
          through QuickBooks before any invoice payment is processed.
        </p>
      </SectionCard>

      <SectionCard title="How billing works" className="mt-6">
        <p className="text-sm text-zinc-300">
          There is no onboarding charge and no monthly platform fee. Claims
          Ninja charges only for completed work under your agreement. We will
          send invoices for your review and approval before any payment is
          processed.
        </p>
        <p className="mt-3 text-sm text-zinc-400">
          ACH payments are available at no additional charge. A 3% convenience
          fee applies to card payments, as provided in your agreement.
        </p>
        <label className="mt-5 flex gap-3 text-sm leading-relaxed text-zinc-200">
          <input
            type="checkbox"
            checked={authorized}
            onChange={(e) => setAuthorized(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-brand-black text-brand-red"
          />
          <span>{authLanguage}</span>
        </label>
      </SectionCard>
    </OnboardingShell>
  );
}
