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
    id: "david",
    name: "David",
    title: "Founder",
    roleLabel: "Claims Strategy",
    bio: "Leads partnership direction and ensures your claims strategy aligns with how your company operates in the field.",
    displayOrder: 1,
    active: true,
  },
  {
    id: "katie",
    name: "Katie",
    title: "Client Launch & Operations",
    roleLabel: "Onboarding Lead",
    bio: "Your primary contact through onboarding — coordinating workspace setup, team configuration, and launch readiness.",
    displayOrder: 2,
    active: true,
  },
  {
    id: "claims-team",
    name: "Claims Team",
    title: "Estimating, Supplementing & Support",
    roleLabel: "Claim Operations",
    bio: "The specialists who review documentation, build supplements, and support your team through the claims process.",
    displayOrder: 3,
    active: true,
  },
  {
    id: "pa-team",
    name: "Public Adjuster Team",
    title: "Advanced Claim Support",
    roleLabel: "Complex Claims",
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
