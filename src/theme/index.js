import typographyVariants from './typographyVariants'

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#E9C46A',
    },
  },
  primary: {
    main: {
      color: '#E9C46A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FFF8E6',
      contrastText: '#070C0E',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
}

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

export default {
  colors,
  breakpoints,
  typographyVariants,
  fontFamily: "'Fira Sans', 'Fira Sans Condensed', sans-serif",
}
