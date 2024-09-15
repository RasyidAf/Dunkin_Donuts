/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': "url('./src/assets/BackgroundDonat-2.jpg')"
      }
    },
  },
  plugins: [],
}

