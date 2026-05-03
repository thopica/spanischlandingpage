import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const INCLUSIONS = [
  "60 Minuten reine Lektionszeit (kein 45-Minuten-Trick)",
  "Privatunterricht 1:1, persönlich auf dich abgestimmt",
  "Online aus der ganzen Schweiz oder vor Ort in Zürich",
  "Keine Abos, keine Verpflichtungen – buche, wann es passt",
  "Zahlungsmethode frei wählbar (TWINT, Überweisung, Bar)",
];

export function Preis() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-20 text-cream md:px-8 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 size-[420px] rounded-full bg-brand-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-32 size-[480px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/40 bg-brand-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-200">
          Preis
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Ein fairer Preis. Keine Überraschungen.
        </h2>
        <p className="mt-3 text-base text-cream/70 sm:text-lg">
          Du zahlst nur die Lektionen, die du wirklich nimmst. Und die erste ist
          gratis.
        </p>

        <div className="mt-12 rounded-[2rem] bg-white p-7 text-left text-ink shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success-dark">
                <span aria-hidden className="size-1.5 rounded-full bg-success" />
                Erste Lektion gratis
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Einzelunterricht
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Online oder vor Ort in Zürich
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-baseline justify-end gap-1.5">
                <span className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                  CHF&nbsp;60
                </span>
              </div>
              <div className="mt-1 text-sm font-medium text-ink-soft">
                pro 60-Min-Lektion
              </div>
            </div>
          </div>

          <ul className="mt-8 space-y-3 border-t border-ink/10 pt-7">
            {INCLUSIONS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/15 text-success-dark"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-ink/90 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="group inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-semibold text-cream shadow-lg shadow-ink/20 transition hover:bg-brand-500"
            >
              Gratis Probelektion buchen
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <WhatsAppLink
              source="preis"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ink/15 px-6 text-base font-semibold text-ink transition hover:border-success hover:bg-success/5 hover:text-success-dark"
            >
              <MessageCircle className="size-5" /> WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <p className="mt-6 text-sm text-cream/60">
          Pakete für Firmen oder Intensivkurse? Schreib mir – ich finde die
          passende Lösung.
        </p>
      </div>
    </section>
  );
}
