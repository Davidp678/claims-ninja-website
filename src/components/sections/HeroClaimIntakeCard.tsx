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
import { userFacingOnboardingError } from "@/lib/onboarding/user-errors";
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

type SessionProjection = {
  stage?: string;
  version: number;
  files?: IntakeFileSummary[];
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
  const ensureSessionPromiseRef = useRef<Promise<
    { ok: true; version: number } | { ok: false; message: string }
  > | null>(null);
  const mutationChainRef = useRef<Promise<void>>(Promise.resolve());

  const updateTracked = useCallback(
    (localId: string, patch: Partial<TrackedFile>) => {
      setTrackedFiles((prev) =>
        prev.map((f) => (f.localId === localId ? { ...f, ...patch } : f)),
      );
    },
    [],
  );

  const syncVersion = useCallback((version: number) => {
    versionRef.current = version;
    setSessionVersion(version);
  }, []);

  function runSerialized<T>(fn: () => Promise<T>): Promise<T> {
    const next = mutationChainRef.current.then(fn, fn);
    mutationChainRef.current = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }

  async function refreshSessionVersion(): Promise<
    { ok: true; version: number; files?: IntakeFileSummary[] } | { ok: false; message: string }
  > {
    const current = await onboardingFetchJson<SessionProjection>(
      "/api/onboarding/session",
      { method: "GET" },
    );
    if (!current.ok) {
      return { ok: false, message: current.message };
    }
    if (typeof current.data.version !== "number") {
      return {
        ok: false,
        message: "Session version is unavailable. Refresh and try again.",
      };
    }
    syncVersion(current.data.version);
    return {
      ok: true,
      version: current.data.version,
      files: current.data.files,
    };
  }

  async function ensureSession(claimDraft?: {
    propertyOrJobName?: string;
    lossType?: string;
  }): Promise<{ ok: true; version: number } | { ok: false; message: string }> {
    if (versionRef.current != null) {
      return { ok: true, version: versionRef.current };
    }

    if (ensureSessionPromiseRef.current) {
      return ensureSessionPromiseRef.current;
    }

    ensureSessionPromiseRef.current = (async () => {
      const existing = await onboardingFetchJson<SessionProjection>(
        "/api/onboarding/session",
        { method: "GET" },
      );
      if (existing.ok && typeof existing.data.version === "number") {
        syncVersion(existing.data.version);
        return { ok: true as const, version: existing.data.version };
      }

      if (existing.ok === false && existing.status !== 401) {
        return { ok: false as const, message: existing.message };
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
        return { ok: false as const, message: created.message };
      }

      const version = created.data.version;
      if (typeof version !== "number") {
        return {
          ok: false as const,
          message: "Session created without a version. Please retry.",
        };
      }
      syncVersion(version);
      return { ok: true as const, version };
    })().finally(() => {
      ensureSessionPromiseRef.current = null;
    });

    return ensureSessionPromiseRef.current;
  }

  async function uploadOne(localId: string, file: File, version: number) {
    updateTracked(localId, { securityState: "uploading", error: undefined });

    let uploaded = await onboardingUploadFile(file, version);

    if (
      !uploaded.ok &&
      uploaded.code === "VERSION_MISMATCH" &&
      uploaded.status === 409
    ) {
      const refreshed = await refreshSessionVersion();
      if (!refreshed.ok) {
        updateTracked(localId, {
          securityState: "failed",
          error: uploaded.message,
        });
        return { ok: false as const, message: uploaded.message, version };
      }
      uploaded = await onboardingUploadFile(file, refreshed.version);
    }

    if (!uploaded.ok) {
      updateTracked(localId, {
        securityState: "failed",
        error: uploaded.message,
      });
      return { ok: false as const, message: uploaded.message, version };
    }

    if (typeof uploaded.data.version !== "number") {
      const refreshed = await refreshSessionVersion();
      if (!refreshed.ok) {
        const message =
          "Upload completed but session version could not be confirmed. Please retry.";
        updateTracked(localId, {
          securityState: "failed",
          error: message,
        });
        return { ok: false as const, message, version };
      }
      updateTracked(localId, {
        remoteId: uploaded.data.id,
        filename: uploaded.data.filename,
        sizeBytes: uploaded.data.sizeBytes,
        securityState: uploaded.data.securityState,
        error: undefined,
      });
      return { ok: true as const, version: refreshed.version };
    }

    syncVersion(uploaded.data.version);
    updateTracked(localId, {
      remoteId: uploaded.data.id,
      filename: uploaded.data.filename,
      sizeBytes: uploaded.data.sizeBytes,
      securityState: uploaded.data.securityState,
      error: undefined,
    });

    return {
      ok: true as const,
      version: uploaded.data.version,
    };
  }

  async function handleUpload(list: FileList | File[]) {
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
    setError(null);

    await runSerialized(async () => {
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
    });
  }

  async function handleRetry(localId: string) {
    const target = trackedFiles.find((f) => f.localId === localId);
    if (!target) return;

    await runSerialized(async () => {
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
    });
  }

  async function handleRemove(localId: string) {
    const target = trackedFiles.find((f) => f.localId === localId);
    setTrackedFiles((prev) => prev.filter((f) => f.localId !== localId));
    setError(null);

    if (!target?.remoteId) return;

    await runSerialized(async () => {
      let version = versionRef.current;
      if (version == null) {
        const refreshed = await refreshSessionVersion();
        if (!refreshed.ok) return;
        version = refreshed.version;
      }

      let result = await onboardingFetchJson<{ version?: number }>(
        "/api/onboarding/files",
        {
          method: "DELETE",
          json: { fileId: target.remoteId, expectedVersion: version },
        },
      );

      if (
        !result.ok &&
        result.code === "VERSION_MISMATCH" &&
        result.status === 409
      ) {
        const refreshed = await refreshSessionVersion();
        if (!refreshed.ok) {
          setError(result.message);
          return;
        }
        result = await onboardingFetchJson<{ version?: number }>(
          "/api/onboarding/files",
          {
            method: "DELETE",
            json: {
              fileId: target.remoteId,
              expectedVersion: refreshed.version,
            },
          },
        );
      }

      if (!result.ok) {
        setError(result.message);
        return;
      }
      if (typeof result.data?.version === "number") {
        syncVersion(result.data.version);
      } else {
        await refreshSessionVersion();
      }
    });
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

    await runSerialized(async () => {
      setSubmitting(true);
      try {
        const session = await ensureSession({
          propertyOrJobName: propertyOrJobName.trim(),
          lossType,
        });
        if (!session.ok) {
          setError(userFacingOnboardingError(undefined, session.message));
          return;
        }

        // Refresh projection/version after upload so Continue uses current state.
        const refreshedBefore = await refreshSessionVersion();
        const expectedVersion = refreshedBefore.ok
          ? refreshedBefore.version
          : (versionRef.current ?? session.version);

        let patched = await onboardingFetchJson("/api/onboarding/session", {
          method: "PATCH",
          json: {
            expectedVersion,
            stage: "claim",
            patch: {
              claim: {
                propertyOrJobName: propertyOrJobName.trim(),
                lossType,
              },
            },
          },
        });

        if (
          !patched.ok &&
          patched.code === "VERSION_MISMATCH" &&
          patched.status === 409
        ) {
          const refreshed = await refreshSessionVersion();
          if (!refreshed.ok) {
            setError(
              userFacingOnboardingError(patched.code, patched.message),
            );
            return;
          }
          patched = await onboardingFetchJson("/api/onboarding/session", {
            method: "PATCH",
            json: {
              expectedVersion: refreshed.version,
              stage: "claim",
              patch: {
                claim: {
                  propertyOrJobName: propertyOrJobName.trim(),
                  lossType,
                },
              },
            },
          });
        }

        if (!patched.ok) {
          setError(userFacingOnboardingError(patched.code, patched.message));
          return;
        }

        router.push("/onboarding/claim");
      } catch {
        setError("Unable to start claim intake. Please try again.");
      } finally {
        setSubmitting(false);
      }
    });
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
        className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgb(var(--brand-red-rgb)_/_0.28),transparent_62%)] blur-2xl"
      />
      <div className="relative rounded-2xl border border-white/12 bg-gradient-to-b from-brand-surface to-brand-elevated p-5 shadow-[0_30px_80px_-40px_rgb(var(--brand-red-rgb)_/_0.55)] ring-1 ring-white/5 sm:p-6">
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
              className="grid grid-cols-2 divide-x divide-white/15 overflow-hidden rounded-lg border border-white/15"
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
                    "px-3 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red-light",
                    claimMode === option.id
                      ? "bg-brand-red/10 text-white ring-1 ring-inset ring-brand-red"
                      : "bg-transparent text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200",
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
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-red to-brand-red-deep px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_-18px_rgb(var(--brand-red-rgb)_/_0.95)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light disabled:opacity-60"
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
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-red to-brand-red-deep px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_-18px_rgb(var(--brand-red-rgb)_/_0.95)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light disabled:opacity-60"
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
