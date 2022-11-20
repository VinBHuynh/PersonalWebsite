/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['Poppins', 'sans-serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
