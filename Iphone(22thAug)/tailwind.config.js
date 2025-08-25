/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: '#C0C0C0',
        link: '#2563eb', 
      },
    },
  },
  plugins: [],
}