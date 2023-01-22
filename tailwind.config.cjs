/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./index.html"],
  
  darkMode: 'class',
  theme: {
    fontFamily: 'Poppins',
    screens: {
      'sm': { 'max': '500px' },
    },
    extend: {
      
    },
  },
  plugins: [],
}
