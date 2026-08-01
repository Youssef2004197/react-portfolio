/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', "Times", "serif"],
      },
      colors: {
        bg: {
          deep: "#0b0f1a",
          surface: "#131826",
          surface2: "#171d2e",
        },
        accent: {
          DEFAULT: "#6d83f5",
          soft: "#8b9cf7",
          dim: "rgba(109, 131, 245, 0.15)",
        },
        ink: {
          primary: "#f5f6fa",
          muted: "#9aa3b8",
          faint: "#6b7280",
        },
        line: "rgba(255, 255, 255, 0.08)",
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
