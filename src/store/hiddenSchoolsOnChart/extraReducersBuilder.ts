import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import {
  countryChanged,
  campChanged,
  schoolChanged,
} from 'store/analysisFilter'

import HiddenSchoolsOnChartState from './HiddenSchoolsOnChartState'

const extraReducersBuilder = (
  builder: ActionReducerMapBuilder<HiddenSchoolsOnChartState>
) => {
  builder
    .addCase(countryChanged, reset)
    .addCase(campChanged, reset)
    .addCase(schoolChanged, reset)
    .addDefaultCase(doNothing)
}

const reset = (state: HiddenSchoolsOnChartState) => {
  state.hiddenSchools = []
  return state
}

const doNothing = (state: HiddenSchoolsOnChartState) => state

export default extraReducersBuilder
