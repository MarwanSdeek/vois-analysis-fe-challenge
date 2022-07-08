import { useCountriesQuery } from 'queries'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectCountry, countryChanged } from 'store/analysisFilter'

import DropdownStyled from './DropdownStyled'

function CountriesDropdown() {
  const dispatch = useAppDispatch()
  const selectedCountry = useAppSelector(selectCountry)
  const countries = useCountriesQuery()

  function handleOnChange(newValue: string | undefined): void {
    dispatch(countryChanged(newValue))
  }

  return (
    <DropdownStyled
      name="countries"
      options={countries}
      value={selectedCountry}
      onChange={handleOnChange}
    />
  )
}

export default CountriesDropdown
