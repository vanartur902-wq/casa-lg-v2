/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#C5A059',
          dark: '#080808',
          silver: '#E5E5E5',
          accent: '#1A1A1A'
        }
      },
      fontFamily: {
        'display': ['"Cinzel"', 'serif'],
        'sans': ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}