import LineChart from 'components/LineChart'
import { PageContainer, Text } from 'components/basic'

import Filter from './components/Filter'

function Analysis() {
  return (
    <PageContainer>
      <Text size="title">Analysis Chart</Text>
      <Text size="subTitle">Number of Lessons</Text>
      <Filter />
      <LineChart labels={labels} datasets={datasets} />
    </PageContainer>
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
