import React from 'react'

import { styled } from 'stitches.config'

type CheckboxProps = {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  color?: string
}

function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxStyled
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
      css={{
        borderColor: props.color,
        ...(props.checked && { backgroundColor: props.color }),
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
    checked: {
      true: {
        boxShadow: 'inset 0px 0px 0px 5px #ffffff',
        transition: '0.5s',
      },
    },
  },
})

export default Checkbox
