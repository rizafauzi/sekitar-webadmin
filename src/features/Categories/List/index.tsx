import React from 'react'

import ListLayout from '@components/organisms/ListLayout'

import { columnMerchant, dummyMerchant } from './enum'

const CategoryList: React.FC = () => (
  <ListLayout title="Product Categories" data={dummyMerchant} columns={columnMerchant} />
)

export default CategoryList
