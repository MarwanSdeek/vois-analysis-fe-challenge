import NoResult from '../../../../../../src/pages/Analysis/components/SideLegend/NoResult'
import { NO_DATA } from '../../../../../../src/constants/messages'


describe('NoResult', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.contains(NO_DATA)
	})
})


const Comp = () => (
	<NoResult />
)