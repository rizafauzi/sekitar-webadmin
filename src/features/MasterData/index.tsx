import React from 'react'

import ListLayout from '@components/organisms/ListLayout'

import { columnMerchant, dummyMerchant } from './enum'

const MasterData: React.FC = () => (
  <ListLayout
    title="Master Data"
    columns={columnMerchant}
    source={{ isLoading: false, isError: false, data: dummyMerchant }}
  />
)

export default MasterData
