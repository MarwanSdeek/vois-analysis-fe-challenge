import { useSchoolsQuery } from 'queries'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectSchool, schoolChanged } from 'store/analysisFilter'

import DropdownStyled from './DropdownStyled'

function SchoolsDropdown() {
  const dispatch = useAppDispatch()
  const selectedSchool = useAppSelector(selectSchool)
  const schools = useSchoolsQuery()

  function handleOnChange(newValue: string | undefined): void {
    dispatch(schoolChanged(newValue))
  }

  return (
    <DropdownStyled
      name="schools"
      options={schools}
      defaultOption={selectedSchool}
      onChange={handleOnChange}
    />
  )
}

export default SchoolsDropdown
