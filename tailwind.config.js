/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'google-gray': '#f2f2f2',
      'words-purple': '#271baf',
      'words-midnight': '#4e5257',
      'line': '#e6e7e9',
      'outline': '#dcdcdd',
      'user-green': '#34a853',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
}
