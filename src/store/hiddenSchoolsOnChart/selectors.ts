import { RootState } from '../store'

const selectHiddenSchools = (state: RootState) =>
  state.hiddenSchoolsOnChart.hiddenSchools

export { selectHiddenSchools }
