import React from 'react'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const ActionButton: React.FC = () => (
  <div className="flex flex-row items-center justify-center">
    <Button type="primary">
      <EditOutlined />
    </Button>
    <div className="mx-1" />
    <Button style={{ background: 'red', borderColor: 'red' }}>
      <DeleteOutlined style={{ color: 'white' }} />
    </Button>
  </div>
)

export default ActionButton
