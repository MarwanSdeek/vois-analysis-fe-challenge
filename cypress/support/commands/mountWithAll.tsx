import { mount } from 'cypress/react'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as ReduxProvider } from 'react-redux'

import store from '../../../src/store'

Cypress.Commands.add('mountWithAll', (component, options = {}) => {

	const {
		reduxStore = store,
		queryClient = new QueryClient(),
		routerProps = { initialEntries: ['/'] },
		...mountOptions
	} = options


	const wrapped = (
		<QueryClientProvider client={queryClient}>
			<ReduxProvider store={reduxStore}>
				<MemoryRouter {...routerProps}>
					{component}
				</MemoryRouter>
			</ReduxProvider>
		</QueryClientProvider>
	)

	return mount(wrapped, mountOptions)
})