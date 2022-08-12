const colors = require('tailwindcss/colors')

const green = {
  light: "#1ff286",
  DEFAULT: "#0CCE6B",
  dark: "#0aa556",
};

const yellow = {
  lighter: '#fef5da',
  light: '#ffe7a1',
  DEFAULT: "#FCCA46",
  dark: "#fbb807",
}

const lightblue = {
  lighter: '#d2fffb',
  light: '#B8FFF9',
  DEFAULT: '#39edff',
  dark: '#00b6c8',
};

const darkBlue = {
  lighter: "#b6cfd5",
  light: "#86afba",
  DEFAULT: "#083D56",
  dark: "#0C2233",
  darker: "#072f3b"
};

const primary = yellow;
const secondary = darkBlue;

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
        primary,
        secondary,
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
          DEFAULT: colors.blueGray[900],
          light: colors.blueGray[800],
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