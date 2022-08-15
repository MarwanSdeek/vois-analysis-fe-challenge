import { QueryClient } from 'react-query'

import createCacheInitializer from 'src/cache/createCacheInitializer'

import analysisRecords from '../fixtures/analysisRecords.json'


const getQueryClient = () => {
	const queryClient = new QueryClient();

	const init = createCacheInitializer(queryClient);

	init(analysisRecords)

	return queryClient;
}

export default getQueryClient
