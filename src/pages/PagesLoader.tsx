import { useAnalysisRecordsQuery } from 'hooks'

import PagesRoutes from './PagesRoutes'

function PagesLoader() {
  const { isLoading, error } = useAnalysisRecordsQuery()

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred: {error.message}</p>

  return <PagesRoutes />
}

export default PagesLoader
