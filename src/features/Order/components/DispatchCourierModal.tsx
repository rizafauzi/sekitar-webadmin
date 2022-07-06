/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable unicorn/consistent-function-scoping */

import React, { useState } from 'react'
import { Modal, Select, Space } from 'antd'
import { toast } from 'react-toastify'

import { LoadingOutlined } from '@ant-design/icons'

import Button from '@components/atoms/Button'
import Flex from '@components/atoms/Flex'
import { useFetchCourierList } from '@features/Courier/hooks'
import { patchDispatchCourier } from '../api'

interface IDispatchCourierModal {
  cartId: string
  showModal: boolean
  toggle: () => void
}

const DispatchCourierModal: React.FC<IDispatchCourierModal> = ({ cartId, showModal, toggle }) => {
  const { Option } = Select
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCourier, setSelectedCourier] = useState<number | null>(null)

  const { data: courierData } = useFetchCourierList({
    page: 1,
    limit: 100
  })

  const handleDeleteOrder = async () => {
    if (selectedCourier) {
      setIsLoading(true)
      try {
        const response = await patchDispatchCourier(cartId, { id: selectedCourier })
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
  }

  const handleChange = (value: number) => {
    setSelectedCourier(value)
  }

  return (
    <Modal
      centered
      maskClosable
      closable={false}
      onCancel={toggle}
      title="Tugaskan Kurir"
      visible={showModal}
      footer={
        <Flex justifyContent="center" alignItems="center">
          <Space>
            <Button onClick={toggle} className="w-32" variant="secondary">
              Batal
            </Button>
            <Button onClick={handleDeleteOrder} className="w-32">
              {isLoading ? <LoadingOutlined /> : 'Simpan'}
            </Button>
          </Space>
        </Flex>
      }
    >
      <span className="text-[#BDBDBD]">Pilih kurir yang baru untuk melakukan tugas</span>
      <Select defaultValue={null} style={{ width: '100%' }} onChange={handleChange}>
        {courierData?.map(dt => (
          <Option value={dt.id}>{dt.name}</Option>
        ))}
      </Select>
    </Modal>
  )
}

export default DispatchCourierModal
