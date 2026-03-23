// consider making the site header a component 

import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
// ─── Fonts ─────────────────────────────────────────────────
// Lora: serif font for headings (--font-lora)
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

// DM Sans: clean sans-serif for body text (--font-dm-sans)
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// ─── Metadata ──────────────────────────────────────────────
// Tab title and description for the app
export const metadata = {
  title: "Oooh, She has a Shopping List!",
  description: "Living, Laughing, Learning",
};

// ─── Theme Script ──────────────────────────────────────────
// Runs synchronously in the browser BEFORE React loads.
// Checks localStorage for a saved preference, falls back to
// the user's system preference (prefers-color-scheme).
// Adds "dark" class to <html> instantly — no flash, no mismatch.

const themeScript = `
  (function() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    if (isDark) document.documentElement.classList.add("dark");
  })()
`;

// ─── Root Layout ───────────────────────────────────────────
// Wraps every page in the app. Fonts are injected as CSS
// variables so Tailwind can reference them via --font-serif
// and --font-sans (defined in globals.css @theme inline).
// suppressHydrationWarning: tells React to ignore the "dark"
// class difference between server and client on <html>.
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${lora.variable} ${dmSans.variable} antialiased`}>
          <NavBar />
          {children}
      </body>
    </html>
  );
}