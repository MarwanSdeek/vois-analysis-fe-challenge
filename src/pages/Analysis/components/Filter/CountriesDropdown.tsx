import { useQueryClient } from 'react-query'

import DropdownStyled from './DropdownStyled'
import { getCountriesKey } from 'cache/keys'

function CountriesDropdown(props) {
  const queryClient = useQueryClient()
  const countries = queryClient.getQueryData<string[]>(getCountriesKey()) || []

  function handleOnChange(newValue: string): void {
    console.log(newValue)
    props.onChange(newValue)
  }

  return (
    <DropdownStyled
      name="countries"
      options={countries}
      onChange={handleOnChange}
    />
  )
}

export default CountriesDropdown
