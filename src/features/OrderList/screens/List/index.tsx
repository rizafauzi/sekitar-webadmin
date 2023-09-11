/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'
import { useHistory, useLocation } from 'react-router-dom'
import { useFetchOrderList } from '@features/OrderList/hooks'
import columnOrderList from './enum'
import DropdownStatus from './DropdownStatus'

const OrderListPage: React.FC = () => {
  const { search, pathname } = useLocation()
  const history = useHistory()
  const query = qs.parse(search)
  const { data, isLoading } = useFetchOrderList({
    page: 1,
    limit: 1000,
    search: (query.keyword || '') as string,
    status: Number(query.status)
  })

  const handleSelectStatus = (val: number) =>
    history.push({
      pathname,
      search: `?${qs.stringify({ ...query, status: val })}`
    })

  return (
    <div>
      <ListLayout
        title="List Pesanan"
        isSearch
        prefixElement={[<DropdownStatus onSelect={handleSelectStatus} />]}
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
