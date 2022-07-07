import Flexbox from 'components/Flexbox'

import CountriesDropdown from './CountriesDropdown'
import CampsDropdown from './CampsDropdown'
import SchoolsDropdown from './SchoolsDropdown'

function Filter() {
  return (
    <Flexbox flow={{ '@sm': 'column' }} main="spaceAround">
      <CountriesDropdown />
      <CampsDropdown />
      <SchoolsDropdown />
    </Flexbox>
  )
}

export default Filter
