import { SeniorenFaq } from "@/components/senioren/SeniorenFaq";
import { SeniorenFooter } from "@/components/senioren/SeniorenFooter";
import { SeniorenHeader } from "@/components/senioren/SeniorenHeader";
import { SeniorenHero } from "@/components/senioren/SeniorenHero";
import { SeniorenKontakt } from "@/components/senioren/SeniorenKontakt";
import { SeniorenMethode } from "@/components/senioren/SeniorenMethode";
import { SeniorenPreis } from "@/components/senioren/SeniorenPreis";
import { SeniorenStickyMobileCta } from "@/components/senioren/SeniorenStickyMobileCta";
import { SeniorenTestimonials } from "@/components/senioren/SeniorenTestimonials";
import { SeniorenUeberMich } from "@/components/senioren/SeniorenUeberMich";
import { SeniorenVorteile } from "@/components/senioren/SeniorenVorteile";
import { SeniorenZuAlt } from "@/components/senioren/SeniorenZuAlt";
import { SENIOREN_CANONICAL_URL } from "@/lib/senioren/constants";
import { SENIOREN_FAQS } from "@/lib/senioren/faqs";
import { EMAIL } from "@/lib/links";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Spanisch mit Cristina (Senioren)",
  description:
    "Privatunterricht Spanisch für Erwachsene ab 60, mit Muttersprachlerin, online aus der ganzen Schweiz oder vor Ort in Zürich.",
  image: "https://onlinespanischlernen.ch/images/cristina-hero.png",
  url: SENIOREN_CANONICAL_URL,
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
  areaServed: [{ "@type": "Country", name: "Schweiz" }],
  serviceType: "Spanischunterricht für Senioren",
  founder: { "@type": "Person", name: "Cristina Caamaño" },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SENIOREN_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function getAdVariant(ad?: string): "a" | "b" | "c" {
  if (ad === "b" || ad === "c") return ad;
  return "a";
}

export default async function SeniorenPage({
  searchParams,
}: {
  searchParams: Promise<{ ad?: string }>;
}) {
  const { ad } = await searchParams;
  const adVariant = getAdVariant(ad);

  return (
    <>
      <SeniorenHeader />
      <main>
        <SeniorenHero adVariant={adVariant} />
        <SeniorenZuAlt />
        <SeniorenVorteile />
        <SeniorenMethode />
        <SeniorenPreis />
        <SeniorenTestimonials />
        <SeniorenUeberMich />
        <SeniorenFaq />
        <SeniorenKontakt />
      </main>
      <SeniorenFooter />
      <SeniorenStickyMobileCta />
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
