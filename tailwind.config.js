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
        orb: "var(--font-orb)",
        raj: "var(--font-raj)",
      },
      fontSize: {
        tiny: "0.6rem", // Custom small font size
      },
      spacing: {
        'ws-tiny': '0.05em',  // Smallest custom word spacing
        'ws-sm': '0.1em',
        'ws-md': '0.2em',
        'ws-lg': '0.3em',
      }
    },
  },

  plugins: [],
};
