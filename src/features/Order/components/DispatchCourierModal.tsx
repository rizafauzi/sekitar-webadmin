/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable unicorn/consistent-function-scoping */

import React, { useState } from 'react'
import { Modal, Space } from 'antd'
import { toast } from 'react-toastify'

import { LoadingOutlined } from '@ant-design/icons'

import Button from '@components/atoms/Button'
import Flex from '@components/atoms/Flex'
import { patchDeleteOrder } from '../api'

interface IDispatchCourierModal {
  cartId: string
  showModal: boolean
  toggle: () => void
}

const DispatchCourierModal: React.FC<IDispatchCourierModal> = ({ cartId, showModal, toggle }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteOrder = async () => {
    setIsLoading(true)
    try {
      const response = await patchDeleteOrder(cartId)
      setIsLoading(false)
      toggle()
      if (response) {
        toast.success('Delete Order Sukses')
      }
    } catch {
      console.error('Something wrong, try again later')
      toggle()
      setIsLoading(false)
      toast.error('Oops, terjadi kesalahan sistem. Coba lagi nanti.')
    }
  }

  return (
    <Modal
      centered
      maskClosable
      closable={false}
      visible={showModal}
      onCancel={toggle}
      footer={
        <Flex justifyContent="center" alignItems="center">
          <Space>
            <Button onClick={toggle} className="w-32" variant="secondary">
              Batal
            </Button>
            <Button onClick={handleDeleteOrder} className="w-32">
              {isLoading ? <LoadingOutlined /> : 'Ya'}
            </Button>
          </Space>
        </Flex>
      }
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <h2 className="font-bold">Apakah kamu yakin akan membatalkan pesanan?</h2>
        <h3>Pesanan yang telah dibatalkan tidak dapat diaktifkan kembali</h3>
      </Flex>
    </Modal>
  )
}

export default DispatchCourierModal
