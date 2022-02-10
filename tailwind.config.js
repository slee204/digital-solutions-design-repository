const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,svelte,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        teal: {
          900: "#00aabb",
          800: "#00b4ac",
          700: "#00a9bb",
          600: "#00a9ac",
          500: "#76cbd7",
          400: "#a6dbe7",
          300: "#eeffff",
        },
      },
    },
  },
  plugins: [],
};
