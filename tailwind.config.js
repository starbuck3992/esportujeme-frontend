module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: '"Oswald", sans-serif;',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
