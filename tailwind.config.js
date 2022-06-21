/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/.src/**.{html,js}",
    "./**.{html,js}",
    "./images.{svg,png,jpeg,jpg}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'redHat': ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
