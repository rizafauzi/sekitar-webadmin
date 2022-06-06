import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'antd'
import {
  useFetchListCategoryProduct,
  useFetchListCategoryProductLv2
} from '@features/Categories/hooks'
import TableCategory from '@features/Categories/components/TableCategory'
import columnMerchant from './enum'
import './style.css'

const CategoryProductDetail: React.FC = () => {
  const { categoryId } = useParams()
  const { listCategory } = useFetchListCategoryProduct()
  const { listCategoryLv2 } = useFetchListCategoryProductLv2(categoryId as string)
  const listData = listCategoryLv2?.map((item, index) => ({ ...item, index: index + 1 }))
  const detailData = listCategory?.find(item => String(item.id) === categoryId)
  return (
    <div>
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
          <Button type="primary">Edit</Button>
        </div>
      </div>
      <TableCategory data={listData} columns={columnMerchant} />
    </div>
  )
}

export default CategoryProductDetail
