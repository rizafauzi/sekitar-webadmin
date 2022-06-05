import React from 'react'
import { useParams } from 'react-router-dom'

import { useFetchListCategoryProductLv2 } from '@features/Categories/hooks'
import ListLayout from '@components/organisms/ListLayout'
import columnMerchant from './enum'

const CategoryProductDetail: React.FC = () => {
  const { categoryId } = useParams()
  const { listCategoryLv2 } = useFetchListCategoryProductLv2(categoryId as string)
  return (
    <div>
      <ListLayout
        title="Detail Product Categories Lv 2"
        data={listCategoryLv2}
        columns={columnMerchant}
      />
    </div>
  )
}

export default CategoryProductDetail
