const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          300:'#c8102e',
          500:'#c8102e',
        }
      }
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
