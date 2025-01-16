/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'
import { useLocation } from 'react-router-dom'
import { useFetchOrderList } from '@features/OrderList/hooks'
import columnOrderList from './enum'

const OrderListPage: React.FC = () => {
  const { search } = useLocation()
  const query = qs.parse(search)
  const [isFetching, setIsFetching] = useState(false)
  const { data, isLoading } = useFetchOrderList({
    page: 1,
    limit: 1000,
    search: (query.keyword || '') as string,
    isFetching
  })

  useEffect(() => {
    if (query.keyword) {
      setIsFetching(true)
    } else setIsFetching(false)
  }, [query.keyword])

  return (
    <div>
      <ListLayout
        title="List Pesanan"
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

export default OrderListPage
