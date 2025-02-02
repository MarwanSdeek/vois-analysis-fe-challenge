import { styled } from 'stitches.config'

/**
 * credit: https://dev.to/lexswed/creating-api-for-components-flexbox-layout-4cim
 */
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
      columnReverse: {
        flexDirection: 'column-reverse',
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
