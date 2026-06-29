import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blush: "var(--blush)",
        gold: "var(--gold)",
        goldSoft: "var(--gold-soft)",
        coffeeDark: "var(--coffee-dark)",
        coffeeLight: "var(--coffee-light)",
        cream: "var(--cream)",
        creamForeground: "var(--cream-foreground)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(125, 102, 77, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
