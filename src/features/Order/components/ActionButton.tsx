/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/consistent-function-scoping */

import React, { useEffect, useState } from 'react'
import { Dropdown, Menu } from 'antd'

import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'
import DeleteOrderModal from './DeleteOrderModal'
import EditCourierModal from './EditCourierModal'
import DispatchCourierModal from './DispatchCourierModal'
import { IOrder } from '../Order.type'

const ActionButton: React.FC<{ item: IOrder }> = ({ item }) => {
  const { cart_id, order_state, courier_id } = item
  const history = useHistory()
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showDispatchModal, setShowDispatchModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [buttonOption, setButtonOption] = useState<any[]>([])
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
    history.push(`/orders/${cart_id}`)
  }

  useEffect(() => {
    const options = [
      {
        key: '1',
        states: ['Pesanan Baru', 'Diproses', 'Dibatalkan', 'Dikirim', 'Selesai'],
        component: (
          <button type="button" className="w-full text-left" onClick={handleSelected}>
            Detail Pengiriman
          </button>
        )
      },
      {
        key: '2',
        states: courier_id === '0' ? ['Pesanan Baru', 'Diproses', 'Dibatalkan', 'Dikirim'] : [],
        component: (
          <button type="button" className="w-full text-left" onClick={toggleDispatchModal}>
            Tugaskan Kurir
          </button>
        )
      },
      {
        key: '2',
        states: courier_id === '0' ? [] : ['Pesanan Baru', 'Diproses', 'Dibatalkan', 'Dikirim'],
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

    setButtonOption(
      options
        .filter(dt => dt.states.includes(order_state))
        .map(data => ({
          key: data.key,
          label: data.component
        }))
    )
  }, [courier_id])

  const menu = <Menu items={buttonOption} />

  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <Button>Options</Button>
      </Dropdown>

      <DispatchCourierModal
        cartId={cart_id}
        showModal={showDispatchModal}
        toggle={toggleDispatchModal}
      />
      <EditCourierModal cartId={cart_id} showModal={showEditModal} toggle={toggleEditModal} />
      <DeleteOrderModal cartId={cart_id} showModal={showCancelModal} toggle={toggleCancelModal} />
    </>
  )
}

export default ActionButton
