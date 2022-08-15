import { Flexbox } from 'src/components/basic'

describe('Flexbox', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.getByTestId('flexbox')
			.should('exist')
			.should('have.css', 'display', 'flex')
	})

	describe('direction', () => {
		it('row by default', () => {
			cy.mount(<Comp />)

			cy.getByTestId('flexbox')
				.should('have.css', 'flex-direction', 'row')
		})

		it('row', () => {
			cy.mount(<Comp flow='row' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'flex-direction', 'row')
		})

		it('column', () => {
			cy.mount(<Comp flow='column' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'flex-direction', 'column')
		})

		it('column-reverse', () => {
			cy.mount(<Comp flow='columnReverse' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'flex-direction', 'column-reverse')
		})
	})

	describe('content spacing along main axis', () => {
		it('center', () => {
			cy.mount(<Comp main='center' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'justify-content', 'center')
		})

		it('space around', () => {
			cy.mount(<Comp main='spaceAround' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'justify-content', 'space-around')
		})

		it('space between', () => {
			cy.mount(<Comp main='spaceBetween' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'justify-content', 'space-between')
		})
	})

	describe('content spacing along cross axis', () => {
		it('start', () => {
			cy.mount(<Comp cross='start' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'align-items', 'flex-start')
		})

		it('center', () => {
			cy.mount(<Comp cross='center' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'align-items', 'center')
		})

		it('stretch', () => {
			cy.mount(<Comp cross='stretch' />)

			cy.getByTestId('flexbox')
				.should('have.css', 'align-items', 'stretch')
		})
	})
})


const Comp = (props) => (
	<Flexbox data-testid="flexbox" css={STYLE} {...props}>
		<div style={{ width: '20vw', minHeight: '3vh', backgroundColor: '#ef476f' }}>1</div>
		<div style={{ width: '20vw', minHeight: '3vh', backgroundColor: '#ffd166' }}>2</div>
		<div style={{ width: '20vw', minHeight: '3vh', backgroundColor: '#06d6a0' }}>3</div>
	</Flexbox>
)

const STYLE = {
	minHeight: '12vh',
	border: '1px dashed red',
	'*': { padding: '1vw', margin: '1vw' }
}
