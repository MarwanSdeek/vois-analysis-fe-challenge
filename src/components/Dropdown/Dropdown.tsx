import { useMemo } from 'react'
import Select, { OnChangeValue } from 'react-select'

type Option = {
  label: string
  value: string
}

type DropdownProps = {
  name: string
  options: string[]
  value: string | undefined
  onChange?: (newVal: string | undefined) => void
}

function Dropdown(props: DropdownProps) {
  const { options, value, ...restProps } = props

  const mappedOptions = useMemo(() => options.map(createOption), [options])
  const mappedValue = useMemo(() => createOption(value), [value])

  const handleChange = (newValue: OnChangeValue<Option, false>) => {
    props.onChange?.(newValue?.value)
  }

  return (
    <Select
      {...restProps}
      value={mappedValue}
      options={mappedOptions}
      onChange={handleChange}
      isClearable={true}
    />
  )
}

function createOption(val: string | undefined): Option {
  return {
    label: val || '',
    value: val || '',
  }
}

export type { DropdownProps }

export default Dropdown
