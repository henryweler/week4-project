"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme and save
  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
      className="px-4 py-2 bg-black text-white rounded"
    >
      {theme === "light"
        ? "🌙 Dark Mode"
        : "☀️ Light Mode"}
    </button>
  );
}
