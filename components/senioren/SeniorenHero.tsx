import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";

const HERO_HEADLINES = {
  a: "Endlich Spanisch lernen.",
  b: "Spanisch für deine Reisen und für die Gespräche, auf die du dich freust.",
  c: "Spanisch lernen ab 60: gut für den Kopf, schön für den Alltag.",
} as const;

type HeroVariant = keyof typeof HERO_HEADLINES;

type SeniorenHeroProps = {
  adVariant?: HeroVariant;
};

export function SeniorenHero({ adVariant = "a" }: SeniorenHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream to-brand-50/70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[480px] rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 size-[360px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-16 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pt-16 md:pb-24 lg:gap-16 lg:pt-20">
        <div className="flex flex-col">
          <h1 className="font-display text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            {HERO_HEADLINES[adVariant]}
          </h1>

          <p className="mt-4 max-w-xl text-lg font-medium leading-snug text-ink-soft">
            Privater Spanischunterricht für 60+ in Zürich und online
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Persönlicher Einzelunterricht mit Cristina, Muttersprachlerin aus
            Ecuador, seit 15 Jahren spezialisiert auf Erwachsene, die später
            anfangen. Kein Druck, keine Gruppe, kein starrer Lehrplan. 60
            Minuten echte Zeit nur für dich.{" "}
            <span className="font-semibold text-ink">
              Die erste Lektion ist gratis.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-base font-semibold text-cream shadow-lg shadow-ink/15 transition hover:bg-brand-500 hover:shadow-brand-500/30"
            >
              Gratis Probelektion vereinbaren
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 text-base font-semibold text-ink transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
              aria-label={`Cristina anrufen: ${PHONE_DISPLAY}`}
            >
              <Phone className="size-5" /> {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-3 text-sm text-ink-soft">
            Lieber schreiben?{" "}
            <WhatsAppLink
              source="hero-senioren"
              className="inline-flex items-center gap-1 font-semibold text-success underline-offset-4 hover:underline"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </WhatsAppLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
            <div className="flex items-center gap-1.5">
              <div className="flex" aria-label="Bewertung 4,9 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden
                    className="size-4 fill-brand-400 text-brand-400"
                  />
                ))}
              </div>
              <span>Schülerinnen und Schüler zwischen 55 und 82</span>
            </div>
            <span aria-hidden className="hidden h-4 w-px bg-ink/15 sm:block" />
            <span>
              <span className="font-semibold text-ink">15 Jahre</span> Erfahrung
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-ink/15 sm:block" />
            <span>SVEB-zertifiziert</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-100 shadow-2xl shadow-ink/10 ring-1 ring-ink/5">
            <Image
              src="/images/cristina-hero.png"
              alt="Cristina im Unterricht mit einer Schülerin in Zürich"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink/10 ring-1 ring-ink/5 md:-left-6">
            <span
              aria-hidden
              className="grid size-10 place-items-center rounded-full bg-brand-50 text-xl"
            >
              🇪🇨
            </span>
            <div className="text-sm leading-tight">
              <div className="font-semibold text-ink">Muttersprachlerin</div>
              <div className="text-xs text-ink-soft">aus Ecuador</div>
            </div>
          </div>

          <div className="absolute -top-3 right-2 hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream shadow-lg md:flex">
            <span
              aria-hidden
              className="size-2 animate-pulse rounded-full bg-success"
            />
            Probelektion gratis
          </div>
        </div>
      </div>
    </section>
  );
}
