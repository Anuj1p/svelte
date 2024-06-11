const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  minHeight: {
    0: '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    '4/5': '80%',
    '9/10': '90%',
    full: '100%',
    15: '15rem',
    17: '17rem',
    30: '30rem',
    19: '19rem',
    20: '20rem',
    22: '22rem',
    24: '24rem',
    '100vh': '100vh',
    ...defaultTheme.minHeight,
  },
  maxHeight: {
    max: "max-content",
  },
  height: {
    // eslint-disable-next-line quote-props
    32.8: '32.8rem',
    '100vh': '100vh',
    2.75: '2.75rem',
    2.37: '2.37rem',
    '65px': '4.063rem',
    '80px': '80px',
  },
}
