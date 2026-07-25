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
} from "@/lib/onboarding/types";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

type BillingStatus = {
  captureEnabled: boolean;
  continueAllowed: boolean;
  continueMode?: string | null;
  previewSyntheticEnabled?: boolean;
  integrationPending?: boolean;
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
  noPaymentCollectedInPreview?: boolean;
};

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

  useEffect(() => {
    void (async () => {
      const result = await onboardingFetchJson<BillingStatus>(
        "/api/onboarding/billing",
      );
      if (result.ok) {
        setStatus(result.data);
        setContact(result.data.contact ?? session?.billingContact ?? {});
        setAddress(result.data.address ?? session?.billingAddress ?? {});
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
            "Billing is handled securely through QuickBooks. Confirm billing authorization to continue. Payment setup happens later through an authorized QuickBooks invoice or payment request.",
        });
      }
    })();
  }, [session]);

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
    if (!authorized) {
      setLocalError("Confirm billing authorization to continue.");
      return;
    }

    setBusy(true);

    const authz = await onboardingFetchJson<{
      sessionVersion?: number;
    }>("/api/onboarding/billing/authorization", {
      method: "POST",
      json: {
        expectedVersion: version,
        acceptanceLanguage: status?.authorization?.acceptanceLanguage,
        signerName: contact.name,
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
        expectedVersion: authz.data.sessionVersion ?? version,
      },
    });
    setBusy(false);
    if (!cont.ok) {
      setLocalError(cont.message);
      return;
    }
    router.push("/onboarding/account");
  }

  if (loading) {
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
    status?.authorization?.acceptanceLanguage ??
    "I authorize Claims Ninja billing staff to initiate approved invoice and payment-request workflows through QuickBooks under the signed agreement. No charge occurs during this onboarding. [Staging preview — final billing-authorization wording awaiting legal approval.]";
  const previewSyntheticNote =
    status?.previewSyntheticEnabled &&
    status?.instrument?.isSynthetic === true;

  return (
    <OnboardingShell
      stage="billing"
      title="Billing setup"
      description={`Confirm billing details for ${company}. No charge happens during onboarding.`}
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel={
        authorized ? "Continue to account →" : "Confirm authorization to continue"
      }
      onContinue={() => void handleContinue()}
      continueDisabled={busy || !authorized}
      continueLoading={busy}
      hint="Billing is handled securely through QuickBooks. Manual invoices and payment requests only."
    >
      <div
        className="mb-6 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200"
        role="status"
        aria-live="polite"
      >
        <p className="font-medium text-white">
          Billing handled securely through QuickBooks
        </p>
        <p className="mt-1 text-zinc-400">
          Claims Ninja does not collect card or bank account numbers during
          onboarding. Payment setup happens later through an authorized
          QuickBooks invoice or payment request initiated by billing staff.
        </p>
        {status?.message ? (
          <p className="mt-2 text-xs text-zinc-500">{status.message}</p>
        ) : null}
      </div>

      {(localError) && (
        <p className="mb-4 text-sm text-brand-red-light" role="alert">
          {localError}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Billing contact">
          <div className="space-y-4">
            <div>
              <FieldLabel htmlFor="billingName">Billing contact name</FieldLabel>
              <TextInput
                id="billingName"
                value={contact.name ?? ""}
                onChange={(e) => updateContact("name", e.target.value)}
                autoComplete="name"
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
            <label className="flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={Boolean(contact.sameAsCompanyAddress)}
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
          </div>
        </SectionCard>

        <SectionCard title="Billing address">
          <div className="space-y-4">
            <div>
              <FieldLabel htmlFor="street">Street address</FieldLabel>
              <TextInput
                id="street"
                value={address.streetAddress ?? ""}
                onChange={(e) => updateAddress("streetAddress", e.target.value)}
                autoComplete="street-address"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <TextInput
                  id="city"
                  value={address.city ?? ""}
                  onChange={(e) => updateAddress("city", e.target.value)}
                  autoComplete="address-level2"
                />
              </div>
              <div>
                <FieldLabel htmlFor="state">State</FieldLabel>
                <SelectInput
                  id="state"
                  value={address.state ?? ""}
                  onChange={(e) => updateAddress("state", e.target.value)}
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
            <div>
              <FieldLabel htmlFor="postal">ZIP</FieldLabel>
              <TextInput
                id="postal"
                value={address.postalCode ?? ""}
                onChange={(e) => updateAddress("postalCode", e.target.value)}
                autoComplete="postal-code"
              />
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Payment setup" className="mt-6">
        <p className="text-sm text-zinc-300">
          No payment method is collected on this step. After onboarding, billing
          staff initiate approved invoice or payment-request workflows through
          QuickBooks under your signed agreement.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-400">
          <li>No onboarding charge</li>
          <li>No automatic or recurring charges as a product feature</li>
          <li>Claims Ninja never stores raw card or bank numbers here</li>
        </ul>
        {previewSyntheticNote ? (
          <p className="mt-4 text-xs text-zinc-500">
            Preview QA note: {status?.instrument?.maskedDisplay ?? "Preview · no payment collected"}.
            This is not a QuickBooks transaction.
          </p>
        ) : (
          <p className="mt-4 text-xs text-zinc-500">
            Status: QuickBooks ops handoff · Manual invoices / payment requests
            only
          </p>
        )}
      </SectionCard>

      <SectionCard title="Billing authorization" className="mt-6">
        <label className="flex gap-3 text-sm leading-relaxed text-zinc-200">
          <input
            type="checkbox"
            checked={authorized}
            onChange={(e) => setAuthorized(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-brand-black text-brand-red"
          />
          <span>{authLanguage}</span>
        </label>
        {status?.authorization?.legalApprovalPending ? (
          <p className="mt-3 text-xs text-zinc-500">
            Final authorization wording is awaiting legal approval. This staging
            acknowledgment is recorded for preview validation only.
          </p>
        ) : null}
      </SectionCard>
    </OnboardingShell>
  );
}
