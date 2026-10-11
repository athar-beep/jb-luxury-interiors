import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1480px",
      },
    },
    extend: {
      colors: {
        surface: "rgb(var(--surface) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        chalk: "rgb(var(--chalk) / <alpha-value>)",
        stone: "rgb(var(--stone) / <alpha-value>)",
        sand: "rgb(var(--sand) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-700": "rgb(var(--ink-700) / <alpha-value>)",
        "ink-500": "rgb(var(--ink-500) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        eucalyptus: "rgb(var(--eucalyptus) / <alpha-value>)",
        "eucalyptus-deep": "rgb(var(--eucalyptus-deep) / <alpha-value>)",
        clay: "rgb(var(--clay) / <alpha-value>)",
        "clay-deep": "rgb(var(--clay-deep) / <alpha-value>)",
        "clay-soft": "rgb(var(--clay-soft) / <alpha-value>)",
        walnut: "rgb(var(--walnut) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.16em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tight: "-0.02em",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
        xl: "10px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,46,43,0.04), 0 10px 34px -16px rgba(26,46,43,0.22)",
        lift: "0 30px 70px -34px rgba(26,46,43,0.5)",
        hairline: "inset 0 0 0 1px rgba(26,46,43,0.12)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        "out-quint": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "line-grow": "line-grow 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 1.6s infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
