import { createSlice } from '@reduxjs/toolkit'

import { INIT_STATE } from './AnalysisFilterState'
import * as actions from './actions'

const slice = createSlice({
  name: 'analysisFilter',
  initialState: INIT_STATE,
  reducers: {
    updateSchool: actions.updateSchool,
    updateCamp: actions.updateCamp,
    updateCountry: actions.updateCountry,
  },
})

export default slice
