"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { IntakeSessionProjection } from "@/lib/onboarding/types";

type OnboardingSessionContextValue = {
  /** Latest shared snapshot from the stage guard (or subsequent writes). */
  snapshot: IntakeSessionProjection | null;
  /** True once the guard has finished its initial session check. */
  guardReady: boolean;
  setSnapshot: (session: IntakeSessionProjection | null) => void;
  setGuardReady: (ready: boolean) => void;
};

const OnboardingSessionContext =
  createContext<OnboardingSessionContextValue | null>(null);

export function OnboardingSessionProvider({ children }: { children: ReactNode }) {
  const [snapshot, setSnapshotState] = useState<IntakeSessionProjection | null>(
    null,
  );
  const [guardReady, setGuardReady] = useState(false);

  const setSnapshot = useCallback((session: IntakeSessionProjection | null) => {
    setSnapshotState(session);
  }, []);

  const value = useMemo(
    () => ({
      snapshot,
      guardReady,
      setSnapshot,
      setGuardReady,
    }),
    [snapshot, guardReady, setSnapshot],
  );

  return (
    <OnboardingSessionContext.Provider value={value}>
      {children}
    </OnboardingSessionContext.Provider>
  );
}

export function useOnboardingSessionContext(): OnboardingSessionContextValue {
  const ctx = useContext(OnboardingSessionContext);
  if (!ctx) {
    // Fallback for tests / accidental use outside layout — inert no-ops.
    return {
      snapshot: null,
      guardReady: true,
      setSnapshot: () => undefined,
      setGuardReady: () => undefined,
    };
  }
  return ctx;
}
