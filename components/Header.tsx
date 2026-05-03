import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-brand-100/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
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
        <WhatsAppLink
          source="header"
          className="hidden h-10 items-center gap-2 rounded-full bg-success px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-success-dark md:inline-flex"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </WhatsAppLink>
      </div>
    </header>
  );
}
