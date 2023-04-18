/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import ListLayout from '@components/organisms/ListLayout'
import { useFetchMerchantVerificationList } from '@features/MerchantVerification/hooks'
import columnMerchantVerification from './enum'

const MerchantVerificationList: React.FC = () => {
  const { data, isLoading } = useFetchMerchantVerificationList({
    page: 1,
    limit: 1000
  })

  return (
    <div>
      <ListLayout
        title="Merchant Verification"
        isSearch
        source={{
          data,
          isError: false,
          isLoading
        }}
        columns={columnMerchantVerification}
      />
    </div>
  )
}

export default MerchantVerificationList
