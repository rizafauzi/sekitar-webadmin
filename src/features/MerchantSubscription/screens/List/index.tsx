/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'

import { useLocation, useHistory } from 'react-router-dom'
import useFetchMerchantSubscriptionList from '@features/MerchantSubscription/hooks'
import clearEmptyObject from '@utils/object-utils'
import columnMerchant from './enum'
import { RequestList, StoreCount } from './MerchantSubscription.type'
import Summary from '../../components/Summary'

const MerchantSubscriptionPage: React.FC = () => {
  const { search, pathname } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()

  const { data, isError, isLoading, refetch } = useFetchMerchantSubscriptionList({
    page: Number(pagination?.page) || 1,
    limit: Number(pagination?.limit) || 20,
    keyword: String(pagination?.keyword),
    status: Number(pagination?.status) === 1 ? '' : pagination?.status?.toString(),
    date: String(pagination?.date) || '',
    sorting: String(pagination?.sorting) || 'ASC'
  })
  const dataSubscription = data?.request_list
  const storeCounts = data?.store_counts || ([] as StoreCount[])

  const handleSorting = () => {
    const sorting = pagination?.sorting === 'ASC' ? 'DESC' : 'ASC'
    history.push({
      pathname,
      search: qs.stringify(
        clearEmptyObject({
          ...pagination,
          page: '1',
          sorting
        })
      )
    })
  }

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
        columns={columnMerchant(refetch, handleSorting)}
        total={storeCounts[Number(pagination?.status) || 1]?.Count || 100}
      />
    </div>
  )
}

export default MerchantSubscriptionPage
