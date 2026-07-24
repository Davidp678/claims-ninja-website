"use client";

import { useRef, useState } from "react";

import { cn } from "@/lib/cn";
import type { IntakeFileSummary } from "@/lib/onboarding/types";

type UploadZoneProps = {
  files?: IntakeFileSummary[];
  onUpload: (files: FileList | File[]) => void | Promise<void>;
  onRemove?: (fileId: string) => void;
  /** Retry a failed / timed-out upload for the given file row id. */
  onRetry?: (fileId: string) => void;
  disabled?: boolean;
  title?: string;
  hint?: string;
  compact?: boolean;
  /** Accessible upload/validation error (disallowed type, oversize, interrupted, etc.). */
  bannerError?: string | null;
};

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function stateLabel(state: string) {
  switch (state) {
    case "ready":
      return "Accepted";
    case "scanning":
    case "scan_pending":
      return "Security scan in progress…";
    case "scan_unavailable":
      return "Protected — scan unavailable";
    case "uploading":
      return "Uploading…";
    case "uploaded":
      return "Upload received";
    case "preparing":
      return "Preparing…";
    case "rejected":
      return "Rejected — replace this file";
    case "failed":
      return "Temporary scan problem — try again";
    default:
      return state;
  }
}

export function UploadZone({
  files = [],
  onUpload,
  onRemove,
  onRetry,
  disabled,
  title = "Drop your carrier estimate, photos, or scope here",
  hint = "PDF, images, DOCX, XLSX • Up to 50 MB each",
  compact = false,
  bannerError = null,
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  return (
    <div className="space-y-3">
      {bannerError ? (
        <p className="text-sm text-brand-red-light" role="alert">
          {bannerError}
        </p>
      ) : null}
      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file) => {
            const canRetry =
              Boolean(onRetry) &&
              (file.securityState === "failed" ||
                file.securityState === "scan_pending" ||
                file.securityState === "preparing");
            return (
              <li
                key={file.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-brand-black/60 px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {file.filename}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {formatBytes(file.sizeBytes)} ·{" "}
                    {stateLabel(file.securityState)}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {canRetry ? (
                    <button
                      type="button"
                      aria-label={`Retry ${file.filename}`}
                      onClick={() => onRetry?.(file.id)}
                      disabled={disabled}
                      className="rounded px-2 py-1 text-xs font-medium text-brand-red-light hover:bg-white/5 disabled:opacity-50"
                    >
                      Retry
                    </button>
                  ) : null}
                  {onRemove ? (
                    <button
                      type="button"
                      aria-label={`Remove ${file.filename}`}
                      onClick={() => onRemove(file.id)}
                      disabled={disabled}
                      className="rounded p-1 text-zinc-400 hover:bg-white/5 hover:text-white disabled:opacity-50"
                    >
                      ×
                    </button>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          if (e.dataTransfer.files?.length) {
            void onUpload(e.dataTransfer.files);
          }
        }}
        className={cn(
          "flex w-full flex-col items-center justify-center rounded-xl border border-dashed px-4 text-center transition",
          compact ? "py-6" : "py-10",
          dragging
            ? "border-brand-red bg-brand-red/10"
            : "border-white/20 bg-brand-black/40 hover:border-brand-red/50 hover:bg-brand-red/5",
          disabled && "pointer-events-none opacity-55",
        )}
      >
        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-brand-red/40 bg-brand-red/10 text-brand-red-light">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 16V4" />
            <path d="m7 9 5-5 5 5" />
            <path d="M4 20h16" />
          </svg>
        </span>
        <span className="text-sm font-medium text-white">{title}</span>
        <span className="mt-1 text-xs text-zinc-500">{hint}</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        multiple
        className="sr-only"
        accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.xls,.xlsx,image/*"
        onChange={(e) => {
          if (e.target.files?.length) {
            void onUpload(e.target.files);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}
