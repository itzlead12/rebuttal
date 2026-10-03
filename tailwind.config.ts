import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rebuttal: {
          violet: "#6D28D9",
          electric: "#7C3AED",
          indigo: "#4338CA",
          navy: "#17113F",
          ink: "#0F1020",
          bg: "#FAFAFC",
          soft: "#F3EEFF",
          border: "#E8E5F0",
          success: "#16A34A",
          warning: "#F59E0B",
          danger: "#DC2626",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Google Sans", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 16, 32, 0.05), 0 1px 2px -1px rgba(15, 16, 32, 0.05)",
        card: "0 4px 20px -2px rgba(23, 17, 63, 0.06), 0 2px 6px -1px rgba(23, 17, 63, 0.04)",
        elevated: "0 12px 32px -4px rgba(23, 17, 63, 0.1), 0 4px 12px -2px rgba(23, 17, 63, 0.05)",
        glow: "0 0 35px -5px rgba(124, 58, 237, 0.25)",
      },
      backgroundImage: {
        "gradient-rebuttal": "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
        "gradient-rebuttal-dark": "linear-gradient(180deg, #17113F 0%, #0F1020 100%)",
        "gradient-soft": "linear-gradient(180deg, #F3EEFF 0%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
