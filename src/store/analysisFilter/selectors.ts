import { RootState } from '../store'
import { SHOW_ALL } from 'queries/useSchoolsQuery'

const selectSchool = (state: RootState) => state.analysisFilter.school

const selectIsAllSchoolsSelected = (state: RootState) =>
  state.analysisFilter.school === SHOW_ALL

const selectCamp = (state: RootState) => state.analysisFilter.camp

const selectCountry = (state: RootState) => state.analysisFilter.country

const selectFilter = (state: RootState) => state.analysisFilter

const selectIsFilterActive = (state: RootState) =>
  selectCamp(state) && selectCountry(state) && selectSchool(state)

export {
  selectSchool,
  selectIsAllSchoolsSelected,
  selectCamp,
  selectCountry,
  selectFilter,
  selectIsFilterActive,
}
