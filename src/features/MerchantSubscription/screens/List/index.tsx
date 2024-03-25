/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'

import { useLocation } from 'react-router-dom'
import useFetchMerchantSubscriptionList from '@features/MerchantSubscription/hooks'
import columnMerchant from './enum'
import { RequestList, StoreCount } from './MerchantSubscription.type'
import Summary from '../../components/Summary'

const MerchantSubscriptionPage: React.FC = () => {
  const { search } = useLocation()
  const pagination = qs.parse(search)

  const { data, isError, isLoading, refetch } = useFetchMerchantSubscriptionList({
    page: Number(pagination?.page) || 1,
    limit: Number(pagination?.limit) || 20,
    keyword: String(pagination?.keyword),
    status: Number(pagination?.status) === 1 ? '' : pagination?.status?.toString(),
    date: String(pagination?.date) || ''
  })
  const dataSubscription = data?.request_list
  const storeCounts = data?.store_counts || ([] as StoreCount[])

  return (
    <div>
      <h2 className="font-bold">Merchant Subscription Request</h2>
      <Summary data={storeCounts} />
      <ListLayout
        title="Daftar Merchant Subscription"
        isSearchNew
        source={{
          isError,
          isLoading,
          data: dataSubscription as RequestList[] | undefined
        }}
        columns={columnMerchant(refetch)}
      />
    </div>
  )
}

export default MerchantSubscriptionPage
