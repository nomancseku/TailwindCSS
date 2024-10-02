const { SourceMapConsumer } = require('source-map-js');
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // it is enabled now by default, we dont need to write it anymore
  content: ["./src/**/*.{html,js}", // content was previously known as purge!
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        sm: "540px",
        lg: "1000px",
        '4k': "2560px",
      },
      fontFamily: {
        'sans': ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
