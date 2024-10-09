/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'medicalBackground': "url('/src/assets/images/medicalBackground.jpeg')",
        'medicalBackgroundOne': "url('/src/assets/images/medicalBackgroundOne.jpeg')",
      }
    },
  },
  plugins: [],
}

