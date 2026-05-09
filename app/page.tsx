import Link from "next/link";
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
import { CITIES } from "@/lib/cities";
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
  ],
  serviceType: "Spanischunterricht",
  founder: { "@type": "Person", name: "Cristina Caamaño" },
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

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Spanisch mit Cristina",
  url: "https://onlinespanischlernen.ch",
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
        <section className="bg-cream px-4 pt-10 pb-4 md:px-8 md:pt-14">
          <div className="mx-auto max-w-6xl rounded-3xl border border-brand-200/70 bg-brand-50/40 p-5 md:p-7">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Spanisch online lernen in der ganzen Schweiz
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Du möchtest Spanisch online lernen? Der 1:1-Unterricht funktioniert
              schweizweit per Video. Vor Ort unterrichte ich nur in Zürich, online
              jedoch in allen Regionen der Schweiz.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Besonders häufig werde ich für{" "}
              <Link href="/spanisch-lernen/bern" className="text-ink underline underline-offset-2">
                Bern
              </Link>
              ,{" "}
              <Link href="/spanisch-lernen/basel" className="text-ink underline underline-offset-2">
                Basel
              </Link>{" "}
              und{" "}
              <Link href="/spanisch-lernen/luzern" className="text-ink underline underline-offset-2">
                Luzern
              </Link>{" "}
              angefragt. Du findest aber auch Seiten für weitere Städte mit
              spezifischen Infos zum Online-Unterricht.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/spanisch-lernen/${city.slug}`}
                    className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1.5 text-sm font-medium text-ink transition hover:border-brand-400 hover:text-brand-600"
                  >
                    Spanisch online lernen {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
    </>
  );
}
