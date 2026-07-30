import type { HomeProcessVisual } from "@/lib/i18n/content/home";
import { Stage01Upload } from "./Stage01Upload";
import { Stage02Workspace } from "./Stage02Workspace";
import { Stage03Manage } from "./Stage03Manage";
import { Stage04Recover } from "./Stage04Recover";

export function StageArtwork({
  visual,
  stage,
}: {
  visual: HomeProcessVisual;
  stage: string;
}) {
  if (visual === "intake") return <Stage01Upload stage={stage} />;
  if (visual === "workspace") return <Stage02Workspace stage={stage} />;
  if (visual === "manage") return <Stage03Manage stage={stage} />;
  return <Stage04Recover stage={stage} />;
}
