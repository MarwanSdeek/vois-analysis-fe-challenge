import { useSchoolsQuery } from 'queries'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectSchool, schoolChanged } from 'store/analysisFilter'
import { useOnMount } from 'hooks'

import DropdownWithLabel from './DropdownWithLabel'

function SchoolsDropdown() {
  const dispatch = useAppDispatch()
  const selectedSchool = useAppSelector(selectSchool)
  const schools = useSchoolsQuery()

  useOnMount(selectFirstOptionIfNone)

  function selectFirstOptionIfNone() {
    if (selectedSchool || schools.length === 0) {
      return
    }

    dispatch(schoolChanged(schools[0]))
  }

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
