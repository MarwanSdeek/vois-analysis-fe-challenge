import { QueryClient } from 'react-query'

import CountriesDropdown from '../../../../../../src/pages/Analysis/components/Filter/CountriesDropdown'
import { DEFAULT_CLASS_NAME_PREFIX } from '../../../../../../src/components/Dropdown'
import { getCountriesKey } from '../../../../../../src/cache/keys'
import store from '../../../../../../src/store'
import { selectCountry, countryChanged } from '../../../../../../src/store/analysisFilter'

import { DropdownUtils } from '../../../../components/Dropdown.cy'

describe('CountriesDropdown', () => {
	it('mount', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('input[name="countries"]').should('exist')
		DropdownUtils.getDropdown().should('be.visible')
	})

	it('has title', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('p').should('have.text', 'Select Country')
	})

	it('shows countries in queryClient as options', () => {
		cy.mountWithReduxAndQuery(<Comp />, {
			queryClient: getQueryClient()
		})

		DropdownUtils.getOpenDropdownBtn().click()
		DropdownUtils.getOptionsList().should('be.visible')

		DropdownUtils.getOptions().should('have.length', COUNTRIES.length)

		for (let i = 0; i < COUNTRIES.length; i++) {
			const country = COUNTRIES[i];

			DropdownUtils.getOptions()
				.eq(i)
				.should('have.text', country)
		}
	})

	it('shows selected country from redux as default value', () => {
		const selectedCountry = COUNTRIES[2]
		store.dispatch(countryChanged(selectedCountry))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		DropdownUtils.getValue().should('have.text', selectedCountry)
	})

	it('updates store when selected value changed', () => {
		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		const selectedCountryIndex = 1;
		const selectedCountry = COUNTRIES[selectedCountryIndex]

		DropdownUtils.getOpenDropdownBtn().click()
		DropdownUtils.getOptions()
			.eq(selectedCountryIndex)
			.click()

		DropdownUtils.getValue()
			.should('have.text', selectedCountry)
			.should(() => {
				expect(selectCountry(store.getState())).to.be.equal(selectedCountry)
			})
	})
})

const Comp = () => (
	<CountriesDropdown />
)

const COUNTRIES = ['country1', 'country2', 'country3']

const getQueryClient = () => {
	const queryClient = new QueryClient();
	queryClient.setQueryData(getCountriesKey(), COUNTRIES)

	return queryClient;
}