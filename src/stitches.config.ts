import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      gray: '#e5e5e5',
      yellow: '#e5e5e5',
      black: '#ffffff',
      primary: '$black',
      secondary: '$yellow',
      bg: '$gray',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '4rem',
      8: '8rem',
    },
    fontSize: {
      1: '0.75rem',
      2: '1rem',
      3: '1.25rem',
      4: '2rem',
      5: '3rem',
    },
  },
  media: {
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
  },
  utils: {
    widthPer: (val: number) => ({
      width: `${val}%`,
    }),
    paddingX: (val: string) => ({
      paddingLeft: val,
      paddingRight: val,
    }),
    paddingY: (val: string) => ({
      paddingTop: val,
      paddingBottom: val,
    }),
    marginX: (val: string) => ({
      marginLeft: val,
      marginRight: val,
    }),
    marginY: (val: string) => ({
      marginTop: val,
      marginBottom: val,
    }),
  },
})

export const globalStyles = globalCss({
  body: { fontSize: '16px' },
  '*': { margin: 0, padding: 0 },
})
