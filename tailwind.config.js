/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const cdnBaseUrl = "https://ddxnp40hswui0.cloudfront.net";

module.exports = {
  content: [
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode support
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": `url('${cdnBaseUrl}/hero.webp')`,
        "hero-image-mobile": `url('${cdnBaseUrl}/hero-mobile.webp')`,
        "footer-image": `url('${cdnBaseUrl}/footer.webp')`,
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      opacity: ["disabled"], // Moved from variants to extend
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
