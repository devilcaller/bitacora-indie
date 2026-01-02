/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Este es el morado brillante que reemplaza al amarillo
        'brand-purple': '#a855f7', 
      },
    },
  },
  plugins: [],
}