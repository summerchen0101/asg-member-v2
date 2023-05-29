/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{scss,css,sass}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#D0F5FC',
          200: '#A2E6FA',
          300: '#71CCF0',
          400: '#4CAEE1',
          500: '#1985CE',
          600: '#1267B1',
          700: '#0C4D94',
          800: '#073677',
          900: '#042662',
        },
        secondary: {
          100: '#CAFCEE',
          200: '#97F9E6',
          300: '#61EDDE',
          400: '#3ADCD7',
          500: '#04BAC5',
          600: '#0292A9',
          700: '#026E8D',
          800: '#014F72',
          900: '#00395E',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
