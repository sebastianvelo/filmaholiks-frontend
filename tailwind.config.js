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
        teal: colors.teal,
        orange: colors.orange,
        primary: {
          light: '#EFFFFD',
          DEFAULT: '#B8FFF9',
          dark: '#39edff',
        },
        secondary: {
          light: "#0E5F76",
          DEFAULT: "#083D56",
          dark: "#0C2233",
        },
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
          DEFAULT: colors.gray[900],
          light: colors.gray[800],
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