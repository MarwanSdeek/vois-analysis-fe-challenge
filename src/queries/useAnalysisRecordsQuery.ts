import { useQuery, useQueryClient } from 'react-query'

import { fetchAnalysisData } from 'api'
import { AnalysisRecord } from 'models'
import createCacheInitializer from 'cache/createCacheInitializer'

const useAnalysisRecordsQuery = () => {
  const queryClient = useQueryClient()

  const { isLoading, error } = useQuery<AnalysisRecord[], Error>(
    'analysisRecords',
    fetchAnalysisData,
    {
      onSuccess: createCacheInitializer(queryClient),
    }
  )

  return {
    isLoading,
    error,
  }
}

export default useAnalysisRecordsQuery
