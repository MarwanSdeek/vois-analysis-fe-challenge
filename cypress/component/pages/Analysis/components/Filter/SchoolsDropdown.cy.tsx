import { QueryClient } from 'react-query'

import SchoolsDropdown from 'src/pages/Analysis/components/Filter/SchoolsDropdown'
import store from 'src/store'
import { getSchoolsKey } from 'src/cache/keys'
import { selectSchool, schoolChanged, campChanged, countryChanged } from 'src/store/analysisFilter'
import { SHOW_ALL } from 'src/queries/useSchoolsQuery'

import { DropdownUtils } from 'test/components/Dropdown.cy'

describe('SchoolsDropdown', () => {
	it('mount', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('input[name="schools"]').should('exist')
		DropdownUtils.getDropdown().should('be.visible')
	})

	it('has title', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('p').should('have.text', 'Select School')
	})

	it('shows schools in queryClient as options', () => {
		store.dispatch(countryChanged(COUNTRY))
		store.dispatch(campChanged(CAMP))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		DropdownUtils.getOpenDropdownBtn().click()
		DropdownUtils.getOptionsList().should('be.visible')

		DropdownUtils.getOptions().should('have.length', OPTIONS.length)

		for (let i = 0; i < OPTIONS.length; i++) {
			const school = OPTIONS[i];

			DropdownUtils.getOptions()
				.eq(i)
				.should('have.text', school)
		}
	})

	it('shows show all as first Option', () => {
		store.dispatch(countryChanged(COUNTRY))
		store.dispatch(campChanged(CAMP))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		DropdownUtils.getOpenDropdownBtn().click()
		DropdownUtils.getOptionsList().should('be.visible')

		DropdownUtils.getOptions()
			.eq(0)
			.should('have.text', SHOW_ALL)
	})

	it('shows selected school from redux as default value', () => {
		const selectedSchool = SCHOOLS[2]
		store.dispatch(schoolChanged(selectedSchool))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		DropdownUtils.getValue().should('have.text', selectedSchool)
	})

	it('updates store when selected value changed', () => {
		store.dispatch(countryChanged(COUNTRY))
		store.dispatch(campChanged(CAMP))

		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		const selectedSchoolIndex = 1;
		const selectedSchool = OPTIONS[selectedSchoolIndex]

		DropdownUtils.getOpenDropdownBtn().click()
		DropdownUtils.getOptions()
			.eq(selectedSchoolIndex)
			.click()

		DropdownUtils.getValue()
			.should('have.text', selectedSchool)
			.should(() => {
				expect(selectSchool(store.getState())).to.be.equal(selectedSchool)
			})
	})
})

const Comp = () => (<SchoolsDropdown />)

const COUNTRY = 'country1';
const CAMP = 'camp1';
const SCHOOLS = ['school1', 'school2', 'school3'];
const OPTIONS = [SHOW_ALL, ...SCHOOLS]

const getQueryClient = () => {
	const queryClient = new QueryClient();
	queryClient.setQueryData(getSchoolsKey(COUNTRY, CAMP), SCHOOLS)

	return queryClient;
}