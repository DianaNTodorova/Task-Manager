/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#10162F',
        customBeige: '#FFF0E5 ',
      },
    },
  },
  plugins: [],
};
