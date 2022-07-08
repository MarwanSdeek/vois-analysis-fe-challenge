import randomColor from 'randomcolor'

import LineChart, { Dataset } from 'components/LineChart'
import useLessonsQuery, {
  LessonsQueryResult,
  LessonQueryRecord,
} from 'queries/useLessonsQuery'
import { MONTHS } from 'utils/Months'
import { capitalize } from 'utils/String'

const LABELS = MONTHS.map(capitalize)

function Chart() {
  const lessons: LessonsQueryResult = useLessonsQuery()

  return (
    <LineChart
      labels={LABELS}
      datasets={lessons.filter(notEmpty).map(asDataset)}
      title="No. of lessons"
    />
  )
}

function notEmpty(resultRecord: LessonQueryRecord) {
  return resultRecord && resultRecord.school && resultRecord.school.length > 0
}

function asDataset(resultRecord: LessonQueryRecord): Dataset {
  return {
    label: resultRecord.school || '',
    data: resultRecord.lessons,
    color: randomColor({ luminosity: 'dark' }),
  }
}

export default Chart
