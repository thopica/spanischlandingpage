import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Kontakt } from "@/components/Kontakt";
import { Methode } from "@/components/Methode";
import { Preis } from "@/components/Preis";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Testimonials } from "@/components/Testimonials";
import { UeberMich } from "@/components/UeberMich";
import { Vorteile } from "@/components/Vorteile";
import { EMAIL } from "@/lib/links";
import { CITIES, getCityBySlug } from "@/lib/cities";

const SITE_URL = "https://onlinespanischlernen.ch";

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return {};

  const slug = `/spanisch-lernen-${cityData.slug}`;

  return {
    title: `Spanisch lernen ${cityData.name} & online | Privatunterricht – Cristina`,
    description: `Spanisch lernen online für ${cityData.name} – 1:1 Privatunterricht mit Muttersprachlerin Cristina. Flexibel, persönlich, CHF 60/Lektion. Erste Probestunde gratis.`,
    alternates: { canonical: slug },
    openGraph: {
      title: `Spanisch lernen in ${cityData.name} mit Cristina`,
      description:
        "1:1 Privatunterricht mit Muttersprachlerin. Flexibel, persönlich, CHF 60/Lektion. Erste Lektion gratis.",
      url: `${SITE_URL}${slug}`,
      siteName: "Spanisch mit Cristina",
      locale: "de_CH",
      type: "website",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Cristina gibt Spanischunterricht für ${cityData.name} – online Spanischlehrerin`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Spanisch lernen in ${cityData.name} mit Cristina`,
      description: "1:1 Privatunterricht, flexibel, CHF 60/Lektion. Erste Lektion gratis.",
      images: ["/images/og-image.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Spanisch mit Cristina",
    description: `Privatunterricht Spanisch mit Muttersprachlerin – online für ${cityData.name} und die ganze Schweiz.`,
    image: `${SITE_URL}/images/cristina-unterricht.webp`,
    url: `${SITE_URL}/spanisch-lernen-${cityData.slug}`,
    telephone: "+41772920903",
    email: EMAIL,
    priceRange: "CHF 60",
    inLanguage: ["de", "es"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressRegion: "ZH",
      addressCountry: "CH",
    },
    areaServed: [
      { "@type": "Country", name: "Schweiz" },
      { "@type": "City", name: cityData.name },
      { "@type": "City", name: "Zürich" },
    ],
    serviceType: "Spanischunterricht",
    founder: { "@type": "Person", name: "Cristina Caamaño" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "4",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ich bin absoluter Anfänger – kann ich trotzdem starten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolut. Mehr als die Hälfte meiner Schüler:innen startet bei null. Wir beginnen ganz entspannt mit den Grundlagen und du wirst schon in den ersten Lektionen einfache Sätze auf Spanisch sagen können.",
        },
      },
      {
        "@type": "Question",
        name: "Wie viele Lektionen brauche ich, um etwas sagen zu können?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das hängt von deinem Ziel ab. Für einfache Konversation im Urlaub reichen oft 8 – 12 Lektionen. Für berufliches Spanisch oder fliessende Konversation planen wir gemeinsam einen längeren Lernweg. Wir besprechen das in der Probelektion.",
        },
      },
      {
        "@type": "Question",
        name: "Online oder vor Ort in Zürich – was ist besser?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Beides funktioniert hervorragend. Online sparst du Zeit und kannst von überall in der Schweiz teilnehmen. Vor Ort in Zürich bietet mehr persönliche Atmosphäre. Du entscheidest – und kannst auch zwischen beiden Formaten wechseln.",
        },
      },
      {
        "@type": "Question",
        name: "Wann findet der Unterricht statt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Termine vereinbaren wir flexibel nach deinem Kalender – auch abends oder am Wochenende. Es gibt keinen festen Stundenplan, der dir den Stress nimmt.",
        },
      },
      {
        "@type": "Question",
        name: "Wie funktioniert die Bezahlung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CHF 60 pro 60-Minuten-Lektion. Bezahlt wird, wann es dir passt – TWINT, Banküberweisung oder bar in Zürich. Keine Abos, keine Vorauszahlungen, keine versteckten Kosten.",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero city={cityData.name} cityIntro={cityData.intro} />
        <Vorteile />
        <Methode />
        <Preis />
        <Testimonials />
        <UeberMich />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
      <StickyMobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
