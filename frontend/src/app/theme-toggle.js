"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      // Default to dark if preferred or unspecified
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      if (initial === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return <span className="w-12 h-6 inline-block" />;
  }

  return (
    <button
      onClick={toggle}
      className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white text-xs font-mono px-2 py-1 rounded border border-neutral-300 dark:border-neutral-800 transition-colors cursor-pointer"
      title="Toggle Light / Dark mode"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "light ☼" : "dark ☾"}
    </button>
  );
}
