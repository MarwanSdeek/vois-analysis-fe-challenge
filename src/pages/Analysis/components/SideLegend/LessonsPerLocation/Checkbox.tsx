import { useState } from 'react'

import { styled } from 'stitches.config'

type CheckboxProps = {
  initial?: boolean
  onChange?: (newValue: boolean) => void
  color?: string
}

function Checkbox(props: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(props.initial || false)

  function handleOnChange() {
    const newValue = !isChecked

    setIsChecked(newValue)
    props.onChange?.(newValue)
  }

  return (
    <CheckboxStyled
      type="checkbox"
      checked={isChecked}
      // use another attribute, as stitches removes variant ones
      isChecked={isChecked}
      onChange={handleOnChange}
      css={{
        borderColor: props.color,
        ...(isChecked && { backgroundColor: props.color }),
      }}
    />
  )
}

const CheckboxStyled = styled('input', {
  width: '$space$6',
  height: '$space$6',
  margin: '$space$1',
  borderRadius: '50%',
  border: '2px solid #295282',
  outline: 'none',
  appearance: 'none',
  cursor: 'pointer',
  transition: '0.5s',

  variants: {
    isChecked: {
      true: {
        backgroundColor: '#295282',
        boxShadow: 'inset 0px 0px 0px 5px #ffffff',
        transition: '0.5s',
      },
    },
  },
})

export default Checkbox
