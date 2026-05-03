import { BookOpen, MessagesSquare, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Dein persönlicher Lernplan",
    description:
      "Wir starten mit deinen Zielen, deinem Niveau und deinem Zeitplan. Daraus baue ich deinen massgeschneiderten Lernweg.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Echte Praxis",
    description:
      "Aktuelle Themen, Alltagssituationen, hispanische Kultur. Keine langweiligen Aufgaben – du lernst, was du wirklich brauchst.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Sprechen, sprechen, sprechen",
    description:
      "Wir reden vom ersten Tag an Spanisch. Innerhalb kurzer Zeit baust du erste Sätze und Konversationen auf.",
    icon: MessagesSquare,
  },
];

export function Methode() {
  return (
    <section className="bg-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Meine Methode
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            So lernst du Spanisch mit mir
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Du stehst im Mittelpunkt. Drei einfache Schritte – und du sprichst.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {/* Connecting dotted line on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-12 hidden h-px border-t-2 border-dashed border-brand-200 md:block"
          />

          {STEPS.map(({ number, title, description, icon: Icon }) => (
            <li
              key={number}
              className="relative flex flex-col items-center rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
            >
              <span
                aria-hidden
                className="relative grid size-16 place-items-center rounded-full bg-brand-400 text-cream shadow-md shadow-brand-400/30"
              >
                <Icon className="size-7" strokeWidth={2.2} />
                <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-ink text-[0.7rem] font-bold text-cream ring-2 ring-cream">
                  {number}
                </span>
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
