/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'primary': '#0ea5e9',
        'secondary': '#1e293b',
      },
      fontFamily: {
        'hero-font': 'Sriracha'
      }
    },
    
  },
  plugins: [],
 
}

