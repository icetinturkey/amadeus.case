/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'font2': ['"Exo2"', 'Segoe UI','Helvetica Neue','sans-serif'],
      'font1': ['"Star Jedi Outline"', 'Segoe UI','Helvetica Neue', 'sans-serif']
    },
    backgroundPosition: {
      'footer1d': '0px 0px;',
      'footer2d': '0px 48px;',
      'footer3d': '0px 96px;',
      'footer4d': '0px 144px;',
      'footer5d': '0px 192px;',
      'footer1n': '192px 0px;',
      'footer2n': '192px 48px;',
      'footer3n': '192px 96px;',
      'footer4n': '192px 144px;',
      'footer5n': '192px 192px;'
    },
    extend: {},
  },
  plugins: [],
}