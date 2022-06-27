/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable arrow-body-style */

import React from 'react'
import qs from 'query-string'

import Button from '@components/atoms/Button'
import ListLayout from '@components/organisms/ListLayout'

// import { IMerchant } from '@features/Merchant/Merchant.type'
import { useLocation } from 'react-router-dom'
import { ICourier } from '../../Courier.type'
import { useFetchCourierList } from '../../hooks'
import { columnMerchant } from './enum'

export type StatusType = 'all' | 'created' | 'processed' | 'completed' | 'canceled'

const CourierPage: React.FC = () => {
  const { search } = useLocation()
  const pagination = qs.parse(search)

  const { data, isError, isLoading } = useFetchCourierList({
    page: Number(pagination?.page) || 1,
    limit: Number(pagination?.limit) || 20
  })

  return (
    <div>
      <ListLayout
        title="Manage Kurir"
        total={0}
        isSearch
        source={{
          isError,
          isLoading,
          data: data as ICourier[] | undefined
        }}
        extendButton={[<Button>Export to CSV</Button>]}
        columns={columnMerchant}
      />
    </div>
  )
}

export default CourierPage
