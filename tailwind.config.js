/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#5A0677',
        darkNavy: '#04033A',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #5A0677, #04033A)',
      },
    },
  },
  plugins: [],
}
