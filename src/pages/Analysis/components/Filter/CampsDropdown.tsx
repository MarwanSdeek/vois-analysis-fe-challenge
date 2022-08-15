import { useCampsQuery } from 'queries'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectCamp, campChanged } from 'store/analysisFilter'

import DropdownWithLabel from './DropdownWithLabel'
import { useOnMount } from 'hooks'

function CampsDropdown() {
  const dispatch = useAppDispatch()
  const selectedCamp = useAppSelector(selectCamp)
  const camps = useCampsQuery()

  useOnMount(selectFirstOptionIfNone)

  function selectFirstOptionIfNone() {
    if (selectedCamp || camps.length === 0) {
      return
    }

    dispatch(campChanged(camps[0]))
  }

  function handleOnChange(newValue: string | undefined): void {
    dispatch(campChanged(newValue))
  }

  return (
    <DropdownWithLabel
      label="Select Camp"
      name="camps"
      options={camps}
      value={selectedCamp}
      onChange={handleOnChange}
    />
  )
}

export default CampsDropdown
