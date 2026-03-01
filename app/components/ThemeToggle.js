"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="
        fixed top-4 right-4 z-50
        w-12 h-12 rounded-pill
        bg-earth-bison dark:bg-earth-soya
        border border-earth-stonewall/30
        flex items-center justify-center
        text-xl
        hover:bg-earth-stonewall dark:hover:bg-earth-oyster
        transition-colors duration-200
        shadow-md
      "
      aria-label="Toggle dark mode"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}