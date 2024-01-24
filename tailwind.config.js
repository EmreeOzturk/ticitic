/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noisy: "url('/src/assets/images/noise.gif')",
      },
    },
  },
  plugins: [],
};
