import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        malva: {
          50: "#f5f0f7",
          100: "#ebe2ef",
          200: "#d5c4dd",
          300: "#bea6c9",
          400: "#9c8aa5",
          500: "#8a7693",
          600: "#746280",
          700: "#5e4b63",
          800: "#4a3b4f",
          900: "#382d3c",
        },
        ciruela: {
          50: "#f3eff4",
          100: "#e4dce6",
          200: "#c9b9cd",
          300: "#a990af",
          400: "#8a6e92",
          500: "#6e5575",
          600: "#5e4b63",
          700: "#4d3d52",
          800: "#3e3142",
          900: "#302535",
        },
        arena: {
          50: "#faf8f5",
          100: "#f4f0eb",
          200: "#eae3dc",
          300: "#ddd3c8",
          400: "#c9bba9",
          500: "#b5a38e",
          600: "#9a8876",
          700: "#7d6e60",
          800: "#655950",
          900: "#504741",
        },
        humo: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#cccccc",
          300: "#a3a3a3",
          400: "#7a7a7a",
          500: "#525252",
          600: "#3a3a3a",
          700: "#2e2e2e",
          800: "#1f1f1f",
          900: "#141414",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-soft":
          "linear-gradient(135deg, #f5f0f7 0%, #eae3dc 50%, #f4f0eb 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
