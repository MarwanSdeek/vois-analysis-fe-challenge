import Checkbox from '../../../../../../../src/pages/Analysis/components/SideLegend/LessonsPerLocation/Checkbox'

describe('Checkbox', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.get('input[type="checkbox"]')
			.should('be.visible')
	})

	it('initial value', () => {
		cy.mount(<Comp initial={true} />)

		cy.get('input[type="checkbox"]')
			.should('be.visible')
			.should('be.checked')
	})
	
	it('color', () => {
		const color = 'rgb(25, 34, 32)'
		cy.mount(<Comp color={color} />)

		cy.get('input[type="checkbox"]')
			.should('be.visible')
			.should('have.css', 'border-color', color)
	})

	it('onChange', () => {
		const onChangeSpy = cy.spy().as('onChange')

		cy.mount(<Comp onChange={onChangeSpy} />)

		cy.get('input[type="checkbox"]').check()

		cy.get('@onChange').should('have.been.calledOnce')
		cy.get('@onChange').should('have.been.calledWith', true)

		cy.get('input[type="checkbox"]').uncheck()

		cy.get('@onChange').should('have.been.calledTwice')
		cy.get('@onChange').should('have.been.calledWith', false)
	})
})


const Comp = (props) => (
	<Checkbox {...props} />
)