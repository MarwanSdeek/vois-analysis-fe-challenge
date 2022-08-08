import { useMemo, useState, useEffect } from 'react'
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
  classNamePrefix?: string
}

function Dropdown(props: DropdownProps) {
  const { options, value, ...restProps } = props
  const [selectedValue, setSelectedValue] = useState<Option | null>(
    getValue(value)
  )
  const mappedOptions = useMemo(() => options.map(createOption), [options])

  const handleChange = (newValue: OnChangeValue<Option, false>) => {
    props.onChange?.(newValue?.value)
    setSelectedValue(getValue(newValue?.value))
  }

  useEffect(() => {
    setSelectedValue(getValue(props.value))
  }, [props.value])

  return (
    <Select
      {...restProps}
      value={selectedValue}
      options={mappedOptions}
      onChange={handleChange}
      isClearable={true}
    />
  )
}

function getValue(value: string | undefined | null) {
  return value ? createOption(value) : null
}

function createOption(val: string): Option {
  return {
    label: val,
    value: val,
  }
}

export type { DropdownProps }

export default Dropdown
