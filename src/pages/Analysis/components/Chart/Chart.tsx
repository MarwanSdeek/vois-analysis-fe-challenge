import { useNavigate } from 'react-router'

import { useAppSelector } from 'store/hooks'
import { selectFilter } from 'store/analysisFilter'

import LineChart, { Dataset } from 'components/LineChart'
import useLessonsQuery, { LessonQueryRecord } from 'queries/useLessonsQuery'
import { MONTHS } from 'utils/Months'
import { capitalize } from 'utils/String'

const LABELS = MONTHS.map(capitalize)

function Chart() {
  const navigate = useNavigate()
  const filter = useAppSelector(selectFilter)
  const lessons: Dataset[] = useLessonsQuery().filter(notEmpty).map(asDataset)

  function handleOnPointClick(index: number, datasetIndex: number): void {
    const numberOfLessons = lessons[datasetIndex].data[index]

    navigate('/details', {
      state: {
        ...filter,
        school: lessons[datasetIndex].label,
        lessons: numberOfLessons,
      },
    })
  }

  return (
    <LineChart
      labels={LABELS}
      datasets={lessons}
      title="No. of lessons"
      onPointClick={handleOnPointClick}
    />
  )
}

function notEmpty(resultRecord: LessonQueryRecord) {
  return resultRecord && resultRecord.school && resultRecord.school.length > 0
}

function asDataset(resultRecord: LessonQueryRecord): Dataset {
  return {
    label: resultRecord.school,
    data: resultRecord.countPerMonth,
    color: resultRecord.color,
  }
}

export default Chart
