"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`inline-flex items-center gap-3 rounded-full border px-2 py-2 text-sm font-medium transition-all duration-300 ${
        isDark
          ? "border-slate-600 bg-slate-800 text-slate-100"
          : "border-slate-300 bg-white text-slate-800"
      }`}
    >
      <span
        className={`grid h-8 w-8 place-items-center rounded-full transition-all duration-300 ${
          isDark ? "bg-slate-700" : "bg-amber-100"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
      <span>{isDark ? "Dark mode" : "Light mode"}</span>
      <span
        className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
          isDark ? "bg-cyan-400" : "bg-amber-500"
        }`}
      />
    </button>
  );
}
