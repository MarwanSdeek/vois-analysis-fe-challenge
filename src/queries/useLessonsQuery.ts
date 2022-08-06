import { useQueryClient, QueryKey, QueryClient } from 'react-query'

import { Lessons } from 'models'
import { useAppSelector } from 'store/hooks'
import {
  selectFilter,
  selectIsAllSchoolsSelected,
  selectIsFilterActive,
} from 'store/analysisFilter'
import { getLessonsKey, getAllLessonsForCampKey } from 'cache/keys'
import AnalysisFilterState from 'store/analysisFilter/AnalysisFilterState'

type LessonQueryRecord = Lessons
type QueryResult = [QueryKey, LessonQueryRecord]
type LessonsQueryResult = LessonQueryRecord[]

const useLessonsQuery = (): LessonsQueryResult => {
  const queryClient = useQueryClient()
  const filter = useAppSelector(selectFilter)
  const isAllSchoolsSelected = useAppSelector(selectIsAllSchoolsSelected)

  const isFilterActive = useAppSelector(selectIsFilterActive)
  if (!isFilterActive) {
    return []
  }

  if (isAllSchoolsSelected) {
    return getAllLessonsForCamp(queryClient, filter)
  }

  return getLessonsForSchool(queryClient, filter)
}

function getAllLessonsForCamp(
  queryClient: QueryClient,
  filter: AnalysisFilterState
): LessonsQueryResult {
  const result: QueryResult[] = queryClient.getQueriesData<LessonQueryRecord>({
    queryKey: getAllLessonsForCampKey(filter.country, filter.camp),
    exact: false,
  })

  return result.map(([, lessons]: QueryResult) => lessons)
}

function getLessonsForSchool(
  queryClient: QueryClient,
  filter: AnalysisFilterState
): LessonsQueryResult {
  const lessonsKey = getLessonsKey(filter.country, filter.camp, filter.school)
  const Lessons = queryClient.getQueryData<LessonQueryRecord>(lessonsKey)

  if (!Lessons) {
    return []
  }

  return [Lessons]
}

export type { LessonsQueryResult, LessonQueryRecord }

export default useLessonsQuery
