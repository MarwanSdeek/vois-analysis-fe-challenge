import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import { Text, PageContainer } from 'components/basic'
import AnalysisFilterState from 'store/analysisFilter/AnalysisFilterState'

type LocationState = AnalysisFilterState & {
  lessons: number
}

function EntryDetails() {
  const location = useLocation()
  const state = location.state as LocationState

  return (
    <PageContainer css={{ paddingTop: '$space$7' }}>
      <Text>Country: {state?.country}</Text>
      <Text>Camp: {state?.camp}</Text>
      <Text>School: {state?.school}</Text>
      <Text>No. of lessons: {state?.lessons}</Text>
      <Link to={'/'}>Back</Link>
    </PageContainer>
  )
}

export default EntryDetails
