module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#435c94',
          DEFAULT: '#858796',
          dark: '#4e73df',
          bright: '#2e59d9',
          shine: '#224abe',
          bord: '#d1d3e2',
        },
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
