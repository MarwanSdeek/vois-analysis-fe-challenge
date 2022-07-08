import { styled } from 'stitches.config'

const Text = styled('p', {
  fontColor: '$colors$primary',
  fontSize: '$fontSize$1',
  variants: {
    size: {
      title: {
        fontSize: '$fontSize$5',
        paddingY: '$space$3',
      },
      subTitle: {
        fontSize: '$fontSize$3',
        paddingY: '$space$1',
      },
      label: {
        fontSize: '$fontSize$1',
      },
    },
  },
})

export default Text
