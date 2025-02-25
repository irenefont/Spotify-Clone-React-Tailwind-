/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'spotify-black':'#121212',
        'spotify-gris':'#242424',
      }
    },
  },
  plugins: [],
}
