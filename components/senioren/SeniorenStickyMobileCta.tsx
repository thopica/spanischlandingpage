"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";
import { trackLead } from "@/lib/track";

export function SeniorenStickyMobileCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("kontakt");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -25% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-cream/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex gap-2">
        <a
          href={PHONE_TEL}
          onClick={() => trackLead("phone-sticky-mobile-senioren")}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white text-sm font-semibold text-ink shadow-md transition active:bg-brand-50"
          aria-label={`Cristina anrufen: ${PHONE_DISPLAY}`}
        >
          <Phone className="size-4" /> Anrufen
        </a>
        <a
          href="#kontakt"
          className="inline-flex h-12 flex-[1.6] items-center justify-center rounded-full bg-ink text-sm font-semibold text-cream shadow-md transition active:bg-brand-500"
        >
          Gratis Probelektion
        </a>
      </div>
    </div>
  );
}
