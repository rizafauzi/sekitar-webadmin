/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'antd'
import {
  useFetchListCategoryProduct,
  useFetchListCategoryProductLv2
} from '@features/Categories/hooks'
import TableCategory from '@features/Categories/components/TableCategory'
import ModalEditCategory from '@features/Categories/components/ModalEditCategory'
import columnMerchant from './enum'
import './style.css'

const CategoryProductDetail: React.FC = () => {
  const { categoryId }: { categoryId: string } = useParams()

  const { detailData, modalEdit, refetch, onToggleModalEdit } =
    useFetchListCategoryProduct(categoryId)
  const { listCategoryLv2 } = useFetchListCategoryProductLv2(categoryId)

  useEffect(() => {
    if (!modalEdit) {
      refetch()
    }
  }, [modalEdit])
  return (
    <div>
      {/* Modal Edit Category */}
      <ModalEditCategory
        title="Edit Category"
        type="category"
        showModal={modalEdit}
        categoryId={categoryId}
        detailData={detailData}
        onCancel={onToggleModalEdit}
      />
      <h2 className="text-2xl mb-6">{detailData?.name}</h2>
      <div className="section-category-lv-1">
        <div className="section-left">
          <div className="wrapper-field">
            <span className="label-field">Category Name</span>
            <span>:</span>
            <span className="value-field">{detailData?.name}</span>
          </div>
          <div className="wrapper-field">
            <span className="label-field">Description</span>
            <span>:</span>
            <span className="value-field">{detailData?.description}</span>
          </div>
          <div className="wrapper-field">
            <span className="label-field">Priority</span>
            <span>:</span>
            <span className="value-field">{detailData?.priority}</span>
          </div>
          <div className="wrapper-field">
            <span className="label-field">Image Category</span>
            <span>:</span>
            <img src={detailData?.images} alt={detailData?.name} className="w-10" />
          </div>
        </div>
        <div className="section-right">
          <Button type="primary" onClick={onToggleModalEdit}>
            Edit
          </Button>
        </div>
      </div>
      <TableCategory data={listCategoryLv2} columns={columnMerchant} />
    </div>
  )
}

export default CategoryProductDetail
