import LineChart from 'components/LineChart'

import Filter from './components/Filter'

function Analysis() {
  return (
    <>
      <p>Analysis Chart</p>
      <Filter />
      <LineChart labels={labels} datasets={datasets} title={'No of Lessons'} />
    </>
  )
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

export default Analysis
