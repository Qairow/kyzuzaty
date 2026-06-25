"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { MusicToggle } from "@/components/MusicToggle";
import { useLanguage } from "@/contexts/LanguageContext";

type EnvelopeStep = "idle" | "seal" | "flap" | "petals" | "fade";

const PETAL_POSITIONS = [
  { x: -90, y: -110, rotate: -28 },
  { x: 0, y: -135, rotate: 8 },
  { x: 88, y: -102, rotate: 26 },
];

export function Envelope() {
  const [step, setStep] = useState<EnvelopeStep>("idle");
  const router = useRouter();
  const { t } = useLanguage();

  const isOpening = step !== "idle";
  const showSeal = step === "idle" || step === "seal";
  const showPetals = step === "petals";
  const isFading = step === "fade";

  const pageAnimation = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: isFading ? 0 : 1 },
      transition: { duration: 0.65, ease: "easeOut" as const },
    }),
    [isFading]
  );

  const handleOpen = () => {
    if (isOpening) {
      return;
    }

    setStep("seal");
  };

  return (
    <motion.main
      {...pageAnimation}
      onAnimationComplete={() => {
        if (step === "fade") {
          router.push("/invitation");
        }
      }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,165,165,0.12),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(201,168,118,0.12),_transparent_35%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        <p className="max-w-sm text-sm uppercase tracking-[0.32em] text-foreground/70 sm:text-base">
          {t.shortInvite}
        </p>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            className={`relative ${isOpening ? "pointer-events-none" : ""}`}
            aria-label={t.openHint}
          >
            <motion.div
              animate={{ rotate: [0, -1.2, 1.2, 0], y: [0, -2, 0] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="relative w-[320px] origin-center sm:w-[420px]"
            >
              <AnimatePresence mode="wait">
                {showPetals && (
                  <motion.div
                    key="petals"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      if (step === "petals") {
                        setStep("fade");
                      }
                    }}
                    className="pointer-events-none absolute inset-0 z-30"
                  >
                    {PETAL_POSITIONS.map((petal, index) => (
                      <motion.svg
                        key={index}
                        viewBox="0 0 48 64"
                        className="absolute left-1/2 top-1/2 h-10 w-8 -translate-x-1/2 -translate-y-1/2 text-blush"
                        initial={{ opacity: 0, scale: 0.5, x: 0, y: 0, rotate: 0 }}
                        animate={{
                          opacity: [0, 1, 0.15],
                          scale: [0.5, 1, 0.9],
                          x: petal.x,
                          y: petal.y,
                          rotate: petal.rotate,
                        }}
                        transition={{
                          duration: 0.65,
                          ease: "easeOut",
                          delay: index * 0.05,
                        }}
                      >
                        <path
                          d="M24 4C12 14 6 27 6 40c0 11 7 20 18 20s18-9 18-20C42 27 36 14 24 4Z"
                          fill="currentColor"
                          fillOpacity="0.8"
                        />
                      </motion.svg>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <svg viewBox="0 0 480 340" className="drop-shadow-[0_20px_50px_rgba(115,92,70,0.15)]">
                <defs>
                  <linearGradient id="envelopeFront" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#fffdf8" />
                    <stop offset="100%" stopColor="#f6efe6" />
                  </linearGradient>
                  <linearGradient id="envelopeBack" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8f2ea" />
                    <stop offset="100%" stopColor="#f2e8db" />
                  </linearGradient>
                </defs>

                <g>
                  <path
                    d="M50 108C50 95 60 84 74 84H406C420 84 430 95 430 108V266C430 280 420 292 406 292H74C60 292 50 280 50 266V108Z"
                    fill="url(#envelopeBack)"
                    stroke="#C9A876"
                    strokeWidth="2"
                  />

                  <motion.g
                    style={{ transformBox: "fill-box", transformOrigin: "50% 0%" }}
                    animate={{
                      rotateX: step === "flap" || step === "petals" || step === "fade" ? -178 : 0,
                    }}
                    transition={{ duration: 0.72, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      if (step === "flap") {
                        setStep("petals");
                      }
                    }}
                  >
                    <path
                      d="M74 84H406C417 84 426 92 428 103L240 204L52 103C54 92 63 84 74 84Z"
                      fill="#fffaf2"
                      stroke="#C9A876"
                      strokeWidth="2"
                    />
                  </motion.g>

                  <path
                    d="M50 109L240 230L430 109"
                    fill="none"
                    stroke="#E9D7BF"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 108L196 224H74C60 224 50 214 50 200V108Z"
                    fill="url(#envelopeFront)"
                    stroke="#C9A876"
                    strokeWidth="2"
                  />
                  <path
                    d="M430 108L284 224H406C420 224 430 214 430 200V108Z"
                    fill="url(#envelopeFront)"
                    stroke="#C9A876"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 108L240 246L430 108V266C430 280 420 292 406 292H74C60 292 50 280 50 266V108Z"
                    fill="url(#envelopeFront)"
                    stroke="#C9A876"
                    strokeWidth="2"
                  />

                  <AnimatePresence>
                    {showSeal && (
                      <motion.g
                        key="seal"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{
                          opacity: step === "seal" ? 0 : 1,
                          scale: step === "seal" ? 0.82 : 1,
                          y: step === "seal" ? -10 : 0,
                        }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        onAnimationComplete={() => {
                          if (step === "seal") {
                            setStep("flap");
                          }
                        }}
                      >
                        <circle cx="240" cy="128" r="26" fill="#D4A5A5" />
                        <circle
                          cx="240"
                          cy="128"
                          r="22"
                          fill="none"
                          stroke="#9F6E6E"
                          strokeDasharray="3 5"
                        />
                        <path
                          d="M229 129c3-6 7-10 11-12 4 2 8 6 11 12-4 4-7 7-11 10-4-3-8-6-11-10Z"
                          fill="#fff8f4"
                        />
                      </motion.g>
                    )}
                  </AnimatePresence>
                </g>
              </svg>
            </motion.div>
          </button>

          <div
            className="absolute bottom-10 right-6 sm:static"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="rounded-full border border-gold/25 bg-white/70 p-2 shadow-soft backdrop-blur">
              <MusicToggle />
            </div>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.32em] text-foreground/45">
          {t.openHint}
        </p>
      </div>
    </motion.main>
  );
}
