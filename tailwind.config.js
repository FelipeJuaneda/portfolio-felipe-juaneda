/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      colors:{
        "blackRich":"#0C1618",
        "violetaPrincipal":"#6e07f3",
        "celestePrincipal":"#5be9b9",
        "grisDark":"#f3f4f6"
      },
      screens: {
        '1280': { 'raw': '(max-width: 1280px)' },
        '1024': { 'raw': '(max-width: 1024px)' },
        '900': { 'raw': '(max-width: 900px)' },
        '910':{'raw': '(min-width: 910px)'},
        '910max':{'raw': '(max-width: 910px)'},
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