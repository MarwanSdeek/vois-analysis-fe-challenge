import { useSchoolsQuery } from 'queries'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectSchool, schoolChanged } from 'store/analysisFilter'

import DropdownWithLabel from './DropdownWithLabel'

function SchoolsDropdown() {
  const dispatch = useAppDispatch()
  const selectedSchool = useAppSelector(selectSchool)
  const schools = useSchoolsQuery()

  function handleOnChange(newValue: string | undefined): void {
    dispatch(schoolChanged(newValue))
  }

  return (
    <DropdownWithLabel
      label="Select School"
      name="schools"
      options={schools}
      value={selectedSchool}
      onChange={handleOnChange}
    />
  )
}

export default SchoolsDropdown
