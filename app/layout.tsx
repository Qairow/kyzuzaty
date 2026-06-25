import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

import Providers from "./providers";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Қыз ұзату | Дана & Нұрканат",
  description: "Двуязычное приглашение на қыз ұзату Даны и Нұрканата.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
