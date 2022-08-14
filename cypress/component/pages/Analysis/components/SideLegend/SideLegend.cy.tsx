import store from '../../../../../../src/store'
import { schoolChanged, campChanged, countryChanged } from '../../../../../../src/store/analysisFilter'
import { NO_DATA } from '../../../../../../src/constants/messages'
import { SHOW_ALL } from '../../../../../../src/queries/useSchoolsQuery'

import SideLegend from '../../../../../../src/pages/Analysis/components/SideLegend'

import getQueryClient from '../../../../../utils/getQueryClient'

describe('SideLegend', () => {
	it('no data', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('p')
			.contains(NO_DATA)
	})

	it('display single school when school filter is selected', () => {
		mount();

		cy.get('p')
			.eq(0)
			.contains(LESSONS)

		cy.get('p')
			.eq(1)
			.contains(SCHOOL)

		cy.get('input[type="checkbox"]')
			.should('not.exist')
	})

	it('display camp with schools when All schools selected', () => {
		mount(SHOW_ALL);

		cy.get('p')
			.eq(0)
			.contains(ALL_LESSONS)

		cy.get('p')
			.eq(1)
			.contains(CAMP)

		cy.get('input[type="checkbox"]')
			.should('be.visible')
			.should('have.length', 3)
	})

	it('display no data when camp filter changed', () => {
		mount();

		cy.get('p')
			.eq(1)
			.contains(SCHOOL)

		cy.wait(1)
			.then(() => {
				store.dispatch(campChanged('camp1'))
			})

		cy.get('p')
			.contains(NO_DATA)
	})

	it('display no data when country filter changed', () => {
		mount();

		cy.get('p')
			.eq(1)
			.contains(SCHOOL)

		cy.wait(1)
			.then(() => {
				store.dispatch(countryChanged('country1'))
			})

		cy.get('p')
			.contains(NO_DATA)
	})

})

const mount = (school: string = SCHOOL) => {
	store.dispatch(countryChanged(COUNTRY))
	store.dispatch(campChanged(CAMP))
	store.dispatch(schoolChanged(school))

	cy.mountWithReduxAndQuery(<Comp />, {
		reduxStore: store,
		queryClient: getQueryClient()
	})
}

const Comp = () => (
	<SideLegend />
)

const COUNTRY = 'country4'
const CAMP = 'camp2'
const SCHOOL = 'school1'
const LESSONS = 30
const ALL_LESSONS = 87
