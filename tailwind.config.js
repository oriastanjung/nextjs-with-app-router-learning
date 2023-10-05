/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['var(--font-exo2)'],
        orbitron : ['var(--font-orbitron)']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
