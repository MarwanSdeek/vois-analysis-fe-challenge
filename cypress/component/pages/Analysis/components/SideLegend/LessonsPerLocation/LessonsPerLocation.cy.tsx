import store from '../../../../../../../src/store'
import { selectHiddenSchools } from '../../../../../../../src/store/hiddenSchoolsOnChart'

import LessonsPerLocation from '../../../../../../../src/pages/Analysis/components/SideLegend/LessonsPerLocation'

describe('LessonsPerLocation', () => {
	it('mount', () => {
		cy.mountWithReduxAndQuery(<Comp />)

		cy.get('p')
			.eq(0)
			.should('be.visible')
			.contains(COUNT)

		cy.get('p')
			.eq(1)
			.should('be.visible')
			.contains(LOCATION)
	})

	it('color', () => {
		const color = 'rgb(234, 54, 21)'

		cy.mountWithReduxAndQuery(<Comp color={color} />)

		cy.get('p')
			.should('have.css', 'color', color)
	})

	describe('selectable', () => {
		it('display checkbox if true', () => {
			cy.mountWithReduxAndQuery(<Comp selectable={true} />)

			cy.get('input[type="checkbox"]')
				.should('be.visible')
		})

		it('change hiddenSchools when value changed', () => {
			cy.mountWithReduxAndQuery(<Comp selectable={true} />, {
				reduxStore: store,
			})

			expect(selectHiddenSchools(store.getState())).to.deep.equal([])

			cy.get('input[type="checkbox"]').click()
				.should(() => {
					expect(selectHiddenSchools(store.getState())).to.deep.equal([LOCATION])
				})


			cy.get('input[type="checkbox"]').click()
				.should(() => {
					expect(selectHiddenSchools(store.getState())).to.deep.equal([])
				})
		})
	})
})


const Comp = (props) => (
	<LessonsPerLocation count={COUNT} location={LOCATION} {...props} />
)

const COUNT = 28
const LOCATION = 'test location'