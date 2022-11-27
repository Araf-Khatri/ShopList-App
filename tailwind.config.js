/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "m-w-custom": "920px"
      },
      borderWidth: {
        "o": '1px'
      }
    },
  },
  plugins: [],
}
