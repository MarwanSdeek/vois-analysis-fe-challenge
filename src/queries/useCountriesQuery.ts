import { useQueryClient } from 'react-query'

import { getCountriesKey } from 'cache/keys'

const useCountriesQuery = () => {
  const queryClient = useQueryClient()

  return queryClient.getQueryData<string[]>(getCountriesKey()) || []
}

export default useCountriesQuery
