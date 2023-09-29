/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/prevent-abbreviations */
import { Select } from 'antd'
import { options } from '@constants/options'

interface Props {
  onSelect: (val: number) => void
}

const DropdownStatus = ({ onSelect }: Props) => (
  <div>
    <Select
      placeholder="Pilih Status"
      style={{ width: 120 }}
      options={options.ORDER_STATE_OPTIONS}
      onSelect={onSelect}
    />
  </div>
)

export default DropdownStatus
