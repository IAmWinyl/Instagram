import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_background: "var(--ig-primary-background)",
        secondary_background: "var(--ig-secondary-background)",
        elevated_separator: "var(--ig-elevated-separator)",
        primary_text: "var(--ig-primary-text)",
        secondary_text: "var(--ig-secondary-text)",
        stroke: "var(--ig-stroke)",
        focus_stroke: "var(--ig-focus-stroke)",
        primary_button: "var(--ig-primary-button)",
        secondary_button: "var(--ig-seçcondary-button)",
      }
    },
    fontFamily: {
      sans: [
        '-apple-system', 
        'BlinkMacSystemFont', 
        '"Segoe UI"', 
        'Roboto', 
        '"Helvetica Neue"', 
        'Arial', 
        'sans-serif',
        '"Apple Color Emoji"', 
        '"Segoe UI Emoji"', 
        '"Segoe UI Symbol"'
      ],
    },
  },
  plugins: [],
};
export default config;
