import { QueryKey } from 'react-query'

const getCountriesKey = () => 'countries'

const getCampsKey = (country: string) => ['camps', country]

const getSchoolsKey = (country: string, camp: string) => [
  'schools',
  country,
  camp,
]

const getLessonsKey = (country?: string, camp?: string, school?: string) => [
  'lessons',
  country,
  camp,
  school,
]

const getSchoolFromLessonsKey = (lessonsKey: QueryKey): string | undefined => {
  if (typeof lessonsKey === 'string') {
    const keyArray = lessonsKey.split(',')

    return keyArray.length > 0 ? keyArray[keyArray.length - 1] : undefined
  }

  return lessonsKey.length > 0
    ? (lessonsKey[lessonsKey.length - 1] as string)
    : undefined
}

const getAllLessonsForCampKey = (country?: string, camp?: string) => [
  'lessons',
  country,
  camp,
]

export {
  getCountriesKey,
  getCampsKey,
  getSchoolsKey,
  getLessonsKey,
  getSchoolFromLessonsKey,
  getAllLessonsForCampKey,
}
