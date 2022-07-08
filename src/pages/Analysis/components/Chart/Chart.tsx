import LineChart from 'components/LineChart'

function Chart() {
  return <LineChart labels={labels} datasets={datasets} title="No of lessons" />
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Nov',
  'Dec',
]

const datasets = [
  {
    label: 'Dataset 1',
    data: labels.map(() => Math.random() * 100),
    color: 'rgb(255, 99, 132)',
  },
  {
    label: 'Dataset 2',
    data: labels.map(() => Math.random() * 100),
    color: 'rgb(53, 162, 235)',
  },
]

export default Chart
