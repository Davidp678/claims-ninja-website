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
  hostedFieldSession?: {
    status?: string;
    message?: string;
    mountRegions?: string[];
  };
  instrument?: {
    isSynthetic?: boolean;
    maskedDisplay?: string | null;
  } | null;
  noChargeDuringOnboarding?: boolean;
  manualChargesOnly?: boolean;
  noPaymentCollectedInPreview?: boolean;
};

function HostedFieldPlaceholder({
  label,
  hint,
}: {
  label: string;
  hint: string;
}) {
  return (
    <div
      className="rounded-xl border border-dashed border-white/20 bg-brand-black/50 px-4 py-5"
      aria-label={`${label} — secure processor field placeholder`}
    >
      <p className="text-sm font-medium text-zinc-200">{label}</p>
      <p className="mt-1 text-xs text-zinc-500">{hint}</p>
      <div
        className="mt-3 h-11 rounded-lg border border-white/10 bg-white/[0.03]"
        aria-hidden
      />
    </div>
  );
}

export function BillingStage() {
  const router = useRouter();
  const { session, loading, error, saveState, saveExit, version, setSaveState } =
    useOnboardingSession();
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [contact, setContact] = useState<BillingContactDraft>({});
  const [address, setAddress] = useState<BillingAddressDraft>({});
  const [methodTab, setMethodTab] = useState<"card" | "ach">("card");
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
          integrationPending: true,
          reason: "PAYMENT_CAPTURE_DISABLED",
          message:
            "Secure billing setup is being finalized. No payment information is collected in this preview.",
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
    }>("/api/onboarding/billing/continue", {
      method: "POST",
      json: {
        expectedVersion: authz.data.sessionVersion ?? version,
        methodType: methodTab,
      },
    });
    setBusy(false);
    if (!cont.ok) {
      setLocalError(cont.message);
      return;
    }
    router.push("/onboarding/activated");
  }

  if (loading) {
    return <div className="bg-brand-black px-5 py-24 text-zinc-400">Loading…</div>;
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
  const integrationPending = status?.integrationPending !== false;
  const previewContinue =
    Boolean(status?.previewSyntheticEnabled) || Boolean(status?.continueAllowed);
  const authLanguage =
    status?.authorization?.acceptanceLanguage ??
    "I authorize Claims Ninja billing staff to initiate charges manually under the signed agreement and approved invoice or workflow terms. No charge occurs during this onboarding. Adding a payment method does not itself create a charge. [Staging preview — final billing-authorization wording awaiting legal approval.]";

  return (
    <OnboardingShell
      stage="billing"
      title="Billing setup"
      description={`Confirm billing details for ${company}. No charge happens during onboarding.`}
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel={
        previewContinue
          ? "Save & continue →"
          : "Billing setup pending"
      }
      onContinue={() => void handleContinue()}
      continueDisabled={busy || !authorized || !previewContinue}
      continueLoading={busy}
      hint="Manual charges only — after onboarding is complete."
    >
      <div
        className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
        role="status"
        aria-live="polite"
      >
        <p className="font-medium">Secure billing setup is being finalized.</p>
        <p className="mt-1 text-amber-100/80">
          No payment information is collected in this preview. Claims Ninja never
          stores card or bank account numbers here.
        </p>
      </div>

      {(localError || status?.message) && (
        <p className="mb-4 text-sm text-brand-red-light" role="alert">
          {localError ?? status?.message}
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

      <SectionCard title="Payment method" className="mt-6">
        <div className="mb-4 flex gap-2" role="tablist" aria-label="Payment method type">
          {(
            [
              ["card", "Card"],
              ["ach", "Bank (ACH)"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={methodTab === id}
              onClick={() => setMethodTab(id)}
              className={
                methodTab === id
                  ? "rounded-lg bg-brand-red px-3 py-1.5 text-sm text-white"
                  : "rounded-lg border border-white/15 px-3 py-1.5 text-sm text-zinc-300"
              }
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-zinc-400">
          Future secure fields will be provided by the payment processor. Claims
          Ninja will never see full card or bank numbers.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {methodTab === "card" ? (
            <>
              <HostedFieldPlaceholder
                label="Card number"
                hint="Processor-hosted field — not editable in preview"
              />
              <HostedFieldPlaceholder
                label="Security code"
                hint="Processor-hosted field — not editable in preview"
              />
            </>
          ) : (
            <>
              <HostedFieldPlaceholder
                label="Routing number"
                hint="Processor-hosted field — not editable in preview"
              />
              <HostedFieldPlaceholder
                label="Account number"
                hint="Processor-hosted field — not editable in preview"
              />
            </>
          )}
        </div>

        {integrationPending ? (
          <p className="mt-4 text-xs text-zinc-500">
            Status: integration pending · Manual charges only ·{" "}
            {status?.hostedFieldSession?.status === "synthetic_only"
              ? "Preview continuation available"
              : "Awaiting provider connection"}
          </p>
        ) : null}
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
