/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Pure Black for headlines & primary CTAs
        secondary: "#BFBFBF", // Polished Silver for borders, icons, secondary buttons
        accent: "#F5E6D0", // Candle Flame Warmth for hover highlights & alerts
        background: "#FFFFFF", // Soft White for main canvas
        backgroundAlt: "#F8F8F8", // Light section breaks
        textBody: "rgba(0, 0, 0, 0.9)", // 90% Black for body
        textCaption: "rgba(0, 0, 0, 0.6)", // 60% Black for captions
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        h1: "3.5rem",
        h2: "2rem",
        h3: "1.5rem",
        body: "1rem",
        caption: "0.85em",
      },
      letterSpacing: {
        heading: "0.02em",
      },
      lineHeight: {
        body: "1.6",
      },
    },
  },
  plugins: [],
};
