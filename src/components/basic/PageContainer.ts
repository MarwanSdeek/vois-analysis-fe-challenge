import { styled } from 'stitches.config'

const PageContainer = styled('div', {
  backgroundColor: '$colors$bg',
  paddingX: '$space$5',
  marginX: 'auto',
  minHeight: '100vh',

  '@sm': {
    paddingX: '$space$3',
  },
})

export default PageContainer
