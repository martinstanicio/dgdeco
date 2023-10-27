const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        text: "#231205",
        background: "#f0ead2",
        primary: "#9c6644",
        secondary: "#ede0d4",
        accent: "#9c6644",
      },
      fontFamily: {
        sans: ["Karla Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
