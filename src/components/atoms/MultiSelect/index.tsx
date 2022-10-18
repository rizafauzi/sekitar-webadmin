/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Select, Spin } from 'antd'

interface IOptionMultiSelect {
  label: string
  value: string | number
}

interface MultiSelectProps {
  loading: boolean
  value: string[]
  placeholder?: string
  options: IOptionMultiSelect[]
  onSelect: (selected: string[]) => void
  onSearch?: (value: string) => void
}

const MultiSelect: React.FC<MultiSelectProps> = (props: MultiSelectProps) => {
  const { loading, value, placeholder, options, onSelect, onSearch } = props
  const { Option } = Select

  const handleChange = (selected: string[]) => {
    onSelect(selected)
  }

  const searchOptions = (value: string) => {
    if (onSearch) onSearch(value)
  }

  return (
    <Select
      mode="multiple"
      showArrow
      optionFilterProp="children"
      style={{ width: '100%' }}
      placeholder={placeholder}
      filterOption={false}
      value={value}
      notFoundContent={loading ? <Spin size="small" /> : undefined}
      onChange={handleChange}
      onSearch={searchOptions}
    >
      {options.map(option => (
        <Option key={option.value}>{option.label}</Option>
      ))}
    </Select>
  )
}

export default MultiSelect
