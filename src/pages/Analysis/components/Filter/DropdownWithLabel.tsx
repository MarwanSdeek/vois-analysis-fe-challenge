import Dropdown, { DropdownProps } from 'components/Dropdown'
import { Text, Flexbox } from 'components/basic'
import { styled } from 'stitches.config'

type DropdownWithLabelProps = DropdownProps & { label: string }

function DropdownWithLabel(props: DropdownWithLabelProps) {
  const { label, ...dropdownProps } = props

  return (
    <Container main="spaceBetween" cross="center">
      <TextStyled size="label">{label}</TextStyled>
      <DropdownStyled {...dropdownProps} />
    </Container>
  )
}

const Container = styled(Flexbox, {
  widthPer: 31,
  
  '@sm': {
    widthPer: 100,
    marginTop: '$space$1',
  },
})

const DropdownStyled = styled(Dropdown, {
  widthPer: 70,
})

const TextStyled = styled(Text, {
  widthPer: 26,
  textAlign: 'right',

  '@sm': {
    textAlign: 'left',
  },
})

export default DropdownWithLabel
