/* eslint-disable unicorn/consistent-function-scoping */
import React, { useState } from 'react'
import { Dropdown, Menu, Modal, Space } from 'antd'

import Button from '@components/atoms/Button'
import { useHistory } from 'react-router-dom'
import Flex from '@components/atoms/Flex'

const ActionButton: React.FC<{ cartId: string }> = ({ cartId }) => {
  const history = useHistory()
  const [showCancelModal, setShowCancelModal] = useState(false)

  console.info('path:', cartId)
  const toggleCancelModal = () => {
    setShowCancelModal(!showCancelModal)
  }

  const handleSelected = () => {
    console.info('HIYAA')
    history.push(`/orders/${cartId}`)
  }

  const handleEditCourier = () => {
    console.info('HIYA')
  }

  // const handleCancelOrder = () => {
  //   console.info('HIYA')
  // }

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
            <button type="button" className="w-full text-left" onClick={handleEditCourier}>
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

      <Modal
        centered
        maskClosable
        closable={false}
        visible={showCancelModal}
        onCancel={toggleCancelModal}
        footer={
          <Flex justifyContent="center" alignItems="center">
            <Space>
              <Button>Options</Button>
              <Button>Options</Button>
            </Space>
          </Flex>
        }
      >
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <h2 className="font-bold">Apakah kamu yakin akan membatalkan pesanan?</h2>
          <h3>Pesanan yang telah dibatalkan tidak dapat diaktifkan kembali</h3>
        </Flex>
      </Modal>
    </>
  )
}

export default ActionButton
