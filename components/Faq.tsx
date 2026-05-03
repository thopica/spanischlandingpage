import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "Ich bin absoluter Anfänger – kann ich trotzdem starten?",
    answer:
      "Absolut. Mehr als die Hälfte meiner Schüler:innen startet bei null. Wir beginnen ganz entspannt mit den Grundlagen und du wirst schon in den ersten Lektionen einfache Sätze auf Spanisch sagen können.",
  },
  {
    question: "Wie viele Lektionen brauche ich, um etwas sagen zu können?",
    answer:
      "Das hängt von deinem Ziel ab. Für einfache Konversation im Urlaub reichen oft 8 – 12 Lektionen. Für berufliches Spanisch oder fliessende Konversation planen wir gemeinsam einen längeren Lernweg. Wir besprechen das in der Probelektion.",
  },
  {
    question: "Online oder vor Ort in Zürich – was ist besser?",
    answer:
      "Beides funktioniert hervorragend. Online sparst du Zeit und kannst von überall in der Schweiz teilnehmen. Vor Ort in Zürich bietet mehr persönliche Atmosphäre. Du entscheidest – und kannst auch zwischen beiden Formaten wechseln.",
  },
  {
    question: "Wann findet der Unterricht statt?",
    answer:
      "Die Termine vereinbaren wir flexibel nach deinem Kalender – auch abends oder am Wochenende. Es gibt keinen festen Stundenplan, der dir den Stress nimmt.",
  },
  {
    question: "Wie funktioniert die Bezahlung?",
    answer:
      "CHF 60 pro 60-Minuten-Lektion. Bezahlt wird, wann es dir passt – TWINT, Banküberweisung oder bar in Zürich. Keine Abos, keine Vorauszahlungen, keine versteckten Kosten.",
  },
];

export function Faq() {
  return (
    <section className="bg-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Häufige Fragen
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Was du wissen möchtest – beantwortet
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Wenn deine Frage nicht dabei ist, schreib mir einfach per WhatsApp.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ink/10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 md:mt-14">
          {FAQS.map(({ question, answer }) => (
            <details
              key={question}
              className="group px-5 py-1 transition open:bg-brand-50/40 sm:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-ink transition hover:text-brand-600 sm:text-lg">
                <span>{question}</span>
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 transition group-open:rotate-180 group-open:bg-brand-400 group-open:text-cream"
                >
                  <ChevronDown className="size-5" strokeWidth={2.4} />
                </span>
              </summary>
              <p className="-mt-1 pb-6 pr-12 text-base leading-relaxed text-ink-soft">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
