/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          brand: {
            black: "#0B0C10",
            gunmetal: "#1F2833",
            silver: "#C5C6C7",
            purple: "#A855F7",
            violet: "#6B21A8",
          },
        },
        fontFamily: {
          syne: ["Syne", "sans-serif"],
          grotesk: ["Space Grotesk", "sans-serif"],
        },
      },
    },
    plugins: [],
  };