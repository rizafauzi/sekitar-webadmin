/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useState } from 'react'
import { Modal, Button } from 'antd'

import { toast } from 'react-toastify'
import { IProduct } from '../Merchant.type'
import { deleteProduct } from '../api'
// import { postEditMerchant } from '../api'

interface IDeleteProduct {
  data: IProduct
  refetch?: () => void
}

const DeleteProduct: React.FC<IDeleteProduct> = ({ data, refetch }) => {
  const { name, id } = data
  const [showModal, setShowModal] = useState(false)

  const toggle = () => {
    setShowModal(!showModal)
  }

  const handleSubmit = async () => {
    try {
      const response = await deleteProduct(id)
      if (response) {
        if (refetch) {
          refetch()
        }
        toast.success('SUCCESS')
        toggle()
      }
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
  }

  return (
    <>
      <Button danger onClick={toggle}>
        Delete
      </Button>

      {showModal && (
        <Modal
          okText="Delete"
          onOk={handleSubmit}
          title="Delete Product"
          visible={showModal}
          onCancel={toggle}
        >
          <h4>
            Are you sure you want to delete <b>{name}</b> ?
          </h4>
        </Modal>
      )}
    </>
  )
}

export default DeleteProduct
