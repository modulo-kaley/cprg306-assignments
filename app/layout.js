import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${dmSans.variable} antialiased`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}