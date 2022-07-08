const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
]

function getMonthIndex(month: string): number {
  return MONTHS.indexOf(month.toLowerCase())
}

export { MONTHS, getMonthIndex }
