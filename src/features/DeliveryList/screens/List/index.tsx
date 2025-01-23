/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'
import { useLocation } from 'react-router-dom'
import { useFetchDeliveryList } from '@features/DeliveryList/hooks'
import columnOrderList from './enum'

const DeliveryListPage: React.FC = () => {
  const { search } = useLocation()
  const query = qs.parse(search)
  const { data, isLoading } = useFetchDeliveryList({
    page: 1,
    limit: 1000,
    search: (query.keyword || '') as string,
    status: Number(query.status)
  })

  return (
    <div>
      <ListLayout
        title="List Pengiriman"
        isSearch
        source={{
          data,
          isError: false,
          isLoading
        }}
        columns={columnOrderList}
      />
    </div>
  )
}

export default DeliveryListPage
