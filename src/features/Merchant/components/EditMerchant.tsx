/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useState, ChangeEvent, useEffect } from 'react'
import { Modal, Input, Button, Switch } from 'antd'

import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'
import { ApiResponse } from '@configs/axios'
import { IMerchant } from '../Merchant.type'
import { Iwablas, postEditMerchant, postWablas, putWablasToken } from '../api'

interface IEditMerchant {
  data: IMerchant
  wablas?: Iwablas[]
}

const EditMerchant: React.FC<IEditMerchant> = ({ data, wablas }) => {
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
    latitude: 0,
    longitude: 0,
    merchant_flag: 0,
    name: '',
    operation_hour: [],
    path: '',
    phone_number: '',
    postal_code: '',
    premium_url: '',
    product_categories: null,
    product_count: 0,
    province: '',
    subdistrict: '',
    user_id: 0,
    wablas_token: ''
  })
  const queryClient = useQueryClient()

  const toggle = () => {
    setShowModal(!showModal)
  }

  interface IResponse {
    status: number
    message: string
    error: string
  }

  const updateWablasToken = async () => {
    try {
      if (wablas && wablas.length > 0) {
        const payloadPut = [
          {
            id: wablas[0].id,
            is_active: true,
            wablas_token: payload.wablas_token
          }
        ]
        const response: ApiResponse<IResponse> = await putWablasToken(payloadPut)
        if (response && response?.error) {
          toast.error(response.error)
        } else {
          toast.success('SUCCESS')
          // window.location.reload()
        }
      } else {
        const payloadWablas = [
          {
            is_active: true,
            store_id: data.id,
            wablas_token: payload.wablas_token,
            wablas_type: 1
          }
        ]
        const response: ApiResponse<IResponse> = await postWablas(payloadWablas)
        if (response && response?.error) {
          toast.error(response.error)
        } else {
          toast.success('SUCCESS')
          // window.location.reload()
        }
      }
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
  }

  const handleSubmit = async () => {
    try {
      const response: ApiResponse<IResponse> = await postEditMerchant(payload.id, payload)
      if (response) {
        if (response.data?.status !== 0) {
          toast.error(response.data?.message)
        } else if ((wablas && wablas.length > 0) || payload.wablas_token) {
          updateWablasToken()
        } else toast.success('SUCCESS')
        setShowModal(false)
        queryClient.invalidateQueries('merchant-detail')
      }
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
  }

  useEffect(() => {
    if (showModal) {
      setPayload({
        ...data,
        wablas_token: wablas?.[0]?.wablas_token || ''
      })
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
          <h4>Premium Url</h4>
          <Input
            value={payload.premium_url}
            style={{ marginBottom: 15 }}
            placeholder="Input premium url here..."
            onChange={event => handleChange('premium_url', event)}
          />
          <h4>Wablas Token</h4>
          <Input
            value={payload.wablas_token}
            style={{ marginBottom: 15 }}
            placeholder="Input Wablas Token here..."
            onChange={event => handleChange('wablas_token', event)}
          />
        </Modal>
      )}
    </>
  )
}

export default EditMerchant
