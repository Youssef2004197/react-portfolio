/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', "Times", "serif"],
      },
      colors: {
        bg: {
          deep: "rgb(var(--c-bg-deep) / <alpha-value>)",
          surface: "rgb(var(--c-bg-surface) / <alpha-value>)",
          surface2: "rgb(var(--c-bg-surface2) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--c-accent) / <alpha-value>)",
          soft: "rgb(var(--c-accent-soft) / <alpha-value>)",
          dim: "rgb(var(--c-accent) / 0.15)",
        },
        ink: {
          primary: "rgb(var(--c-ink-primary) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--c-ink-faint) / <alpha-value>)",
        },
        line: "rgb(var(--c-line) / var(--c-line-a))",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(109, 131, 245, 0.35)",
        card: "0 10px 30px -12px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};