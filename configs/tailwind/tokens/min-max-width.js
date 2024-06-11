const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  minWidth: {
    '1/3': '33.33%',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    '4/5': '80%',
    ...defaultTheme.minWidth,
  },
  maxWidth: {
    "1/3": "33.33%",
    "1/5": "20%",
    "60px": "3.75rem",
    xxs: "16rem",
    "8xl": "90rem",
  },
  width: {
    32.2: '32.2rem',
    '92vw': '92vw',
    9.3: '9.3rem',
    '100vw': '100vw',
    2.37: '2.37rem',
    '65px': '4.063rem',
    '10px': '10px',
    '100%': '100%',
    '80px': '80px',
  },
}

module.exports = config;
