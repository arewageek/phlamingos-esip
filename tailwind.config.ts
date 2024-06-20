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
        primary: {
          100: "#ccff00",
        },
        secondary: {
          100: "#ff04b4",
          200: "#000",
        },
        accent: {
          100: "rgb(2, 255, 100)",
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

export default config;
