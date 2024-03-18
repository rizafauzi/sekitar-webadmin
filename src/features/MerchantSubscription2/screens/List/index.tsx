/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'

import { useLocation } from 'react-router-dom'
// import useFetchMerchantSubscriptionList from '@features/MerchantSubscription/hooks'
import useFetchMerchantSubscriptionListNew from '@features/MerchantSubscription2/hooks/new'
import columnMerchant from './enum'
import { RequestList, StoreCount } from './MerchantSubscription.type'
import Summary from '../../components/Summary'

const MerchantSubscriptionPage2: React.FC = () => {
  const { search } = useLocation()
  const pagination = qs.parse(search)

  const { data, isError, isLoading, refetch } = useFetchMerchantSubscriptionListNew({
    page: Number(pagination?.page) || 1,
    limit: Number(pagination?.limit) || 20,
    keyword: String(pagination?.keyword)
  })
  const dataSubscription = data?.stores
  const storeCounts = data?.store_counts || ([] as StoreCount[])

  return (
    <div>
      <h2 className="font-bold">Merchant Subscription Request 2</h2>
      <Summary data={storeCounts} />
      <ListLayout
        title="Daftar Merchant Subscription"
        isSearch
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

export default MerchantSubscriptionPage2
