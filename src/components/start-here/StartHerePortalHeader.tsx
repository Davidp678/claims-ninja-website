"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { START_HERE_META } from "@/lib/start-here/content";

import { useStartHereContact } from "./start-here-contact-context";

export function StartHerePortalHeader() {
  const { openContactSupport } = useStartHereContact();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-brand-black/90 py-2 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href={START_HERE_META.path}
          className="flex shrink-0 items-center"
          aria-label={SITE.name}
        >
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={96}
            height={96}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
        </Link>
        <Button type="button" variant="secondary" size="sm" onClick={openContactSupport}>
          Contact Support
        </Button>
      </div>
    </header>
  );
}
