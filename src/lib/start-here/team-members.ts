export type StartHereTeamMember = {
  id: string;
  name: string;
  title: string;
  roleLabel: string;
  bio: string;
  email?: string;
  phone?: string;
  image?: string;
  displayOrder: number;
  active: boolean;
};

export const START_HERE_TEAM_MEMBERS: readonly StartHereTeamMember[] = [
  {
    id: "alex",
    name: "Alex",
    title: "Claims Strategy",
    roleLabel: "Claims Strategy",
    bio: "Guides partnership direction and ensures your claims strategy aligns with how your company operates in the field.",
    displayOrder: 1,
    active: true,
  },
  {
    id: "jake",
    name: "Jake",
    title: "Claims Operations",
    roleLabel: "Claims Operations",
    bio: "Leads estimating, supplementing, and day-to-day claim operations so your team has expert support through every file.",
    displayOrder: 2,
    active: true,
  },
  {
    id: "katie",
    name: "Katie",
    title: "Client Launch & Operations",
    roleLabel: "Client Success / Client Launch",
    bio: "Your primary contact through onboarding — coordinating workspace setup, team configuration, and launch readiness.",
    displayOrder: 3,
    active: true,
  },
  {
    id: "patrick",
    name: "Patrick",
    title: "Advanced Claim Support",
    roleLabel: "Complex Claims (PA)",
    bio: "Available for advanced claim scenarios where deeper advocacy and technical expertise add value to recovery.",
    displayOrder: 4,
    active: true,
  },
];

export function getActiveStartHereTeamMembers(): StartHereTeamMember[] {
  return START_HERE_TEAM_MEMBERS.filter((member) => member.active).sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );
}
