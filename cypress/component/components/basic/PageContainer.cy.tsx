import { PageContainer } from 'src/components/basic'

describe('PageContainer', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.getByTestId('pageContainer')
			.should('be.visible')
			.should('have.css', 'min-height')
	})
})


const Comp = () => (
	<PageContainer data-testid="pageContainer" css={STYLE}>
		<p> A Page Container </p>
	</PageContainer>
)

const STYLE = {
	border: '1px dashed red'
}
