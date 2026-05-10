import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Verena, 64",
    role: "Wädenswil",
    quote:
      "Ich hatte Sorge, ob das in meinem Alter noch geht. Cristina hat mir vom ersten Tag an das Gefühl gegeben: doch, das geht. Und wie!",
  },
  {
    name: "Margrit, 68",
    role: "Küsnacht",
    quote:
      "Ich hatte Spanisch immer auf der Liste. Mit Cristina habe ich endlich angefangen, und es macht so viel Freude, wie ich es mir erhofft hatte.",
  },
  {
    name: "Hans-Peter, 71",
    role: "Zürich",
    quote:
      "Wir verbringen jedes Jahr drei Monate in Andalusien. Beim letzten Besuch konnte ich zum ersten Mal mit den Nachbarn richtig plaudern. Das war ein Moment.",
  },
  {
    name: "Peter, 66",
    role: "Zürich",
    quote:
      "In der Schule hatte ich in Französisch nur Vieren. Ich dachte, Sprachen sind einfach nichts für mich. Bei Cristina merke ich: das war damals nicht mein Problem, sondern das Klassenzimmer.",
  },
];

function initials(name: string) {
  return name
    .split(/[\s,-]+/)
    .filter(Boolean)
    .slice(0, 1)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export function SeniorenTestimonials() {
  return (
    <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Stimmen
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Was meine Schülerinnen und Schüler erzählen
          </h2>
        </div>

        <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-md sm:p-7"
            >
              <div
                className="flex items-center gap-0.5"
                aria-label="5 von 5 Sternen"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden
                    className="size-4 fill-brand-400 text-brand-400"
                  />
                ))}
              </div>

              <blockquote className="mt-4 grow text-base leading-relaxed text-ink/85">
                «{t.quote}»
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-ink/5 pt-4">
                <span
                  aria-hidden
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-100 font-display text-base font-semibold text-brand-700"
                >
                  {initials(t.name)}
                </span>
                <div className="text-sm leading-tight">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-soft">{t.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
