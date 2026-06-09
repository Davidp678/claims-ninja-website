import { AfterSubmitSection } from "./AfterSubmitSection";
import { LaunchRoadmap } from "./LaunchRoadmap";
import { PreparationSection } from "./PreparationSection";
import { StartHereFinalCta } from "./StartHereFinalCta";
import { StartHereHero } from "./StartHereHero";
import { StartHereProgressIndicator } from "./StartHereProgressIndicator";
import { StartHereResourcesSection } from "./StartHereResourcesSection";
import { StartHereTeamSection } from "./StartHereTeamSection";

export function StartHerePage() {
  return (
    <>
      <div className="pt-[4.5rem] sm:pt-20">
        <StartHereProgressIndicator />
      </div>
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
