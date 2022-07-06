import { QueryClient } from 'react-query'

import { AnalysisRecord, AnalysisRecordsTransformer } from 'models'

import * as keys from './keys'

// TODO: Refactor
function createCacheInitializer(
  queryClient: QueryClient
): (analysisRecords: AnalysisRecord[]) => void {
  return (analysisRecords: AnalysisRecord[]) => {
    const transformer = new AnalysisRecordsTransformer(analysisRecords)
    const countries: string[] = transformer.getCountries()

    queryClient.setQueryData(keys.getCountriesKey(), transformer.getCountries())

    countries.forEach((country) => {
      const camps: string[] = transformer.getCamps(country)
      queryClient.setQueryData(keys.getCampsKey(country), camps)

      camps.forEach((camp) => {
        const schools = transformer.getSchools(country, camp)
        queryClient.setQueryData(keys.getSchoolsKey(country, camp), schools)

        schools.forEach((school) => {
          queryClient.setQueryData(
            keys.getLessonsKey(country, camp, school),
            transformer.getLessons(country, camp, school)
          )
        })
      })
    })
  }
}

export default createCacheInitializer
