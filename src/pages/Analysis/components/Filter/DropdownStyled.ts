import Dropdown from 'components/Dropdown'
import { styled } from 'stitches.config'

const DropdownStyled = styled(Dropdown, {
  widthPer: 30,
  '@sm': {
    widthPer: 100,
  },
})

export default DropdownStyled
