import useLessonsQuery, { LessonQueryRecord } from 'queries/useLessonsQuery'
import { Flexbox } from 'components/basic'
import { useAppSelector } from 'store/hooks'
import { selectCamp } from 'store/analysisFilter'

import LessonsPerLocation from './LessonsPerLocation'
import NoResult from './NoResult'

function SideLegend() {
  const records: LessonQueryRecord[] = useLessonsQuery()
  const camp = useAppSelector(selectCamp)
  const hasTotal = records.length > 1 && camp !== undefined

  if (records.length === 0) {
    return <NoResult />
  }

  const totalOrNull = hasTotal ? (
    <LessonsPerLocation location={camp} count={getTotalForRecords(records)} />
  ) : (
    <></>
  )

  return (
    <Flexbox flow="column" cross="center">
      {totalOrNull}

      {records.map((record) => (
        <LessonsPerLocation
          key={`${record.school}-${hasTotal.toString()}`}
          location={record.school}
          count={getTotal(record)}
          color={record.color}
          selectable={hasTotal}
        />
      ))}
    </Flexbox>
  )
}

function getTotalForRecords(records: LessonQueryRecord[]): number {
  return records && Array.isArray(records)
    ? records.reduce((total, record) => total + getTotal(record), 0)
    : 0
}

function getTotal(record: LessonQueryRecord): number {
  return record && Array.isArray(record.countPerMonth)
    ? record.countPerMonth.reduce((total, cur) => total + cur, 0)
    : 0
}

export default SideLegend
