import type { PayloadAction } from '@reduxjs/toolkit'

import AnalysisFilterState from './AnalysisFilterState'

const updateSchool = (
  state: AnalysisFilterState,
  action: PayloadAction<string | undefined>
) => {
  state.school = action.payload

  return state
}

const updateCamp = (
  state: AnalysisFilterState,
  action: PayloadAction<string | undefined>
) => {
  state.camp = action.payload
  if (action.payload === undefined) {
    state.school = undefined
  }
  return state
}

const updateCountry = (
  state: AnalysisFilterState,
  action: PayloadAction<string | undefined>
) => {
  state.country = action.payload
  if (action.payload === undefined) {
    state.camp = undefined
    state.school = undefined
  }

  return state
}

export { updateSchool, updateCamp, updateCountry }
