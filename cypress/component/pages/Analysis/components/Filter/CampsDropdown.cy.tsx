import { QueryClient } from 'react-query'

import CampsDropdown from 'src/pages/Analysis/components/Filter/CampsDropdown'
import store from 'src/store'
import { getCampsKey } from 'src/cache/keys'
import { selectCamp, campChanged, countryChanged } from 'src/store/analysisFilter'

import { DropdownUtils } from 'test/components/Dropdown.cy'

describe('CampsDropdown', () => {
	it('mount', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('input[name="camps"]').should('exist')
		DropdownUtils.getDropdown().should('be.visible')
	})

	it('has title', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('p').should('have.text', 'Select Camp')
	})

	it('shows camps in queryClient as options', () => {
		store.dispatch(countryChanged(COUNTRY))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		DropdownUtils.getOpenDropdownBtn().click()
		DropdownUtils.getOptionsList().should('be.visible')

		DropdownUtils.getOptions().should('have.length', CAMPS.length)

		for (let i = 0; i < CAMPS.length; i++) {
			const camp = CAMPS[i];

			DropdownUtils.getOptions()
				.eq(i)
				.should('have.text', camp)
		}
	})

	it('shows selected camp from redux as default value', () => {
		const selectedCamp = CAMPS[2]
		store.dispatch(campChanged(selectedCamp))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		DropdownUtils.getValue().should('have.text', selectedCamp)
	})

	it('updates store when selected value changed', () => {
		store.dispatch(countryChanged(COUNTRY))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		const selectedCampIndex = 1;
		const selectedCamp = CAMPS[selectedCampIndex]

		DropdownUtils.getOpenDropdownBtn().click()
		DropdownUtils.getOptions()
			.eq(selectedCampIndex)
			.click()

		DropdownUtils.getValue()
			.should('have.text', selectedCamp)
			.should(() => {
				expect(selectCamp(store.getState())).to.be.equal(selectedCamp)
			})
	})
})

const Comp = () => (<CampsDropdown />)

const COUNTRY = 'country1';
const CAMPS = ['camp1', 'camp2', 'camp3'];

const getQueryClient = () => {
	const queryClient = new QueryClient();
	queryClient.setQueryData(getCampsKey(COUNTRY), CAMPS)

	return queryClient;
}