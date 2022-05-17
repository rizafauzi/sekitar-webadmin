import React from 'react'

import ListLayout from '@components/organisms/ListLayout'

import { columnMerchant, dummyMerchant } from './enum'

const Dashboard: React.FC = () => (
  <ListLayout title="Dashboard" data={dummyMerchant} columns={columnMerchant} />
)

export default Dashboard
