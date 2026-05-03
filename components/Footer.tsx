import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid size-10 place-items-center rounded-full bg-brand-400 font-display text-lg font-bold text-cream"
            >
              C
            </span>
            <span className="font-display text-lg font-semibold">
              Spanisch <span className="text-brand-300">mit Cristina</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
            Massgeschneiderter Spanischunterricht — online aus der ganzen
            Schweiz oder vor Ort in Zürich.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-cream/45">
            Kontakt
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <WhatsAppLink
                source="footer"
                className="inline-flex items-center gap-2 text-cream transition hover:text-brand-200"
              >
                <MessageCircle className="size-4 text-brand-300" /> WhatsApp
              </WhatsAppLink>
            </li>
            <li>
              <a
                href={EMAIL_MAILTO}
                className="inline-flex items-center gap-2 text-cream transition hover:text-brand-200"
              >
                <Mail className="size-4 text-brand-300" /> {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 text-cream transition hover:text-brand-200"
              >
                <Phone className="size-4 text-brand-300" /> {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-cream/45">
            Rechtliches
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/impressum"
                className="text-cream transition hover:text-brand-200"
              >
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream/55 sm:flex-row md:px-8">
          <span>
            © {year} Spanisch mit Cristina. Alle Rechte vorbehalten.
          </span>
          <span>Gemacht in Zürich · ¡Hasta pronto!</span>
        </div>
      </div>
    </footer>
  );
}
