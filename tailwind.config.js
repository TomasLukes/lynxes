/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Light colors
        'light-100': '#FFFFFF',
        'light-200': '#FAFAFA',
        'light-300': '#F1F1F1',

        // Dark colors
        'dark-900': '#000000',
        'dark-800': '#101010',

        // Primary colors
        'primary-500': '#FBAF85',
        'primary-700': '#D87D4A',
      },
    }
  },
  plugins: [],
}
