import { useMemo } from 'react'
import Select, { OnChangeValue } from 'react-select'

type Option = {
  label: string
  value: string
}

type DropdownProps = {
  name: string
  options: string[]
  defaultOption?: string
  onChange?: (newVal: string | undefined) => void
}

function Dropdown(props: DropdownProps) {
  const { options, defaultOption, ...restProps } = props
  const mappedOptions = useMemo(() => options.map(createOption), [options])

  const mappedDefaultOption = useMemo(
    () => createOption(defaultOption),
    [defaultOption]
  )

  const handleChange = (newValue: OnChangeValue<Option, false>) => {
    props.onChange?.(newValue?.value)
  }

  return (
    <Select
      {...restProps}
      options={mappedOptions}
      defaultValue={mappedDefaultOption}
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

export default Dropdown
