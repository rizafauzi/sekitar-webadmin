/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'

import Card from '@components/atoms/Card'
import TextField from '@components/atoms/TextField'
import { useFetchDeliveryDetail } from '@features/Order/hooks'
import Button from '@components/atoms/Button'

const DeliveryDetail: React.FC = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const cartId = pathname.replace('/orders/', '')

  const { data, isError, isLoading } = useFetchDeliveryDetail(cartId)

  const handleBack = () => {
    history.goBack()
  }

  if (isLoading || !data) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingOutlined />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span>Something is wrong... Try again later.</span>
      </div>
    )
  }

  const { cart_id, completed_hour, courier_area, courier_name, processed_hour, shipped_hour } = data

  return (
    <div>
      <Card title="Detail Pengiriman">
        <TextField label="ID PESANAN">{cart_id}</TextField>
        <TextField label="NAMA KURIR">{courier_name}</TextField>
        <TextField label="NAMA KURIR">{courier_area}</TextField>
        <TextField label="DITUGASKAN">{processed_hour}</TextField>
        <TextField label="PESANAN DIAMBIL">{shipped_hour}</TextField>
        <TextField label="PESANAN SAMPAI">{completed_hour}</TextField>
        <hr className="mb-6 mt-4" />
        <Button variant="secondary" onClick={handleBack}>
          Kembali
        </Button>
      </Card>
    </div>
  )
}

export default DeliveryDetail
