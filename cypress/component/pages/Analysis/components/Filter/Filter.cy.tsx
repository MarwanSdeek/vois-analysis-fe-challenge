import Filter from '../../../../../../src/pages/Analysis/components/Filter'
import store from '../../../../../../src/store'

import { DropdownUtils } from '../../../../components/Dropdown.cy'
import getQueryClient from '../../../../../utils/getQueryClient'

describe('Filter', () => {
	it('mount', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('input[name="countries"]').should('exist')
		cy.get('input[name="camps"]').should('exist')
		cy.get('input[name="schools"]').should('exist')
	})

	it('camps and schools are cleared when country changed', () => {
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


const utils = {
	getCountryDropdown: () => DropdownUtils.getDropdown().eq(0),
	getCampDropdown: () => DropdownUtils.getDropdown().eq(1),
	getSchoolDropdown: () => DropdownUtils.getDropdown().eq(2),
	open: () => DropdownUtils.getOpenDropdownBtn().click(),
	chooseOption: (index: number) => DropdownUtils.getOptions().eq(index).click(),
	isCleared: () => DropdownUtils.getValue().should('have.text', DropdownUtils.DEFAULT_PLACEHOLDER)
}