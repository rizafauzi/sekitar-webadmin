/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useState, ChangeEvent, useEffect } from 'react'
import { Modal, Input, Button } from 'antd'

import { toast } from 'react-toastify'
import { IProduct } from '../Merchant.type'
import { postEditProduct } from '../api'

interface IEditProduct {
  data: IProduct
}

const EditProduct: React.FC<IEditProduct> = ({ data }) => {
  const { TextArea } = Input
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    try {
      const response = await postEditProduct(payload.id, payload)

      console.info('response:', response)
      if (response?.data?.status !== 0) {
        toast.error(response?.data?.message as string)
        toggle()
        return
      }
      toast.success('SUCCESS')
      toggle()
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (showModal) {
      setPayload(data)
    }
  }, [data, showModal])

  const handleChange = (
    key: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPayload({
      ...payload,
      [key]: event.target.value
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
      <Button onClick={toggle}>Edit</Button>

      {showModal && (
        <Modal
          onCancel={toggle}
          onOk={handleSubmit}
          title="Edit Product"
          visible={showModal}
          okText={isLoading ? 'Loading...' : 'Edit'}
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
            onChange={event => handleChange('phone_number', event)}
          />
          <h4>Stock</h4>
          <Input
            value={payload.stock}
            style={{ marginBottom: 15 }}
            placeholder="Input Stock here..."
            onChange={event => handleChange('phone_number', event)}
          />
          <h4>Label Stock</h4>
          <Input
            value={payload.label_stock}
            style={{ marginBottom: 15 }}
            placeholder="Input Stock here..."
            onChange={event => handleChange('phone_number', event)}
          />
          <h4>Limir per Transaction</h4>
          <Input
            value={payload.limit_per_transaction}
            style={{ marginBottom: 15 }}
            placeholder="Input Stock here..."
            onChange={event => handleChange('phone_number', event)}
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

export default EditProduct
