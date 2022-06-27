/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable arrow-body-style */

import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'

// import { IMerchant } from '@features/Merchant/Merchant.type'
import { useLocation } from 'react-router-dom'
import AddCourier from '@features/Courier/components/AddCourier'
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
        source={{
          isError,
          isLoading,
          data: data as ICourier[] | undefined
        }}
        extendButton={[<AddCourier />]}
        columns={columnMerchant}
      />
    </div>
  )
}

export default CourierPage
