import { Text, Flexbox } from 'components/basic'
import { NO_DATA } from 'constants/messages'

function NoResult() {
  return (
    <Flexbox css={{ height: '100%' }} main="center" cross="center">
      <Text>{NO_DATA} ...</Text>
    </Flexbox>
  )
}

export default NoResult
