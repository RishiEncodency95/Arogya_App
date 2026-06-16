/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary-green': '#0A4232',
        'accent-gold': '#DFB143',
        'bg-cream': '#F9F9F4',
        'text-dark': '#2D3748',
        'border-light': '#E2E8F0',
      }
    },
  },
  plugins: [],
};