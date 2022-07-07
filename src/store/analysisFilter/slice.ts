import { createSlice } from '@reduxjs/toolkit'

import { INIT_STATE } from './AnalysisFilterState'
import * as actions from './actions'

const slice = createSlice({
  name: 'analysisFilter',
  initialState: INIT_STATE,
  reducers: {
    schoolChanged: actions.schoolChanged,
    campChanged: actions.campChanged,
    countryChanged: actions.countryChanged,
  },
})

export default slice
