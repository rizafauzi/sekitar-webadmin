import React from 'react'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

interface CategoriesButtonProperties {
  id: number
}

const CategoriesButton: React.FC<CategoriesButtonProperties> = props => {
  const { id } = props
  const navigate = useNavigate()

  const onEditCategoryProduct = (idCategory: number) => {
    navigate(`/categories/${idCategory}`)
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <Button type="primary" onClick={() => onEditCategoryProduct(id)}>
        <EditOutlined />
      </Button>
      <div className="mx-1" />
      <Button style={{ background: 'red', borderColor: 'red' }}>
        <DeleteOutlined style={{ color: 'white' }} />
      </Button>
    </div>
  )
}

export default CategoriesButton
