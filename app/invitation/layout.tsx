import { Cormorant_Garamond, Marck_Script, Playfair_Display } from "next/font/google";

const displayFont = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

// Great Vibes / Pinyon Script don't ship Cyrillic glyphs, which breaks kz/ru text —
// Marck Script is the closest calligraphic Google Font with Cyrillic support.
const scriptFont = Marck_Script({
  subsets: ["latin", "cyrillic"],
  variable: "--font-script",
  weight: ["400"],
});

const bodyFont = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${displayFont.variable} ${scriptFont.variable} ${bodyFont.variable} font-body`}>
      {children}
    </div>
  );
}
