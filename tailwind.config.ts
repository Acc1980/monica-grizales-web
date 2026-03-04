import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        malva: {
          50: "#f0f4f2",
          100: "#dce8e3",
          200: "#bed4cc",
          300: "#9dbaaf",
          400: "#8fa394",
          500: "#7a9082",
          600: "#63756a",
          700: "#4e5d54",
          800: "#3c4941",
          900: "#2d3832",
        },
        ciruela: {
          50: "#faf4f0",
          100: "#f4e5dc",
          200: "#e8ccbc",
          300: "#d9ae98",
          400: "#c88d74",
          500: "#b77360",
          600: "#9d5d4d",
          700: "#7f4a3d",
          800: "#663c31",
          900: "#4f2e26",
        },
        arena: {
          50: "#faf9f7",
          100: "#f3f1ee",
          200: "#e8e6e1",
          300: "#d5d3cd",
          400: "#bfbbb4",
          500: "#a5a09a",
          600: "#878279",
          700: "#6d6860",
          800: "#57534d",
          900: "#44413c",
        },
        humo: {
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#d0d0d0",
          300: "#a8a8a8",
          400: "#7a7a7a",
          500: "#525252",
          600: "#3a3a3a",
          700: "#2c2c2c",
          800: "#1f1f1f",
          900: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-soft":
          "linear-gradient(135deg, #f0f4f2 0%, #e8e6e1 50%, #f3f1ee 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
