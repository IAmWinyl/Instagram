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
        always_white: "var(--web-always-white)",
        primary_background: "var(--ig-primary-background)",
        secondary_background: "var(--ig-secondary-background)",
        elevated_separator: "var(--ig-elevated-separator)",
        primary_text: "var(--ig-primary-text)",
        secondary_text: "var(--ig-secondary-text)",
        stroke: "var(--ig-stroke)",
        focus_stroke: "var(--ig-focus-stroke)",
        primary_button: "var(--ig-primary-button)",
        secondary_button: "var(--ig-secondary-button)",
        primary_button_hover: "var(--ig-primary-button-hover)",
        link: "var(--ig-link)",
      }
    },
    fontFamily: {
      sans: [
        '-apple-system', 
        'BlinkMacSystemFont', 
        '"Segoe UI"', 
        'Roboto', 
        'Helvetica', 
        'Arial', 
        'sans-serif',
      ],
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '18%': { opacity: '0' },
        '100%' : { opacity: '1'},
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 3s forwards',
      fadeOut: 'fadeOut 3s forwards',
    },
  },
  plugins: [],
};
export default config;
