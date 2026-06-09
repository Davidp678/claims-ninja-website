import { AfterSubmitSection } from "./AfterSubmitSection";
import { LaunchRoadmap } from "./LaunchRoadmap";
import { PreparationSection } from "./PreparationSection";
import { StartHereFinalCta } from "./StartHereFinalCta";
import { StartHereHero } from "./StartHereHero";
import { StartHereResourcesSection } from "./StartHereResourcesSection";
import { StartHereTeamSection } from "./StartHereTeamSection";

export function StartHerePage() {
  return (
    <>
      <StartHereHero />
      <LaunchRoadmap />
      <PreparationSection />
      <AfterSubmitSection />
      <StartHereTeamSection />
      <StartHereResourcesSection />
      <StartHereFinalCta />
    </>
  );
}
