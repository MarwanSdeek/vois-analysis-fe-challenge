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
      primary: '$gray',
      secondary: '$yellow',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
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
  },
})
