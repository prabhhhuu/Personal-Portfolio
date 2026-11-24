import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center w-9 h-9 border border-line-strong bg-transparent text-body cursor-pointer transition-colors duration-200 hover:text-accent hover:border-accent"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
