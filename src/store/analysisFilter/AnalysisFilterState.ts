interface AnalysisFilterState {
  country: string | undefined
  camp: string | undefined
  school: string | undefined
}

const INIT_STATE: AnalysisFilterState = {
  country: undefined,
  camp: undefined,
  school: undefined,
}

export { INIT_STATE }

export default AnalysisFilterState
