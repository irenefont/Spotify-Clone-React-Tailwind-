/** @type {import('tailwindcss').Config} */
import colors from "./src/themes/colors.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors
      },
    },
  },
  plugins: [],
}
