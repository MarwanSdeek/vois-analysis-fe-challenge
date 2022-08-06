import type { PayloadAction } from '@reduxjs/toolkit'

import HiddenSchoolsOnChartState from './HiddenSchoolsOnChartState'

const showSchool = (
  state: HiddenSchoolsOnChartState,
  action: PayloadAction<string>
) => {
  if (isEmpty(action.payload)) {
    return state
  }

  const index = state.hiddenSchools.indexOf(action.payload)
  if (index > -1) {
    state.hiddenSchools.splice(index, 1)
  }

  return state
}

const hideSchool = (
  state: HiddenSchoolsOnChartState,
  action: PayloadAction<string>
) => {
  if (isEmpty(action.payload)) {
    return state
  }

  const index = state.hiddenSchools.indexOf(action.payload)
  if (index > -1) {
    console.warn(`attempt to add duplicate school: ${action.payload}`)
    return state
  }

  state.hiddenSchools.push(action.payload)

  return state
}

const isEmpty = (val: string) => !val || val.trim() === ''

export { showSchool, hideSchool }
