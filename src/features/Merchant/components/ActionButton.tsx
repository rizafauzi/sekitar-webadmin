import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const ActionButton: React.FC<{ path: string }> = ({ path }) => {
  const history = useHistory()

  const handleSelected = () => {
    history.push(`/merchants/${path}`)
  }

  return (
    <Button type="primary" onClick={handleSelected}>
      <EditOutlined />
    </Button>
  )
}

export default ActionButton
