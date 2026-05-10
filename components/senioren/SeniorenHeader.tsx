import Link from "next/link";
import { Phone } from "lucide-react";
import { SENIOREN_PATH } from "@/lib/senioren/constants";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";

export function SeniorenHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-brand-100/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href={SENIOREN_PATH} className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid size-9 place-items-center rounded-full bg-brand-400 font-display text-lg font-bold text-cream shadow-sm"
          >
            C
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
            Spanisch <span className="text-brand-500">mit Cristina</span>
          </span>
        </Link>
        <a
          href={PHONE_TEL}
          className="hidden h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-cream shadow-sm transition hover:bg-brand-500 md:inline-flex"
          aria-label={`Cristina anrufen: ${PHONE_DISPLAY}`}
        >
          <Phone className="size-4" /> {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
