import React from 'react'

import ListLayout from '@components/organisms/ListLayout'
import { useFetchListCategoryProduct } from '@features/Categories/hooks'

import columnMerchant from './enum'

const CategoryList: React.FC = () => {
  const { listCategory } = useFetchListCategoryProduct()
  return (
    <div>
      <ListLayout title="Product Categories" data={listCategory} columns={columnMerchant} />
    </div>
  )
}

export default CategoryList
