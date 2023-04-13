import { check } from 'prettier'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'desktop-light':"url('/src/assets/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'mobile-light':"url('/src/assets/images/bg-mobile-light.jpg')",
      },
      fontFamily: {
        'sans': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'primary': 'hsl(220 98% 61%)',
        'very-light-gray': 'hsl(var(--very-light-gray) / <alpha-value>)',
        'very-dark-blue': 'hsl(var(--very-dark-blue) / <alpha-value>)',
        'linear-blue': 'hsl(192, 100%, 67%)',
        'linear-pink': 'hsl(280, 87%, 65%)',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}