import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Impressum — Spanisch mit Cristina",
  description: "Rechtliche Informationen zur Website von Cristina Caamaño.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14 md:px-8 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-ink-soft transition hover:text-ink"
      >
        <ArrowLeft className="size-4" /> Zurück zur Startseite
      </Link>

      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Impressum
      </h1>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-ink-soft">
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
            Verantwortlich für den Inhalt
          </h2>
          <p className="mt-3 text-ink">
            Cristina Caamaño
            <br />
            Friesstrasse 22
            <br />
            8050 Zürich
            <br />
            Schweiz
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
            Kontakt
          </h2>
          <div className="mt-3 space-y-2 text-ink">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 transition hover:text-brand-600"
            >
              <Mail className="size-4 text-brand-500" /> {EMAIL}
            </a>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 transition hover:text-brand-600"
            >
              <Phone className="size-4 text-brand-500" /> {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
            Haftungsausschluss
          </h2>
          <p className="mt-3">
            Die Autorin übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
            Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
            Vollständigkeit der Informationen. Haftungsansprüche gegen die
            Autorin wegen Schäden materieller oder immaterieller Art, welche aus
            dem Zugriff oder der Nutzung beziehungsweise Nichtnutzung der
            veröffentlichten Informationen, durch Missbrauch der Verbindung oder
            durch technische Störungen entstanden sind, werden ausgeschlossen.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
            Urheberrechte
          </h2>
          <p className="mt-3">
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
            oder anderen Dateien auf dieser Website gehören ausschliesslich
            Cristina Caamaño oder den speziell genannten Rechtsinhaberinnen.
            Für die Reproduktion jeglicher Elemente ist die schriftliche
            Zustimmung der Urheberrechtsträgerin im Voraus einzuholen.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
            Datenschutz
          </h2>
          <p className="mt-3">
            Auf dieser Website werden zur Optimierung von Werbeanzeigen Cookies
            des Meta-Pixels (Facebook/Instagram) eingesetzt. Diese sammeln
            anonymisierte Informationen über das Besucher:innen-Verhalten.
            Mit der Nutzung dieser Website erklärst du dich mit dem Einsatz
            einverstanden. Du kannst das Tracking jederzeit über die
            Einstellungen deines Browsers oder direkt in deinem Meta-Konto
            deaktivieren.
          </p>
          <p className="mt-3">
            Beim Absenden des Kontaktformulars werden die von dir eingegebenen
            Daten ausschliesslich zur Bearbeitung deiner Anfrage per E-Mail an
            mich übermittelt (über den Dienst Web3Forms) und nicht an Dritte
            weitergegeben.
          </p>
        </section>
      </div>
    </main>
  );
}
