module.exports = {
  animation: {
    faq: 'faq 1s forwards',
    slideInBottomCta: 'slideInBottomCta .5s forwards',
    fadeMoveUp:'fadeMoveUp 0.25s ease-in-out ',
    hideElement: 'hideElement 3s forwards',
    fadeMoveDown: 'fadeMoveDown 3s ease-in-out infinite',
    slideInR2L: 'slideInR2L 1.2s ease-in both',
    fadeIn: 'fadeIn 1s 4s ease-in both',
    slideInFromT2B: 'slideInFromT2B .3s 2s ease-in both',
    shimmerL2R: 'shimmerL2R linear 2s infinite ',

  },
  keyframes: {
    faq: {
      '0%': {
        maxHeight: 0,
      },
      '100%': {
        maxHeight: '500px',
      },
    },
    slideInBottomCta: {
      '0%': {
        transform: 'translateY(2rem)',
      },
      '100%': {
        transform: 'translateY(0)',
      },
    },
    hideElement: {
      '0%': {
        opacity: '1',
      },
      '90%': {
        opacity: '1',
      },
      '100%': {
        opacity: '0',
      },
    },
    fadeMoveDown: {
      '0%': {
        opacity: '0',
        transform: 'translate(0,-50px)'
      },
      '50%': {
        opacity: '1',
      },
      '100%': {
        opacity: '0',
        transform: 'translate(0,20px)'
        
      },
      slideInR2L: {
        from: {
          transform: ' translateX(40rem)'
        },
        to: {
          transform: 'translateX(0)'
        },
      },
      fadeIn: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity:1
        },
      },
    },
    fadeMoveUp: {
      '0%': {
        opacity: '0',
        transform: 'translate(0,10px)'
      },
      '100%': {
        opacity: '100',
        transform: 'translate(0,0px)'
        
      },
    },
    shimmerL2R: {
      '0%': {
        left: '0',
        opacity: '0'
      },
      '5%': {
        opacity: '0.2'
      },
      '48%': {
        opacity: '0.4'
      },
      '80%': {
          opacity: '0.0'
      },
      '100%': {
          left: '82%'
      },
    },
    slideInFromT2B: {
      '0%': {
        top: '-50%',
      },
      '100%': {
        top: '30%'
      },
    },
  },
}
