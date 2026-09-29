import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-lg border border-line bg-elevated text-body cursor-pointer transition-all duration-300 ease-signal hover:text-accent hover:border-accent hover:rotate-12"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
