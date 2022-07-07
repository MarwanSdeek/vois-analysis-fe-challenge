import { useQueryClient } from 'react-query'

import DropdownStyled from './DropdownStyled'
import { getCampsKey } from 'cache/keys'

type CampsDropdownProps = {
  country: string
}

function CampsDropdown(props: CampsDropdownProps) {
  const queryClient = useQueryClient()

  const camps =
    queryClient.getQueryData<string[]>(getCampsKey(props.country)) || []

  function handleOnChange(newValue: string): void {
    console.log(newValue)
  }

  return (
    <DropdownStyled
      name="countries"
      options={camps}
      defaultOption={camps.at(0)}
      onChange={handleOnChange}
    />
  )
}

export default CampsDropdown
