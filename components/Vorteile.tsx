import { Clock, MapPin, ShieldCheck, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Vorteil = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
};

const VORTEILE: Vorteil[] = [
  {
    icon: UserRound,
    title: "Einzelunterricht 1:1",
    description:
      "Volle Aufmerksamkeit, dein Tempo, dein Lernplan. Keine Ablenkung durch andere Teilnehmer:innen.",
  },
  {
    icon: Clock,
    title: "60 Minuten pro Lektion",
    description:
      "Genug Zeit, um Themen wirklich zu verstehen und zu üben.",
    highlight: "25% mehr als der Marktstandard",
  },
  {
    icon: MapPin,
    title: "Flexibel & ortsunabhängig",
    description:
      "Online aus der ganzen Schweiz oder vor Ort in Zürich – du wählst, was zu deinem Alltag passt.",
  },
  {
    icon: ShieldCheck,
    title: "Keine Abos, kein Risiko",
    description:
      "Faire CHF 60 pro Lektion. Du zahlst nur, wenn du wirklich Zeit hast – volle Freiheit.",
  },
];

export function Vorteile() {
  return (
    <section className="bg-cream-dark px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Deine Vorteile
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Warum Schüler:innen mit mir lernen
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Unterricht, der sich wirklich nach dir richtet – nicht nach einem
            Standard-Curriculum.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-4">
          {VORTEILE.map(({ icon: Icon, title, description, highlight }) => (
            <li
              key={title}
              className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-400 group-hover:text-cream"
              >
                <Icon className="size-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
              {highlight && (
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                  <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                  {highlight}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
