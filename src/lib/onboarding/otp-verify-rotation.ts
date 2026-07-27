export type OtpVerifyPlatformData = {
  intakeHandle?: string;
  status?: string;
  stage?: string;
  version?: number;
  nextStage?: string;
  provisionOk?: boolean;
  provisionMessage?: string;
};

export type OtpVerifyClientData = {
  status?: string;
  stage?: string;
  version?: number;
  nextStage?: string;
  provisionOk?: boolean;
  provisionMessage?: string;
};

/**
 * After privilege-changing OTP verify, persist the rotated handle and never
 * return it to the browser JSON body.
 */
export function resolveOtpVerifyCookieRotation(
  data: OtpVerifyPlatformData | null | undefined,
):
  | { ok: true; intakeHandle: string; clientData: OtpVerifyClientData }
  | { ok: false; code: "HANDLE_ROTATION_FAILED" } {
  const intakeHandle = data?.intakeHandle?.trim() ?? "";
  if (!intakeHandle) {
    return { ok: false, code: "HANDLE_ROTATION_FAILED" };
  }

  return {
    ok: true,
    intakeHandle,
    clientData: {
      status: data?.status,
      stage: data?.stage,
      version: data?.version,
      nextStage: data?.nextStage,
      provisionOk: data?.provisionOk,
      provisionMessage: data?.provisionMessage,
    },
  };
}
