"use client";

import { createContext, useContext } from "react";

type StartHereContactContextValue = {
  openContactSupport: () => void;
};

const StartHereContactContext = createContext<StartHereContactContextValue | null>(
  null,
);

export function StartHereContactProvider({
  value,
  children,
}: {
  value: StartHereContactContextValue;
  children: React.ReactNode;
}) {
  return (
    <StartHereContactContext.Provider value={value}>
      {children}
    </StartHereContactContext.Provider>
  );
}

export function useStartHereContact(): StartHereContactContextValue {
  const context = useContext(StartHereContactContext);
  if (!context) {
    throw new Error("useStartHereContact must be used within StartHerePortalShell");
  }
  return context;
}
