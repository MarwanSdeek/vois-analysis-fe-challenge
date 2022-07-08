import Dropdown, { DropdownProps } from 'components/Dropdown'
import Flexbox from 'components/Flexbox'
import { Text } from 'components/basic'
import { styled } from 'stitches.config'

type DropdownWithLabelProps = DropdownProps & { label: string }

function DropdownWithLabel(props: DropdownWithLabelProps) {
  const { label, ...dropdownProps } = props

  return (
    <Container main="spaceAround" cross="center">
      <Text size="label">{label}</Text>
      <DropdownStyled {...dropdownProps} />
    </Container>
  )
}

const Container = styled(Flexbox, {
  widthPer: 31,
  '@sm': {
    widthPer: 100,
  },
})

const DropdownStyled = styled(Dropdown, {
  widthPer: 70,
})

export default DropdownWithLabel
