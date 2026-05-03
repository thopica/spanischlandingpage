"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/links";
import { trackLead } from "@/lib/track";

const NIVEAUS = [
  { value: "anfaenger", label: "Anfänger:in (kein Spanisch)" },
  { value: "vorkenntnisse", label: "Etwas Vorkenntnisse" },
  { value: "fortgeschritten", label: "Fortgeschritten" },
  { value: "unsicher", label: "Bin mir nicht sicher" },
] as const;

const schema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen an"),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse an"),
  phone: z.string().optional(),
  niveau: z.enum(
    ["anfaenger", "vorkenntnisse", "fortgeschritten", "unsicher"],
    {
      message: "Bitte wähle dein Niveau",
    },
  ),
  message: z
    .string()
    .min(10, "Bitte schreib ein paar Worte (mindestens 10 Zeichen)"),
  // honeypot
  botcheck: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export function Kontakt() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { niveau: undefined },
  });

  const onSubmit = async (data: FormData) => {
    if (data.botcheck) return;

    if (!WEB3FORMS_KEY) {
      setSubmitState("error");
      setErrorMsg(
        "Das Formular ist noch nicht aktiviert. Bitte schreib mir kurz per WhatsApp – ich melde mich umgehend.",
      );
      return;
    }

    setSubmitState("submitting");
    setErrorMsg("");

    const niveauLabel =
      NIVEAUS.find((n) => n.value === data.niveau)?.label ?? data.niveau;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Neue Anfrage von Landingpage – ${data.name}`,
          from_name: "Spanisch mit Cristina – Landingpage",
          name: data.name,
          email: data.email,
          phone: data.phone || "—",
          niveau: niveauLabel,
          message: data.message,
        }),
      });

      const json = (await res.json()) as { success?: boolean; message?: string };

      if (json.success) {
        trackLead("contact-form");
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
        setErrorMsg(
          json.message ||
            "Etwas ist schiefgelaufen. Bitte versuch es nochmal oder schreib mir per WhatsApp.",
        );
      }
    } catch {
      setSubmitState("error");
      setErrorMsg(
        "Verbindungsproblem. Bitte versuch es gleich nochmal oder schreib mir per WhatsApp.",
      );
    }
  };

  const inputBase =
    "w-full rounded-2xl border bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink-soft/55 transition focus:outline-none focus:ring-4";
  const inputOk =
    "border-ink/10 focus:border-brand-400 focus:ring-brand-400/15";
  const inputErr =
    "border-accent/70 bg-accent/5 focus:border-accent focus:ring-accent/15";

  return (
    <section
      id="kontakt"
      className="relative bg-cream px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Kontakt
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Bereit für deine gratis Probelektion?
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Schreib mir kurz, was du lernen möchtest – ich melde mich
            normalerweise innerhalb weniger Stunden.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-5 md:gap-8">
          {/* Form (3/5 width on desktop) */}
          <div className="md:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
              {submitState === "success" ? (
                <SuccessState onReset={() => setSubmitState("idle")} />
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      error={errors.name?.message}
                      required
                    >
                      <input
                        type="text"
                        autoComplete="name"
                        placeholder="Dein Vorname"
                        {...register("name")}
                        className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                      />
                    </Field>
                    <Field
                      label="E-Mail"
                      error={errors.email?.message}
                      required
                    >
                      <input
                        type="email"
                        autoComplete="email"
                        placeholder="du@beispiel.ch"
                        {...register("email")}
                        className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Telefon (optional)" hint="Z. B. für WhatsApp">
                      <input
                        type="tel"
                        autoComplete="tel"
                        placeholder="+41 ..."
                        {...register("phone")}
                        className={`${inputBase} ${inputOk}`}
                      />
                    </Field>
                    <Field
                      label="Mein Spanisch-Niveau"
                      error={errors.niveau?.message}
                      required
                    >
                      <select
                        defaultValue=""
                        {...register("niveau")}
                        className={`${inputBase} ${errors.niveau ? inputErr : inputOk} appearance-none bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12`}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%234B5563' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                        }}
                      >
                        <option value="" disabled>
                          Bitte wählen…
                        </option>
                        {NIVEAUS.map((n) => (
                          <option key={n.value} value={n.value}>
                            {n.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field
                    label="Deine Nachricht"
                    error={errors.message?.message}
                    hint="Was möchtest du lernen? Wann passt es dir am besten?"
                    required
                  >
                    <textarea
                      rows={5}
                      placeholder="Hola Cristina! Ich möchte gerne…"
                      {...register("message")}
                      className={`${inputBase} resize-y ${errors.message ? inputErr : inputOk}`}
                    />
                  </Field>

                  {/* Honeypot */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    {...register("botcheck")}
                    className="hidden"
                  />

                  {submitState === "error" && errorMsg && (
                    <div
                      role="alert"
                      className="rounded-2xl border border-accent/30 bg-accent/5 p-4 text-sm text-accent"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 text-base font-semibold text-cream shadow-lg shadow-ink/15 transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitState === "submitting" ? (
                      <>
                        <Loader2 className="size-5 animate-spin" />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        Gratis Probelektion anfragen
                        <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-ink-soft">
                    Mit dem Absenden stimmst du zu, dass ich dich per E-Mail
                    oder Telefon kontaktiere.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Direct contact card (2/5 width on desktop) */}
          <aside className="flex flex-col gap-4 md:col-span-2">
            <div className="rounded-3xl bg-ink p-6 text-cream shadow-sm sm:p-8">
              <h3 className="font-display text-xl font-semibold">
                Lieber direkt schreiben?
              </h3>
              <p className="mt-2 text-sm text-cream/75">
                Am schnellsten erreichst du mich per WhatsApp. Ich antworte
                meistens innerhalb weniger Stunden.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead("whatsapp-kontakt-card")}
                className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-success px-5 text-base font-semibold text-white shadow-lg transition hover:bg-success-dark"
              >
                <MessageCircle className="size-5" /> WhatsApp schreiben
              </a>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={EMAIL_MAILTO}
                  onClick={() => trackLead("email-kontakt-card")}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-cream transition hover:bg-white/10"
                >
                  <Mail className="size-4 shrink-0 text-brand-200" />
                  <span className="truncate">{EMAIL}</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-cream">
                  <MessageCircle className="size-4 shrink-0 text-brand-200" />
                  <span>{PHONE_DISPLAY}</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-200/60 sm:p-7">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand-500"
                >
                  <Clock className="size-[1.1rem]" strokeWidth={2.4} />
                </span>
                <div>
                  <div className="font-semibold text-ink">Schnelle Antwort</div>
                  <p className="mt-1 text-sm text-ink-soft">
                    Werktags antworte ich meist noch am gleichen Tag.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand-500">*</span>}
      </span>
      {hint && !error && (
        <span className="mt-0.5 block text-xs text-ink-soft">{hint}</span>
      )}
      {/* Password managers (e.g. LastPass) inject nodes into inputs — suppress mismatch noise */}
      <div className="mt-1.5" suppressHydrationWarning>
        {children}
      </div>
      {error && (
        <span className="mt-1.5 block text-xs font-medium text-accent">
          {error}
        </span>
      )}
    </label>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="grid size-16 place-items-center rounded-full bg-success/15 text-success-dark">
        <CheckCircle2 className="size-8" strokeWidth={2.2} />
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
        ¡Gracias! Deine Anfrage ist da.
      </h3>
      <p className="mt-2 max-w-md text-base text-ink-soft">
        Ich melde mich innerhalb weniger Stunden bei dir – meistens per E-Mail
        oder WhatsApp. Bis bald!
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm font-medium text-brand-600 underline-offset-4 hover:underline"
      >
        Eine weitere Nachricht senden
      </button>
    </div>
  );
}
