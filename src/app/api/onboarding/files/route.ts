import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  handleOnboardingRouteError,
  jsonError,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { externalIntakeS2SJson, externalIntakeS2SRequest } from "@/lib/onboarding/s2s";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    const form = await request.formData();
    const file = form.get("file");
    const expectedVersion = String(form.get("expectedVersion") ?? "");
    const clientChecksumSha256 = form.get("clientChecksumSha256");

    if (!(file instanceof File)) {
      return jsonError(400, "INVALID_FILE", "A file upload is required.");
    }
    if (!expectedVersion) {
      return jsonError(400, "VALIDATION_ERROR", "expectedVersion is required.");
    }

    const outbound = new FormData();
    outbound.append("file", file, file.name);
    outbound.append("intakeHandle", intakeHandle);
    outbound.append("expectedVersion", expectedVersion);
    if (typeof clientChecksumSha256 === "string" && clientChecksumSha256) {
      outbound.append("clientChecksumSha256", clientChecksumSha256);
    }

    // Reconstruct multipart bytes so the S2S body hash matches what we send.
    const multipartRequest = new Request("http://local/upload", {
      method: "POST",
      body: outbound,
    });
    const contentType = multipartRequest.headers.get("content-type") ?? "";
    const bodyBuffer = Buffer.from(await multipartRequest.arrayBuffer());

    const { status, envelope } = await externalIntakeS2SRequest({
      method: "POST",
      path: "/api/external-intake/v1/files/upload",
      body: bodyBuffer,
      contentType,
    });

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

export async function DELETE(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    let body: { fileId?: string; expectedVersion?: number } = {};
    try {
      body = (await request.json()) as typeof body;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    if (!body.fileId) {
      return jsonError(400, "VALIDATION_ERROR", "fileId is required.");
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "DELETE",
      `/api/external-intake/v1/files/${encodeURIComponent(body.fileId)}`,
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
      },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
