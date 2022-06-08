import React from 'react'

import ListLayout from '@components/organisms/ListLayout'
import { useFetchListCategoryProduct } from '@features/Categories/hooks'

import columnMerchant from './enum'

const CategoryList: React.FC = () => {
  const { listCategory, isError, isLoading } = useFetchListCategoryProduct()
  const listData = listCategory?.map((item, index) => ({ ...item, index: index + 1 }))
  return (
    <div>
      <ListLayout
        title="Product Categories"
        source={{
          data: listData,
          isError,
          isLoading
        }}
        columns={columnMerchant}
      />
    </div>
  )
}

export default CategoryList
