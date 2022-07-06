import { useQuery } from 'react-query'

import { fetchAnalysisData } from 'api'
import { AnalysisRecord } from 'models'

const useAnalysisRecordsQuery = () => {
  const { isLoading, error } = useQuery<AnalysisRecord[], Error>(
    'analysisRecords',
    fetchAnalysisData
  )

  return {
    isLoading,
    error,
  }
}

export default useAnalysisRecordsQuery
