import { styled } from 'stitches.config'
import { PageContainer, Text, Flexbox, Container } from 'components/basic'

import Filter from './components/Filter'
import Chart from './components/Chart'
import SideLegend from './components/SideLegend'

function Analysis() {
  return (
    <PageContainer>
      <Text size="title">Analysis Chart</Text>
      <Text size="subTitle">Number of Lessons</Text>

      <Filter />

      <Flexbox flow={{ '@sm': 'column' }} css={{ marginTop: '$space$5' }}>
        <ChartColumn>
          <Chart />
        </ChartColumn>

        <SideLegendColumn>
          <SideLegend />
        </SideLegendColumn>
      </Flexbox>
    </PageContainer>
  )
}

const ChartColumn = styled(Container, {
  widthPer: 70,
  marginRight: '$space$1',

  '@sm': { widthPer: 100, padding: 0, margin: 0 },
})

const SideLegendColumn = styled(Container, {
  widthPer: 29,

  '@sm': {
    widthPer: 100,
    padding: 0,
    margin: 0,
    marginTop: '$space$5',
  },
})

export default Analysis
