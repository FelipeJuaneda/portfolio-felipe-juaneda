/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      colors:{
        "blackRich":"#0C1618",
        
      },
      screens: {
        '1024': { 'raw': '(max-width: 1024px)' },
        '900': { 'raw': '(max-width: 900px)' },
        '768': { 'raw': '(max-width: 768px)' },
        '580': { 'raw': '(max-width: 580px)' },
        '550': { 'raw': '(max-width: 550px)' },
        '450': { 'raw': '(max-width: 450px)' },

      }
    },
    fontFamily: {
      'notoFont': ["'Raleway', sans-serif"]
    },
  },
  plugins: [],
}