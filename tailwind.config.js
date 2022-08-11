/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: "hsla(160, 100%, 37%, 1)",
      light: "#f8f8f8",
      dark: "#222222",
    },
  },
  plugins: [],
};
