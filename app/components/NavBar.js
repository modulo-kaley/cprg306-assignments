"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const weekLinks = [
  { href: "/week-2", label: "Week 2" },
  { href: "/week-3", label: "Week 3" },
  { href: "/week-4", label: "Week 4" },
  { href: "/week-5", label: "Week 5" },
  { href: "/week-6", label: "Week 6" },
  { href: "/week-7", label: "Week 7" },
];

export default function NavBar() {
  const [darkModeOn, setDarkModeOn] = useState(
    () => typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const handleToggle = () => {
    const newDarkModeOn = !darkModeOn;
    document.documentElement.classList.toggle("dark", newDarkModeOn);
    localStorage.setItem("theme", newDarkModeOn ? "dark" : "light");
    setDarkModeOn(newDarkModeOn);
  };

  return (
    <nav className="nav">
      <div className="max-w-4xl mx-auto flex items-center justify-between">

        <Link href="/" className="nav-logo">
          ✨ Web Development 2
        </Link>

        <div className="flex items-center gap-4">

          <Link href="/" className="nav-link">Home</Link>

          {/* Assignments Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="nav-link flex items-center gap-1"
            >
              Assignments
              <span className="text-xs">{dropdownOpen ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen && (
              <div className="nav-dropdown-menu">
                {weekLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setDropdownOpen(false)}
                    className="nav-dropdown-item"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleToggle}
            className="btn-theme-toggle"
            aria-label="Toggle dark mode"
          >
            {typeof window !== "undefined" ? (darkModeOn ? "🌙" : "☀️") : null}
          </button>

        </div>
      </div>
    </nav>
  );
}