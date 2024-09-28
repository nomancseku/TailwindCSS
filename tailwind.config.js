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
    extend: {},
  },
  plugins: [],
}

