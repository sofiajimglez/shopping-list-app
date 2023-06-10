/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tartan': 'url("/images/patron-inconsutil-tela-cuadros-tradicional-tartan.jpg")',
        'paper': 'url("/images/papel1.png")'
      },
      fontFamily: {
        'pacifico': ['"Pacifico", cursive'],
        'caveat': ['"Caveat Brush", cursive'],
        'patrick': ['"Patrick Hand", cursive']
      }
    },
  },
  plugins: [],
}
