/* eslint-disable unicorn/consistent-function-scoping */
import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'

import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'
import DeleteOrderModal from './DeleteOrderModal'
import EditCourierModal from './EditCourierModal'

const ActionButton: React.FC<{ cartId: string }> = ({ cartId }) => {
  const history = useHistory()
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const toggleCancelModal = () => {
    setShowCancelModal(!showCancelModal)
  }

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  const handleSelected = () => {
    console.info('HIYAA')
    history.push(`/orders/${cartId}`)
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <button type="button" className="w-full text-left" onClick={handleSelected}>
              Detail Pengiriman
            </button>
          )
        },
        {
          key: '2',
          label: (
            <button type="button" className="w-full text-left" onClick={toggleEditModal}>
              Ubah Kurir
            </button>
          )
        },
        {
          key: '3',
          label: (
            <button type="button" className="w-full text-left" onClick={toggleCancelModal}>
              Batalkan Pesanan
            </button>
          )
        }
      ]}
    />
  )

  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <Button>Options</Button>
      </Dropdown>

      <EditCourierModal cartId={cartId} showModal={showEditModal} toggle={toggleEditModal} />
      <DeleteOrderModal cartId={cartId} showModal={showCancelModal} toggle={toggleCancelModal} />
    </>
  )
}

export default ActionButton
