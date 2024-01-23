/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         black: '#21262A',
         red: '#DB334D',
      },
      fontFamily: {
         'avenir-regular': ['AvenirRegular', 'sans-serif'],
         'avenir-bold': ['AvenirBold', 'sans-serif'],
         'avenir-heavy': ['AvenirHeavy', 'sans-serif'],
      },
      extend: {},
   },
   plugins: [],
};
