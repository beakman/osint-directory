module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Mulish', 'Rubik'],
      'mono': ['Space Mono', 'Roboto Mono'],
      'display': ['Mulish', 'Rubik'],
      'body': ['Space Mono', 'Roboto Mono']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
