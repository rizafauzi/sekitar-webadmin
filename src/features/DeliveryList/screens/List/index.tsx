/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useMemo } from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'
import { useLocation } from 'react-router-dom'
import { useFetchDeliveryList } from '@features/DeliveryList/hooks'
import { DeliveryList } from '@features/DeliveryList/models/DeliveryList'
import { toast } from 'react-toastify'
import columnOrderList from './enum'

const DeliveryListPage: React.FC = () => {
  const { search } = useLocation()
  const query = qs.parse(search)
  const { data, isLoading } = useFetchDeliveryList({
    page: 1,
    limit: 1000,
    search: (query.keyword || '') as string,
    status: 11
  })

  const lists = useMemo(() => {
    if (data) {
      return data.data?.map((item: DeliveryList, index: number) => ({
        ...item,
        index: index + 1
      }))
    }
    return []
  }, [data])

  useEffect(() => {
    if (data?.error) {
      toast.error(data.message)
    }
  }, [data])

  return (
    <div>
      <ListLayout
        title="List Pengiriman"
        titleSearch="Search by ID / Path"
        isSearch
        source={{
          data: lists,
          isError: false,
          isLoading
        }}
        columns={columnOrderList}
      />
    </div>
  )
}

export default DeliveryListPage
