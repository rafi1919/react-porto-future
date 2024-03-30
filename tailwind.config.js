/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Open-sans': ['Open-sans', 'sans-serif'],
      },
      colors:{
        primary: '#D6FF41',
        blackDark: '#101010',
        blackLight: '#171717',
        grayDark: '#353434',
        grayLight: '#C1C1C1',

      }
    },
  },
  plugins: [],
}

