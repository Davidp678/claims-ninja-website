import { StartHerePage } from "@/components/start-here/StartHerePage";
import { pageMetadata } from "@/lib/metadata";
import { START_HERE_META } from "@/lib/start-here/content";

export const metadata = {
  ...pageMetadata({
    title: START_HERE_META.title,
    description: START_HERE_META.description,
    path: START_HERE_META.path,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function StartHereRoutePage() {
  return <StartHerePage />;
}
