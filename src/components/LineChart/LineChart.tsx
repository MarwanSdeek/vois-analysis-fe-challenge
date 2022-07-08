import { useRef, MouseEvent } from 'react'
import { getElementAtEvent } from 'react-chartjs-2'

import { Text } from 'components/basic'

import Line from './RegisteredLineChartJs'
import ChartDefaultOptions from './ChartDefaultOptions'

type Dataset = {
  label: string
  data: number[]
  color: string
}

type LineChartProps = {
  labels: string[]
  datasets: Dataset[]
  title?: string
  onPointClick?: (index: number, datasetIndex: number) => void
}

function LineChart(props: LineChartProps): JSX.Element {
  const chartRef = useRef(null)

  const data = {
    labels: props.labels,
    datasets: props.datasets.map(asChartData),
  }

  const handleOnClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!chartRef.current) {
      return
    }

    const points = getElementAtEvent(chartRef.current, event)

    if (points && points.length > 0 && points[0]) {
      const point = points[0]

      props.onPointClick?.(point.index, point.datasetIndex)
    }
  }

  return (
    <>
      <Text size="label" css={{ marginY: '$space$3', marginX: '$space$2' }}>
        {props.title}
      </Text>
      <Line
        ref={chartRef}
        options={ChartDefaultOptions}
        data={data}
        onClick={handleOnClick}
      />
    </>
  )
}

const asChartData = (dataset: Dataset) => ({
  label: dataset.label,
  data: dataset.data,
  borderColor: dataset.color,
  backgroundColor: 'rgb(255, 255, 255, 1)',
  borderWidth: 2,
  pointRadius: 6,
  pointHoverRadius: 8,
  pointHoverBackgroundColor: dataset.color,
})

export type { Dataset }

export default LineChart
