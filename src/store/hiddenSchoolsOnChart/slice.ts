import { createSlice } from '@reduxjs/toolkit'

import { INIT_STATE } from './HiddenSchoolsOnChartState'
import * as actions from './actions'
import extraReducersBuilder from './extraReducersBuilder'

const slice = createSlice({
  name: 'hiddenSchoolsOnChart',
  initialState: INIT_STATE,
  reducers: {
    showSchool: actions.showSchool,
    hideSchool: actions.hideSchool,
  },
  extraReducers: extraReducersBuilder,
})

export default slice
