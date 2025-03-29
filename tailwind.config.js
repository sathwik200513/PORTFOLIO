/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#064e3b', // emerald-900
          accent: '#34d399', // emerald-400
        }
      },
    },
  },
  plugins: [],
}