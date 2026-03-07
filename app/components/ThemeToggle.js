"use client";
import { useEffect } from "react";

export default function ThemeToggle() {

  useEffect(() => {
    // check if the user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    console.log("🗂️ Saved theme in localStorage:", savedTheme ?? "nothing saved");

    // check if the user's system is set to dark mode
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log("💻 System prefers dark mode:", systemPrefersDark);

    // use saved preference if it exists, otherwise fall back to system preference
    const shouldUseDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;
    console.log("🎨 Decision — should use dark mode:", shouldUseDark);

    // apply or remove the "dark" class on the root html element
    document.documentElement.classList.toggle("dark", shouldUseDark);
    console.log("🌐 Applied dark class to <html>:", shouldUseDark);
  }, []); // empty array means this runs once when the component mounts

  return (
    <button
      onClick={() => alert("🚧 Dark/Light mode is under construction!")}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-earth-bison dark:bg-earth-soya border border-earth-stonewall/30 flex items-center justify-center text-xl hover:bg-earth-stonewall dark:hover:bg-earth-oyster transition-colors duration-200 shadow-md"
      aria-label="Toggle dark mode"
    >
      🌙
    </button>
  );
}