/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    // The original custom properties remain the single source of truth.
    // Tailwind utilities resolve against them, so light/dark still switch
    // instantly via [data-theme] on <html>.
    extend: {
      colors: {
        bg: "var(--bg)",
        elevated: "var(--bg-elevated)",
        body: "var(--text)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        line: "var(--border)",
      },
      fontFamily: {
        display: ["Space Grotesk", "Segoe UI", "sans-serif"],
        body: ["Inter", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        shell: "1140px",
      },
      borderRadius: {
        DEFAULT: "10px",
        card: "16px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 14s linear infinite",
        bob: "bob 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        spin: "spin 0.8s linear infinite",
      },
    },
  },
  plugins: [],
};
