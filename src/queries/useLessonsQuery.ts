import { useQueryClient, QueryKey, QueryClient } from 'react-query'

import { useAppSelector } from 'store/hooks'
import {
  selectFilter,
  selectIsAllSchoolsSelected,
  selectIsFilterActive,
} from 'store/analysisFilter'
import {
  getLessonsKey,
  getAllLessonsForCampKey,
  getSchoolFromLessonsKey,
} from 'cache/keys'
import AnalysisFilterState from 'store/analysisFilter/AnalysisFilterState'

type QueryResult = [QueryKey, number[]]

type LessonQueryRecord = {
  school?: string
  lessons: number[]
}

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
    return getAllLessonsPerSchoolForCamp(queryClient, filter)
  }

  return getLessonsForSchool(queryClient, filter)
}

function getAllLessonsPerSchoolForCamp(
  queryClient: QueryClient,
  filter: AnalysisFilterState
): LessonsQueryResult {
  const result: QueryResult[] = queryClient.getQueriesData<number[]>({
    queryKey: getAllLessonsForCampKey(filter.country, filter.camp),
    exact: false,
  })

  return result.map((r: QueryResult) => ({
    school: getSchoolFromLessonsKey(r[0]),
    lessons: r[1],
  }))
}

function getLessonsForSchool(
  queryClient: QueryClient,
  filter: AnalysisFilterState
): LessonsQueryResult {
  const lessonsKey = getLessonsKey(filter.country, filter.camp, filter.school)
  const lessons = queryClient.getQueryData<number[]>(lessonsKey) || []

  return [{ school: filter.school, lessons: lessons }]
}

export type { LessonsQueryResult, LessonQueryRecord }

export default useLessonsQuery
