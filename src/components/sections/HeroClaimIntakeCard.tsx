"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ProgressRail } from "@/components/onboarding/ProgressRail";
import { UploadZone } from "@/components/onboarding/UploadZone";
import { FieldLabel, SelectInput, TextInput } from "@/components/onboarding/FormField";
import {
  onboardingFetchJson,
  onboardingUploadFile,
} from "@/lib/onboarding/client-api";
import type { HeroIntakeContent } from "@/lib/onboarding/content";
import { LOSS_TYPE_OPTIONS } from "@/lib/onboarding/types";

type PendingFile = {
  id: string;
  file: File;
};

type HeroClaimIntakeCardProps = {
  content: HeroIntakeContent;
  locale?: string;
};

export function HeroClaimIntakeCard({
  content,
  locale = "en",
}: HeroClaimIntakeCardProps) {
  const router = useRouter();
  const [propertyOrJobName, setPropertyOrJobName] = useState("");
  const [lossType, setLossType] = useState("");
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleContinue() {
    setError(null);
    if (!propertyOrJobName.trim()) {
      setError("Enter a property or job name to continue.");
      return;
    }
    if (!lossType) {
      setError("Select a loss type to continue.");
      return;
    }

    setSubmitting(true);
    try {
      const created = await onboardingFetchJson<{
        stage: string;
        version: number;
      }>("/api/onboarding/session", {
        method: "POST",
        json: {
          source: "website_hero",
          locale: locale === "es" ? "es-US" : "en-US",
          claimDraft: {
            propertyOrJobName: propertyOrJobName.trim(),
            lossType,
          },
        },
      });

      if (!created.ok) {
        setError(created.message);
        setSubmitting(false);
        return;
      }

      let version = created.data.version ?? 1;
      for (const item of pendingFiles) {
        const uploaded = await onboardingUploadFile(item.file, version);
        if (uploaded.ok && uploaded.data && typeof uploaded.data === "object") {
          const data = uploaded.data as { version?: number };
          if (typeof data.version === "number") version = data.version;
        }
      }

      router.push("/onboarding/claim");
    } catch {
      setError("Unable to start claim intake. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgba(220,38,38,0.22),transparent_60%)] blur-2xl"
      />
      <div className="relative rounded-2xl border border-white/12 bg-brand-surface/95 p-5 shadow-[0_30px_80px_-40px_rgba(220,38,38,0.55)] ring-1 ring-brand-red/15 sm:p-6">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-[1.7rem]">
          {content.cardTitle}
        </h2>
        <p className="mt-1.5 text-sm text-zinc-400">{content.cardSubhead}</p>

        <ProgressRail current="claim" className="mt-5" />

        <div className="mt-6 space-y-4">
          <div>
            <FieldLabel htmlFor="hero-property">{content.propertyLabel}</FieldLabel>
            <TextInput
              id="hero-property"
              value={propertyOrJobName}
              onChange={(e) => setPropertyOrJobName(e.target.value)}
              placeholder={content.propertyPlaceholder}
              autoComplete="organization"
            />
          </div>

          <div>
            <FieldLabel htmlFor="hero-loss-type">{content.lossTypeLabel}</FieldLabel>
            <SelectInput
              id="hero-loss-type"
              value={lossType}
              onChange={(e) => setLossType(e.target.value)}
            >
              <option value="">{content.lossTypePlaceholder}</option>
              {LOSS_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </SelectInput>
          </div>

          <UploadZone
            compact
            title={content.uploadTitle}
            hint={content.uploadHint}
            files={pendingFiles.map((f) => ({
              id: f.id,
              filename: f.file.name,
              sizeBytes: f.file.size,
              securityState: "preparing",
            }))}
            onUpload={(list) => {
              const next = Array.from(list).map((file) => ({
                id: `${file.name}-${file.size}-${file.lastModified}`,
                file,
              }));
              setPendingFiles((prev) => [...prev, ...next]);
            }}
            onRemove={(id) =>
              setPendingFiles((prev) => prev.filter((f) => f.id !== id))
            }
          />

          {error ? (
            <p className="text-sm text-brand-red-light" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="button"
            disabled={submitting}
            onClick={() => void handleContinue()}
            className="flex w-full items-center justify-center rounded-xl bg-brand-red px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_-18px_rgba(220,38,38,0.95)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light disabled:opacity-60"
          >
            {submitting ? "Starting…" : content.continueCta}
          </button>

          <p className="flex items-center justify-center gap-2 text-xs text-zinc-500">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            {content.privacyNote}
          </p>
        </div>
      </div>
    </div>
  );
}
