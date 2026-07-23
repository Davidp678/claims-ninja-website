"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FieldLabel,
  SectionCard,
  SelectInput,
  TextInput,
} from "@/components/onboarding/FormField";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { useOnboardingSession } from "@/components/onboarding/useOnboardingSession";
import type { OnboardingStage } from "@/lib/onboarding/stages";
import type {
  CompanyDraft,
  IntakeSessionProjection,
  SaveState,
} from "@/lib/onboarding/types";

const TRADES = [
  "Roofing",
  "Water mitigation",
  "General contracting",
  "Contents restoration",
  "Fire / smoke",
  "Mold remediation",
  "Other",
];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

type CompanyStageFormProps = {
  initialCompany: CompanyDraft;
  saveState: SaveState;
  autosave: (stage: OnboardingStage, patchBody: Record<string, unknown>) => void;
  patch: (
    stage: OnboardingStage,
    patchBody: Record<string, unknown>,
  ) => Promise<IntakeSessionProjection | null>;
  saveExit: () => Promise<void>;
};

function CompanyStageForm({
  initialCompany,
  saveState,
  autosave,
  patch,
  saveExit,
}: CompanyStageFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<CompanyDraft>(initialCompany);
  const [busy, setBusy] = useState(false);

  function update<K extends keyof CompanyDraft>(key: K, value: CompanyDraft[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      autosave("company", { company: next });
      return next;
    });
  }

  async function handleContinue() {
    setBusy(true);
    const saved = await patch("company", { company: form });
    setBusy(false);
    if (saved) router.push("/onboarding/account");
  }

  const ownerName = [form.firstName, form.lastName].filter(Boolean).join(" ");
  const initials =
    `${form.firstName?.[0] ?? ""}${form.lastName?.[0] ?? ""}`.toUpperCase() ||
    "CN";

  return (
    <OnboardingShell
      stage="company"
      title="Contractor & organization"
      description="Tell us who you are and how your company operates."
      saveState={saveState}
      onSaveExit={() => void saveExit()}
      continueLabel="Continue to agreement →"
      onContinue={() => void handleContinue()}
      continueLoading={busy}
      continueDisabled={
        !form.firstName ||
        !form.lastName ||
        !form.workEmail ||
        !form.legalCompanyName
      }
      sidebar={
        <SectionCard title="Organization setup">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/20 text-sm font-semibold text-brand-red-light">
              {initials}
            </div>
            <dl className="space-y-1 text-sm">
              <div>
                <dt className="text-zinc-500">Owner</dt>
                <dd className="text-white">{ownerName || "—"}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Company</dt>
                <dd className="text-white">
                  {form.dbaName || form.legalCompanyName || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Role</dt>
                <dd className="text-white">Organization owner</dd>
              </div>
            </dl>
          </div>
          <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">
            You&apos;ll be able to invite teammates and manage company access after
            setup.
          </div>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {["Contractor profile", "Company workspace", "Owner permissions"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  {item}
                </li>
              ),
            )}
          </ul>
        </SectionCard>
      }
    >
      <SectionCard title="Your information">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <FieldLabel htmlFor="firstName">First name</FieldLabel>
            <TextInput
              id="firstName"
              value={form.firstName ?? ""}
              onChange={(e) => update("firstName", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="lastName">Last name</FieldLabel>
            <TextInput
              id="lastName"
              value={form.lastName ?? ""}
              onChange={(e) => update("lastName", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="title">Job title</FieldLabel>
            <TextInput
              id="title"
              value={form.jobTitle ?? ""}
              onChange={(e) => update("jobTitle", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="mobile">Mobile phone</FieldLabel>
            <TextInput
              id="mobile"
              value={form.mobilePhone ?? ""}
              onChange={(e) => update("mobilePhone", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="email">Work email</FieldLabel>
            <TextInput
              id="email"
              type="email"
              value={form.workEmail ?? ""}
              onChange={(e) => update("workEmail", e.target.value)}
            />
            <p className="mt-1.5 text-xs text-zinc-500">
              This will be your login email.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Company information">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="legal">Legal company name</FieldLabel>
            <TextInput
              id="legal"
              value={form.legalCompanyName ?? ""}
              onChange={(e) => update("legalCompanyName", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="dba" optional>
              DBA / public name
            </FieldLabel>
            <TextInput
              id="dba"
              value={form.dbaName ?? ""}
              onChange={(e) => update("dbaName", e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="companyPhone">Company phone</FieldLabel>
            <TextInput
              id="companyPhone"
              value={form.companyPhone ?? ""}
              onChange={(e) => update("companyPhone", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="website" optional>
              Website
            </FieldLabel>
            <TextInput
              id="website"
              value={form.website ?? ""}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Business address & operations">
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
          <div>
            <FieldLabel htmlFor="trade">Primary trade</FieldLabel>
            <SelectInput
              id="trade"
              value={form.primaryTrade ?? ""}
              onChange={(e) => update("primaryTrade", e.target.value)}
            >
              <option value="">Select trade</option>
              {TRADES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </SelectInput>
          </div>
          <div>
            <FieldLabel htmlFor="serviceArea">Service area</FieldLabel>
            <TextInput
              id="serviceArea"
              value={form.serviceArea ?? ""}
              onChange={(e) => update("serviceArea", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="license" optional>
              License number
            </FieldLabel>
            <TextInput
              id="license"
              value={form.licenseNumber ?? ""}
              onChange={(e) => update("licenseNumber", e.target.value)}
            />
          </div>
        </div>
      </SectionCard>
    </OnboardingShell>
  );
}

export function CompanyStage() {
  const { session, loading, error, saveState, autosave, patch, saveExit } =
    useOnboardingSession();

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

  return (
    <CompanyStageForm
      initialCompany={session.company ?? {}}
      saveState={saveState}
      autosave={autosave}
      patch={patch}
      saveExit={saveExit}
    />
  );
}
