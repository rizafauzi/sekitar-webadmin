import React from 'react'
import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'
import { Space } from 'antd'

const ActionButton: React.FC<{ path: string }> = ({ path }) => {
  const history = useHistory()

  const handleSelected = () => {
    history.push(`/merchants/${path}`)
  }

  return (
    <Space>
      <Button variant="secondary" onClick={handleSelected}>
        Edit
      </Button>
      <Button onClick={handleSelected}>Aktifkan</Button>
      <Button variant="destructive" onClick={handleSelected}>
        Hapus
      </Button>
    </Space>
  )
}

export default ActionButton
