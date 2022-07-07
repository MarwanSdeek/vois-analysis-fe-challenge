import slice from './slice'

export * from './selectors'
export const { schoolChanged, campChanged, countryChanged } = slice.actions

const reducer = slice.reducer

export default reducer
