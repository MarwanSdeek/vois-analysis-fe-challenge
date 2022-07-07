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

  function handleOnChange(newValue: string | undefined): void {
    console.log(newValue)
  }

  return (
    <DropdownStyled name="camps" options={camps} onChange={handleOnChange} />
  )
}

export default CampsDropdown
