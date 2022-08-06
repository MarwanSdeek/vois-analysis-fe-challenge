import { configureStore } from '@reduxjs/toolkit'

import analysisFilterReducer from './analysisFilter'
import hiddenSchoolsOnChartReducer from './hiddenSchoolsOnChart'

const store = configureStore({
  reducer: {
    analysisFilter: analysisFilterReducer,
    hiddenSchoolsOnChart: hiddenSchoolsOnChartReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }

export default store
