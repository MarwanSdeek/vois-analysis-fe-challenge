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
  getAllLessonsForCampKey,
}
