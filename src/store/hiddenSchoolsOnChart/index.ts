import slice from './slice'

export * from './selectors'
export const { showSchool, hideSchool } = slice.actions

const reducer = slice.reducer

export default reducer
