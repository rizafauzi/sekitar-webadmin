import React from 'react'

import ListLayout from '@components/organisms/ListLayout'

import { columnMerchant, dummyMerchant } from './enum'

const MasterData: React.FC = () => (
  <ListLayout title="Master Data" data={dummyMerchant} columns={columnMerchant} />
)

export default MasterData
