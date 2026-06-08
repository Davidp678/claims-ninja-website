import type { Locale } from "@/lib/i18n/config";
import type { AnalysisProgressPhase } from "@/components/sections/calculator/ClaimAnalysisProgress";

export type ClaimTypeOption = { value: string; label: string };

export type CalculatorContent = {
  claimTypes: ClaimTypeOption[];
  single: {
    uploadLabel: string;
    chooseFiles: string;
    fileHint: string;
    filesReady: string;
    addMore: string;
    removeFile: string;
    moreFiles: (n: number) => string;
    claimTypeLabel: string;
    carrierEstimateLabel: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    disclaimer: string;
    uploadGenericError: string;
    uploadFileTooLarge: string;
    uploadFailed: string;
    uploadStorageFailed: string;
    waitForUploads: string;
    tooManyFiles: (max: number) => string;
    analysisError: string;
    submitUploading: string;
    submitAnalyzing: string;
    submitDefault: string;
    triageEyebrow: string;
    scoreLabel: string;
    missedRevenueLabel: string;
    backgroundNote: string;
    startReview: string;
    viewReport: string;
    leadSuccessMessage: string;
    statusQueued: string;
    statusUploading: string;
    statusUploaded: string;
    statusError: string;
  };
  progress: Record<AnalysisProgressPhase, string>;
  lead: {
    claimReviewEyebrow: string;
    roiEyebrow: string;
    claimReviewDescription: string;
    roiDescription: string;
    fullName: string;
    company: string;
    email: string;
    phone: string;
    preferredContactMethod: string;
    optionEmail: string;
    optionPhone: string;
    optionEither: string;
    monthlyClaimVolume: string;
    monthlyClaimVolumePlaceholder: string;
    monthlyClaimVolumeHelper: string;
    missedRevenueDetected: string;
    sending: string;
    preferToTalk: string;
    scheduleStrategyCall: string;
    specialistNote: string;
    startClaimReview: string;
    errorFullName: string;
    errorCompany: string;
    errorEmail: string;
    errorEmailInvalid: string;
    errorPhone: string;
    errorMonthlyVolumeRequired: string;
    errorMonthlyVolumeInvalid: string;
    genericError: string;
  };
  roi: {
    avgCarrierEstimate: string;
    avgCarrierEstimateHelper: string;
    jobsPerMonth: string;
    assumedUplift: string;
    inHouseCost: string;
    netAnnualUplift: string;
    netAnnualUpliftHelper: string;
    ninjaFeeAnnual: string;
    ninjaFeeWithCarrier: string;
    ninjaFeeFallback: string;
    vsInHouse: string;
    saved: string;
    short: string;
    inHouseBaseline: (value: string) => string;
    sendRoiReport: string;
    roiSuccessMessage: string;
    assumptions: string;
    assumptionsItems: string[];
  };
};

const EN: CalculatorContent = {
  claimTypes: [
    { value: "Water", label: "Water" },
    { value: "Fire", label: "Fire" },
    { value: "Mold", label: "Mold" },
    { value: "Roofing", label: "Roofing" },
    { value: "Reconstruction", label: "Reconstruction" },
    { value: "Other", label: "Other" },
  ],
  single: {
    uploadLabel: "Upload photos or documents",
    chooseFiles: "Choose files",
    fileHint: "PDF or image files, up to 20MB each.",
    filesReady: "Files ready for analysis.",
    addMore: "Add more files",
    removeFile: "Remove",
    moreFiles: (n) => `+${n} more file(s)`,
    claimTypeLabel: "Claim type",
    carrierEstimateLabel: "Carrier estimate amount",
    descriptionLabel: "Brief description of loss / scope",
    descriptionPlaceholder:
      "What happened, what's been documented, any disputes so far...",
    disclaimer:
      "This is a preliminary review only — not a final estimate, legal opinion, or coverage determination.",
    uploadGenericError: "We couldn't upload your files. Please try again.",
    uploadFileTooLarge:
      "File is too large for the upload proxy. Please try again or use a smaller file.",
    uploadFailed: "Upload failed",
    uploadStorageFailed: "Failed to upload file to storage.",
    waitForUploads: "Please wait for file uploads to finish.",
    tooManyFiles: (max) => `You can upload up to ${max} files.`,
    analysisError: "We couldn't complete the claim analysis. Please try again.",
    submitUploading: "Uploading files…",
    submitAnalyzing: "Analyzing…",
    submitDefault: "Analyze claim opportunity",
    triageEyebrow: "Preliminary triage",
    scoreLabel: "Opportunity score",
    missedRevenueLabel: "Estimated missed revenue",
    backgroundNote: "Full intelligence report continues generating in the background.",
    startReview: "Start My Review",
    viewReport: "View full intelligence report",
    leadSuccessMessage:
      "Your claim review request has been received. Our team will review your details and follow up shortly.",
    statusQueued: "Queued",
    statusUploading: "Uploading",
    statusUploaded: "Uploaded",
    statusError: "Failed",
  },
  progress: {
    uploading: "Uploading files",
    reading: "Reading documents",
    scoring: "Scoring opportunity",
    finalizing: "Finalizing report",
  },
  lead: {
    claimReviewEyebrow: "Full supplement review",
    roiEyebrow: "Request your ROI report",
    claimReviewDescription:
      "Preliminary opportunities identified. Submit your information for a deeper line-item and carrier review from the Claims Ninja team.",
    roiDescription:
      "We’ll validate your numbers and send a concise readout your leadership team can use.",
    fullName: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    preferredContactMethod: "Preferred contact method",
    optionEmail: "Email",
    optionPhone: "Phone",
    optionEither: "Either",
    monthlyClaimVolume: "Monthly claim volume",
    monthlyClaimVolumePlaceholder: "e.g. number of jobs or claims per month",
    monthlyClaimVolumeHelper:
      "Pre-filled from your calculator where possible — adjust to match your organization.",
    missedRevenueDetected: "Potential missed revenue detected.",
    sending: "Sending…",
    preferToTalk: "Prefer to talk first?",
    scheduleStrategyCall: "Schedule a strategy call",
    specialistNote: "A specialist will reach out using the details you provided.",
    startClaimReview: "Start Claim Review",
    errorFullName: "Full name is required.",
    errorCompany: "Company is required.",
    errorEmail: "Email is required.",
    errorEmailInvalid: "Enter a valid email address.",
    errorPhone: "Phone is required.",
    errorMonthlyVolumeRequired: "Monthly claim volume is required.",
    errorMonthlyVolumeInvalid: "Monthly claim volume must be a valid number.",
    genericError: "Something went wrong. Please try again.",
  },
  roi: {
    avgCarrierEstimate: "Avg carrier estimate per job",
    avgCarrierEstimateHelper: "Leave blank or 0 to model the 4%-of-RCV fallback.",
    jobsPerMonth: "Jobs per month",
    assumedUplift: "Assumed uplift vs carrier estimate (%)",
    inHouseCost: "In-house claims team cost (per month)",
    netAnnualUplift: "Net annual uplift with Claims Ninja",
    netAnnualUpliftHelper: "After negotiation fee, across all jobs annualized.",
    ninjaFeeAnnual: "Claims Ninja fee (annual)",
    ninjaFeeWithCarrier: "15% of documented settlement increase.",
    ninjaFeeFallback: "4% of final RCV fallback (no carrier estimate).",
    vsInHouse: "Vs. in-house claims team",
    saved: "saved",
    short: "short",
    inHouseBaseline: (value) => `In-house baseline: ${value} per year.`,
    sendRoiReport: "Send my ROI report",
    roiSuccessMessage:
      "Your ROI report request has been received. We’ll follow up with next steps.",
    assumptions: "Assumptions",
    assumptionsItems: [
      "Negotiation fee is modeled as 15% of the documented settlement increase above the carrier's original estimate.",
      "Fallback: when there is no carrier estimate, the fee is modeled at 4% of final RCV.",
      "Assumed uplift defaults to 25% — adjust above to model your own scenarios.",
      "In-house claims team cost defaults to $7,500/month — adjust above to match your loaded cost.",
      "Estimates are directional only and not a guarantee of outcome.",
    ],
  },
};

const ES: CalculatorContent = {
  claimTypes: [
    { value: "Water", label: "Agua" },
    { value: "Fire", label: "Incendio" },
    { value: "Mold", label: "Moho" },
    { value: "Roofing", label: "Techado" },
    { value: "Reconstruction", label: "Reconstrucción" },
    { value: "Other", label: "Otro" },
  ],
  single: {
    uploadLabel: "Suba fotos o documentos",
    chooseFiles: "Elegir archivos",
    fileHint: "Archivos PDF o de imagen, hasta 20MB cada uno.",
    filesReady: "Archivos listos para el análisis.",
    addMore: "Agregar más archivos",
    removeFile: "Quitar",
    moreFiles: (n) => `+${n} archivo(s) más`,
    claimTypeLabel: "Tipo de reclamación",
    carrierEstimateLabel: "Monto del estimado de la aseguradora",
    descriptionLabel: "Breve descripción de la pérdida / alcance",
    descriptionPlaceholder:
      "Qué ocurrió, qué se ha documentado, cualquier disputa hasta ahora...",
    disclaimer:
      "Esta es solo una revisión preliminar — no es un estimado final, una opinión legal ni una determinación de cobertura.",
    uploadGenericError:
      "No pudimos subir sus archivos. Por favor, inténtelo de nuevo.",
    uploadFileTooLarge:
      "El archivo es demasiado grande para el proxy de carga. Inténtelo de nuevo o use un archivo más pequeño.",
    uploadFailed: "Error al subir el archivo",
    uploadStorageFailed: "No se pudo subir el archivo al almacenamiento.",
    waitForUploads: "Por favor, espere a que terminen de subirse los archivos.",
    tooManyFiles: (max) => `Puede subir hasta ${max} archivos.`,
    analysisError:
      "No pudimos completar el análisis de la reclamación. Por favor, inténtelo de nuevo.",
    submitUploading: "Subiendo archivos…",
    submitAnalyzing: "Analizando…",
    submitDefault: "Analizar la oportunidad de la reclamación",
    triageEyebrow: "Evaluación preliminar",
    scoreLabel: "Puntaje de oportunidad",
    missedRevenueLabel: "Ingresos omitidos estimados",
    backgroundNote:
      "El informe de inteligencia completo se sigue generando en segundo plano.",
    startReview: "Iniciar mi revisión",
    viewReport: "Ver el informe de inteligencia completo",
    leadSuccessMessage:
      "Su solicitud de revisión de reclamación ha sido recibida. Nuestro equipo revisará sus detalles y le dará seguimiento en breve.",
    statusQueued: "En cola",
    statusUploading: "Subiendo",
    statusUploaded: "Subido",
    statusError: "Falló",
  },
  progress: {
    uploading: "Subiendo archivos",
    reading: "Leyendo documentos",
    scoring: "Evaluando la oportunidad",
    finalizing: "Finalizando el informe",
  },
  lead: {
    claimReviewEyebrow: "Revisión completa de suplementos",
    roiEyebrow: "Solicite su informe de ROI",
    claimReviewDescription:
      "Se identificaron oportunidades preliminares. Envíe su información para una revisión más profunda, línea por línea y con la aseguradora, por parte del equipo de Claims Ninja.",
    roiDescription:
      "Validaremos sus números y enviaremos un resumen conciso que su equipo directivo pueda usar.",
    fullName: "Nombre completo",
    company: "Empresa",
    email: "Correo electrónico",
    phone: "Teléfono",
    preferredContactMethod: "Método de contacto preferido",
    optionEmail: "Correo electrónico",
    optionPhone: "Teléfono",
    optionEither: "Cualquiera",
    monthlyClaimVolume: "Volumen mensual de reclamaciones",
    monthlyClaimVolumePlaceholder: "p. ej. número de trabajos o reclamaciones por mes",
    monthlyClaimVolumeHelper:
      "Prellenado desde su calculadora cuando es posible — ajústelo según su organización.",
    missedRevenueDetected: "Se detectaron posibles ingresos omitidos.",
    sending: "Enviando…",
    preferToTalk: "¿Prefiere hablar primero?",
    scheduleStrategyCall: "Agende una llamada estratégica",
    specialistNote:
      "Un especialista se comunicará usando los datos que proporcionó.",
    startClaimReview: "Iniciar revisión de reclamación",
    errorFullName: "El nombre completo es obligatorio.",
    errorCompany: "La empresa es obligatoria.",
    errorEmail: "El correo electrónico es obligatorio.",
    errorEmailInvalid: "Ingrese una dirección de correo electrónico válida.",
    errorPhone: "El teléfono es obligatorio.",
    errorMonthlyVolumeRequired: "El volumen mensual de reclamaciones es obligatorio.",
    errorMonthlyVolumeInvalid:
      "El volumen mensual de reclamaciones debe ser un número válido.",
    genericError: "Algo salió mal. Por favor, inténtelo de nuevo.",
  },
  roi: {
    avgCarrierEstimate: "Estimado promedio de la aseguradora por trabajo",
    avgCarrierEstimateHelper:
      "Deje en blanco o en 0 para modelar la alternativa del 4% del RCV.",
    jobsPerMonth: "Trabajos por mes",
    assumedUplift: "Aumento asumido frente al estimado de la aseguradora (%)",
    inHouseCost: "Costo del equipo interno de reclamaciones (por mes)",
    netAnnualUplift: "Aumento neto anual con Claims Ninja",
    netAnnualUpliftHelper:
      "Después de la tarifa de negociación, en todos los trabajos anualizados.",
    ninjaFeeAnnual: "Tarifa de Claims Ninja (anual)",
    ninjaFeeWithCarrier: "15% del aumento documentado del acuerdo.",
    ninjaFeeFallback: "Alternativa del 4% del RCV final (sin estimado de la aseguradora).",
    vsInHouse: "Frente a un equipo interno de reclamaciones",
    saved: "ahorrados",
    short: "de déficit",
    inHouseBaseline: (value) => `Base interna: ${value} por año.`,
    sendRoiReport: "Enviar mi informe de ROI",
    roiSuccessMessage:
      "Su solicitud de informe de ROI ha sido recibida. Le daremos seguimiento con los próximos pasos.",
    assumptions: "Supuestos",
    assumptionsItems: [
      "La tarifa de negociación se modela como el 15% del aumento documentado del acuerdo por encima del estimado original de la aseguradora.",
      "Alternativa: cuando no hay estimado de la aseguradora, la tarifa se modela al 4% del RCV final.",
      "El aumento asumido es 25% por defecto — ajústelo arriba para modelar sus propios escenarios.",
      "El costo del equipo interno de reclamaciones es de $7,500/mes por defecto — ajústelo arriba para que coincida con su costo cargado.",
      "Los estimados son solo orientativos y no garantizan ningún resultado.",
    ],
  },
};

const CALCULATOR_CONTENT: Record<Locale, CalculatorContent> = { en: EN, es: ES };

export function getCalculatorContent(locale: Locale): CalculatorContent {
  return CALCULATOR_CONTENT[locale] ?? EN;
}
