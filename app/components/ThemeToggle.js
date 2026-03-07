"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
<button
  onClick={() => alert("🚧 Dark/Light mode is under construction!")}
  className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-earth-bison dark:bg-earth-soya border border-earth-stonewall/30 flex items-center justify-center text-xl hover:bg-earth-stonewall dark:hover:bg-earth-oyster transition-colors duration-200 shadow-md"
  aria-label="Toggle dark mode"
>
  {isDark ? "🌙" : "☀️"}
</button>
  );
}