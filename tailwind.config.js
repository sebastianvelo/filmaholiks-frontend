const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'borderWidth': 'borderWidth',
      },
      colors: {
        primary: {
          light: colors.yellow[200],
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[600],
        },
        secondary: {
          light: colors.indigo[200],
          DEFAULT: colors.indigo[500],
          dark: colors.indigo[600],
        },
        success: {
          DEFAULT: colors.green[500],
          dark: colors.green[600],
        },
        danger: {
          DEFAULT: colors.red[600],
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
    },
  },
  plugins: [],
};