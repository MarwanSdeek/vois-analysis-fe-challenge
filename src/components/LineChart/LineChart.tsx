import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import CrosshairPlugin from 'chartjs-plugin-crosshair'

import TooltipConfig from './TooltipConfig'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CrosshairPlugin
)

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

const ChartDefaultOptions = {
  responsive: true,
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { drawBorder: false },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: TooltipConfig,
    crosshair: {
      sync: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
    },
  },
}

export default LineChart
