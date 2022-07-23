import { styled } from 'stitches.config'

import { Text } from 'components/basic'

type LessonsPerLocationProps = {
  lessons?: number
  location?: string
  color?: string
}

function LessonsPerLocation(props: LessonsPerLocationProps) {
  if (!hasLocation(props)) {
    return <></>
  }

  return (
    <Div css={{ color: props.color }}>
      <Lessons>
        <Number>{props.lessons}</Number> lessons
      </Lessons>
      <Location>in {props.location}</Location>
    </Div>
  )
}

function hasLocation(props: LessonsPerLocationProps) {
  return props && props.location && props.location.trim() !== ''
}

const Div = styled('div', {
  widthPer: 60,
  marginY: '$space$2',
})

const Number = styled('span', {
  fontSize: '$fontSize$3',
})

const Lessons = styled(Text, {
  fontSize: '$fontSize$2',
})

const Location = styled(Text, {
  fontSize: '$fontSize$1',
})

export default LessonsPerLocation
