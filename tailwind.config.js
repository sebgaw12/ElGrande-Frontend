/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    minHeight: {
      '1/2': '50%'
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(36deg, rgba(255,159,0,1) 0%, rgba(255,245,0,1) 35%, rgba(52,211,24,1) 66%,'+
            ' rgba(3,175,50,1) 100%)',
      },
    },
  },
  darkMode: "class",
  plugins: [
      require('@tailwindcss/forms'),
      require("tw-elements-react/dist/plugin.cjs")
  ]
}