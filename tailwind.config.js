const colors = {
  inherit: 'inherit',
  blue: {
    400: '#1D87BB',
    800: '#022F47',
    900: '#10223E',
  },
  black: '#000000',
  orange: {
    200: '#F3D470',
  },
  gray: {
    100: '#F9F9F9',
    200: '#F3F3F3',
    300: '#E8E8E8',
    400: '#DEDEDE',
    500: '#B5B5B5',
    600: '#BEBEBE',
    700: '#7C7C7C',
    900: '#333333',
  },
  green: {
    300: '#539269',
  },
  red: {
    300: '#DF5951',
    500: '#F44336',
    700: '#6B5151',
  },
};

module.exports = {
  purge: [
    './dist/*.html',
    './dist/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xl': '1175px',
      },
      color: colors,
      backgroundColor: colors,
      borderColor: colors,
      textColor: colors,
      ringColor: colors,
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        100: ['10px', '12px'],
        200: ['12px', '14px'],
        300: ['13px', '15px'],
        400: ['14px', '18px'],
        500: ['15px', '19px'],
        600: ['16px', '18px'],
        700: ['18px', '22px'],
        800: ['20px', '28px'],
        900: ['24px', '32px'],
      },
      maxWidth: {
        'word': '15ch',
      },
      backgroundImage: {
        'select-arrow-icon': "url('/src/assets/images/selectArrowIcon.svg')",
      },
      backgroundPosition: {
        rightIcon: 'calc(100% - .5rem) center',
      },
      fill: {
        'white': '#ffffff',
        'red': '#F44336',
        'inherit': 'inherit',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['active'],
      ringOffsetColor: ['active'],
      ringOffsetWidth: ['active'],
      ringOpacity: ['active'],
      ringWidth: ['active'],
      margin: ['last'],
      textColor: ['last'],
      fill: ['hover'],
    }
  },
  plugins: [],
};