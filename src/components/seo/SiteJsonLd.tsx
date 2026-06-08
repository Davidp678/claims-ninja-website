import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/site-schema";

export function SiteJsonLd() {
  const schemas = [buildOrganizationSchema(), buildWebSiteSchema()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
