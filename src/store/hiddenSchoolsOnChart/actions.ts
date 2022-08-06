import type { PayloadAction } from '@reduxjs/toolkit'

import HiddenSchoolsOnChartState from './HiddenSchoolsOnChartState'

const showSchool = (
  state: HiddenSchoolsOnChartState,
  action: PayloadAction<string>
) => {
  const school = action.payload
  if (isEmpty(school)) {
    return state
  }

  const index = state.hiddenSchools.indexOf(school)
  if (index > -1) {
    state.hiddenSchools.splice(index, 1)
  }

  return state
}

const hideSchool = (
  state: HiddenSchoolsOnChartState,
  action: PayloadAction<string>
) => {
  const school = action.payload
  if (isEmpty(school)) {
    return state
  }

  const index = state.hiddenSchools.indexOf(school)
  if (index > -1) {
    console.warn(`attempt to add duplicate school: ${school}`)
    return state
  }

  state.hiddenSchools.push(school)

  return state
}

const isEmpty = (val: string) => !val || val.trim() === ''

export { showSchool, hideSchool }
