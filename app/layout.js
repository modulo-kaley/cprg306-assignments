import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oooh, She has a Shopping List!",
  description: "Living, Laughing, Learning",
};

const themeScript = `
  (function() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    if (isDark) document.documentElement.classList.add("dark");
  })()
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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