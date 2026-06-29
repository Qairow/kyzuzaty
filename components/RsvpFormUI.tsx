"use client";

import { useState, type FormEvent } from "react";

import { useLanguage } from "@/contexts/LanguageContext";

type Attendance = "yes" | "no" | null;
type Status = "idle" | "submitting" | "success" | "error";

export function RsvpFormUI() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [attending, setAttending] = useState<Attendance>(null);
  const [status, setStatus] = useState<Status>("idle");

  const isSubmitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (attending === null || isSubmitting) {
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          spouseName: partnerName,
          attending: attending === "yes",
        }),
      });
      const data = await res.json();
      setStatus(data.ok ? "success" : "error");
    } catch (error) {
      console.error("RSVP request failed", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-gold/30 bg-white/10 px-8 py-12 text-center backdrop-blur">
        <p className="font-script text-4xl text-gold sm:text-5xl">{t.rsvpThanksTitle}</p>
        <p className="mt-4 text-lg text-cream">{t.rsvpThanksText}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-gold/25 bg-white/5 px-6 py-10 text-left backdrop-blur sm:px-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.3em] text-cream">
            {t.rsvpNameLabel}
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t.rsvpNamePlaceholder}
            className="mt-2 w-full rounded-full border border-gold/30 bg-white/10 px-5 py-3 text-cream placeholder:text-muted outline-none transition focus:border-gold"
          />
        </label>

        <label className="block">
          <span className="text-xs uppercase tracking-[0.3em] text-cream">
            {t.rsvpPartnerLabel}
          </span>
          <input
            type="text"
            value={partnerName}
            onChange={(event) => setPartnerName(event.target.value)}
            placeholder={t.rsvpPartnerPlaceholder}
            className="mt-2 w-full rounded-full border border-gold/30 bg-white/10 px-5 py-3 text-cream placeholder:text-muted outline-none transition focus:border-gold"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10">
        <RadioOption
          name="attending"
          checked={attending === "yes"}
          onChange={() => setAttending("yes")}
          label={t.rsvpYes}
        />
        <RadioOption
          name="attending"
          checked={attending === "no"}
          onChange={() => setAttending("no")}
          label={t.rsvpNo}
        />
      </div>

      {status === "error" && (
        <p className="mt-6 text-center text-sm text-blush">{t.rsvpErrorText}</p>
      )}

      <div className="mt-10 text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex rounded-full border border-gold bg-gold px-10 py-3 text-sm uppercase tracking-[0.25em] text-coffeeDark transition hover:-translate-y-0.5 hover:bg-goldSoft disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? t.rsvpSubmitting : t.rsvpSubmit}
        </button>
      </div>
    </form>
  );
}

function RadioOption({
  name,
  checked,
  onChange,
  label,
}: {
  name: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-cream">
      <input
        type="radio"
        name={name}
        required
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden
        className={`flex h-5 w-5 items-center justify-center rounded-full border transition ${
          checked ? "border-gold bg-gold" : "border-gold/40"
        }`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-coffeeDark" />}
      </span>
      {label}
    </label>
  );
}
