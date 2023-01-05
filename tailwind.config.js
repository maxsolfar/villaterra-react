/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#5cfff4',
          200: '#33fff1',
          300: '#0affef',
          400: '#00e0d1',
          500: '#00C6BA',
          600: '#00b8ab',
          700: '#00a398',
          800: '#008f85',
          900: '#007a72',
        },
        /* secondary: {
          100: '#3568c0',
          200: '#2c56a0',
          300: '#234580',
          400: '#1a3460',
          500: '#14284A',
          600: '#122340',
          700: '#0d1a30',
          800: '#091120',
          900: '#040910',
        }, */
        secondary: '#181A1E',
        terceary: '#345EA8',
        dark: '#181A1E',
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
