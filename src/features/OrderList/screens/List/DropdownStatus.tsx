/* eslint-disable unicorn/prevent-abbreviations */
import { Select } from 'antd'

interface Props {
  onSelect: (val: number) => void
}

const DropdownStatus = ({ onSelect }: Props) => {
  const options = [
    { label: 'Diproses', value: 3 },
    { label: 'Dikirim', value: 4 },
    { label: 'Selesai', value: 5 },
    { label: 'Dibatalkan', value: 6 }
  ]

  return (
    <div>
      <Select
        placeholder="Pilih Status"
        style={{ width: 120 }}
        options={options}
        onSelect={onSelect}
      />
    </div>
  )
}

export default DropdownStatus
