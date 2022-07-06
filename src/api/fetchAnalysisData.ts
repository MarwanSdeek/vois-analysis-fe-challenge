import { AnalysisRecord } from 'models'

function fetchAnalysisData(): Promise<AnalysisRecord[]> {
  return fetch('/data.json', { method: 'GET' }).then(
    (response) => <Promise<AnalysisRecord[]>>response.json()
  )
}

export default fetchAnalysisData
