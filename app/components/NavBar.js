"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useUserAuth } from "../contexts/AuthContext";

// All weekly assignment routes — add a new entry here when a new week is added.
const weekLinks = [
  { href: "/week-2", label: "Week 2" },
  { href: "/week-3", label: "Week 3" },
  { href: "/week-4", label: "Week 4" },
  { href: "/week-5", label: "Week 5" },
  { href: "/week-6", label: "Week 6" },
  { href: "/week-7", label: "Week 7" },
  { href: "/week-8", label: "Week 8" },
  { href: "/week-9", label: "Week 9" },
];

export default function NavBar() {
  // Pull auth state and sign-in/out functions from context so the nav
  // can reactively show the correct button without any prop drilling.
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [darkModeOn, setDarkModeOn] = useState(false);

  // Sync with the <html> class set by the inline theme script in layout.js.
  // Must run in useEffect to avoid a server/client hydration mismatch.
  useEffect(() => {
    setDarkModeOn(document.documentElement.classList.contains("dark"));
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the assignments dropdown when the user clicks anywhere outside it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Toggle dark mode: update the <html> class and persist the choice to
  // localStorage so the inline theme script can restore it on next load.
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

          {/* Auth Button — shows 🔑 when logged out, 👤 when logged in.
              Sits beside the theme toggle and reuses btn-theme-toggle
              so both buttons stay visually consistent. */}
          {user ? (
            <button
              onClick={firebaseSignOut}
              className="btn-theme-toggle"
              aria-label="Sign out"
            >
              👤
            </button>
          ) : (
            <button
              onClick={gitHubSignIn}
              className="btn-theme-toggle"
              aria-label="Sign in with GitHub"
            >
              🔑
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="btn-theme-toggle"
            aria-label="Toggle dark mode"
          >
            {darkModeOn ? "🌙" : "☀️"}
          </button>

        </div>
      </div>
    </nav>
  );
}