/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'

import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'
import DeleteOrderModal from './DeleteOrderModal'
import EditCourierModal from './EditCourierModal'
import DispatchCourierModal from './DispatchCourierModal'

const ActionButton: React.FC<{ cartId: string; state: string }> = ({ cartId, state }) => {
  const history = useHistory()
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showDispatchModal, setShowDispatchModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const toggleCancelModal = () => {
    setShowCancelModal(!showCancelModal)
  }

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  const toggleDispatchModal = () => {
    setShowDispatchModal(!showDispatchModal)
  }

  const handleSelected = () => {
    console.info('HIYAA')
    history.push(`/orders/${cartId}`)
  }

  const optionList = [
    {
      key: '1',
      states: ['Pesanan Baru', 'Diproses', 'Dibatalkan', 'Selesai'],
      component: (
        <button type="button" className="w-full text-left" onClick={handleSelected}>
          Detail Pengiriman
        </button>
      )
    },
    {
      key: '2',
      states: ['Dibatalkan', 'Pesanan Baru'],
      component: (
        <button type="button" className="w-full text-left" onClick={toggleDispatchModal}>
          Tugaskan Kurir
        </button>
      )
    },
    {
      key: '2',
      states: ['Diproses'],
      component: (
        <button type="button" className="w-full text-left" onClick={toggleEditModal}>
          Ubah Kurir
        </button>
      )
    },
    {
      key: '3',
      states: ['Pesanan Baru', 'Diproses'],
      component: (
        <button type="button" className="w-full text-left" onClick={toggleCancelModal}>
          Batalkan Pesanan
        </button>
      )
    }
  ]

  const menu = (
    <Menu
      items={optionList
        .filter(dt => dt.states.includes(state))
        .map(data => ({
          key: data.key,
          label: data.component
        }))}
    />
  )

  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <Button>Options</Button>
      </Dropdown>

      <DispatchCourierModal cartId={cartId} showModal={showEditModal} toggle={toggleEditModal} />
      <EditCourierModal
        cartId={cartId}
        showModal={showDispatchModal}
        toggle={toggleDispatchModal}
      />
      <DeleteOrderModal cartId={cartId} showModal={showCancelModal} toggle={toggleCancelModal} />
    </>
  )
}

export default ActionButton
