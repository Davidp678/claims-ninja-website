import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SITE } from "@/lib/constants";
import { DEFAULT_OG_IMAGE_PATH } from "@/lib/site-seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Contractor Claims Support`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL("https://theclaimsninja.com"),
  icons: {
    icon: DEFAULT_OG_IMAGE_PATH,
    apple: DEFAULT_OG_IMAGE_PATH,
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [{ url: DEFAULT_OG_IMAGE_PATH }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-black font-sans text-foreground">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
