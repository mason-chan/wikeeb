const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        HelveticaRoundedBold: ["HelveticaRoundedBold"],
      },
      colors: {
        first: 'rgb(43, 43, 43)',
        second: 'rgb(241, 190, 176)',
      }
    },
  },
  plugins: [],
}