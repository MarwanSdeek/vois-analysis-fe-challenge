import { useQuery } from 'react-query'

import PagesRoutes from './PagesRoutes'
import { fetchAnalysisData } from 'api'
import { AnalysisRecord } from 'models'

function PagesLoader() {
  const { isLoading, error } = useQuery<AnalysisRecord[], Error>(
    'analysisRecords',
    fetchAnalysisData
  )

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: {error.message}</p>

  return <PagesRoutes />
}

export default PagesLoader
