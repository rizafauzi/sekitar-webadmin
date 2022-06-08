import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const ActionButton: React.FC<{ path: string }> = ({ path }) => {
  const navigate = useNavigate()

  const handleSelected = () => {
    navigate(`/merchants/${path}`)
  }

  return (
    <Button type="primary" onClick={handleSelected}>
      <EditOutlined />
    </Button>
  )
}

export default ActionButton
