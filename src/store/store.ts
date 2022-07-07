import { configureStore } from '@reduxjs/toolkit'

import analysisFilterReducer from './analysisFilter'

const store = configureStore({
  reducer: {
    analysisFilter: analysisFilterReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }

export default store
