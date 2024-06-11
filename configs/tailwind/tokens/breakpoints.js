const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  ...defaultTheme.screens,
  xs: {'max': '380px'}, // for xs devices
  sm: '300px',
  mob: '480px',
}
