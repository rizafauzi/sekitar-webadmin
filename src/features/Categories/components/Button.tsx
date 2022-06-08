import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

interface CategoriesButtonProperties {
  id: number
}

const CategoriesButton: React.FC<CategoriesButtonProperties> = props => {
  const { id } = props
  const history = useHistory()

  const onEditCategoryProduct = (idCategory: number) => {
    history.push(`/categories/${idCategory}`)
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <Button type="primary" onClick={() => onEditCategoryProduct(id)}>
        <EditOutlined />
      </Button>
    </div>
  )
}

export default CategoriesButton
