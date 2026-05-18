import type { AnalyzeClaimRequest } from "@/lib/claim-analysis";

export const CLAIM_FILES_BUCKET = "claim-files";

export const MAX_CLAIM_FILES = 10;

export const MAX_CLAIM_FILE_BYTES = 20 * 1024 * 1024;

export const ALLOWED_CLAIM_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

export const ALLOWED_CLAIM_EXTENSIONS = [
  ".pdf",
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
] as const;

export type ClaimFileRecord = {
  fileName: string;
  originalName: string;
  contentType: string;
  size: number;
  storagePath: string;
  bucket: string;
};

export type ClaimFileValidationInput = {
  name: string;
  type: string;
  size: number;
};

export type ClaimFilePrepareRequest = {
  sessionId: string;
  file: ClaimFileValidationInput;
};

export type ClaimFilePrepareResponse = {
  sessionId: string;
  signedUrl: string;
  file: ClaimFileRecord;
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isValidClaimSessionId(value: string): boolean {
  return UUID_RE.test(value.trim());
}

function getExtension(name: string): string {
  const base = name.split(/[/\\]/).pop() ?? name;
  const dot = base.lastIndexOf(".");
  if (dot <= 0) return "";
  return base.slice(dot).toLowerCase();
}

function isAllowedType(name: string, mimeType: string): boolean {
  const ext = getExtension(name);
  const extOk = ALLOWED_CLAIM_EXTENSIONS.includes(
    ext as (typeof ALLOWED_CLAIM_EXTENSIONS)[number],
  );
  const mime = mimeType.toLowerCase().split(";")[0]?.trim() ?? "";
  const mimeOk = ALLOWED_CLAIM_MIME_TYPES.includes(
    mime as (typeof ALLOWED_CLAIM_MIME_TYPES)[number],
  );
  return extOk || mimeOk;
}

export function validateClaimFileInput(
  file: ClaimFileValidationInput,
): { ok: true } | { ok: false; reason: string } {
  if (file.size <= 0) {
    return { ok: false, reason: `"${file.name}" is empty.` };
  }
  if (file.size > MAX_CLAIM_FILE_BYTES) {
    return {
      ok: false,
      reason: `"${file.name}" exceeds the 20MB size limit.`,
    };
  }
  if (!isAllowedType(file.name, file.type)) {
    return {
      ok: false,
      reason: `"${file.name}" is not an allowed type. Use PDF, JPG, PNG, or WEBP.`,
    };
  }
  return { ok: true };
}

export function validateClaimFile(
  file: File,
): { ok: true } | { ok: false; reason: string } {
  return validateClaimFileInput({
    name: file.name,
    type: file.type,
    size: file.size,
  });
}

export function validateClaimFileSelection(
  files: File[],
): { ok: true } | { ok: false; reason: string } {
  if (files.length > MAX_CLAIM_FILES) {
    return {
      ok: false,
      reason: `You can upload up to ${MAX_CLAIM_FILES} files.`,
    };
  }
  for (const file of files) {
    const result = validateClaimFile(file);
    if (!result.ok) return result;
  }
  return { ok: true };
}

export function sanitizeStorageFileName(originalName: string): string {
  const base = originalName.split(/[/\\]/).pop() ?? "file";
  const dot = base.lastIndexOf(".");
  const stem = dot > 0 ? base.slice(0, dot) : base;
  const ext = dot > 0 ? base.slice(dot).toLowerCase() : "";

  const safeStem = stem
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);

  const suffix = crypto.randomUUID().slice(0, 8);
  const name = safeStem || "file";
  return `${name}-${suffix}${ext}`;
}

export function buildClaimStoragePath(
  sessionId: string,
  fileName: string,
): string {
  return `claims/${sessionId}/${fileName}`;
}

export function toClaimFileRecord(
  sessionId: string,
  fileName: string,
  originalName: string,
  contentType: string,
  size: number,
): ClaimFileRecord {
  const storagePath = buildClaimStoragePath(sessionId, fileName);
  return {
    fileName,
    originalName,
    contentType,
    size,
    storagePath,
    bucket: CLAIM_FILES_BUCKET,
  };
}

export type UploadedFileMetaInput = {
  fileName: string;
  originalName: string;
  contentType: string;
  size: number;
  storagePath: string;
  bucket: string;
};

function isUploadedFileMetaShape(
  value: unknown,
): value is UploadedFileMetaInput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return (
    typeof o.fileName === "string" &&
    typeof o.originalName === "string" &&
    typeof o.contentType === "string" &&
    typeof o.size === "number" &&
    typeof o.storagePath === "string" &&
    typeof o.bucket === "string"
  );
}

export function validateUploadedFileMetaForSession(
  meta: UploadedFileMetaInput,
  claimSessionId: string,
): { ok: true } | { ok: false; reason: string } {
  if (meta.bucket !== CLAIM_FILES_BUCKET) {
    return { ok: false, reason: "Invalid file bucket." };
  }
  const expectedPath = buildClaimStoragePath(claimSessionId, meta.fileName);
  if (meta.storagePath !== expectedPath) {
    return { ok: false, reason: "File path does not match session." };
  }
  if (meta.storagePath.includes("..") || meta.storagePath.startsWith("/")) {
    return { ok: false, reason: "Invalid file path." };
  }
  return validateClaimFileInput({
    name: meta.originalName,
    type: meta.contentType,
    size: meta.size,
  });
}

export function parseClaimFilePrepareRequest(
  body: unknown,
): { ok: true; data: ClaimFilePrepareRequest } | { ok: false; reason: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, reason: "Request body must be a JSON object." };
  }
  const o = body as Record<string, unknown>;

  const sessionIdRaw = o.sessionId;
  if (typeof sessionIdRaw !== "string" || !isValidClaimSessionId(sessionIdRaw)) {
    return { ok: false, reason: "A valid sessionId is required." };
  }

  const fileRaw = o.file;
  if (!fileRaw || typeof fileRaw !== "object") {
    return { ok: false, reason: "A file descriptor is required." };
  }
  const f = fileRaw as Record<string, unknown>;
  if (typeof f.name !== "string" || !f.name.trim()) {
    return { ok: false, reason: "file.name is required." };
  }
  if (typeof f.type !== "string") {
    return { ok: false, reason: "file.type must be a string." };
  }
  if (typeof f.size !== "number" || !Number.isFinite(f.size)) {
    return { ok: false, reason: "file.size must be a number." };
  }

  const file: ClaimFileValidationInput = {
    name: f.name.trim(),
    type: f.type,
    size: f.size,
  };

  const check = validateClaimFileInput(file);
  if (!check.ok) {
    return { ok: false, reason: check.reason };
  }

  return {
    ok: true,
    data: { sessionId: sessionIdRaw.trim(), file },
  };
}

export function validateAnalyzeClaimRequest(
  body: unknown,
): { ok: true; data: AnalyzeClaimRequest } | { ok: false; reason: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, reason: "Request body must be a JSON object." };
  }
  const o = body as Record<string, unknown>;

  const claimSessionId = o.claimSessionId;
  if (typeof claimSessionId !== "string" || !isValidClaimSessionId(claimSessionId)) {
    return { ok: false, reason: "A valid claimSessionId is required." };
  }
  const sessionId = claimSessionId.trim();

  const claimType = o.claimType;
  if (typeof claimType !== "string" || !claimType.trim()) {
    return { ok: false, reason: "claimType is required." };
  }
  if (claimType.trim().length > 64) {
    return { ok: false, reason: "claimType is too long." };
  }

  const carrierEstimate = o.carrierEstimate;
  if (typeof carrierEstimate !== "string") {
    return { ok: false, reason: "carrierEstimate must be a string." };
  }
  const estTrimmed = carrierEstimate.trim();
  if (estTrimmed !== "") {
    const n = Number(estTrimmed);
    if (!Number.isFinite(n) || n < 0) {
      return { ok: false, reason: "carrierEstimate must be a non-negative number." };
    }
  }

  const description = o.description;
  if (typeof description !== "string") {
    return { ok: false, reason: "description must be a string." };
  }
  if (description.length > 8000) {
    return { ok: false, reason: "description is too long." };
  }

  const metaRaw = o.uploadedFilesMeta;
  if (!Array.isArray(metaRaw)) {
    return { ok: false, reason: "uploadedFilesMeta must be an array." };
  }
  if (metaRaw.length > MAX_CLAIM_FILES) {
    return {
      ok: false,
      reason: `uploadedFilesMeta cannot exceed ${MAX_CLAIM_FILES} files.`,
    };
  }

  const uploadedFilesMeta: UploadedFileMetaInput[] = [];
  for (const item of metaRaw) {
    if (!isUploadedFileMetaShape(item)) {
      return { ok: false, reason: "Invalid uploadedFilesMeta entry." };
    }
    const check = validateUploadedFileMetaForSession(item, sessionId);
    if (!check.ok) return check;
    uploadedFilesMeta.push(item);
  }

  return {
    ok: true,
    data: {
      claimSessionId: sessionId,
      uploadedFilesMeta,
      claimType: claimType.trim(),
      carrierEstimate: estTrimmed,
      description: description.trim(),
    },
  };
}
