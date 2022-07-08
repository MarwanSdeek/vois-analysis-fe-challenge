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
}

function LineChart(props: LineChartProps): JSX.Element {
  const data = {
    labels: props.labels,
    datasets: props.datasets.map((dataset: Dataset) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.color,
      backgroundColor: 'rgb(255, 255, 255, 1)',
      borderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: dataset.color,
    })),
  }

  return (
    <>
      <Text size="label" css={{ marginY: '$space$3', marginX: '$space$2' }}>
        {props.title}
      </Text>
      <Line options={ChartDefaultOptions} data={data} />
    </>
  )
}

export type { Dataset }

export default LineChart
