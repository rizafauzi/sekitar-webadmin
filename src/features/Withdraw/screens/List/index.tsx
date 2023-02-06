import React, { useState } from 'react'
import ListLayout from '@components/organisms/ListLayout'
import { useFetchWithdrawList } from '@features/Withdraw/hooks'
import { Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import ListWithdrawColumn from './enum'

const WithdrawPage: React.FC = () => {
  const [filter, setFilter] = useState()
  const { data, isLoading } = useFetchWithdrawList({
    page: 1,
    limit: 100,
    status: filter
  })

  const optionFilter = [
    { label: 'Pending', value: '1' },
    { label: 'Selesai', value: '2' },
    { label: 'Gagal', value: '3' }
  ]

  return (
    <div>
      <ListLayout
        title="Withdraw Request Page"
        source={{
          data,
          isError: false,
          isLoading
        }}
        extendButton={[
          <Select
            className="w-full"
            optionFilterProp="children"
            onChange={setFilter}
            value={filter}
            placeholder="Filter"
          >
            {optionFilter?.map(item => (
              <Option value={item.value}>{item.label}</Option>
            ))}
          </Select>
        ]}
        columns={ListWithdrawColumn}
      />
    </div>
  )
}

export default WithdrawPage
