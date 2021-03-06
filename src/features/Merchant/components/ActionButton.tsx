import React from 'react'
import Button from '@components/atoms/Button'
import { EditOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const ActionButton: React.FC<{ path: string }> = ({ path }) => {
  const history = useHistory()

  const handleSelected = () => {
    history.push(`/merchants/${path}`)
  }

  return (
    <Button onClick={handleSelected}>
      <EditOutlined />
    </Button>
  )
}

export default ActionButton
