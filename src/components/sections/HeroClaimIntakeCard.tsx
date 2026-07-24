"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

import { HeroProgressRail } from "@/components/onboarding/HeroProgressRail";
import { UploadZone } from "@/components/onboarding/UploadZone";
import { FieldLabel, SelectInput, TextInput } from "@/components/onboarding/FormField";
import {
  onboardingFetchJson,
  onboardingUploadFile,
} from "@/lib/onboarding/client-api";
import type { HeroIntakeContent } from "@/lib/onboarding/content";
import { isTerminalSecurityState } from "@/lib/onboarding/file-summary";
import { LOSS_TYPE_OPTIONS, type IntakeFileSummary } from "@/lib/onboarding/types";
import { cn } from "@/lib/cn";

const MAX_UPLOAD_BYTES = 50 * 1024 * 1024;
const ALLOWED_EXT = new Set([
  "pdf",
  "png",
  "jpg",
  "jpeg",
  "webp",
  "gif",
  "doc",
  "docx",
  "xls",
  "xlsx",
]);

type ClaimMode = "new" | "existing";

type TrackedFile = {
  localId: string;
  file: File;
  remoteId?: string;
  securityState: string;
  sizeBytes: number;
  filename: string;
  error?: string;
};

type HeroClaimIntakeCardProps = {
  content: HeroIntakeContent;
  locale?: string;
};

function extOf(name: string) {
  return name.split(".").pop()?.toLowerCase() ?? "";
}

function validateLocalFile(file: File): string | null {
  if (!ALLOWED_EXT.has(extOf(file.name))) {
    return "That file type is not supported. Use PDF, images, DOCX, or XLSX.";
  }
  if (file.size <= 0) return "File is empty.";
  if (file.size > MAX_UPLOAD_BYTES) return "File exceeds the 50 MB limit.";
  return null;
}

export function HeroClaimIntakeCard({
  content,
  locale = "en",
}: HeroClaimIntakeCardProps) {
  const router = useRouter();
  const [claimMode, setClaimMode] = useState<ClaimMode>("new");
  const [propertyOrJobName, setPropertyOrJobName] = useState("");
  const [lossType, setLossType] = useState("");
  const [trackedFiles, setTrackedFiles] = useState<TrackedFile[]>([]);
  const [sessionVersion, setSessionVersion] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeEmail, setResumeEmail] = useState("");
  const [resumeMessage, setResumeMessage] = useState<string | null>(null);
  const [resumeBusy, setResumeBusy] = useState(false);
  const versionRef = useRef<number | null>(null);

  const updateTracked = useCallback(
    (localId: string, patch: Partial<TrackedFile>) => {
      setTrackedFiles((prev) =>
        prev.map((f) => (f.localId === localId ? { ...f, ...patch } : f)),
      );
    },
    [],
  );

  async function ensureSession(claimDraft?: {
    propertyOrJobName?: string;
    lossType?: string;
  }): Promise<{ ok: true; version: number } | { ok: false; message: string }> {
    if (versionRef.current != null) {
      return { ok: true, version: versionRef.current };
    }

    const created = await onboardingFetchJson<{
      stage: string;
      version: number;
    }>("/api/onboarding/session", {
      method: "POST",
      json: {
        source: "website_hero",
        locale: locale === "es" ? "es-US" : "en-US",
        claimDraft: claimDraft ?? {},
      },
    });

    if (!created.ok) {
      return { ok: false, message: created.message };
    }

    versionRef.current = created.data.version ?? 1;
    setSessionVersion(versionRef.current);
    return { ok: true, version: versionRef.current };
  }

  async function uploadOne(localId: string, file: File, version: number) {
    updateTracked(localId, { securityState: "uploading", error: undefined });
    const uploaded = await onboardingUploadFile(file, version);
    if (!uploaded.ok) {
      updateTracked(localId, {
        securityState: "failed",
        error: uploaded.message,
      });
      return { ok: false as const, message: uploaded.message, version };
    }

    if (typeof uploaded.data.version === "number") {
      versionRef.current = uploaded.data.version;
      setSessionVersion(uploaded.data.version);
    }

    updateTracked(localId, {
      remoteId: uploaded.data.id,
      filename: uploaded.data.filename,
      sizeBytes: uploaded.data.sizeBytes,
      securityState: uploaded.data.securityState,
      error: undefined,
    });

    return {
      ok: true as const,
      version: versionRef.current ?? version,
    };
  }

  async function handleUpload(list: FileList | File[]) {
    setError(null);
    const incoming = Array.from(list);
    if (incoming.length === 0) return;

    const nextTracked: TrackedFile[] = [];
    for (const file of incoming) {
      const validation = validateLocalFile(file);
      if (validation) {
        setError(validation);
        continue;
      }
      nextTracked.push({
        localId: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
        file,
        filename: file.name,
        sizeBytes: file.size,
        securityState: "preparing",
      });
    }
    if (nextTracked.length === 0) return;

    setTrackedFiles((prev) => [...prev, ...nextTracked]);
    setUploading(true);

    try {
      const session = await ensureSession({
        propertyOrJobName: propertyOrJobName.trim() || undefined,
        lossType: lossType || undefined,
      });
      if (!session.ok) {
        setError(session.message);
        for (const item of nextTracked) {
          updateTracked(item.localId, {
            securityState: "failed",
            error: session.message,
          });
        }
        return;
      }

      let version = session.version;
      for (const item of nextTracked) {
        const result = await uploadOne(item.localId, item.file, version);
        if (result.ok) version = result.version;
        else setError(result.message);
      }
    } finally {
      setUploading(false);
    }
  }

  async function handleRetry(localId: string) {
    const target = trackedFiles.find((f) => f.localId === localId);
    if (!target) return;
    setError(null);
    setUploading(true);
    try {
      const session = await ensureSession();
      if (!session.ok) {
        setError(session.message);
        updateTracked(localId, {
          securityState: "failed",
          error: session.message,
        });
        return;
      }
      const result = await uploadOne(localId, target.file, session.version);
      if (!result.ok) setError(result.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleRemove(localId: string) {
    const target = trackedFiles.find((f) => f.localId === localId);
    setTrackedFiles((prev) => prev.filter((f) => f.localId !== localId));
    setError(null);

    if (!target?.remoteId || versionRef.current == null) return;

    const result = await onboardingFetchJson("/api/onboarding/files", {
      method: "DELETE",
      json: { fileId: target.remoteId, expectedVersion: versionRef.current },
    });
    if (result.ok && result.data && typeof result.data === "object") {
      const data = result.data as { version?: number };
      if (typeof data.version === "number") {
        versionRef.current = data.version;
        setSessionVersion(data.version);
      }
    }
  }

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
    if (trackedFiles.some((f) => !isTerminalSecurityState(f.securityState))) {
      setError("Wait for uploads to finish, or remove files that are still preparing.");
      return;
    }
    if (trackedFiles.some((f) => f.securityState === "failed")) {
      setError("Replace or retry failed uploads before continuing.");
      return;
    }

    setSubmitting(true);
    try {
      const session = await ensureSession({
        propertyOrJobName: propertyOrJobName.trim(),
        lossType,
      });
      if (!session.ok) {
        setError(session.message);
        setSubmitting(false);
        return;
      }

      const patched = await onboardingFetchJson("/api/onboarding/session", {
        method: "PATCH",
        json: {
          expectedVersion: versionRef.current ?? session.version,
          stage: "claim",
          patch: {
            claim: {
              propertyOrJobName: propertyOrJobName.trim(),
              lossType,
            },
          },
        },
      });

      if (!patched.ok) {
        setError(patched.message);
        setSubmitting(false);
        return;
      }

      router.push("/onboarding/claim");
    } catch {
      setError("Unable to start claim intake. Please try again.");
      setSubmitting(false);
    }
  }

  async function handleResumeRequest() {
    setResumeMessage(null);
    const email = resumeEmail.trim();
    if (!email) {
      setResumeMessage("Enter the email you used for this claim.");
      return;
    }
    setResumeBusy(true);
    try {
      const result = await onboardingFetchJson("/api/onboarding/resume/request", {
        method: "POST",
        json: { email },
      });
      if (!result.ok) {
        setResumeMessage(result.message);
        return;
      }
      setResumeMessage(
        "If we find an in-progress claim for that email, we will send a secure resume link.",
      );
    } finally {
      setResumeBusy(false);
    }
  }

  const displayFiles: IntakeFileSummary[] = trackedFiles.map((f) => ({
    id: f.localId,
    filename: f.filename,
    sizeBytes: f.sizeBytes,
    securityState: f.securityState,
  }));

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(220,38,38,0.28),transparent_62%)] blur-2xl"
      />
      <div className="relative rounded-2xl border border-white/12 bg-gradient-to-b from-[#1a1a1a] to-[#121212] p-5 shadow-[0_30px_80px_-40px_rgba(220,38,38,0.55)] ring-1 ring-white/5 sm:p-6">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-[1.7rem]">
          {content.cardTitle}
        </h2>
        <p className="mt-1.5 text-sm text-zinc-400">{content.cardSubhead}</p>

        <HeroProgressRail current="claim" className="mt-5" />

        <div className="mt-6 space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium text-zinc-300">
              What are you submitting?
            </p>
            <div
              role="group"
              aria-label="What are you submitting?"
              className="grid grid-cols-2 overflow-hidden rounded-lg border border-white/15"
            >
              {(
                [
                  { id: "new" as const, label: "New claim" },
                  { id: "existing" as const, label: "Existing claim" },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={claimMode === option.id}
                  onClick={() => {
                    setClaimMode(option.id);
                    setError(null);
                    setResumeMessage(null);
                  }}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium transition",
                    claimMode === option.id
                      ? "border border-brand-red bg-brand-red/10 text-white"
                      : "border border-transparent text-zinc-400 hover:text-zinc-200",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {claimMode === "existing" ? (
            <div className="space-y-3">
              <div>
                <FieldLabel htmlFor="hero-resume-email">
                  Email for this claim
                </FieldLabel>
                <TextInput
                  id="hero-resume-email"
                  type="email"
                  value={resumeEmail}
                  onChange={(e) => setResumeEmail(e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
              {resumeMessage ? (
                <p className="text-sm text-zinc-300" role="status">
                  {resumeMessage}
                </p>
              ) : null}
              <button
                type="button"
                disabled={resumeBusy}
                onClick={() => void handleResumeRequest()}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-red to-brand-red-deep px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_-18px_rgba(220,38,38,0.95)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light disabled:opacity-60"
              >
                {resumeBusy ? "Sending…" : "Send resume link →"}
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="hero-property">
                    {content.propertyLabel}
                  </FieldLabel>
                  <TextInput
                    id="hero-property"
                    value={propertyOrJobName}
                    onChange={(e) => setPropertyOrJobName(e.target.value)}
                    placeholder={content.propertyPlaceholder}
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="hero-loss-type">
                    {content.lossTypeLabel}
                  </FieldLabel>
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
              </div>

              <UploadZone
                compact
                title={content.uploadTitle}
                hint={content.uploadHint}
                files={displayFiles}
                bannerError={error}
                disabled={uploading || submitting}
                onUpload={(list) => void handleUpload(list)}
                onRemove={(id) => void handleRemove(id)}
                onRetry={(id) => void handleRetry(id)}
              />

              <button
                type="button"
                disabled={submitting || uploading}
                onClick={() => void handleContinue()}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-red to-brand-red-deep px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_-18px_rgba(220,38,38,0.95)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light disabled:opacity-60"
              >
                {submitting ? "Starting…" : content.continueCta}
              </button>
            </>
          )}

          <p className="flex items-center justify-center gap-2 text-xs text-zinc-500">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            {content.privacyNote}
          </p>

          {sessionVersion != null ? (
            <span className="sr-only">Intake session ready</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
