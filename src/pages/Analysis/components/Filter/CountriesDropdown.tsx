import { useCountriesQuery } from 'queries'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectCountry, countryChanged } from 'store/analysisFilter'
import { useOnMount } from 'hooks'

import DropdownWithLabel from './DropdownWithLabel'

function CountriesDropdown() {
  const dispatch = useAppDispatch()
  const selectedCountry = useAppSelector(selectCountry)
  const countries = useCountriesQuery()

  useOnMount(selectFirstOptionIfNone)

  function selectFirstOptionIfNone() {
    if (selectedCountry || countries.length === 0) {
      return
    }

    dispatch(countryChanged(countries[0]))
  }

  function handleOnChange(newValue: string | undefined): void {
    dispatch(countryChanged(newValue))
  }

  return (
    <DropdownWithLabel
      label="Select Country"
      name="countries"
      options={countries}
      value={selectedCountry}
      onChange={handleOnChange}
    />
  )
}

export default CountriesDropdown
