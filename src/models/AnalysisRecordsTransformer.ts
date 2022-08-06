import randomColor from 'randomcolor'

import { AnalysisRecord, Lessons } from 'models'
import { getMonthIndex } from 'utils/Months'

class AnalysisRecordsTransformer {
  campsByCountry: Map<string, Set<string>>
  schoolsByCamp: Map<string, Set<string>>
  schoolsLessonsPerMonth: Map<string, number[]>

  constructor(analysisRecords: AnalysisRecord[]) {
    this.campsByCountry = new Map<string, Set<string>>()
    this.schoolsByCamp = new Map<string, Set<string>>()
    this.schoolsLessonsPerMonth = new Map<string, number[]>()

    this.extractDataFromAnalysisRecords(analysisRecords)
  }

  getCountries(): string[] {
    return Array.from(this.campsByCountry.keys())
  }

  getCamps(country: string): string[] {
    return Array.from(this.campsByCountry.get(country)?.values() || [])
  }

  getSchools(country: string, camp: string): string[] {
    return Array.from(
      this.schoolsByCamp.get(getCampKey(country, camp))?.values() || []
    )
  }

  getLessons(country: string, camp: string, school: string): Lessons {
    return {
      school: school,
      countPerMonth: this.getLessonsCount(country, camp, school),
      color: randomColor({ luminosity: 'dark' }),
    }
  }

  private getLessonsCount(
    country: string,
    camp: string,
    school: string
  ): number[] {
    return Array.from(
      this.schoolsLessonsPerMonth
        .get(getSchoolKey(country, camp, school))
        ?.values() || []
    )
  }

  private extractDataFromAnalysisRecords(analysisRecords: AnalysisRecord[]) {
    if (!analysisRecords) {
      return
    }

    analysisRecords.forEach((record) => {
      this.addCamp(record)
      this.addSchool(record)
      this.addLessons(record)
    })
  }

  private addCamp({ country, camp }: AnalysisRecord) {
    if (!this.campsByCountry.has(country)) {
      this.campsByCountry.set(country, new Set<string>())
    }

    this.campsByCountry.get(country)?.add(camp)
  }

  private addSchool({ country, camp, school }: AnalysisRecord) {
    const campKey = getCampKey(country, camp)
    if (!this.schoolsByCamp.has(campKey)) {
      this.schoolsByCamp.set(campKey, new Set<string>())
    }

    this.schoolsByCamp.get(campKey)?.add(school)
  }

  private addLessons(record: AnalysisRecord) {
    const { country, camp, school, month, lessons, id } = record

    const schoolKey = getSchoolKey(country, camp, school)
    if (!this.schoolsLessonsPerMonth.has(schoolKey)) {
      this.schoolsLessonsPerMonth.set(schoolKey, Array<number>(12).fill(0))
    }

    const monthsLessons = this.schoolsLessonsPerMonth.get(schoolKey) || []
    const monthIndex = getMonthIndex(month)
    if (monthIndex === -1) {
      console.warn(`Month: ${month} is not a month. id:${id}`)
      return
    }

    monthsLessons[monthIndex] += lessons
  }
}

function getCampKey(country: string, camp: string): string {
  return `${country}-${camp}`
}

function getSchoolKey(country: string, camp: string, school: string): string {
  return `${getCampKey(country, camp)}-${school}`
}

export default AnalysisRecordsTransformer
