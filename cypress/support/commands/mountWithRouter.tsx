import { MemoryRouter } from 'react-router-dom'

//Ref: 	https://docs.cypress.io/guides/component-testing/custom-mount-react#React-Router
Cypress.Commands.add('mountWithRouter', (component, options = {}) => {
	const { routerProps = { initialEntries: ['/'] }, locationState, ...mountOptions } = options

	const wrapped = (<MemoryRouter {...routerProps} > {component} </MemoryRouter>)

	return cy.mount(wrapped, mountOptions)
})