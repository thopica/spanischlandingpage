"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_HOURS,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/links";
import { trackLead } from "@/lib/track";

const schema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen an"),
  kontakt: z
    .string()
    .min(5, "Bitte gib eine Telefonnummer oder E-Mail-Adresse an"),
  message: z.string().optional(),
  botcheck: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const FALLBACK_REPLY_EMAIL = "kontakt@spanisch-mit-cristina.ch";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SeniorenKontakt() {
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
  });

  const onSubmit = async (data: FormData) => {
    if (data.botcheck) return;

    if (!WEB3FORMS_KEY) {
      setSubmitState("error");
      setErrorMsg(
        "Das Formular ist gerade nicht aktiv. Bitte ruf mich an oder schreib mir per WhatsApp. Ich melde mich umgehend.",
      );
      return;
    }

    setSubmitState("submitting");
    setErrorMsg("");

    const isEmail = EMAIL_REGEX.test(data.kontakt.trim());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Neue Anfrage Senioren-Seite: ${data.name}`,
          from_name: "Spanisch mit Cristina (Senioren)",
          name: data.name,
          email: isEmail ? data.kontakt : FALLBACK_REPLY_EMAIL,
          kontakt: data.kontakt,
          kontakt_typ: isEmail ? "E-Mail" : "Telefon / anderes",
          message: data.message?.trim() || "(keine Nachricht)",
        }),
      });

      const json = (await res.json()) as { success?: boolean; message?: string };

      if (json.success) {
        trackLead("contact-form-senioren");
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
        setErrorMsg(
          json.message ||
            "Etwas ist schiefgelaufen. Bitte versuch es nochmal oder ruf mich kurz an.",
        );
      }
    } catch {
      setSubmitState("error");
      setErrorMsg(
        "Verbindungsproblem. Bitte versuch es gleich nochmal oder ruf mich kurz an.",
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
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Kontakt
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Bereit für deine gratis Probelektion?
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">
            Schreib mir kurz, was du lernen möchtest, oder ruf einfach an. Ich
            melde mich meist noch am gleichen Tag.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
          <li>
            <a
              href="#kontakt-form"
              className="group flex h-full flex-col rounded-3xl bg-ink p-6 text-cream shadow-md ring-1 ring-ink/20 transition hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg"
            >
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-cream group-hover:text-brand-700"
              >
                <Mail className="size-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">
                Formular ausfüllen
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/85">
                Schreib mir hier kurz, was du lernen möchtest. Drei Felder,
                fertig.
              </p>
              <span className="mt-auto inline-flex min-h-11 items-center gap-1 pt-4 text-sm font-semibold text-brand-50">
                Zum Formular <ArrowDown className="size-4" />
              </span>
            </a>
          </li>

          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead("whatsapp-kontakt-card-senioren")}
              className="group flex h-full flex-col rounded-3xl bg-success-dark p-6 text-white shadow-md ring-1 ring-success-dark/40 transition hover:-translate-y-0.5 hover:bg-success hover:shadow-lg"
            >
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-2xl bg-white/15 text-white transition group-hover:bg-white group-hover:text-success-dark"
              >
                <MessageCircle className="size-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">
                WhatsApp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Eine kurze Nachricht reicht. Ich antworte meist innerhalb
                weniger Stunden.
              </p>
              <span className="mt-auto inline-flex min-h-11 items-center gap-1 pt-4 text-sm font-semibold">
                Auf WhatsApp schreiben <ArrowRight className="size-4" />
              </span>
            </a>
          </li>

          <li>
            <a
              href={PHONE_TEL}
              onClick={() => trackLead("phone-kontakt-card-senioren")}
              className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-md"
              aria-label={`Cristina anrufen: ${PHONE_DISPLAY}`}
            >
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-400 group-hover:text-cream"
              >
                <Phone className="size-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                Anrufen
              </h3>
              <div className="mt-1 font-display text-2xl font-semibold text-brand-600">
                {PHONE_DISPLAY}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {PHONE_HOURS}
              </p>
            </a>
          </li>
        </ul>

        <div
          id="kontakt-form"
          className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-10 md:mt-14"
        >
          {submitState === "success" ? (
            <SuccessState onReset={() => setSubmitState("idle")} />
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  Probelektion anfragen
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  Drei Felder. Mehr brauche ich nicht.
                </p>
                <p className="mt-2 text-sm text-ink-soft/90">
                  Auch «absolut bei null» ist eine vollkommen gute Antwort. Du
                  musst nichts vorbereiten.
                </p>
              </div>

              <Field label="Name" error={errors.name?.message} required>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Dein Vorname"
                  {...register("name")}
                  className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                />
              </Field>

              <Field
                label="Wie darf ich dich erreichen?"
                hint="Telefonnummer oder E-Mail. Beides ist mir recht."
                error={errors.kontakt?.message}
                required
              >
                <input
                  type="text"
                  autoComplete="tel email"
                  placeholder="z. B. 077 123 45 67 oder vorname@beispiel.ch"
                  {...register("kontakt")}
                  className={`${inputBase} ${errors.kontakt ? inputErr : inputOk}`}
                />
              </Field>

              <Field
                label="Was möchtest du lernen?"
                hint="Optional. Ein, zwei Sätze reichen."
              >
                <textarea
                  rows={4}
                  placeholder="Hola Cristina! Ich möchte gerne…"
                  {...register("message")}
                  className={`${inputBase} resize-y ${inputOk}`}
                />
              </Field>

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
                    Probelektion anfragen
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-ink-soft">
                Mit dem Absenden stimmst du zu, dass ich dich per Telefon oder
                E-Mail kontaktiere.
              </p>
            </form>
          )}
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
      <span className="block text-base font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand-500">*</span>}
      </span>
      {hint && !error && (
        <span className="mt-0.5 block text-sm text-ink-soft">{hint}</span>
      )}
      <div className="mt-1.5" suppressHydrationWarning>
        {children}
      </div>
      {error && (
        <span className="mt-1.5 block text-sm font-medium text-accent">
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
        Ich melde mich meist noch am gleichen Tag bei dir, per Telefon, E-Mail
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
