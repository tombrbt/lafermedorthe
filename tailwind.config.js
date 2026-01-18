/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#961E14", // Bordeaux profond
        beige: "#F5F1E9",   // Beige clair
        olive: "#7A8153",   // Vert olive doux
        taupe: "#8B7E71",   // Taupe / gris chaud
        ivory: "#FFF9F2",   // Ivoire
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
