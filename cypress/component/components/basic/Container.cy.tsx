import { Container } from 'src/components/basic'

describe('Container', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.getByTestId('container')
			.should('be.visible')
			.should('have.css', 'padding')
	})
})


const Comp = () => (
	<Container data-testid="container" css={STYLE}>
		<p> A Container </p>
	</Container>
)

const STYLE = {
	minHeight: '12vh',
	border: '1px dashed red',
	'*': { padding: '1vw', margin: '1vw' }
}
