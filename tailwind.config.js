const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'borderWidth': 'borderWidth',
        'letterSpacing': 'letterSpacing',
      },
      colors: {
        primary: {
          light: '#fff9cc',
          DEFAULT: '#FFF275',
          dark: '#ffe41a',
        },
        secondary: {
          light: "#2EAADC",
          DEFAULT: "#186A8B",
          dark: "#030D11",
        },
        success: {
          DEFAULT: colors.green[500],
          dark: colors.green[600],
        },
        danger: {
          DEFAULT: colors.red[500],
          dark: colors.red[700],
        },
        warning: {
          DEFAULT: colors.orange[500],
          dark: colors.orange[600],
        },
        info: {
          DEFAULT: colors.blue[500],
          dark: colors.blue[600],
        },
        light: {
          DEFAULT: colors.gray[200],
          dark: colors.gray[300],
        },
        dark: {
          DEFAULT: colors.gray[900],
          light: colors.gray[800],
        },
      }
    }
  },
  variants: {
    extend: {
      width: ['hover', 'focus'],
      ringWidth: ['hover'],
      ringColor: ['hover'],
      letterSpacing: ['hover', 'focus'],
    },
  },
  plugins: [],
};