import slice from './slice'

export * from './selectors'
export const { updateSchool, updateCamp, updateCountry } = slice.actions

const reducer = slice.reducer

export default reducer
