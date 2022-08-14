import Analysis from '../../../../src/pages/Analysis'

describe('Analysis page', () => {
	it('mount', () => {
		cy.mountWithAll(<Comp />)

		cy.get('p')
			.contains('Analysis Chart')

		cy.getByTestId('filter')
			.should('be.visible')

		cy.getByTestId('chart')
			.should('be.visible')

		cy.getByTestId('sideLegend-NoResult')
			.should('be.visible')
	})
})

const Comp = () => (
	<Analysis />
)
