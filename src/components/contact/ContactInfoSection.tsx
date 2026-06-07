import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { SITE } from "@/lib/constants";
import { CONTACT_INFO, CONTACT_INFO_METHODS } from "@/lib/contact-page";
import { cn } from "@/lib/cn";

function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

function getMethodHref(
  hrefKind: (typeof CONTACT_INFO_METHODS)[number]["hrefKind"],
): string {
  if (hrefKind === "tel") {
    return phoneHref(SITE.phone);
  }
  return `mailto:${SITE.email}`;
}

function getMethodValue(id: (typeof CONTACT_INFO_METHODS)[number]["id"]): string {
  return id === "phone" ? SITE.phone : SITE.email;
}

function ContactMethodCard({
  label,
  value,
  helper,
  href,
  valueClassName,
}: {
  label: string;
  value: string;
  helper: string;
  href: string;
  valueClassName: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        ABOUT_CARD_CLASS,
        "group relative block h-full overflow-hidden pl-7 pr-6 py-6 sm:py-7",
        "hover:shadow-[0_0_48px_-20px_rgba(220,38,38,0.35)]",
      )}
    >
      <span
        className="absolute left-0 top-6 h-10 w-0.5 rounded-full bg-brand-red/70"
        aria-hidden
      />
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
        {label}
      </p>
      <p className={cn("mt-2 transition-colors group-hover:text-brand-red-light", valueClassName)}>
        {value}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{helper}</p>
    </a>
  );
}

export function ContactInfoSection() {
  return (
    <Section bordered compact>
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-14">
        <SectionHeading
          eyebrow={CONTACT_INFO.eyebrow}
          title={CONTACT_INFO.title}
          description={CONTACT_INFO.description}
          align="left"
          className="max-w-none lg:max-w-md"
        />

        <div className="flex flex-col gap-4">
          {CONTACT_INFO_METHODS.map((method) => (
            <ContactMethodCard
              key={method.id}
              label={method.label}
              value={getMethodValue(method.id)}
              helper={method.helper}
              href={getMethodHref(method.hrefKind)}
              valueClassName={
                method.id === "phone"
                  ? "font-display text-xl font-semibold text-white sm:text-2xl"
                  : "text-lg font-medium text-white sm:text-xl"
              }
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
