/** @type {import('@heroui/react').HeroUITheme} */
const herouiTheme = {
  layout: { radius: { small: 0.5, medium: 0.75, large: 1 } },

  colors: {
    background: { DEFAULT: "#ffffff", foreground: "#0f172a" },
    foreground: {
      DEFAULT: "#0f172a",
      50: "#f8fafc",
      100: "#f1f5f9",
      600: "#475569",
      700: "#334155",
    },
    focus: "#2563eb",

    primary: {
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
      DEFAULT: "#2563eb",
      foreground: "#ffffff",
    },

    secondary: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      DEFAULT: "#059669",
      foreground: "#ffffff",
    },

    success: { DEFAULT: "#059669", foreground: "#ffffff" },
    warning: { DEFAULT: "#d97706", foreground: "#ffffff" },
    danger: { DEFAULT: "#dc2626", foreground: "#ffffff" },

    divider: { DEFAULT: "#e2e8f0" },

    content1: {
      DEFAULT: "#ffffff",
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
    },
  },

  typography: {
    fontFamily: {
      sans: ["var(--font-josefin)", "system-ui", "sans-serif"],
    },
  },
};

export default herouiTheme;