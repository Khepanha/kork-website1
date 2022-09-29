module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
      // '2xl': '1536px',
      'sm': '800px',
      'md': '950px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      width: {
        '150': '29rem'
      },
      height: {
        'full-section': '600px'
      },
      colors: {
        // 'primary-color': '#ff9800'
        'primary-color': '#3367d6'
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      }
    },
    borderRadius: {
      DEFAULT: '4px',
      'lg': '16px',
      'full': '9999px'
    },
    backgroundImage: {
      'hero-background': "url('/src/assets/images/heroBackground.jpg')",
      'hero-background-3': "url('/src/assets/images/cool-background-3.png')",
      'hero-background-4': "url('/src/assets/images/cool-background-4.png')"
    },
    zIndex: {
      'auto': 'auto',
      'minus-30': -30,
      'minus-20': -20,
      'minus-10': -10,
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
