/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        principal: {
          100: '#fff0eb',
          200: '#FFC3AD',
          300: '#FFA585',
          400: '#FF9670',
          500: '#FF7D4E',
          600: '#9D0001',
          700: '#680001',
          800: '#4E0000',
          900: '#340000',
        },
        secondarial: {
          100: '#F7E6E6',
          200: '#EBBFC0',
          300: '#DF9999',
          400: '#C64D4D',
          500: '#003049',
          600: '#9D0001',
          700: '#680001',
          800: '#4E0000',
          900: '#340000',
        },
        primary: '#FF7D4E',
        secondary: '#14284A',
        terceary: '#345EA8',
        dark: '#0F172A',
        light: '#f9f9f9',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
