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

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Spanisch mit Cristina",
  description:
    "Privatunterricht Spanisch mit Muttersprachlerin – online aus der ganzen Schweiz oder vor Ort in Zürich.",
  image: "https://onlinespanischlernen.ch/images/cristina-unterricht.webp",
  url: "https://onlinespanischlernen.ch",
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
    { "@type": "City", name: "Zürich" },
    { "@type": "City", name: "Basel" },
    { "@type": "City", name: "Bern" },
    { "@type": "City", name: "Luzern" },
    { "@type": "City", name: "Winterthur" },
    { "@type": "City", name: "St. Gallen" },
    { "@type": "City", name: "Zug" },
    { "@type": "City", name: "Aarau" },
    { "@type": "City", name: "Schaffhausen" },
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

const FAQ_SCHEMA = {
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </>
  );
}
