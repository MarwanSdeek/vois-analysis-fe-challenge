import EntryDetails from '../../../../src/pages/EntryDetails'
import { useLocation } from 'react-router'

describe('LineChart', () => {
	it('mount', () => {
		cy.mountWithRouter(<Comp />)

		cy.getByTestId('page')
			.should('be.visible')
	})

	it('displays entry details passed in location state', () => {
		const state = {
			country: 'testCountry',
			camp: 'testCamp',
			school: 'testSchool',
			lessons: 50,
		}

		cy.mountWithRouter(<Comp />, {
			routerProps: {
				initialEntries: [{
					pathname: '/',
					state: state
				}]
			}
		})

		cy.getByTestId('country').contains(state.country)
		cy.getByTestId('camp').contains(state.camp)
		cy.getByTestId('school').contains(state.school)
		cy.getByTestId('lessons').contains(state.lessons)
	})
})

const Comp = (props) => (
	<div data-testid='page'>
		<EntryDetails />
	</div>
)