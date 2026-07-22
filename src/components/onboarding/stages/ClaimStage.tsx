"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import {
  FieldLabel,
  SectionCard,
  SelectInput,
  TextArea,
  TextInput,
} from "@/components/onboarding/FormField";
import { UploadZone } from "@/components/onboarding/UploadZone";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import { CTA_LINKS } from "@/lib/constants";
import { onboardingFetchJson, onboardingUploadFile } from "@/lib/onboarding/client-api";
import {
  LOSS_TYPE_OPTIONS,
  type ClaimDraft,
  type IntakeSessionProjection,
  type SaveState,
} from "@/lib/onboarding/types";
import type { OnboardingStage } from "@/lib/onboarding/stages";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

type ClaimStageFormProps = {
  session: IntakeSessionProjection;
  initialClaim: ClaimDraft;
  error: string | null;
  saveState: SaveState;
  version: number;
  autosave: (stage: OnboardingStage, patchBody: Record<string, unknown>) => void;
  patch: (
    stage: OnboardingStage,
    patchBody: Record<string, unknown>,
  ) => Promise<IntakeSessionProjection | null>;
  saveExit: () => Promise<void>;
  refresh: () => Promise<IntakeSessionProjection | null>;
};

function ClaimStageForm({
  session,
  initialClaim,
  error,
  saveState,
  version,
  autosave,
  patch,
  saveExit,
  refresh,
}: ClaimStageFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<ClaimDraft>(initialClaim);
  const [busy, setBusy] = useState(false);

  function update<K extends keyof ClaimDraft>(key: K, value: ClaimDraft[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      autosave("claim", { claim: next });
      return next;
    });
  }

  async function handleContinue() {
    setBusy(true);
    const saved = await patch("claim", { claim: form });
    setBusy(false);
    if (saved) router.push("/onboarding/company");
  }

  return (
    <OnboardingShell
      stage="claim"
      title="Claim details & documents"
      description="Tell us about the loss and upload the files our claims team should review."
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel="Continue to company →"
      onContinue={() => void handleContinue()}
      continueLoading={busy}
      continueDisabled={!form.propertyOrJobName || !form.lossType}
      sidebar={
        <SectionCard title="Claim intake">
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Property</dt>
              <dd className="text-right text-zinc-200">
                {form.propertyOrJobName || "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Loss</dt>
              <dd className="text-right text-zinc-200">
                {LOSS_TYPE_OPTIONS.find((o) => o.value === form.lossType)?.label ||
                  form.lossType ||
                  "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Files</dt>
              <dd className="text-right text-zinc-200">
                {session.files?.length ?? 0} uploaded
              </dd>
            </div>
          </dl>
          <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
            <p className="font-medium">Private & secure</p>
            <p className="mt-1 text-emerald-100/80">
              Your documents are not shared with the carrier.
            </p>
          </div>
          <a
            href={CTA_LINKS.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-brand-red-light hover:text-brand-red"
          >
            Need help? Schedule a call
          </a>
        </SectionCard>
      }
    >
      <SectionCard title="Property & loss">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="property">Property / job name</FieldLabel>
            <TextInput
              id="property"
              value={form.propertyOrJobName ?? ""}
              onChange={(e) => update("propertyOrJobName", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="lossDate">Loss date</FieldLabel>
            <TextInput
              id="lossDate"
              type="date"
              value={form.lossDate ?? ""}
              onChange={(e) => update("lossDate", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="lossType">Loss type</FieldLabel>
            <SelectInput
              id="lossType"
              value={form.lossType ?? ""}
              onChange={(e) => update("lossType", e.target.value)}
            >
              <option value="">Select loss type</option>
              {LOSS_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </SelectInput>
          </div>
          <div className="sm:col-span-2">
            <FieldLabel>Claim type</FieldLabel>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  ["insurance", "Insurance claim"],
                  ["retail_other", "Retail / other"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("claimType", value)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                    form.claimType === value
                      ? "border-brand-red bg-brand-red text-white"
                      : "border-white/15 bg-brand-black text-zinc-300 hover:border-white/30"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Property address">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="street">Street address</FieldLabel>
            <TextInput
              id="street"
              value={form.streetAddress ?? ""}
              onChange={(e) => update("streetAddress", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <TextInput
              id="city"
              value={form.city ?? ""}
              onChange={(e) => update("city", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel htmlFor="state">State</FieldLabel>
              <SelectInput
                id="state"
                value={form.state ?? ""}
                onChange={(e) => update("state", e.target.value)}
              >
                <option value="">State</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </SelectInput>
            </div>
            <div>
              <FieldLabel htmlFor="zip">ZIP code</FieldLabel>
              <TextInput
                id="zip"
                value={form.postalCode ?? ""}
                onChange={(e) => update("postalCode", e.target.value)}
              />
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Claim information">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="homeowner" optional>
              Homeowner name
            </FieldLabel>
            <TextInput
              id="homeowner"
              value={form.homeownerName ?? ""}
              onChange={(e) => update("homeownerName", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="carrier" optional>
              Insurance carrier
            </FieldLabel>
            <TextInput
              id="carrier"
              value={form.insuranceCarrier ?? ""}
              onChange={(e) => update("insuranceCarrier", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="claimNumber" optional>
              Claim number
            </FieldLabel>
            <TextInput
              id="claimNumber"
              value={form.claimNumber ?? ""}
              onChange={(e) => update("claimNumber", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="policyNumber" optional>
              Policy number
            </FieldLabel>
            <TextInput
              id="policyNumber"
              value={form.policyNumber ?? ""}
              onChange={(e) => update("policyNumber", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="description">Loss description</FieldLabel>
            <TextArea
              id="description"
              value={form.lossDescription ?? ""}
              onChange={(e) => update("lossDescription", e.target.value)}
              placeholder="Briefly describe what happened and the work involved."
            />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Documents">
        <UploadZone
          files={session.files}
          title="Add more files"
          onUpload={async (list) => {
            for (const file of Array.from(list)) {
              await onboardingUploadFile(file, version);
            }
            await refresh();
          }}
          onRemove={async (fileId) => {
            await onboardingFetchJson("/api/onboarding/files", {
              method: "DELETE",
              json: { fileId, expectedVersion: version },
            });
            await refresh();
          }}
        />
      </SectionCard>

      {error ? (
        <p className="text-sm text-brand-red-light" role="alert">
          {error}
        </p>
      ) : null}
    </OnboardingShell>
  );
}

export function ClaimStage() {
  const {
    session,
    loading,
    error,
    saveState,
    autosave,
    patch,
    saveExit,
    version,
    refresh,
  } = useOnboardingSession();

  if (loading) {
    return (
      <div className="bg-brand-black px-5 py-24 text-zinc-400">Loading claim…</div>
    );
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

  return (
    <ClaimStageForm
      session={session}
      initialClaim={session.claim ?? {}}
      error={error}
      saveState={saveState}
      version={version}
      autosave={autosave}
      patch={patch}
      saveExit={saveExit}
      refresh={refresh}
    />
  );
}
