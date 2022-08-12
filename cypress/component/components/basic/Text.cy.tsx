import { Text } from '../../../../src/components/basic'
import { ViewportPreset } from 'cypress'

describe('Text', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.getByTestId('text')
			.should('be.visible')
	})

	describe('size', () => {
		it('default', () => {
			cy.mount(<Comp />)

			cy.getByTestId('text')
				.should('have.css', 'font-size', '12px')
		})

		it('title', () => {
			cy.mount(<Comp size="title" />)

			cy.getByTestId('text')
				.should('have.css', 'font-size', '48px')
		})

		it('subTitle', () => {
			cy.mount(<Comp size="subTitle" />)

			cy.getByTestId('text')
				.should('have.css', 'font-size', '20px')
		})

		it('label @ md', () => {
			cy.mount(<Comp size="label" />)

			cy.viewport(VIEW_PORT.md.width, VIEW_PORT.md.height)
			cy.getByTestId('text')
				.should('have.css', 'font-size', '12px')
		})

		it('label @ sm', () => {
			cy.mount(<Comp size="label" />)

			cy.viewport(VIEW_PORT.sm.width, VIEW_PORT.sm.height)
			cy.getByTestId('text')
				.should('have.css', 'font-size', '16px')
		})
	})
})


const Comp = (props) => (
	<Text data-testid="text" {...props}>
		A sample Text
	</Text>
)

const VIEW_PORT = {
	md: {
		width: 760,
		height: 500
	},
	sm: {
		width: 500,
		height: 500
	},
}