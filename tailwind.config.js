
module.exports = {
  content: [
    "./screens/*/**.{js,jsx,ts,tsx}",
    "./components/*/**.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italic: ['Roboto-Italic', 'sans-serif'],
        regular: ['Roboto-Regular', 'sans-serif'],
        bold: ['Roboto-Medium', 'sans-serif'],
      },
    },
    fontFamily: {
      default: ['Roboto-Regular', 'sans-serif'],
    },
  },
  plugins: [],
}


