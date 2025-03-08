/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundOpacity: {
        60: '0.6', // Ensure opacity 60 is defined
      },
    },
  },
  plugins: [],
});
