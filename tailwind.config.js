/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // background
        primaryColor: "#FFF2D8",
        secondaryColor: "#113946",
        tersierColor: "#BCA37F",
        // font
        primaryText: "#113946",
        secondaryText: "#FF2D8",
        tersierText: "#192655",
        // border
        primaryBorder: "#113946",
        secondaryBorder: "#FFF2D8",
      },
    },
  },
  plugins: [],
};
