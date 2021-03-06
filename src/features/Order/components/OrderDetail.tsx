/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'

import Card from '@components/atoms/Card'
import TextField from '@components/atoms/TextField'
import { useFetchOrderDetail } from '@features/Order/hooks'
import Button from '@components/atoms/Button'
import Flex from '@components/atoms/Flex'
import { Space } from 'antd'
import DispatchCourierModal from './DispatchCourierModal'
import EditCourierModal from './EditCourierModal'

const OrderDetail: React.FC = () => {
  const { pathname } = useLocation()
  const cartId = pathname.replace('/orders/', '')
  const [showDispatchModal, setShowDispatchModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const { data, isError, isLoading } = useFetchOrderDetail(cartId)

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  const toggleDispatchModal = () => {
    setShowDispatchModal(!showDispatchModal)
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

  const {
    buyer_address,
    buyer_email,
    buyer_location,
    buyer_name,
    buyer_whatsapp,
    date,
    hour,
    items,
    store_address,
    store_location,
    store_name,
    store_whatsapp,
    total_amount,
    voucher
  } = data

  return (
    <div className="mb-10">
      <DispatchCourierModal
        cartId={cartId}
        showModal={showDispatchModal}
        toggle={toggleDispatchModal}
      />
      <EditCourierModal cartId={cartId} showModal={showEditModal} toggle={toggleEditModal} />
      <Card title="Detail Pesanan">
        <TextField label="ID PESANAN">{cartId}</TextField>
        <TextField label="TANGGAL">{`${date} ${hour}`}</TextField>
        <TextField label="DETAIL PEMBELI">
          <Flex flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
            <span>{buyer_name}</span>
            <span>{buyer_email || '-'}</span>
            <span>{buyer_whatsapp}</span>
            <span>{buyer_address}</span>
            <span>{buyer_location}</span>
          </Flex>
        </TextField>
        <div className="my-6" />
        <TextField label="DETAIL TOKO">
          <Flex flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
            <span>{store_name}</span>
            <span>{store_whatsapp}</span>
            <span>{store_address}</span>
            <span>{store_location}</span>
          </Flex>
        </TextField>
        <div className="my-6" />
        <TextField label="RINCIAN PEMBELIAN">
          <Flex flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
            {items.map(item => (
              <span>{item}</span>
            ))}
            <span>{total_amount}</span>
            <span>Total Pembayaran Rp. {voucher}</span>
          </Flex>
        </TextField>
        <hr className="mb-6 mt-4" />
        <Space>
          <Button variant="secondary" onClick={toggleDispatchModal}>
            Tugaskan Kurir
          </Button>
          <Button variant="secondary" onClick={toggleEditModal}>
            Ubah Kurir
          </Button>
        </Space>
      </Card>
    </div>
  )
}

export default OrderDetail
