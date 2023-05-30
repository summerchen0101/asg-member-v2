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
          100: '#FCF7DD',
          200: '#F9EDBD',
          300: '#EEDB98',
          400: '#DDC479',
          500: '#C7A64F',
          600: '#AB8839',
          700: '#8F6C27',
          800: '#735219',
          900: '#5F400F',
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
