import { createSlice } from '@reduxjs/toolkit'

import { INIT_STATE } from './HiddenSchoolsOnChartState'
import * as actions from './actions'

const slice = createSlice({
  name: 'hiddenSchoolsOnChart',
  initialState: INIT_STATE,
  reducers: {
    showSchool: actions.showSchool,
    hideSchool: actions.hideSchool,
  },
})

export default slice
