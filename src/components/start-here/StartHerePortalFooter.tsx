"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { START_HERE_META } from "@/lib/start-here/content";

import { useStartHereContact } from "./start-here-contact-context";

export function StartHerePortalFooter() {
  const year = new Date().getFullYear();
  const { openContactSupport } = useStartHereContact();

  return (
    <footer className="border-t border-white/12 bg-brand-black">
      <Container className="py-10 lg:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href={START_HERE_META.path} className="inline-flex items-center">
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={80}
              height={80}
              className="h-16 w-16"
            />
          </Link>
          <Button type="button" variant="secondary" size="sm" onClick={openContactSupport}>
            Contact Support
          </Button>
        </div>
        <p className="mt-8 text-sm text-zinc-400">
          © {year} {SITE.name}. Client onboarding portal.
        </p>
      </Container>
    </footer>
  );
}
