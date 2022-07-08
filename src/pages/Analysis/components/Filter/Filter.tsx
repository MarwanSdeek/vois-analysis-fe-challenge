import { styled } from 'stitches.config'
import { Flexbox } from 'components/basic'

import CountriesDropdown from './CountriesDropdown'
import CampsDropdown from './CampsDropdown'
import SchoolsDropdown from './SchoolsDropdown'

function Filter() {
  return (
    <Container flow={{ '@sm': 'column' }} main="spaceBetween">
      <CountriesDropdown />
      <CampsDropdown />
      <SchoolsDropdown />
    </Container>
  )
}

const Container = styled(Flexbox, {
  marginTop: '$space$7',
})

export default Filter
