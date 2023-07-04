/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'

import { useLocation } from 'react-router-dom'
import useFetchMerchantSubscriptionList from '@features/MerchantSubscription/hooks'
import columnMerchant from './enum'
import { RequestList } from './MerchantSubscription.type'

const MerchantSubscriptionPage: React.FC = () => {
  const { search } = useLocation()
  const pagination = qs.parse(search)

  const { data, isError, isLoading } = useFetchMerchantSubscriptionList({
    page: Number(pagination?.page) || 1,
    limit: Number(pagination?.limit) || 20,
    keyword: String(pagination?.keyword)
  })
  const dataSubscription = data?.request_list

  return (
    <div>
      <h2 className="font-bold">Merchant Subscription Request</h2>
      <ListLayout
        title="Daftar Merchant Subscription"
        isSearch
        source={{
          isError,
          isLoading,
          data: dataSubscription as RequestList[] | undefined
        }}
        columns={columnMerchant}
      />
    </div>
  )
}

export default MerchantSubscriptionPage
