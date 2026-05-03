import { Star } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Thomas",
    role: "Anfänger",
    image: "/images/thomas.png",
    quote:
      "Erstaunlich schnell konnte ich einfache Sätze auf Spanisch sagen. Vielen Dank Cristina!",
  },
  {
    name: "Regula",
    role: "Reisende",
    image: "/images/regula.png",
    quote:
      "Ich freue mich jedes Mal auf den Unterricht. Inzwischen kann ich mich ohne Probleme im Ausland auf Spanisch verständigen.",
  },
  {
    name: "Eva",
    role: "Fortgeschrittene",
    image: "/images/eva.png",
    quote:
      "In kurzer Zeit konnte ich gute Fortschritte machen, da Cristina den Unterricht genau an meine Wünsche und mein Tempo angepasst hat. So macht das Lernen sehr viel Spass und ich freue mich auf jede weitere Lektion.",
  },
  {
    name: "Pascal",
    role: "Unternehmer",
    image: "/images/pascal.png",
    quote:
      "Als Unternehmer ist meine Zeit knapp. Cristinas flexible Unterrichtszeiten ermöglichen es mir, Spanisch effektiv zu lernen, ohne meinen Arbeitsalltag zu stören.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Bewertungen
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Was meine Schüler:innen sagen
          </h2>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="flex items-center gap-0.5"
                aria-label="5 von 5 Sternen"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden
                    className="size-3.5 fill-brand-400 text-brand-400"
                  />
                ))}
              </div>

              <blockquote className="mt-3 grow text-sm leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>

              <div className="mt-4 flex items-center gap-2.5">
                <Image
                  src={t.image}
                  alt={`Porträt von ${t.name}`}
                  width={32}
                  height={32}
                  className="size-8 rounded-full object-cover"
                />
                <div className="text-xs leading-tight">
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
