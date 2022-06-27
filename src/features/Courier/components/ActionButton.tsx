/* eslint-disable @typescript-eslint/no-misused-promises */

import { Space } from 'antd'
import { toast } from 'react-toastify'
import React, { useEffect, useState } from 'react'

import Button from '@components/atoms/Button'

import EditCourier from './EditCourier'
import { ICourier } from '../Courier.type'
import DeleteCourier from './DeleteCourier'
import { patchCourierState } from '../api'

const ActionButton: React.FC<{ data: ICourier }> = ({ data }) => {
  const { is_active, id } = data
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (data) {
      setIsActive(is_active === 1)
    }
  }, [data])

  const handleSwicthActive = async () => {
    try {
      const response = await patchCourierState(id, {
        is_active: isActive ? 0 : 1
      })
      if (response) {
        setIsActive(!isActive)
      }
    } catch {
      toast.error('Oops, terjadi sesuatu. Coba lain nanti.')
    }
  }

  return (
    <Space>
      <EditCourier data={data} />
      <Button variant={isActive ? 'secondary' : 'primary'} onClick={handleSwicthActive}>
        {isActive ? 'Nonaktifkan' : 'Aktifkan'}
      </Button>
      <DeleteCourier courierId={id} />
    </Space>
  )
}

export default ActionButton
