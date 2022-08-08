import Dropdown from '../../../../src/components/Dropdown'

describe('Dropdown', () => {
	it('mount', () => {
		cy.mount(<Comp value={''} onChange='' />)

		cy.get(getSelector('control'))
			.should('be.visible')
	})

	it('display value', () => {
		const value = OPTIONS[3]

		cy.mount(<Comp value={value} onChange={DO_NOTHING} />)

		cy.get(getSelector('value-container'))
			.should('have.text', value)
	})

	it('display options on open dropdown button click', () => {
		cy.mount(<Comp value={null} onChange={DO_NOTHING} />)

		cy.get(getSelector('dropdown-indicator')).click()

		cy.get(getSelector('menu-list'))
			.should('be.visible')
	})

	it('display new value after selecting an option from the dropdown', () => {
		const value = OPTIONS[3]

		cy.mount(<Comp value={value} onChange={DO_NOTHING} />)

		cy.get(getSelector('value-container'))
			.should('have.text', value)

		const newSelectedOptionIndex = 2;

		cy.get(getSelector('dropdown-indicator')).click()
		cy.get(getSelector('option'))
			.eq(newSelectedOptionIndex)
			.click()

		cy.get(getSelector('value-container'))
			.should('have.text', OPTIONS[newSelectedOptionIndex])
	})

	it('show placeholder on clear button clicked', () => {
		const value = OPTIONS[3]

		cy.mount(<Comp value={value} onChange={DO_NOTHING} />)

		cy.get(getSelector('clear-indicator')).click()

		cy.get(getSelector('value-container'))
			.should('have.text', DEFAULT_PLACEHOLDER)
	})

	describe('search', () => {
		it('show options matching search', () => {
			cy.mount(<Comp value={null} onChange={DO_NOTHING} />)

			cy.get(getSelector('control')).type('another')
			cy.get(getSelector('option'))
				.should('have.length', 2)

			cy.get(getSelector('control')).type('option')
			cy.get(getSelector('option'))
				.should('have.length', 4)

			cy.get(getSelector('control')).type('extraOption')
			cy.get(getSelector('option'))
				.should('have.length', 1)
				.should('have.text', OPTIONS[5])
		})

		it('show no options msg when no match', () => {
			cy.mount(<Comp value={null} onChange={DO_NOTHING} />)

			cy.get(getSelector('control')).type('not an option')

			cy.get(getSelector('option'))
				.should('have.length', 0)
			cy.get(getSelector('menu-notice--no-options'))
				.should('have.text', DEFAULT_NO_OPTIONS_MSG)
		})
	})

	describe('OnChange', () => {
		it('calls OnChange with new selected value', () => {
			const onChangeSpy = cy.spy().as('onChange')

			cy.mount(<Comp value={null} onChange={onChangeSpy} />)

			const newSelectedOptionIndex = 4;
			cy.get(getSelector('dropdown-indicator')).click()
			cy.get(getSelector('option'))
				.eq(4)
				.click()

			cy.get('@onChange').should('have.been.calledOnce')
			cy.get('@onChange').should('have.been.calledWith', OPTIONS[newSelectedOptionIndex])
		})
		
		it('calls OnChange with undefined when cleared', () => {
			const onChangeSpy = cy.spy().as('onChange')

			cy.mount(<Comp value={null} onChange={onChangeSpy} />)

			const newSelectedOptionIndex = 4;
			cy.get(getSelector('dropdown-indicator')).click()
			cy.get(getSelector('option'))
				.eq(4)
				.click()
		
			cy.get(getSelector('clear-indicator')).click()

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
		classNamePrefix={CLASS_PREFIX}
	/>
)

const OPTIONS = ['option1', 'option2', 'option3', 'Another1', 'Another2', 'extraOption']

const CLASS_PREFIX = 'react-select'

const DO_NOTHING = () => true

const getSelector = (className) => (`.${CLASS_PREFIX}__${className}`)

const DEFAULT_PLACEHOLDER = 'Select...'

const DEFAULT_NO_OPTIONS_MSG = 'No options'