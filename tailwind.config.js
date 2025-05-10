const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'borderWidth': 'borderWidth',
        'borderColor': 'borderColor',
        'letterSpacing': 'letterSpacing',
        'backgroundOpacity': 'backgroundOpacity',
        'opacity': 'opacity'
      },
      colors: {
        primary: colors.indigo,
        secondary: colors.blue,
        tertiary: colors.slate,
        success: {
          DEFAULT: colors.green[700],
          dark: colors.green[800],
        },
        danger: {
          DEFAULT: colors.red[600],
          dark: colors.red[800],
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
          DEFAULT: colors.slate[900],
          light: colors.slate[800],
        },
      },
      cursor: {
        grab: 'grab',
        'context-menu': 'context-menu'
      }
    }
  },
  variants: {
    extend: {
      width: ['hover', 'focus'],
      ringWidth: ['hover'],
      ringColor: ['hover'],
      letterSpacing: ['hover', 'focus'],
      borderWidth: ['hover'],
      display: ['group-hover'],
      opacity: ['group-hover']
    },
  },
  plugins: [],
};