import React from 'react'
import { useParams } from 'react-router-dom'

import { useFetchListCategoryProductLv2 } from '@features/Categories/hooks'
import ListLayout from '@components/organisms/ListLayout'
import columnMerchant from './enum'

const CategoryProductDetail: React.FC = () => {
  const { categoryId } = useParams()
  const { listCategoryLv2, isError, isLoading } = useFetchListCategoryProductLv2(
    categoryId as string
  )
  return (
    <div>
      <ListLayout
        title="Detail Product Categories Lv 2"
        source={{
          isError,
          isLoading,
          data: listCategoryLv2
        }}
        columns={columnMerchant}
      />
    </div>
  )
}

export default CategoryProductDetail
