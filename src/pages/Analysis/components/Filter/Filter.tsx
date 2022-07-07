import { useState } from 'react'
import Flexbox from 'components/Flexbox'
import CountriesDropdown from './CountriesDropdown'
import CampsDropdown from './CampsDropdown'

function Filter() {
  const [country, setCountry] = useState('')

  function handleOnCountryChange(newCountry: string) {
    setCountry(newCountry)
  }

  return (
    <Flexbox flow={{ '@sm': 'column' }} main="spaceAround">
      <CountriesDropdown onChange={handleOnCountryChange} />
      <CampsDropdown country={country} />
      <CampsDropdown country={country} />
    </Flexbox>
  )
}

export default Filter
