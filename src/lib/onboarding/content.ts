import type { Locale } from "@/lib/i18n/config";

export type HeroProofMetric = {
  /** Plain text before an optional accent suffix (e.g. "40%"). */
  text: string;
  /** Accented fragment rendered in brand red (e.g. "+"). */
  accent?: string;
  /** Plain text after the accent (e.g. " recovery"). */
  suffix?: string;
};

export type HeroIntakeContent = {
  eyebrow: string;
  title: string;
  subhead: string;
  bullets: string[];
  proofMetrics: HeroProofMetric[];
  loginLink: string;
  cardTitle: string;
  cardSubhead: string;
  propertyLabel: string;
  propertyPlaceholder: string;
  lossTypeLabel: string;
  lossTypePlaceholder: string;
  uploadTitle: string;
  uploadHint: string;
  continueCta: string;
  privacyNote: string;
};

const EN: HeroIntakeContent = {
  eyebrow: "CLAIMS OPERATIONS, BUILT FOR CONTRACTORS",
  title: "Turn your next claim into a stronger recovery.",
  subhead:
    "Upload the carrier estimate and job details. Claims Ninja will organize the file, create your secure workspace, and put our claims team to work.",
  bullets: ["Secure upload", "Save and resume", "No setup call required"],
  proofMetrics: [
    { text: "24-hour review" },
    { text: "40%", accent: "+", suffix: " recovery" },
    { text: "3–5 weeks average" },
  ],
  loginLink: "Already a client? Log in →",
  cardTitle: "Start your claim",
  cardSubhead: "A few details now. Finish setup in one guided flow.",
  propertyLabel: "Property / job name",
  propertyPlaceholder: "e.g. Johnson Residence",
  lossTypeLabel: "Loss type",
  lossTypePlaceholder: "Select loss type",
  uploadTitle: "Drop your carrier estimate, photos, or scope here",
  uploadHint: "PDF, images, DOCX, XLSX • Up to 50 MB each",
  continueCta: "Continue claim intake →",
  privacyNote: "Your files stay private and are not shared with the carrier.",
};

const ES: HeroIntakeContent = {
  eyebrow: "Operaciones de reclamaciones para contratistas",
  title: "Convierta su próxima reclamación en una recuperación más sólida.",
  subhead:
    "Suba el estimado de la aseguradora y los detalles del trabajo. Claims Ninja organizará el expediente, creará su espacio de trabajo seguro y pondrá a nuestro equipo a trabajar.",
  bullets: [
    "Carga segura",
    "Guarde y reanude",
    "Sin llamada de configuración",
  ],
  proofMetrics: [
    { text: "Revisión en 24 horas" },
    { text: "40%", accent: "+", suffix: " de recuperación" },
    { text: "Promedio de 3–5 semanas" },
  ],
  loginLink: "¿Ya es cliente? Inicie sesión →",
  cardTitle: "Comience su reclamación",
  cardSubhead: "Algunos datos ahora. Complete la configuración en un flujo guiado.",
  propertyLabel: "Propiedad / nombre del trabajo",
  propertyPlaceholder: "p. ej. Residencia Johnson",
  lossTypeLabel: "Tipo de pérdida",
  lossTypePlaceholder: "Seleccione el tipo de pérdida",
  uploadTitle: "Suelte aquí el estimado, fotos o alcance",
  uploadHint: "PDF, imágenes, DOCX, XLSX • Hasta 50 MB cada uno",
  continueCta: "Continuar ingreso de reclamación →",
  privacyNote:
    "Sus archivos permanecen privados y no se comparten con la aseguradora.",
};

export function getHeroIntakeContent(locale: Locale = "en"): HeroIntakeContent {
  return locale === "es" ? ES : EN;
}
