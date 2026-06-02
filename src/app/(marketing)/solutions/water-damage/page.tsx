import { WaterDamageClaimsPage } from "@/components/solutions/WaterDamageClaimsPage";
import { pageMetadata } from "@/lib/metadata";
import { WATER_DAMAGE_META } from "@/lib/water-damage-page";

export const metadata = pageMetadata({
  title: WATER_DAMAGE_META.metaTitle,
  description: WATER_DAMAGE_META.metaDescription,
  path: WATER_DAMAGE_META.path,
});

export default function WaterDamagePage() {
  return <WaterDamageClaimsPage />;
}
