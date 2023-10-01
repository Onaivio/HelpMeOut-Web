/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
       
      },
      colors: {
        primary: "#100A42",
        secondary: "#141414",
        
      },
    },
  },
  plugins: [],
};
