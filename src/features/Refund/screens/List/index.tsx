/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import ListLayout from '@components/organisms/ListLayout'
import { useFetchRefundList } from '@features/Refund/hooks'
import columnRefund from './enum'

const RefundList: React.FC = () => {
  const { data, isLoading } = useFetchRefundList({
    page: 1,
    limit: 1000
  })

  return (
    <div>
      <ListLayout
        title="Refund"
        isSearch
        source={{
          data,
          isError: false,
          isLoading
        }}
        columns={columnRefund}
      />
    </div>
  )
}

export default RefundList
