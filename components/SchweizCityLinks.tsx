import Link from "next/link";
import { CITIES } from "@/lib/cities";

export function SchweizCityLinks() {
  return (
    <nav aria-label="Spanisch online lernen nach Region">
      <div className="rounded-3xl border border-brand-200/70 bg-brand-50/40 p-5 md:p-7">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Spanisch online lernen in der ganzen Schweiz
        </h2>
        <p className="mt-3 max-w-4xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Du möchtest Spanisch online lernen? Der 1:1-Unterricht funktioniert
          schweizweit per Video. Vor Ort unterrichte ich nur in Zürich, online
          jedoch in allen Regionen der Schweiz.
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-ink-soft sm:text-base">
          Besonders häufig werde ich für{" "}
          <Link
            href="/spanisch-lernen/bern"
            className="text-ink underline underline-offset-2"
          >
            Bern
          </Link>
          ,{" "}
          <Link
            href="/spanisch-lernen/basel"
            className="text-ink underline underline-offset-2"
          >
            Basel
          </Link>{" "}
          und{" "}
          <Link
            href="/spanisch-lernen/luzern"
            className="text-ink underline underline-offset-2"
          >
            Luzern
          </Link>{" "}
          angefragt. Du findest aber auch Seiten für weitere Städte mit
          spezifischen Infos zum Online-Unterricht.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {CITIES.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/spanisch-lernen/${city.slug}`}
                className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1.5 text-sm font-medium text-ink transition hover:border-brand-400 hover:text-brand-600"
              >
                Spanisch online lernen {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
