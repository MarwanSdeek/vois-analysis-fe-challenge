import LineChart from 'src/components/LineChart'
import type { Dataset } from 'src/components/LineChart'


describe('LineChart', () => {
	it('mount', () => {
		cy.mount(<Comp />)

		cy.get('canvas')
			.should('be.visible')
	})

	it('title', () => {
		cy.mount(<Comp title={TITLE} />)
		cy.get('p')
			.should('be.visible')
			.should('have.text', TITLE)
	})

	it('onPointClick', () => {
		const onPointClickSpy = cy.spy().as('onPointClick')

		cy.mount(<Comp onPointClick={onPointClickSpy} />)

		cy.viewport(TEST_POINT.viewport.width, TEST_POINT.viewport.height)
		// wait till chart is drawn
		cy.wait(1000)
		cy.getByTestId('lineChart-container').click(TEST_POINT.click.x, TEST_POINT.click.y)

		cy.get('@onPointClick').should('have.been.calledOnce')
		cy.get('@onPointClick').should('have.been.calledWith', TEST_POINT.pointIndex, TEST_POINT.datasetIndex)
	})

})

const Comp = (props) => (
	<div data-testid='lineChart-container'>
		<LineChart labels={LABELS} datasets={DATASETS} {...props} />
	</div>
)

const LABELS = ['label1', 'label2', 'label3']
const DATASETS: Dataset[] = [
	{
		label: LABELS[0],
		data: [1, 2, 3, 4, 5],
		color: 'blue',
	},
	{
		label: LABELS[1],
		data: [-2, 7, 5, 12],
		color: '#f44336',
	},
	{
		label: LABELS[2],
		data: [9, 14, 16],
		color: 'rgb(77, 199, 122)',
	},
]
const TITLE = 'Chart Title'

const TEST_POINT = {
	viewport: {
		width: 500,
		height: 500,
	},
	click: {
		x: 246,
		y: 33,
	},
	pointIndex: 1,
	datasetIndex: 2,
}