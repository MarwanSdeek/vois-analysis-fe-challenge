import { useState, useEffect } from 'react'

import { styled } from 'stitches.config'
import { Flexbox, Text } from 'components/basic'
import { useAppDispatch } from 'store/hooks'
import { showSchool, hideSchool } from 'store/hiddenSchoolsOnChart'

import Checkbox from './Checkbox'

type LessonsPerLocationProps = {
  count: number
  location: string
  color?: string
  selectable?: boolean
}

function LessonsPerLocation(props: LessonsPerLocationProps) {
  const [isChecked, setIsChecked] = useState(true)
  const dispatch = useAppDispatch()

  if (!hasLocation(props)) {
    return <></>
  }

  function handleOnCheckboxChange() {
    const newIsChecked = !isChecked
    setIsChecked(newIsChecked)

    if (newIsChecked) {
      dispatch(showSchool(props.location))
    } else {
      dispatch(hideSchool(props.location))
    }
  }

  return (
    <Div flow="row" css={{ color: props.color }} checked={isChecked}>
      {props.selectable && (
        <CheckboxCol>
          <Checkbox
            checked={isChecked}
            onChange={handleOnCheckboxChange}
            color={props.color}
          />
        </CheckboxCol>
      )}
      <LocationCol>
        <Lessons>
          <Number>{props.count}</Number> lessons
        </Lessons>
        <Location>in {props.location}</Location>
      </LocationCol>
    </Div>
  )
}

function hasLocation(props: LessonsPerLocationProps) {
  return props && props.location && props.location.trim() !== ''
}

const Div = styled(Flexbox, {
  widthPer: 60,
  marginY: '$space$2',

  variants: {
    checked: {
      false: {
        opacity: 0.5,
      },
    },
  },
})

const CheckboxCol = styled('div', {
  widthPer: 30,
})

const LocationCol = styled('div', {
  widthPer: 70,
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
