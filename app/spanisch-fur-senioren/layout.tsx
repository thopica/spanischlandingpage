import type { Metadata } from "next";
import { SENIOREN_CANONICAL_URL, SENIOREN_PATH } from "@/lib/senioren/constants";

const title =
  "Spanisch für Senioren | Privatunterricht Zürich & online | Cristina";

export const metadata: Metadata = {
  title,
  description:
    "Spanisch ab 60: geduldiger 1:1-Unterricht mit Cristina, Muttersprachlerin aus Ecuador. Online oder in Zürich, 60 Minuten pro Lektion, erste Probelektion gratis.",
  keywords: [
    "Spanisch Senioren",
    "Spanisch ab 60",
    "Spanisch lernen älter werden",
    "Privatunterricht Spanisch Zürich",
    "Spanisch online Schweiz",
  ],
  alternates: { canonical: SENIOREN_PATH },
  openGraph: {
    title,
    description:
      "Privater Spanischunterricht für 60+ in Zürich und online. Ohne Druck, ohne Gruppe. Erste Lektion gratis.",
    url: SENIOREN_CANONICAL_URL,
    siteName: "Spanisch mit Cristina",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/cristina-hero.png",
        width: 1200,
        height: 900,
        alt: "Cristina im Unterricht mit einer Schülerin in Zürich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Spanisch für Senioren: 1:1 mit Cristina in Zürich und online. Erste Lektion gratis.",
    images: ["/images/cristina-hero.png"],
  },
  robots: { index: true, follow: true },
};

export default function SeniorenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
