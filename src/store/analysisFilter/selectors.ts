import { RootState } from '../store'

const selectSchool = (state: RootState) => state.analysisFilter.school

const selectCamp = (state: RootState) => state.analysisFilter.camp

const selectCountry = (state: RootState) => state.analysisFilter.country

export { selectSchool, selectCamp, selectCountry }
