import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center: true
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        primary: "#FEFEFF",
        inActive: '#ff783457',
        secondary: "#073126",
        secondaryLight: "#0C513F",
        tertiary: "#FF7834",
        dark: "#000"
      },
      backgroundColor: {
        primary: "#FEFEFF",
        secondary: "#073126",
        inActive: '#ff783457',
        secondaryLight: "#0C513F",
        tertiary: "#FF7834",
        dark: "#000"
      },
      borderColor: {
        primary: "#FEFEFF",
        secondary: "#073126",
        inActive: '#ff783457',
        secondaryLight: "#0C513F",
        tertiary: "#FF7834",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeOutRight: {
          "0%": { transform: "translateX(0%)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 0.5s ease-out",
        fadeOutRight: "fadeOutRight 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
