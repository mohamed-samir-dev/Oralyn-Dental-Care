/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // مهم عشان Tailwind يلقط كل الكومبوننتس
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
