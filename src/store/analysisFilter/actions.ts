import type { PayloadAction } from '@reduxjs/toolkit'

import AnalysisFilterState from './AnalysisFilterState'

const schoolChanged = (
  state: AnalysisFilterState,
  action: PayloadAction<string | undefined>
) => {
  state.school = action.payload

  return state
}

const campChanged = (
  state: AnalysisFilterState,
  action: PayloadAction<string | undefined>
) => {
  state.camp = action.payload
  state.school = undefined

  return state
}

const countryChanged = (
  state: AnalysisFilterState,
  action: PayloadAction<string | undefined>
) => {
  state.country = action.payload
  state.camp = undefined
  state.school = undefined

  return state
}

export { schoolChanged, campChanged, countryChanged }
