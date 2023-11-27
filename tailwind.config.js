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
    // Add more file paths below
    "./src/pages/**/*.html",
    "./src/pages/**/*.js",
    "./src/styles/**/*.css",
    "./src/images/**/*.{jpg, jpeg, png, gif}",
    "./src/fonts/**/*.woff2",
    // Add even more file paths if needed
  ],
  theme: {
    extend: {
      // Your theme extensions go here
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Add more plugins if needed
  ],
};
