import { useCampsQuery } from 'queries'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectCamp, campChanged } from 'store/analysisFilter'

import DropdownWithLabel from './DropdownWithLabel'

function CampsDropdown() {
  const dispatch = useAppDispatch()
  const selectedCamp = useAppSelector(selectCamp)
  const camps = useCampsQuery()

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
