/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/components/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/*/.*vue",
    "./src/**/*.css",
    "./src/**/*.scss",
    "./src/**/*.sass",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#2F6C6D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gray: "#4B4B4C"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}