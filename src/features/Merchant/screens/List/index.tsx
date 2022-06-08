import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'

import { useFetchMerchantList } from '@features/Merchant/hooks'
import { IMerchant } from '@features/Merchant/Merchant.type'
import { useLocation } from 'react-router-dom'
import { columnMerchant } from './enum'

const MerchantPage: React.FC = () => {
  const { search } = useLocation()
  const pagination = qs.parse(search)

  console.info('pagination:', pagination)

  const { data, isError, isLoading } = useFetchMerchantList({
    page: Number(pagination?.page) || 1,
    limit: Number(pagination?.limit) || 20
  })

  if (!data || isError) {
    return <div />
  }

  return (
    <ListLayout
      title="Merchants"
      source={{
        isError,
        isLoading,
        data: data as IMerchant[] | undefined
      }}
      columns={columnMerchant}
    />
  )
}

export default MerchantPage
