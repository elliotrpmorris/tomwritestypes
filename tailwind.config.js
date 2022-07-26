module.exports = {
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Galano\\ Grotesque', 'system-ui'],
      mono: ['Ubuntu\\ Mono'],
      serif: ['Cousine', 'serif'],
    },
    colors: {
      blackcoral: 'var(--black-coral)',
      electricBlue: 'var(--electric-blue)',
      outrageousOrange: 'var(--outrageous-orange)',
      maizeCrayola: 'var(--maize-crayola)',
      mistyRose: 'var(--misty-rose)',
      white: 'var(--white)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ['./components/*.tsx', './pages/*.tsx', './pages/**/*.tsx'],
};
