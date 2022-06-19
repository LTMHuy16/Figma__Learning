/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024",
      xl: "1200px",
      // "2xl": "1440px",
    },
    fontFamily: {
      Manrope: ['"Manrope"', "sans-serif"],
      OpenSans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        "light-green": "#69E6A6",
        "dark-blue": "#0A2640",
        "alt-light-green": "#65E4A3",
        "light-grey": "#F1F1F1",
        "alt-gray": "#777777",
        black: "#000000",
        "border-gray": "##C4C4C4",
      },
      borderRadius: {},
    },
  },
  plugins: [],
};
