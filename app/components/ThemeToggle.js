"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkModeOn, setDarkModeOn] = useState(() => {
    // this only runs on the client, so window/localStorage are safe here
    if (typeof window === "undefined") return true; // default to dark on server
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    // no saved preference — check system, default to dark if system is on auto
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark ?? true; // if uncertain, default to dark 🌙
  });

  useEffect(() => {
    console.log("🗂️ Initial dark mode state:", darkModeOn);
    document.documentElement.classList.toggle("dark", darkModeOn);
    console.log("🌐 Applied dark class to <html>:", darkModeOn);
  }, []);

  const handleToggle = () => {
    const newDarkModeOn = !darkModeOn;
    console.log("🖱️ Toggle clicked — switching to:", newDarkModeOn ? "dark" : "light");

    document.documentElement.classList.toggle("dark", newDarkModeOn);
    localStorage.setItem("theme", newDarkModeOn ? "dark" : "light");
    console.log("💾 Saved new theme to localStorage:", newDarkModeOn ? "dark" : "light");

    setDarkModeOn(newDarkModeOn);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-earth-bison dark:bg-earth-soya border border-earth-stonewall/30 flex items-center justify-center text-xl hover:bg-earth-stonewall dark:hover:bg-earth-oyster transition-colors duration-200 shadow-md"
      aria-label="Toggle dark mode"
    >
      {darkModeOn ? "🌙" : "☀️"}
    </button>
  );
}