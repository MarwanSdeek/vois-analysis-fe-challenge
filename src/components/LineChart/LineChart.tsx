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
  TooltipItem,
  ChartType,
} from 'chart.js'
import { CrosshairPlugin } from 'chartjs-plugin-crosshair'

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
    tooltip: {
      usePointStyle: true,
      rtl: true,
      textDirection: 'ltr',
      padding: 10,
      boxPadding: 60,
      callbacks: {
        title: () => '',
        label: (tooltipItem: TooltipItem<ChartType>) => {
          return tooltipItem.dataset.label || ''
        },
        afterBody: (tooltipItems: TooltipItem<ChartType>[]) => {
          if (tooltipItems.length === 0 || !tooltipItems[0]) {
            return ''
          }

          const { dataIndex, dataset, formattedValue } = tooltipItems[0]
          const hasPrevious = dataIndex > 0
          const isIncreased =
            hasPrevious && dataset.data[dataIndex] > dataset.data[dataIndex - 1]
          const increasePrecentage = !hasPrevious
            ? 0
            : Math.round(
                ((dataset.data[dataIndex] - dataset.data[dataIndex - 1]) /
                  dataset.data[dataIndex - 1]) *
                  100
              )
          const afterText = `${isIncreased ? '+' : '-'} ${Math.abs(
            increasePrecentage
          )}% ${isIncreased ? '↑' : '↓'}`

          return `${Math.round(formattedValue)} lessons ${afterText}`
        },
      },
    },
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
