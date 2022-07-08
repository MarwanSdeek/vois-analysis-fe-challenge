import { styled } from 'stitches.config'

const Flexbox = styled('div', {
  display: 'flex',

  variants: {
    flow: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    main: {
      center: {
        justifyContent: 'center',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
    },
    cross: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
  },
})

export default Flexbox
