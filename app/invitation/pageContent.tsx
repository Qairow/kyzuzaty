"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { CalendarBlock } from "@/components/CalendarBlock";
import { Countdown } from "@/components/Countdown";
import { HostsBlock } from "@/components/HostsBlock";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MusicToggle } from "@/components/MusicToggle";
import { RsvpFormUI } from "@/components/RsvpFormUI";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { eventDetails } from "@/data/siteContent";

export function InvitationContent() {
  const { language, t } = useLanguage();

  const venueName = language === "kz" ? eventDetails.venueKz : eventDetails.venueRu;
  const address = language === "kz" ? eventDetails.addressKz : eventDetails.addressRu;

  return (
    <main className="flex justify-center bg-[#2b2017]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="w-full max-w-[480px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.45)]"
      >
        {/* 1. HERO */}
        <section className="relative h-[100vh] min-h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero.jpeg"
            alt={t.brideName}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-coffeeDark" />

          <div className="absolute left-4 top-4 z-10">
            <LanguageSwitcher />
          </div>
          <div className="absolute right-4 top-4 z-10">
            <MusicToggle variant="badge" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-cream">
            <p className="font-script text-6xl text-gold drop-shadow-md sm:text-7xl">
              {t.brideName}
            </p>
            <p className="text-sm uppercase tracking-[0.4em] text-cream">{t.sectionLabel}</p>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 bottom-8 flex justify-center text-cream"
          >
            <ChevronDown />
          </motion.div>
        </section>

        {/* 2. GREETING */}
        <section className="bg-marble px-6 py-16 text-cream sm:px-10">
          <ScrollReveal className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gold">{t.sectionLabel}</p>
            <p className="mt-4 font-script text-4xl text-gold sm:text-5xl">
              {t.greetingGreeting}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-8 space-y-4 text-center">
            <p className="text-lg leading-8 text-cream">{t.greetingText}</p>
            <p className="text-base leading-7 text-muted">{t.greetingTextSecondary}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="mt-10 flex items-center justify-center gap-6">
            <div className="relative h-48 w-36 shrink-0 overflow-hidden rounded-[1.5rem] border border-gold/30 shadow-soft">
              <Image src="/images/saukele.jpeg" alt={t.brideName} fill className="object-cover" />
            </div>
            <VerticalDate iso={eventDetails.dateIso} />
          </ScrollReveal>
        </section>

        {/* 3. CALENDAR */}
        <section className="bg-marble-light px-6 py-16 sm:px-10">
          <ScrollReveal>
            <CalendarBlock />
          </ScrollReveal>
        </section>

        {/* 4. COUNTDOWN */}
        <section className="bg-marble px-6 py-16 text-center text-cream sm:px-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-5xl">{t.countdownTitle}</h2>
            <div className="mt-8">
              <Countdown />
            </div>
          </ScrollReveal>
        </section>

        {/* 5. LOCATION */}
        <section className="bg-marble px-6 py-16 text-center text-cream sm:px-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-5xl">{t.venueTitle}</h2>
            <div className="mt-6 space-y-3 text-lg text-cream">
              <p>{venueName}</p>
              <p>{address}</p>
              <p>{eventDetails.time}</p>
            </div>
            <a
              href={eventDetails.mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-md bg-cream px-8 py-3 text-sm uppercase tracking-[0.25em] text-coffeeDark transition hover:-translate-y-0.5 hover:bg-white"
            >
              {t.venueButton}
            </a>
          </ScrollReveal>
        </section>

        {/* 6. RSVP (visual only, no backend) */}
        <section className="bg-marble px-6 py-16 text-center sm:px-10">
          <ScrollReveal>
            <p className="font-script text-4xl text-gold sm:text-5xl">{t.rsvpTitle}</p>
            <p className="mt-3 text-cream">{t.rsvpSubtitle}</p>
            <div className="mt-8">
              <RsvpFormUI />
            </div>
          </ScrollReveal>
        </section>

        {/* 7. HOSTS */}
        <section className="bg-marble-light px-6 py-16 sm:px-10">
          <ScrollReveal>
            <HostsBlock />
          </ScrollReveal>
        </section>
      </motion.div>
    </main>
  );
}

function VerticalDate({ iso }: { iso: string }) {
  const date = new Date(iso);
  const segments = [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getFullYear()),
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      {segments.map((segment, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex flex-col items-center leading-none">
            {segment.split("").map((digit, digitIndex) => (
              <span
                key={digitIndex}
                className="font-display text-2xl text-gold sm:text-3xl"
              >
                {digit}
              </span>
            ))}
          </div>
          {index < segments.length - 1 && (
            <span className="mt-2 h-1 w-1 rounded-full bg-gold/60" />
          )}
        </div>
      ))}
    </div>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M5 9l7 7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
