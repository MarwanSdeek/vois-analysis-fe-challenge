import { useQueryClient } from 'react-query'

import { useAppSelector } from 'store/hooks'
import { selectCountry, selectCamp } from 'store/analysisFilter'
import { getSchoolsKey } from 'cache/keys'

const useSchoolsQuery = () => {
  const queryClient = useQueryClient()
  const selectedCountry = useAppSelector(selectCountry) || ''
  const selectedCamp = useAppSelector(selectCamp) || ''

  const schools = queryClient.getQueryData<string[]>(
    getSchoolsKey(selectedCountry, selectedCamp)
  )

  return schools ? [SHOW_ALL, ...schools] : []
}

const SHOW_ALL = 'Show All'

export { SHOW_ALL }

export default useSchoolsQuery
