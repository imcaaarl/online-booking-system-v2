/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    "max-w-4xl", "mx-auto", "p-6", "bg-white", "rounded-lg", "shadow-md"
  ],
  theme: {
    extend: {
      backgroundOpacity: {
        60: '0.6', // Ensure opacity 60 is defined
      },
    },
  },
  plugins: [],
});
