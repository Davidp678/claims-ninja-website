import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM_SECTION } from "@/lib/start-here/content";
import { getActiveStartHereTeamMembers } from "@/lib/start-here/team-members";

import { TeamMemberCard } from "./TeamMemberCard";

export function StartHereTeamSection() {
  const members = getActiveStartHereTeamMembers();

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={TEAM_SECTION.eyebrow}
        title={TEAM_SECTION.title}
        description={TEAM_SECTION.description}
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {members.map((member) => (
          <li key={member.id}>
            <TeamMemberCard member={member} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
