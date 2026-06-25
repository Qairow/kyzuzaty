"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Countdown } from "@/components/Countdown";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { eventDetails, galleryImages } from "@/data/siteContent";

export function InvitationContent() {
  const { language, t } = useLanguage();

  const formattedDate = language === "kz" ? eventDetails.dateKz : eventDetails.dateRu;
  const venueName = language === "kz" ? eventDetails.venueKz : eventDetails.venueRu;
  const address = language === "kz" ? eventDetails.addressKz : eventDetails.addressRu;

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,165,165,0.12),_transparent_32%),radial-gradient(circle_at_bottom,_rgba(201,168,118,0.12),_transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>

        <ScrollReveal className="mt-8 rounded-[2rem] border border-gold/20 bg-white/80 px-6 py-12 shadow-soft sm:px-10 lg:px-14">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 h-12 w-28 text-gold/80">
              <Ornament />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold/80">
              {t.invitationTitle}
            </p>
            <h1 className="mt-4 font-display text-5xl text-foreground sm:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-base text-foreground/70 sm:text-lg">
              {t.heroSubtitle}
            </p>

            <div className="mt-8 grid gap-4 text-center sm:grid-cols-3">
              <DetailCard label={t.detailsLabelDate} value={formattedDate} />
              <DetailCard label={t.detailsLabelTime} value={eventDetails.time} />
              <DetailCard label={t.detailsLabelPlace} value={venueName} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-10 max-w-3xl text-center" delay={0.05}>
          <p className="font-display text-4xl text-gold sm:text-5xl">{t.invitationTitle}</p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">{t.invitationText}</p>
          <p className="mt-4 text-lg leading-8 text-foreground/75">
            {t.invitationTextSecondary}
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="mt-14 rounded-[2rem] border border-gold/20 bg-white/80 px-6 py-10 shadow-soft sm:px-10"
          delay={0.08}
        >
          <div className="text-center">
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              {t.countdownTitle}
            </h2>
            <div className="mt-8">
              <Countdown />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="mt-14 rounded-[2rem] border border-gold/20 bg-white/80 px-6 py-10 shadow-soft sm:px-10"
          delay={0.1}
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-4xl text-foreground sm:text-5xl">
                {t.venueTitle}
              </h2>
              <div className="mt-6 space-y-4 text-lg text-foreground/75">
                <p>{venueName}</p>
                <p>{address}</p>
                <p>{eventDetails.time}</p>
              </div>
              <a
                href={eventDetails.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-gold bg-gold px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#b99966]"
              >
                {t.venueButton}
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-gold/15 bg-background px-6 py-8">
              <div className="mx-auto h-40 w-40 text-gold/70">
                <FloralLineArt />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <section className="mt-14 pb-12">
          <ScrollReveal className="text-center" delay={0.12}>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              {t.galleryTitle}
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <ScrollReveal key={src} delay={0.05 * index}>
                <div className="overflow-hidden rounded-[1.75rem] border border-gold/15 bg-white shadow-soft">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={src}
                      alt={`${t.heroTitle} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-gold/15 bg-background px-4 py-5">
      <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{label}</p>
      <p className="mt-2 text-lg text-foreground/75">{value}</p>
    </div>
  );
}

function Ornament() {
  return (
    <svg viewBox="0 0 120 40" className="h-full w-full" fill="none">
      <path
        d="M4 20H35C42 20 47 14 47 7C47 14 52 20 59 20C52 20 47 26 47 33C47 26 42 20 35 20H4ZM116 20H85C78 20 73 14 73 7C73 14 68 20 61 20C68 20 73 26 73 33C73 26 78 20 85 20H116Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="20" r="4" fill="currentColor" fillOpacity="0.6" />
    </svg>
  );
}

function FloralLineArt() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" fill="none">
      <path
        d="M100 182V68M100 68C92 49 73 34 54 30C58 48 71 66 100 68ZM100 68C108 49 127 34 146 30C142 48 129 66 100 68Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100 103C87 93 71 89 54 91C61 108 77 117 100 116C123 117 139 108 146 91C129 89 113 93 100 103Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100 148C89 138 77 133 64 133C69 147 81 156 100 158C119 156 131 147 136 133C123 133 111 138 100 148Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
