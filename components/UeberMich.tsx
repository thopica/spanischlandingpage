import Image from "next/image";
import { Award, GraduationCap, Heart, Mic } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Credential = {
  icon: LucideIcon;
  label: string;
};

const CREDENTIALS: Credential[] = [
  { icon: Heart, label: "Muttersprachlerin aus Ecuador" },
  { icon: GraduationCap, label: "SVEB-zertifizierte Erwachsenenbildnerin" },
  { icon: Mic, label: "Ausgebildete Journalistin" },
  { icon: Award, label: "15+ Jahre Unterrichtserfahrung" },
];

export function UeberMich() {
  return (
    <section className="bg-cream-dark px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20">
        <div className="relative order-1 mx-auto w-full max-w-sm md:order-1 md:mx-0">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-brand-200/60 md:-inset-5"
          />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-brand-100 shadow-xl shadow-ink/15 ring-1 ring-ink/5">
            <Image
              src="/images/cristina-portrait.jpg"
              alt="Cristina Caamaño – Spanisch-Lehrerin in Zürich"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-2 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink/10 ring-1 ring-ink/5 md:-bottom-6 md:right-4">
            <span className="font-display text-2xl">¡Hola!</span>
            <div className="text-xs leading-tight">
              <div className="font-semibold text-ink">Ich bin Cristina</div>
              <div className="text-ink-soft">Deine Spanisch-Lehrerin</div>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Über mich
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Spanisch lernen mit Leidenschaft – seit 15&nbsp;Jahren.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              Ursprünglich komme ich aus{" "}
              <span className="font-semibold text-ink">Ecuador</span> – ich bin
              also spanische Muttersprachlerin und kenne die Feinheiten der
              Sprache und Kultur genau.
            </p>
            <p>
              Als ausgebildete{" "}
              <span className="font-semibold text-ink">Journalistin</span> und{" "}
              <span className="font-semibold text-ink">
                SVEB-zertifizierte Erwachsenenbildnerin
              </span>{" "}
              verfüge ich über fundiertes pädagogisches Fachwissen – so biete ich
              dir effizientes, strukturiertes Sprachtraining.
            </p>
            <p>
              In meinem Unterricht steht{" "}
              <span className="font-semibold text-ink">dein Lernerfolg</span> im
              Mittelpunkt. Es begeistert mich jedes Mal zu sehen, wie meine
              Schüler:innen mit jeder Lektion Fortschritte machen.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-ink/5"
              >
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500"
                >
                  <Icon className="size-[1.1rem]" strokeWidth={2.2} />
                </span>
                <span className="text-sm font-medium text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
