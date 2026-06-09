"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { cn } from "@/lib/cn";
import { RESOURCES_SECTION } from "@/lib/start-here/content";

import { useStartHereContact } from "./start-here-contact-context";

export function StartHereResourcesSection() {
  const { openContactSupport } = useStartHereContact();

  return (
    <Section bordered compact className="bg-brand-elevated">
      <SectionHeading
        eyebrow={RESOURCES_SECTION.eyebrow}
        title={RESOURCES_SECTION.title}
        description={RESOURCES_SECTION.description}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {RESOURCES_SECTION.links.map((link) => (
          <li key={link.label}>
            {link.action === "contact" ? (
              <button
                type="button"
                onClick={openContactSupport}
                className={cn(
                  ABOUT_CARD_CLASS,
                  "group block h-full w-full p-6 text-left transition-colors hover:border-brand-red/45",
                )}
              >
                <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{link.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-red-light transition-colors group-hover:text-white">
                  Open
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  ABOUT_CARD_CLASS,
                  "group block h-full p-6 transition-colors hover:border-brand-red/45",
                )}
              >
                <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{link.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-red-light transition-colors group-hover:text-white">
                  Open
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
