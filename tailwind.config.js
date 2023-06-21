/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layout': "url('@/assets/images/shared/background.webp')",
      }
    }
  },
  plugins: [],
}