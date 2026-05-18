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
