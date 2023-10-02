/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(36deg, rgba(255,159,0,1) 0%, rgba(255,245,0,1) 35%, rgba(52,211,24,1) 66%,'+
            ' rgba(3,175,50,1) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}