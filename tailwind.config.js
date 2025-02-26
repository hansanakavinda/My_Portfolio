/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all source files
    "./components/**/*.{js,jsx,ts,tsx}", // Include components directory
    "./app/**/*.{js,jsx,ts,tsx}" // If using the app router
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        pokemon: "var(--font-press-start)",
      },
      fontSize: {
        tiny: '0.6rem',  // Adding a tiny font size
      },
    },
  },
  plugins: [],
};
