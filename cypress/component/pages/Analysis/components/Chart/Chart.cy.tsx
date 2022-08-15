
import Chart from 'src/pages/Analysis/components/Chart'
import store from 'src/store'
import { schoolChanged, campChanged, countryChanged } from 'src/store/analysisFilter'

import getQueryClient from 'utils/getQueryClient'

describe('Chart', () => {
	it('mount', () => {
		mount();

		cy.get('p')
			.contains('No. of lessons')

		cy.get('canvas')
			.should('be.visible')
	})
})

const mount = (school: string = SCHOOL) => {
	store.dispatch(countryChanged(COUNTRY))
	store.dispatch(campChanged(CAMP))
	store.dispatch(schoolChanged(school))

	cy.mountWithAll(<Comp />, {
		reduxStore: store,
		queryClient: getQueryClient()
	})
}

const Comp = () => (
	<Chart />
)

const COUNTRY = 'country4'
const CAMP = 'camp2'
const SCHOOL = 'school1'
