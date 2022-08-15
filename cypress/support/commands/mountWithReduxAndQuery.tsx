import { mount } from 'cypress/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as ReduxProvider } from 'react-redux'

import store from 'src/store'

// Ref:https://docs.cypress.io/guides/component-testing/custom-mount-react#Redux
Cypress.Commands.add('mountWithReduxAndQuery', (component, options = {}) => {

	const {
		reduxStore = store,
		queryClient = new QueryClient(),
		...mountOptions
	} = options

	const wrapped = (
		<QueryClientProvider client={queryClient}>
			<ReduxProvider store={reduxStore}>
				{component}
			</ReduxProvider>
		</QueryClientProvider>
	)

	return mount(wrapped, mountOptions)
})