import React from 'react'
import Button from '@components/atoms/Button'
import { EditOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

interface CategoriesButtonProperties {
  id: number
}

const CategoriesButton: React.FC<CategoriesButtonProperties> = props => {
  const { id } = props
  const history = useHistory()

  const onEditCategoryProduct = () => {
    if (id >= 0) history.push(`/categories/${id}`)
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <Button onClick={() => onEditCategoryProduct()}>
        <EditOutlined />
      </Button>
    </div>
  )
}

export default CategoriesButton
