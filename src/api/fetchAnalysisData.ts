import { AnalysisRecord } from 'models'

function fetchAnalysisData(): Promise<AnalysisRecord[]> {
  return fetch('/data.json', { method: 'GET' }).then((response) => {
    if (!response.ok)
      throw new Error(
        `Failed to load AnalysisRecords. error:${response.statusText}`
      )

    return <Promise<AnalysisRecord[]>>response.json()
  })
}

export default fetchAnalysisData
