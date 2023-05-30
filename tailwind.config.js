/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html', './build/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'bridge': "url('../img/bridge.png')",
        'beach': "url('../img/beach.png')",
        'city': "url('../img/city.png')",
        'cloud': "url('../img/cloud.png')",
        'forest': "url('../img/forest.png')",
      }
    },
  },
  plugins: [],
}

