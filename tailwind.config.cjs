/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkblue: "#0f1038",
      white: "#ffffff",
      black: "#000002",
      grey: "#1d1e22",
      orange: "#FB7B33",
      blue: "#111343",
    },
    extend: {
      dropShadow: {
        "3xl": "0 2px 2px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
