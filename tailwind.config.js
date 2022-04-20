const plugin = require('tailwindcss/plugin')

module.exports = {
  jit: true,
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        'h1': {fontSize: theme('fontSize.2xl')},
        'h2': {fontSize: theme('fontSize.xl')},
        'h3': {fontSize: theme('fontSize.lg')},
      })
    })
  ],
};