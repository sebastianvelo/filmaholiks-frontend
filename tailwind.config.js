const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
        primary: colors.blue,
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
      },
      fontFamily: {
        brand: ['Bebas Neue', 'sans-serif'],
      },
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
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: theme('spacing.1'),
            height: theme('spacing.1'),
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: theme('borderRadius.full'),
            backgroundColor: theme('colors.secondary.100'),
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: theme('borderRadius.full'),
            backgroundColor: theme('colors.secondary.300'),
          },
        },
        '.dark .scrollbar::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.primary.950'),
        },
        '.dark .scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.primary.900'),
        },
      }, ['responsive']);
    }),
  ],
};