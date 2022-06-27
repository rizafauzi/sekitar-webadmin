/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable unicorn/consistent-function-scoping */

import React, { useState } from 'react'
import { Modal, Space } from 'antd'
import { toast } from 'react-toastify'

import { LoadingOutlined } from '@ant-design/icons'

import Button from '@components/atoms/Button'
import Flex from '@components/atoms/Flex'
import { deleteCourier } from '../api'

const DeleteCourier: React.FC<{ courierId: number }> = ({ courierId }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggle = () => {
    setShowModal(!showModal)
  }

  const handleDeleteOrder = async () => {
    setIsLoading(true)
    try {
      const response = await deleteCourier(courierId)
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
    <>
      <Button variant="destructive" onClick={toggle}>
        Hapus
      </Button>

      <Modal
        centered
        maskClosable
        closable={false}
        onCancel={toggle}
        visible={showModal}
        title="Hapus Kurir"
        footer={
          <Flex justifyContent="center" alignItems="center">
            <Space>
              <Button onClick={toggle} className="w-32" variant="secondary">
                Batal
              </Button>
              <Button onClick={handleDeleteOrder} className="w-32">
                {isLoading ? <LoadingOutlined /> : 'Hapus'}
              </Button>
            </Space>
          </Flex>
        }
      >
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <h2 className="font-bold">Apakah kamu yakin akan manghapus kurir?</h2>
          <h3>Kurir yang telah dihapus tidak dapat di-rollback kembali</h3>
        </Flex>
      </Modal>
    </>
  )
}

export default DeleteCourier
