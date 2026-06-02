import { FireDamageClaimsPage } from "@/components/solutions/FireDamageClaimsPage";
import { pageMetadata } from "@/lib/metadata";
import { FIRE_DAMAGE_META } from "@/lib/fire-damage-page";

export const metadata = pageMetadata({
  title: FIRE_DAMAGE_META.metaTitle,
  description: FIRE_DAMAGE_META.metaDescription,
  path: FIRE_DAMAGE_META.path,
});

export default function FireDamagePage() {
  return <FireDamageClaimsPage />;
}
