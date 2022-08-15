import Dropdown, { DEFAULT_CLASS_NAME_PREFIX } from 'src/components/Dropdown'

describe('Dropdown', () => {
	it('mount', () => {
		cy.mount(<Comp value={''} onChange='' />)

		utils.getDropdown().should('be.visible')
	})

	it('display value', () => {
		const value = OPTIONS[3]

		cy.mount(<Comp value={value} onChange={DO_NOTHING} />)

		utils.getValue().should('have.text', value)
	})

	it('display options on open dropdown button click', () => {
		cy.mount(<Comp value={null} onChange={DO_NOTHING} />)

		utils.getOpenDropdownBtn().click()

		utils.getOptionsList().should('be.visible')
	})

	it('display new value after selecting an option from the dropdown', () => {
		const value = OPTIONS[3]

		cy.mount(<Comp value={value} onChange={DO_NOTHING} />)

		utils.getValue().should('have.text', value)

		const newSelectedOptionIndex = 2;

		utils.getOpenDropdownBtn().click()
		utils.getOptions().eq(newSelectedOptionIndex).click()

		utils.getValue().should('have.text', OPTIONS[newSelectedOptionIndex])
	})

	it('show placeholder on clear button clicked', () => {
		const value = OPTIONS[3]

		cy.mount(<Comp value={value} onChange={DO_NOTHING} />)

		utils.getClearBtn().click()

		utils.getValue().should('have.text', utils.DEFAULT_PLACEHOLDER)
	})

	describe('search', () => {
		it('show options matching search', () => {
			cy.mount(<Comp value={null} onChange={DO_NOTHING} />)

			utils.getDropdown().type('another')
			utils.getOptions().should('have.length', 2)

			utils.getDropdown().type('option')
			utils.getOptions().should('have.length', 4)

			utils.getDropdown().type('extraOption')
			utils.getOptions()
				.should('have.length', 1)
				.should('have.text', OPTIONS[5])
		})

		it('show no options msg when no match', () => {
			cy.mount(<Comp value={null} onChange={DO_NOTHING} />)

			utils.getDropdown().type('not an option')

			utils.getOptions().should('have.length', 0)
			utils.getDropdownEmptyMsg().should('have.text', utils.DEFAULT_NO_OPTIONS)
		})
	})

	describe('OnChange', () => {
		it('calls OnChange with new selected value', () => {
			const onChangeSpy = cy.spy().as('onChange')

			cy.mount(<Comp value={null} onChange={onChangeSpy} />)

			const newSelectedOptionIndex = 4;
			utils.getOpenDropdownBtn().click()
			utils.getOptions()
				.eq(newSelectedOptionIndex)
				.click()

			cy.get('@onChange').should('have.been.calledOnce')
			cy.get('@onChange').should('have.been.calledWith', OPTIONS[newSelectedOptionIndex])
		})

		it('calls OnChange with undefined when cleared', () => {
			const onChangeSpy = cy.spy().as('onChange')

			cy.mount(<Comp value={null} onChange={onChangeSpy} />)

			utils.getOpenDropdownBtn().click()
			utils.getOptions().eq(4).click()
			utils.getClearBtn().click()

			cy.get('@onChange').should('have.callCount', 2)
			cy.get('@onChange').should('have.been.calledWith', undefined)
		})
	})
})

const Comp = ({ value, onChange }) => (
	<Dropdown
		name='test-dropdown'
		options={OPTIONS}
		onChange={onChange}
		value={value}
		classNamePrefix={DEFAULT_CLASS_NAME_PREFIX}
	/>
)

const OPTIONS = ['option1', 'option2', 'option3', 'Another1', 'Another2', 'extraOption']

const DO_NOTHING = () => true

const getSelector = (className: string) => (`.${DEFAULT_CLASS_NAME_PREFIX}__${className}`)

const utils = {
	getClearBtn: () => cy.get(getSelector('clear-indicator')),
	getDropdown: () => cy.get(getSelector('control')),
	getDropdownEmptyMsg: () => cy.get(getSelector('menu-notice--no-options')),
	getValue: () => cy.get(getSelector('value-container')),
	getOpenDropdownBtn: () => cy.get(getSelector('dropdown-indicator')),
	getOptionsList: () => cy.get(getSelector('menu-list')),
	getOptions: () => cy.get(getSelector('option')),
	DEFAULT_PLACEHOLDER: 'Select...',
	DEFAULT_NO_OPTIONS: 'No options',
}

export { utils as DropdownUtils }