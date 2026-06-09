import Image from "next/image";
import Link from "next/link";

import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { cn } from "@/lib/cn";
import type { StartHereTeamMember } from "@/lib/start-here/team-members";

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return `${words[0]![0]}${words[1]![0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

type TeamMemberCardProps = {
  member: StartHereTeamMember;
  className?: string;
};

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  const initials = getInitials(member.name);

  return (
    <article className={cn(ABOUT_CARD_CLASS, "group flex h-full flex-col p-6 sm:p-7", className)}>
      <div className="flex items-start gap-4">
        {member.image ? (
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-red/30">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        ) : (
          <div
            aria-hidden
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red/30 via-brand-red/15 to-brand-surface font-display text-lg font-semibold text-brand-red-light ring-2 ring-brand-red/30"
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red-light">
            {member.roleLabel}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-white transition-colors group-hover:text-brand-red-light">
            {member.name}
          </h3>
          <p className="mt-0.5 text-sm text-zinc-400">{member.title}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">{member.bio}</p>
      {(member.email || member.phone) && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-white/10 pt-4 text-sm">
          {member.email ? (
            <Link
              href={`mailto:${member.email}`}
              className="text-zinc-400 transition-colors hover:text-white"
            >
              {member.email}
            </Link>
          ) : null}
          {member.phone ? (
            <Link
              href={`tel:${member.phone.replace(/\D/g, "")}`}
              className="text-zinc-400 transition-colors hover:text-white"
            >
              {member.phone}
            </Link>
          ) : null}
        </div>
      )}
    </article>
  );
}
