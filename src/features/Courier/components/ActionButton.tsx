import React from 'react'
import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'
import { Space } from 'antd'
import EditCourier from './EditCourier'
import { ICourier } from '../Courier.type'
import DeleteCourier from './DeleteCourier'

const ActionButton: React.FC<{ data: ICourier }> = ({ data }) => {
  const history = useHistory()

  const handleSelected = () => {
    history.push(`/merchants/${data.id}`)
  }

  return (
    <Space>
      <EditCourier data={data} />
      <Button onClick={handleSelected}>Aktifkan</Button>
      <DeleteCourier courierId={data.id} />
    </Space>
  )
}

export default ActionButton
