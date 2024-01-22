/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         black: '#21262A',
         red: '#DB334D',
      },
      fontFamily: {
         inter: ['Inter', 'sans-serif'],
      },
      extend: {},
   },
   plugins: [],
};
