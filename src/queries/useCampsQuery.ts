import { useQueryClient } from 'react-query'

import { useAppSelector } from 'store/hooks'
import { selectCountry } from 'store/analysisFilter'
import { getCampsKey } from 'cache/keys'

const useCampsQuery = () => {
  const queryClient = useQueryClient()
  const selectedCountry = useAppSelector(selectCountry) || ''

  return queryClient.getQueryData<string[]>(getCampsKey(selectedCountry)) || []
}

export default useCampsQuery
