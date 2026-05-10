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
import { CITIES, getCityBySlug } from "@/lib/cities";
import { EMAIL } from "@/lib/links";

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

  const slug = `/spanisch-lernen/${cityData.slug}`;

  return {
    title: `Spanisch online lernen ${cityData.name} | 1:1 Privatunterricht mit Cristina`,
    description: `Spanisch online lernen für ${cityData.name}: 1:1 Privatunterricht mit Muttersprachlerin Cristina. Flexibel, persönlich, CHF 60/Lektion. Erste Probestunde gratis.`,
    alternates: { canonical: slug },
    openGraph: {
      title: `Spanisch online lernen in ${cityData.name} mit Cristina`,
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
          alt: `Cristina gibt Spanischunterricht für ${cityData.name} und online`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Spanisch online lernen in ${cityData.name} mit Cristina`,
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
    description: `Privatunterricht Spanisch mit Muttersprachlerin, online für ${cityData.name} und die ganze Schweiz.`,
    image: `${SITE_URL}/images/cristina-unterricht.webp`,
    url: `${SITE_URL}/spanisch-lernen/${cityData.slug}`,
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
    ],
    serviceType: "Spanischunterricht",
    founder: { "@type": "Person", name: "Cristina Caamaño" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Spanisch online lernen ${cityData.name}`,
        item: `${SITE_URL}/spanisch-lernen/${cityData.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ich bin absoluter Anfänger. Kann ich trotzdem starten?",
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
          text: "Das hängt von deinem Ziel ab. Für einfache Konversation im Urlaub reichen oft 8 bis 12 Lektionen. Für berufliches Spanisch oder fliessende Konversation planen wir gemeinsam einen längeren Lernweg. Wir besprechen das in der Probelektion.",
        },
      },
      {
        "@type": "Question",
        name: "Funktioniert Online-Unterricht wirklich gut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, sehr gut. Du sparst Anfahrtszeit und lernst in deiner gewohnten Umgebung. Mit 1:1-Unterricht bekommst du volle Aufmerksamkeit, klare Struktur und viele Sprechphasen.",
        },
      },
      {
        "@type": "Question",
        name: "Wann findet der Unterricht statt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Termine vereinbaren wir flexibel nach deinem Kalender, auch abends oder am Wochenende. Es gibt keinen festen Stundenplan, der dir den Stress nimmt.",
        },
      },
      {
        "@type": "Question",
        name: "Wie funktioniert die Bezahlung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CHF 60 pro 60-Minuten-Lektion. Bezahlt wird, wann es dir passt, zum Beispiel per TWINT oder Banküberweisung. Keine Abos, keine Vorauszahlungen, keine versteckten Kosten.",
        },
      },
      {
        "@type": "Question",
        name: "Arbeitest du mit einem Lehrbuch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das hängt von dir ab. Manche Schülerinnen wollen ein klares, strukturiertes Vorgehen mit einem Buch. Dafür empfehle ich dir ein passendes. Andere lernen lieber frei, mit eigenen Themen und Materialien, die ich für dich zusammenstelle. In der ersten Lektion finden wir gemeinsam heraus, was zu dir passt.",
        },
      },
      {
        "@type": "Question",
        name: "Muss ich Hausaufgaben machen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein, nichts muss. Wer mag, bekommt von mir Material zum Üben zwischen den Lektionen. Wer einfach nur in der Stunde lernen möchte, ist auch willkommen.",
        },
      },
      {
        "@type": "Question",
        name: `Gibt es Unterricht vor Ort in ${cityData.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `In ${cityData.name} arbeite ich mit dir online. Persönliche Treffen vor Ort sind in Zürich möglich.`,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero city={cityData.name} cityIntro={cityData.intro} />
        <Vorteile onlineOnly />
        <Methode />
        <Preis onlineOnly />
        <Testimonials />
        <UeberMich />
        <Faq onlineOnly />
        <Kontakt />
      </main>
      <Footer onlineOnly />
      <StickyMobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
