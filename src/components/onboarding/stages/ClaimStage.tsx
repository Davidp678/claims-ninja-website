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

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

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
  const [uploadError, setUploadError] = useState<string | null>(null);

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

  const fileCount = session.files?.length ?? 0;

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
        <SectionCard title="Claim intake" className="p-5">
          <dl className="space-y-2.5 text-sm">
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
                {fileCount} uploaded
              </dd>
            </div>
          </dl>

          <div className="my-4 h-px bg-white/10" />

          <div className="flex gap-2.5">
            <LockIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            <div>
              <p className="text-sm font-medium text-emerald-100">
                Private & secure
              </p>
              <p className="mt-1 text-sm leading-snug text-zinc-400">
                Your documents are not shared with the carrier.
              </p>
            </div>
          </div>

          <div className="my-4 h-px bg-white/10" />

          <div className="text-sm">
            <p className="text-zinc-400">Need help?</p>
            <a
              href={CTA_LINKS.schedule}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block font-medium text-brand-red-light underline underline-offset-2 hover:text-brand-red"
            >
              Schedule a call
            </a>
          </div>
        </SectionCard>
      }
    >
      <SectionCard>
        <div>
          <h2 className="mb-4 text-base font-semibold text-white">
            Property & loss
          </h2>
          <div className="grid gap-4 lg:grid-cols-4">
            <div>
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
            <div>
              <FieldLabel>Claim type</FieldLabel>
              <div className="grid grid-cols-2 gap-1.5">
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
                    className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition sm:text-sm ${
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
        </div>

        <div className="my-5 h-px bg-white/10" />

        <div>
          <h2 className="mb-4 text-base font-semibold text-white">
            Property address
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
            <div className="sm:col-span-2 lg:col-span-1">
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

        <div className="my-5 h-px bg-white/10" />

        <div>
          <h2 className="mb-4 text-base font-semibold text-white">
            Claim information
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="sm:col-span-2 lg:col-span-4">
              <FieldLabel htmlFor="description">Loss description</FieldLabel>
              <TextArea
                id="description"
                value={form.lossDescription ?? ""}
                onChange={(e) => update("lossDescription", e.target.value)}
                placeholder="Briefly describe what happened and the work involved."
              />
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Documents">
        <UploadZone
          files={session.files}
          title="Add more files"
          compact
          bannerError={uploadError}
          onUpload={async (list) => {
            setUploadError(null);
            let currentVersion = version;
            for (const file of Array.from(list)) {
              const result = await onboardingUploadFile(file, currentVersion);
              if (!result.ok) {
                setUploadError(result.message);
                await refresh();
                return;
              }
              if (typeof result.data.version === "number") {
                currentVersion = result.data.version;
              }
            }
            await refresh();
          }}
          onRetry={async (fileId) => {
            setUploadError(null);
            const result = await onboardingFetchJson("/api/onboarding/files", {
              method: "PATCH",
              json: {
                fileId,
                expectedVersion: version,
                action: "recover",
              },
            });
            if (!result.ok) {
              setUploadError(result.message);
            }
            await refresh();
          }}
          onRemove={async (fileId) => {
            setUploadError(null);
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
