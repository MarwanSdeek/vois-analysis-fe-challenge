import { QueryClient } from 'react-query'

import Filter from '../../../../../../src/pages/Analysis/components/Filter'
import store from '../../../../../../src/store'
import createCacheInitializer from '../../../../../../src/cache/createCacheInitializer'

import { DropdownUtils } from '../../../../components/Dropdown.cy'

describe('CountriesDropdown', () => {
	it('mount', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('input[name="countries"]').should('exist')
		cy.get('input[name="camps"]').should('exist')
		cy.get('input[name="schools"]').should('exist')
	})

	it.only('camps and schools are cleared when country changed', () => {
		cy.mountWithReduxAndQuery(<Comp />, {
			reduxStore: store,
			queryClient: getQueryClient()
		})

		// choose country
		utils.getCountryDropdown().within(utils.open)
		utils.chooseOption(0);

		// choose camp
		utils.getCampDropdown().within(utils.open)
		utils.chooseOption(0);

		// choose school
		utils.getSchoolDropdown().within(utils.open)
		utils.chooseOption(1);

		// change country value
		utils.getCountryDropdown().within(utils.open)
		utils.chooseOption(1);

		utils.getCampDropdown().within(utils.isCleared)
		utils.getSchoolDropdown().within(utils.isCleared)
	})
})

const Comp = () => (<Filter />)

const ANALYSIS_RECORDS = [
	{ id: 1, month: 'Feb', country: 'country1', camp: 'camp1', school: 'school1', lessons: 20 },
	{ id: 2, month: 'Feb', country: 'country1', camp: 'camp1', school: 'school2', lessons: 40 },
	{ id: 3, month: 'Feb', country: 'country1', camp: 'camp2', school: 'school1', lessons: 50 },
	{ id: 4, month: 'Feb', country: 'country2', camp: 'camp1', school: 'school1', lessons: 20 },
	{ id: 5, month: 'Feb', country: 'country2', camp: 'camp1', school: 'school2', lessons: 10 },
	{ id: 6, month: 'Feb', country: 'country3', camp: 'camp1', school: 'school1', lessons: 70 },
	{ id: 7, month: 'Feb', country: 'country4', camp: 'camp1', school: 'school1', lessons: 20 },
	{ id: 8, month: 'Feb', country: 'country4', camp: 'camp2', school: 'school1', lessons: 30 },
	{ id: 9, month: 'Feb', country: 'country4', camp: 'camp2', school: 'school2', lessons: 14 },
	{ id: 10, month: 'Feb', country: 'country4', camp: 'camp2', school: 'school3', lessons: 43 },
]

const getQueryClient = () => {
	const queryClient = new QueryClient();

	const init = createCacheInitializer(queryClient);

	init(ANALYSIS_RECORDS)

	return queryClient;
}

const utils = {
	getCountryDropdown: () => DropdownUtils.getDropdown().eq(0),
	getCampDropdown: () => DropdownUtils.getDropdown().eq(1),
	getSchoolDropdown: () => DropdownUtils.getDropdown().eq(2),
	open: () => DropdownUtils.getOpenDropdownBtn().click(),
	chooseOption: (index: number) => DropdownUtils.getOptions().eq(index).click(),
	isCleared: () => DropdownUtils.getValue().should('have.text', DropdownUtils.DEFAULT_PLACEHOLDER)
}