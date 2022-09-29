/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useState, ChangeEvent } from 'react'
import { Modal, Input, Button } from 'antd'

import { toast } from 'react-toastify'
import { IProduct } from '../Merchant.type'
import { postAddProduct } from '../api'

const AddProduct: React.FC<{ merchantId: number }> = ({ merchantId }) => {
  const { TextArea } = Input
  const [showModal, setShowModal] = useState(false)
  const [payload, setPayload] = useState<IProduct>({
    id: 0,
    store_id: 0,
    name: '',
    price: 0,
    stock: 0,
    description: '',
    image: [],
    image_ss: [],
    image_s: [],
    image_m: [],
    image_l: [],
    image_xl: [],
    is_test: 0,
    path: '',
    toggle_stock: 0,
    toggle_active: 0,
    discount_price: 0,
    product_weight: 0,
    updated_at: '',
    label_stock: '',
    category_lvl_1_id: 0,
    category_lvl_2_id: 0,
    category_lvl_1: '',
    category_lvl_2: '',
    limit_per_transaction: 0
  })

  const toggle = () => {
    setShowModal(!showModal)
  }

  const handleSubmit = async () => {
    try {
      const response = await postAddProduct({
        ...payload,
        store_id: merchantId
      })
      if (response) {
        toast.success('SUCCESS')
        setShowModal(false)
      }
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
  }

  const isNumber = (n: string) => {
    const numberString = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/
    return numberString.test(n.toString())
  }

  const handleChange = (
    key: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPayload({
      ...payload,
      [key]: isNumber(event.target.value) ? Number(event.target.value) : event.target.value
    })
  }

  // const handleSwitchChange = (key: string, value: boolean) => {
  //   setPayload({
  //     ...payload,
  //     [key]: value ? 1 : 0
  //   })
  // }

  return (
    <>
      <Button onClick={toggle}>Add Product</Button>

      {showModal && (
        <Modal
          okText="Submit"
          onOk={handleSubmit}
          title="Add Product"
          visible={showModal}
          onCancel={toggle}
        >
          <h4>Name</h4>
          <Input
            value={payload.name}
            style={{ marginBottom: 15 }}
            placeholder="Input name here..."
            onChange={event => handleChange('name', event)}
          />
          <h4>Price</h4>
          <Input
            value={payload.price}
            style={{ marginBottom: 15 }}
            placeholder="Input Price here..."
            onChange={event => handleChange('price', event)}
          />
          <h4>Stock</h4>
          <Input
            value={payload.stock}
            style={{ marginBottom: 15 }}
            placeholder="Input Stock here..."
            onChange={event => handleChange('stock', event)}
          />
          <h4>Label Stock</h4>
          <Input
            disabled
            value={payload.label_stock}
            style={{ marginBottom: 15 }}
            placeholder="Input Stock here..."
            onChange={event => handleChange('label_stock', event)}
          />
          <h4>Limit per Transaction</h4>
          <Input
            value={payload.limit_per_transaction}
            style={{ marginBottom: 15 }}
            placeholder="Input Stock here..."
            onChange={event => handleChange('limit_per_transaction', event)}
          />
          <h4>Description</h4>
          <TextArea
            value={payload.description}
            style={{ marginBottom: 15 }}
            placeholder="Input Description here..."
            onChange={event => handleChange('description', event)}
          />
        </Modal>
      )}
    </>
  )
}

export default AddProduct
