/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        ink: {
          DEFAULT: "#0f172a",
          muted: "#475569",
          subtle: "#64748b",
        },
        surface: {
          DEFAULT: "#ffffff",
          sunken: "#f8fafc",
          raised: "#ffffff",
          border: "#e2e8f0",
        },
      },
      fontFamily: {
        josefin: ["var(--font-josefin)"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "headline": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 4px 16px -2px rgb(15 23 42 / 0.06)",
        "card-hover":
          "0 2px 4px 0 rgb(15 23 42 / 0.04), 0 12px 32px -4px rgb(15 23 42 / 0.10)",
        ring: "0 0 0 1px rgb(15 23 42 / 0.05)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [heroui()],
};