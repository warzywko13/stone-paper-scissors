/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(15 23 42)',
        secondary: 'rgb(241 245 249)',
        boardPanel: 'rgb(51 65 85)',
        green: 'rgb(5 150 105)',
        red: 'rgb(225 29 72)'
      },
      animation: {
        pulse: 'pulse 0.4s infinite'
      }
    },
  },
  plugins: [],
}

