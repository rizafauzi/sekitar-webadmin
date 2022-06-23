/* eslint-disable arrow-body-style */
import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'

// import { IMerchant } from '@features/Merchant/Merchant.type'
import { useLocation } from 'react-router-dom'
import { IOrder } from '@features/Order/Order.type'
import OrderCard from '@features/Order/components/OrderCard'
import Button from '@components/atoms/Button'
import styled from 'styled-components'
import { useFetchOrderList, useFetchTotalOrderByStatus } from '../../hooks'
import { columnMerchant } from './enum'

const TableWrapper = styled.div`
  display: grid;
  column-gap: 0.5%;
  grid-template-columns: auto auto auto auto auto;
`

const OrderPage: React.FC = () => {
  const { search } = useLocation()
  const pagination = qs.parse(search)

  const { data: totalData } = useFetchTotalOrderByStatus()
  const { data, isError, isLoading } = useFetchOrderList({
    page: Number(pagination?.page) || 1,
    limit: Number(pagination?.limit) || 20,
    status: String(pagination?.status) || 'all'
  })

  return (
    <div>
      <div className="py-2">
        <h2 className="font-bold">Daftar Pesanan</h2>
      </div>

      <TableWrapper>
        <OrderCard label="Semua Pesanan" total={totalData?.all} value="all" />
        <OrderCard label="Pesanan Baru" total={totalData?.created} value="created" />
        <OrderCard label="Diproses" total={totalData?.processed} value="processed" />
        <OrderCard label="Selesai" total={totalData?.completed} value="completed" />
        <OrderCard label="Dibatalkan" total={totalData.canceled} value="canceled" />
      </TableWrapper>
      <ListLayout
        title="Semua Pesanan"
        isSearch
        source={{
          isError,
          isLoading,
          data: data as IOrder[] | undefined
        }}
        extendButton={[<Button>Export to CSV</Button>]}
        columns={columnMerchant}
      />
    </div>
  )
}

export default OrderPage
