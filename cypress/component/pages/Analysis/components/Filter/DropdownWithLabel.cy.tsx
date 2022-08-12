import DropdownWithLabel from '../../../../../../src/pages/Analysis/components/Filter/DropdownWithLabel'
import { DropdownUtils } from '../../../../components/Dropdown.cy'


describe('DropdownWithLabel', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.get(`input[name="${NAME}"]`).should('exist')

		DropdownUtils.getDropdown().should('be.visible')

		cy.get('p').should('have.text', LABEL)
	})
})


const Comp = () => (
	<DropdownWithLabel
		label={LABEL}
		name={NAME}
		options={['option1', 'option2']}
	/>
)

const LABEL = 'dropdown-label'
const NAME = 'dropdown-name'
