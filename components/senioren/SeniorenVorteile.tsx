import {
  CalendarHeart,
  Clock,
  Coffee,
  Laptop,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Vorteil = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
};

const VORTEILE: Vorteil[] = [
  {
    icon: Coffee,
    title:
      "Du lernst, was dir wichtig ist: nach deinem Tempo, nicht nach Stundenplan",
    description:
      "Vielleicht möchtest du auf deiner nächsten Reise nicht nur Tourist sein, sondern dich wirklich verständigen. Vielleicht planst du, neue Länder zu erkunden: Spanien, Argentinien, Mexiko, Costa Rica. Vielleicht möchtest du im Restaurant in Andalusien selber bestellen, ohne auf die englische Karte zu zeigen. Erzähl mir, was du erreichen willst. Daran richte ich jede Lektion aus.",
  },
  {
    icon: CalendarHeart,
    title: "Dein Tempo, deine Tageszeit",
    description:
      "Vormittags, nachmittags, wann immer es dir passt. Kein Abendstress, keine Hektik.",
  },
  {
    icon: Clock,
    title: "60 echte Minuten, ohne Hetze",
    description:
      "Wir nehmen uns Zeit. Wenn du etwas dreimal hören willst, hörst du es dreimal. Wenn du eine Pause brauchst, machen wir Pause. Eine Lektion bei mir ist keine Schulstunde, sondern wie ein Kaffee mit einer Freundin, die zufällig Spanisch unterrichtet.",
  },
  {
    icon: Laptop,
    title: "Wo du möchtest",
    description:
      "Online aus deinem Wohnzimmer. Falls du mit dem Computer nicht so vertraut bist, helfe ich dir beim Einrichten. Oder wir treffen uns bei mir in Zürich.",
  },
  {
    icon: ShieldCheck,
    title: "Keine Abos. Keine Verpflichtung.",
    description:
      "CHF 60 pro Lektion. Du buchst, wann es passt. Ferien, Arzttermin, Besuch von den Enkeln? Kein Problem.",
  },
  {
    icon: Coffee,
    title: "«Kein Talent für Sprachen»? Das hat fast nichts mit Talent zu tun.",
    description:
      "Wenn du in der Schule «schlecht in Französisch» warst, lag das meistens am Klassentempo, an den Noten und an der Angst, dich vor 25 Mitschülern zu blamieren. All das gibt es bei mir nicht. 1:1, kein Druck, kein Vergleich. Du wirst überrascht sein, wie anders sich das anfühlt.",
  },
];

export function SeniorenVorteile() {
  return (
    <section className="bg-cream-dark px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Deine Vorteile
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Warum dieser Unterricht zu dir passt
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Kein starrer Lehrplan, kein Druck. Einfach Spanisch, so wie du es
            dir vorgestellt hast.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
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
