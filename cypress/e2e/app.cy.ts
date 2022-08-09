describe('App', () => {

	beforeEach(() => {
		cy.visit('/')
	})

	it('mount', () => { })

	it('shows Loader', () => {
		cy.getByTestId('loader')
			.should('be.visible')
			.should('have.text', 'Loading...')

		cy.wait(2000)

		cy.getByTestId('analysis-page')
			.should('be.visible')
	})
});
