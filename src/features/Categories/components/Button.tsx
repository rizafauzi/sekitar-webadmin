import React, { useEffect } from 'react'
import Button from '@components/atoms/Button'
import ModalEditCategory from '@features/Categories/components/ModalEditCategory'
import { EditOutlined } from '@ant-design/icons'
import { useHistory, useParams } from 'react-router-dom'
import { useFetchListCategoryProductLv2 } from '../hooks'

interface CategoriesButtonProperties {
  id: number
  actionType: string
}

const CategoriesButton: React.FC<CategoriesButtonProperties> = props => {
  const { id, actionType } = props
  const { categoryId }: { categoryId: string } = useParams()
  const { modalEditSub, detailSubCategory, refetchSub, onToggleModalEditLv2 } =
    useFetchListCategoryProductLv2(categoryId)
  const history = useHistory()

  const onEditCategoryProduct = () => {
    if (id >= 0 && actionType === 'category') {
      history.push(`/categories/${id}`)
    } else if (id >= 0 && actionType === 'sub-category') {
      onToggleModalEditLv2(id)
    }
  }

  useEffect(() => {
    if (!modalEditSub) {
      refetchSub()
    }
  }, [modalEditSub])

  return (
    <div className="flex flex-row items-center justify-center">
      {/* Modal Edit Sub Category */}
      <ModalEditCategory
        title="Edit Sub Category"
        type="sub-category"
        showModal={modalEditSub}
        categoryId={String(1001)}
        detailData={detailSubCategory}
        onCancel={onToggleModalEditLv2}
      />
      <Button onClick={() => onEditCategoryProduct()}>
        <EditOutlined />
      </Button>
    </div>
  )
}

export default CategoriesButton
