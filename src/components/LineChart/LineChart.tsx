import Line from './RegisteredLineChartJs'
import ChartDefaultOptions from './ChartDefaultOptions'

type DataSet = {
  label: string
  data: number[]
  color: string
}

type LineChartProps = {
  title: string
  labels: string[]
  datasets: DataSet[]
}

function LineChart(props: LineChartProps): JSX.Element {
  const data = {
    labels: props.labels,
    datasets: props.datasets.map((dataset: DataSet) => ({
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
      <p>{props.title}</p>
      <Line options={ChartDefaultOptions} data={data} />
    </>
  )
}

export default LineChart
