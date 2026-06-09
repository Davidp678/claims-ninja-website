"use client";

import { useCallback, useState } from "react";

import { ContactSupportModal } from "./ContactSupportModal";
import { StartHereContactProvider } from "./start-here-contact-context";
import { StartHerePortalFooter } from "./StartHerePortalFooter";
import { StartHerePortalHeader } from "./StartHerePortalHeader";

export function StartHerePortalShell({ children }: { children: React.ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false);

  const openContactSupport = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContactSupport = useCallback(() => {
    setContactOpen(false);
  }, []);

  return (
    <StartHereContactProvider value={{ openContactSupport }}>
      <StartHerePortalHeader />
      <main className="flex-1">{children}</main>
      <StartHerePortalFooter />
      <ContactSupportModal open={contactOpen} onClose={closeContactSupport} />
    </StartHereContactProvider>
  );
}
