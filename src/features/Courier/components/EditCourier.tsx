/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable unicorn/consistent-function-scoping */

import React, { ChangeEvent, useEffect, useState } from 'react'
import { Modal, Space } from 'antd'
import { toast } from 'react-toastify'

import { LoadingOutlined } from '@ant-design/icons'

import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Flex from '@components/atoms/Flex'
import { patchEditCourier } from '../api'
import { ICourier } from '../Courier.type'

const EditCourier: React.FC<{ data: ICourier }> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [payload, setPayload] = useState({
    name: '',
    area: ''
  })

  useEffect(() => {
    const { area, name } = data
    setPayload({ name, area })
  }, [data])

  const toggle = () => {
    setShowModal(!showModal)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setPayload({
      ...payload,
      [key]: event.target.value
    })
  }

  const handleDeleteOrder = async () => {
    setIsLoading(true)
    try {
      const response = await patchEditCourier(data.id, payload)
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
      <Button variant="secondary" onClick={toggle}>
        Edit
      </Button>

      <Modal
        centered
        maskClosable
        closable={false}
        onCancel={toggle}
        visible={showModal}
        title="Edit Kurir"
        footer={
          <Flex justifyContent="flex-end" alignItems="center">
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
        <h3 className="text-[#BDBDBD]">
          Masukkan nama kurir dan area yang baru untuk mengedit kurir
        </h3>
        <span>Nama Kurir</span>
        <Input value={payload.name} onChange={event => handleChange(event, 'name')} />
        <div className="mt-4" />
        <span>Area</span>
        <Input value={payload.area} onChange={event => handleChange(event, 'area')} />
      </Modal>
    </>
  )
}

export default EditCourier
