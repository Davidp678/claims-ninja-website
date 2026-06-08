"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { ClaimAnalysisResult } from "@/lib/claim-analysis";
import { CTA_LINKS } from "@/lib/constants";
import {
  MAX_CLAIM_FILES,
  type ClaimFilePrepareResponse,
  type ClaimFileRecord,
  validateClaimFile,
} from "@/lib/claim-files";
import {
  formatRevenueRange,
  getOpportunityScoreColor,
  getOpportunityTier,
} from "@/lib/claim-report-display";
import { cn } from "@/lib/cn";
import type { LeadContactFields } from "@/lib/calculator-lead";
import type { Locale } from "@/lib/i18n/config";
import { getCalculatorContent } from "@/lib/i18n/content/calculator";
import {
  ClaimAnalysisProgress,
  type AnalysisProgressPhase,
} from "./ClaimAnalysisProgress";
import { LeadCaptureForm } from "./LeadCaptureForm";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-300";

type TrackedFileStatus = "queued" | "uploading" | "uploaded" | "error";

type TrackedFile = {
  id: string;
  file: File;
  status: TrackedFileStatus;
  record?: ClaimFileRecord;
};

function fileKey(file: File): string {
  return `${file.name}::${file.size}::${file.lastModified}`;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type ClaimFilePrepareApiResponse = ClaimFilePrepareResponse & {
  error?: string;
  code?: string;
};

type UploadErrorMessages = {
  fileTooLarge: string;
  uploadFailed: string;
  storageFailed: string;
};

async function uploadSingleClaimFile(
  sessionId: string,
  file: File,
  errors: UploadErrorMessages,
): Promise<ClaimFileRecord> {
  const prepareRes = await fetch("/api/claim-files", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId,
      file: { name: file.name, type: file.type, size: file.size },
    }),
  });

  let prepareData: ClaimFilePrepareApiResponse = {
    sessionId,
    signedUrl: "",
    file: {} as ClaimFileRecord,
  };
  try {
    prepareData = (await prepareRes.json()) as ClaimFilePrepareApiResponse;
  } catch {
    prepareData = { sessionId, signedUrl: "", file: {} as ClaimFileRecord };
  }

  if (!prepareRes.ok || !prepareData.signedUrl || !prepareData.file?.storagePath) {
    if (prepareRes.status === 413) {
      throw new Error(errors.fileTooLarge);
    }
    throw new Error(prepareData.error ?? errors.uploadFailed);
  }

  const contentType =
    file.type.split(";")[0]?.trim() || "application/octet-stream";

  const uploadRes = await fetch(prepareData.signedUrl, {
    method: "PUT",
    body: file,
    headers: { "Content-Type": contentType },
  });

  if (!uploadRes.ok) {
    throw new Error(errors.storageFailed);
  }

  return prepareData.file;
}

type AnalyzeClaimResponse = {
  analysis: ClaimAnalysisResult;
  error?: string;
};

async function requestClaimAnalysis(body: {
  claimSessionId: string;
  uploadedFilesMeta: ClaimFileRecord[];
  claimType: string;
  carrierEstimate: string;
  description: string;
}): Promise<ClaimAnalysisResult> {
  const res = await fetch("/api/analyze-claim", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  let data: AnalyzeClaimResponse = { analysis: {} as ClaimAnalysisResult };
  try {
    data = (await res.json()) as AnalyzeClaimResponse;
  } catch {
    data = { analysis: {} as ClaimAnalysisResult };
  }

  if (!res.ok || !data.analysis?.summary) {
    throw new Error(data.error ?? "Analysis failed");
  }

  return data.analysis;
}

export function SingleClaimReview({ locale = "en" }: { locale?: Locale }) {
  const t = getCalculatorContent(locale);
  const tSingle = t.single;

  const uploadId = useId();
  const claimTypeId = useId();
  const carrierEstId = useId();
  const descriptionId = useId();

  const [claimSessionId] = useState(() => crypto.randomUUID());
  const [tracked, setTracked] = useState<TrackedFile[]>([]);
  const [claimType, setClaimType] = useState<string>(
    t.claimTypes[0]?.value ?? "Water",
  );
  const [carrierEstimate, setCarrierEstimate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [analyzed, setAnalyzed] = useState(false);
  const [analysis, setAnalysis] = useState<ClaimAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisPhase, setAnalysisPhase] =
    useState<AnalysisProgressPhase>("reading");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [filePickError, setFilePickError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadedRecords = tracked
    .filter((item): item is TrackedFile & { record: ClaimFileRecord } =>
      Boolean(item.record),
    )
    .map((item) => item.record);

  const isUploading = tracked.some(
    (item) => item.status === "queued" || item.status === "uploading",
  );
  const hasUploadError = tracked.some((item) => item.status === "error");
  const uploadCompleted = tracked.filter(
    (item) => item.status === "uploaded",
  ).length;
  const isAllReady =
    tracked.length > 0 && tracked.every((item) => item.status === "uploaded");
  const isBusy = isUploading || isAnalyzing;

  useEffect(() => {
    if (!isAnalyzing) return;

    const timers = [
      window.setTimeout(() => setAnalysisPhase("scoring"), 4000),
      window.setTimeout(() => setAnalysisPhase("finalizing"), 9000),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isAnalyzing]);

  const startUpload = (item: TrackedFile) => {
    setTracked((prev) =>
      prev.map((entry) =>
        entry.id === item.id ? { ...entry, status: "uploading" } : entry,
      ),
    );

    void uploadSingleClaimFile(claimSessionId, item.file, {
      fileTooLarge: tSingle.uploadFileTooLarge,
      uploadFailed: tSingle.uploadFailed,
      storageFailed: tSingle.uploadStorageFailed,
    })
      .then((record) => {
        setTracked((prev) =>
          prev.map((entry) =>
            entry.id === item.id
              ? { ...entry, status: "uploaded", record }
              : entry,
          ),
        );
      })
      .catch((err: unknown) => {
        setTracked((prev) =>
          prev.map((entry) =>
            entry.id === item.id ? { ...entry, status: "error" } : entry,
          ),
        );
        setUploadError(
          err instanceof Error ? err.message : tSingle.uploadGenericError,
        );
      });
  };

  const handleFilesSelected = (list: File[]) => {
    setFilePickError(null);
    setUploadError(null);
    setAnalysisError(null);
    setAnalyzed(false);
    setAnalysis(null);

    if (fileInputRef.current) fileInputRef.current.value = "";
    if (list.length === 0) return;

    const existingKeys = new Set(tracked.map((item) => fileKey(item.file)));
    const newFiles = list.filter((file) => !existingKeys.has(fileKey(file)));
    if (newFiles.length === 0) return;

    if (tracked.length + newFiles.length > MAX_CLAIM_FILES) {
      setFilePickError(tSingle.tooManyFiles(MAX_CLAIM_FILES));
      return;
    }

    for (const file of newFiles) {
      const check = validateClaimFile(file);
      if (!check.ok) {
        setFilePickError(check.reason);
        return;
      }
    }

    const newItems: TrackedFile[] = newFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      status: "queued",
    }));

    setTracked((prev) => [...prev, ...newItems]);
    newItems.forEach(startUpload);
  };

  const handleRemoveFile = (id: string) => {
    setTracked((prev) => prev.filter((item) => item.id !== id));
    setUploadError(null);
    setFilePickError(null);
    setAnalyzed(false);
    setAnalysis(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAnalysisError(null);
    setAnalyzed(false);
    setAnalysis(null);

    if (tracked.length > 0) {
      if (isUploading) {
        setUploadError(tSingle.waitForUploads);
        return;
      }
      if (hasUploadError) {
        setUploadError(tSingle.uploadGenericError);
        return;
      }
    }

    setAnalysisPhase("reading");
    setIsAnalyzing(true);
    try {
      const result = await requestClaimAnalysis({
        claimSessionId,
        uploadedFilesMeta: uploadedRecords,
        claimType,
        carrierEstimate,
        description,
      });
      setAnalysis(result);
      setAnalyzed(true);
    } catch {
      setAnalysisError(tSingle.analysisError);
      setAnalyzed(false);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const statusLabels: Record<TrackedFileStatus, string> = {
    queued: tSingle.statusQueued,
    uploading: tSingle.statusUploading,
    uploaded: tSingle.statusUploaded,
    error: tSingle.statusError,
  };

  const progressPhase: AnalysisProgressPhase | null = isUploading
    ? "uploading"
    : isAnalyzing
      ? analysisPhase
      : null;

  const submitLabel = isUploading
    ? tSingle.submitUploading
    : isAnalyzing
      ? tSingle.submitAnalyzing
      : tSingle.submitDefault;

  const claimTypeLabel =
    t.claimTypes.find((option) => option.value === claimType)?.label ??
    claimType;

  const tier = analysis ? getOpportunityTier(analysis.opportunityScore, locale) : null;

  return (
    <div className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-2xl shadow-black/50 ring-1 ring-brand-red/30 sm:p-10">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <div>
              <label htmlFor={uploadId} className={labelClass}>
                {tSingle.uploadLabel}
              </label>
              <div
                className={cn(
                  "mt-2 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/25 bg-brand-black/50 px-4 py-8 text-center text-sm text-zinc-300 transition-colors hover:border-brand-red/50",
                )}
              >
                <input
                  ref={fileInputRef}
                  id={uploadId}
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={(event) => {
                    const list = event.target.files
                      ? Array.from(event.target.files)
                      : [];
                    handleFilesSelected(list);
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-full border border-white/25 bg-brand-elevated/80 px-4 py-2 text-sm font-medium text-white hover:bg-brand-elevated"
                  disabled={isAnalyzing}
                >
                  {tracked.length > 0 ? tSingle.addMore : tSingle.chooseFiles}
                </button>
                <p className="text-xs text-zinc-400">{tSingle.fileHint}</p>
                {isAllReady ? (
                  <p className="text-xs text-emerald-300/90">
                    {tSingle.filesReady}
                  </p>
                ) : null}
                {filePickError && (
                  <p
                    className="mt-2 w-full rounded-lg border border-brand-red/40 bg-brand-red/10 px-3 py-2 text-left text-xs text-red-200"
                    role="alert"
                  >
                    {filePickError}
                  </p>
                )}
                {tracked.length > 0 && (
                  <ul className="mt-2 w-full space-y-1.5 text-left text-xs text-zinc-300">
                    {tracked.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-2.5 py-1.5"
                      >
                        <span className="min-w-0 flex-1 truncate text-white/90">
                          {item.file.name}
                        </span>
                        <span className="shrink-0 text-zinc-500">
                          {formatBytes(item.file.size)}
                        </span>
                        <span
                          className={cn(
                            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                            item.status === "uploaded" &&
                              "bg-emerald-500/15 text-emerald-300",
                            (item.status === "uploading" ||
                              item.status === "queued") &&
                              "bg-white/10 text-zinc-300",
                            item.status === "error" &&
                              "bg-brand-red/20 text-red-200",
                          )}
                        >
                          {statusLabels[item.status]}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(item.id)}
                          disabled={isAnalyzing}
                          className="shrink-0 rounded p-0.5 text-zinc-400 transition-colors hover:text-brand-red-light disabled:opacity-40"
                          aria-label={`${tSingle.removeFile}: ${item.file.name}`}
                        >
                          <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div>
              <label htmlFor={claimTypeId} className={labelClass}>
                {tSingle.claimTypeLabel}
              </label>
              <select
                id={claimTypeId}
                value={claimType}
                onChange={(e) => setClaimType(e.target.value)}
                className={inputClass}
              >
                {t.claimTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor={carrierEstId} className={labelClass}>
                {tSingle.carrierEstimateLabel}
              </label>
              <div className="relative">
                <span
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-400"
                  aria-hidden
                >
                  $
                </span>
                <input
                  id={carrierEstId}
                  inputMode="decimal"
                  type="number"
                  min={0}
                  step="0.01"
                  value={carrierEstimate}
                  onChange={(e) => setCarrierEstimate(e.target.value)}
                  placeholder="0"
                  className={cn(inputClass, "pl-8 mt-2")}
                />
              </div>
            </div>

            <div>
              <label htmlFor={descriptionId} className={labelClass}>
                {tSingle.descriptionLabel}
              </label>
              <textarea
                id={descriptionId}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={tSingle.descriptionPlaceholder}
                className={cn(inputClass, "min-h-[7.5rem] py-3")}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs text-zinc-400">{tSingle.disclaimer}</p>
            {progressPhase ? (
              <ClaimAnalysisProgress
                phase={progressPhase}
                uploadCompleted={uploadCompleted}
                uploadTotal={tracked.length}
                locale={locale}
              />
            ) : null}
            {uploadError && (
              <p
                className="rounded-lg border border-brand-red/40 bg-brand-red/10 px-3 py-2 text-xs text-red-200"
                role="alert"
              >
                {uploadError}
              </p>
            )}
            {analysisError && (
              <p
                className="rounded-lg border border-brand-red/40 bg-brand-red/10 px-3 py-2 text-xs text-red-200"
                role="alert"
              >
                {analysisError}
              </p>
            )}
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={isBusy}
          >
            {submitLabel}
          </Button>
        </div>
      </form>

      {analyzed && analysis && tier && (
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              {tSingle.triageEyebrow} — {claimTypeLabel}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {analysis.summary}
            </p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
              <span
                className={cn(
                  "font-semibold",
                  getOpportunityScoreColor(analysis.opportunityScore),
                )}
              >
                {tier.label}
              </span>
              <span className="text-zinc-400">
                · {tSingle.scoreLabel}: {analysis.opportunityScore}/100
              </span>
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              {tSingle.missedRevenueLabel}:{" "}
              {formatRevenueRange(
                analysis.estimatedMissedRevenueRange.low,
                analysis.estimatedMissedRevenueRange.high,
              )}
            </p>
            <p className="mt-2 text-xs text-zinc-500">{tSingle.backgroundNote}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={CTA_LINKS.onboarding} size="lg" className="w-full sm:w-auto">
                {tSingle.startReview}
              </Button>
              <Button
                href={`/claim-report/${claimSessionId}`}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {tSingle.viewReport}
              </Button>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {analysis.findings.map((finding) => (
                <div
                  key={`${finding.title}-${finding.category}`}
                  className="rounded-xl border border-white/12 bg-brand-black/55 p-5 ring-1 ring-white/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
                    {finding.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {finding.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <LeadCaptureForm
            variant="claim-review"
            locale={locale}
            submitLabel={t.lead.startClaimReview}
            successMessage={tSingle.leadSuccessMessage}
            mergePayload={(lead: LeadContactFields) => ({
              calculatorType: "claim-review",
              lead,
              claimSessionId,
              claimCalculatorInputs: {
                claimType,
                carrierEstimate,
                description,
              },
              uploadedFilesMeta: uploadedRecords,
            })}
          />
        </div>
      )}
    </div>
  );
}
