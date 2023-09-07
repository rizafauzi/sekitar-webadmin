/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useState, ChangeEvent, useEffect } from 'react'
import { Modal, Input, Button, Switch } from 'antd'

import { toast } from 'react-toastify'
import { IMerchant } from '../Merchant.type'
import { postEditMerchant } from '../api'

interface IEditMerchant {
  data: IMerchant
}

const EditMerchant: React.FC<IEditMerchant> = ({ data }) => {
  const { TextArea } = Input
  const [showModal, setShowModal] = useState(false)
  const [payload, setPayload] = useState<IMerchant>({
    access_token: '',
    address: '',
    balance: 0,
    bank_account_name: '',
    bank_code: '',
    bank_number: '',
    category_id: 0,
    category_name: '',
    city: '',
    description: '',
    distance: 0,
    district: '',
    has_offline_store: 0,
    has_whatsapp: 0,
    id: 0,
    image: null,
    image_l: null,
    image_m: null,
    image_s: null,
    image_ss: null,
    image_xl: null,
    is_active: true,
    is_test: 0,
    is_verified: '',
    is_banned: false,
    latitude: 0,
    longitude: 0,
    merchant_flag: 0,
    name: '',
    operation_hour: [],
    path: '',
    phone_number: '',
    postal_code: '',
    product_categories: null,
    product_count: 0,
    province: '',
    subdistrict: '',
    user_id: 0
  })

  const toggle = () => {
    setShowModal(!showModal)
  }

  const handleSubmit = async () => {
    try {
      const response = await postEditMerchant(payload.id, payload)
      if (response) {
        toast.success('SUCCESS')
      }
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
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

  const handleSwitchChange = (key: string, value: boolean) => {
    setPayload({
      ...payload,
      [key]: value ? 1 : 0
    })
  }

  return (
    <>
      <Button onClick={toggle}>Edit</Button>

      {showModal && (
        <Modal
          okText="Submit"
          onOk={handleSubmit}
          title="Edit Merchant"
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
          <h4>Path</h4>
          <Input
            value={payload.path}
            style={{ marginBottom: 15 }}
            placeholder="Input path here..."
            onChange={event => handleChange('path', event)}
          />
          <h4>Description</h4>
          <TextArea
            value={payload.description}
            style={{ marginBottom: 15 }}
            placeholder="Input Description here..."
            onChange={event => handleChange('description', event)}
          />
          <h4>Phone Number</h4>
          <Input
            value={payload.phone_number}
            style={{ marginBottom: 15 }}
            placeholder="Input Phone Number here..."
            onChange={event => handleChange('phone_number', event)}
          />
          <h4>Address</h4>
          <TextArea
            value={payload.address}
            style={{ marginBottom: 15 }}
            placeholder="Input address here..."
            onChange={event => handleChange('name', event)}
          />
          <h4>District</h4>
          <Input
            value={payload.district}
            style={{ marginBottom: 15 }}
            placeholder="Input District here..."
            onChange={event => handleChange('district', event)}
          />
          <h4>Sub District</h4>
          <Input
            value={payload.district}
            style={{ marginBottom: 15 }}
            placeholder="Input District here..."
            onChange={event => handleChange('district', event)}
          />
          <h4>Province</h4>
          <Input
            value={payload.subdistrict}
            style={{ marginBottom: 15 }}
            placeholder="Input Subdistrict here..."
            onChange={event => handleChange('subdistrict', event)}
          />
          <h4>Has Offline Store</h4>
          <Switch
            style={{ marginBottom: 15 }}
            checked={payload.has_offline_store === 1}
            onChange={value => handleSwitchChange('has_offline_store', value)}
          />
          <h4>Has Whatsapp</h4>
          <Switch
            style={{ marginBottom: 15 }}
            checked={payload.has_whatsapp === 1}
            onChange={value => handleSwitchChange('has_whatsapp', value)}
          />
        </Modal>
      )}
    </>
  )
}

export default EditMerchant
