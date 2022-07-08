import { QueryKey, useQueryClient } from 'react-query'

import { useAppSelector } from 'store/hooks'
import { selectFilter, selectIsAllSchoolsSelected } from 'store/analysisFilter'
import {
  getLessonsKey,
  getAllLessonsForCampKey,
  getSchoolFromLessonsKey,
} from 'cache/keys'

type QueryResult = [QueryKey, number[]]

type ResultRecord = {
  school?: string
  lessons: number[]
}

type LessonsQueryResult = ResultRecord[]

const useLessonsQuery = (): LessonsQueryResult => {
  const queryClient = useQueryClient()
  const filter = useAppSelector(selectFilter)
  const isAllSchoolsSelected = useAppSelector(selectIsAllSchoolsSelected)

  if (isAllSchoolsSelected) {
    const result: QueryResult[] = queryClient.getQueriesData<number[]>({
      queryKey: getAllLessonsForCampKey(filter.country, filter.camp),
      exact: false,
    })

    return result.map((r: QueryResult) => ({
      school: getSchoolFromLessonsKey(r[0]),
      lessons: r[1],
    }))
  }

  const lessonsKey = getLessonsKey(filter.country, filter.camp, filter.school)
  const lessons = queryClient.getQueryData<number[]>(lessonsKey) || []

  return [{ school: filter.school, lessons }]
}

export type { LessonsQueryResult }

export default useLessonsQuery
