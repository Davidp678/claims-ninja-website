import { helpPortalMetadata } from "@/lib/help-center/metadata";

export const metadata = helpPortalMetadata("client");

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
