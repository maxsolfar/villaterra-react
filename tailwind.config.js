/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fff0eb',
          200: '#FFC3AD',
          300: '#FFA585',
          400: '#FF9670',
          500: '#FF7D4E',
          600: '#ff6933',
          700: '#ff5a1f',
          800: '#ff4b0a',
          900: '#f54100',
        },
        secondary: {
          100: '#3568c0',
          200: '#2c56a0',
          300: '#234580',
          400: '#1a3460',
          500: '#14284A',
          600: '#122340',
          700: '#0d1a30',
          800: '#091120',
          900: '#040910',
        },
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
