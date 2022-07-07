import React from 'react'

import ListLayout from '@components/organisms/ListLayout'
import { useFetchListCategoryProduct } from '@features/Categories/hooks'

import columnMerchant from './enum'

const CategoryList: React.FC = () => {
  const { listCategory, isError, isLoading } = useFetchListCategoryProduct()
  return (
    <div>
      <ListLayout
        title="Product Categories"
        source={{
          data: listCategory,
          isError,
          isLoading
        }}
        columns={columnMerchant}
      />
    </div>
  )
}

export default CategoryList
