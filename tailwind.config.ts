import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F5EFE0",
        cream: "#FBF7EC",
        burgundy: {
          DEFAULT: "#6B1F1F",
          dark: "#4A1414",
          light: "#8B2D2D",
        },
        sage: {
          DEFAULT: "#3E5640",
          dark: "#2A3C2C",
          light: "#5A7259",
        },
        ink: "#1F1A17",
        gold: "#B8893E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
