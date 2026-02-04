/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState, ChangeEvent } from 'react'
import { Modal, Input, Button } from 'antd'

import { IMerchant } from '../Merchant.type'

interface ModalTypes {
  visible: boolean
}

const EditMerchant: React.FC<ModalTypes> = () => {
  // const mutateRoute = useRouteMutation()
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
    premium_url: '',
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
    user_id: 0,
    wablas_token: ''
  })

  const toggle = () => {
    setShowModal(!showModal)
  }

  // const onSubmit = (values: Routes) => {
  //   mutateRoute(
  //     {
  //       type: mode,
  //       payload: {
  //         ...values,
  //         description: values.description || undefined,
  //         route_id: record?.route_id
  //       }
  //     },
  //     {
  //       onSuccess: () => {
  //         form.resetFields()
  //         toggle()
  //       }
  //     }
  //   )
  // }

  // useEffect(() => {
  //   if (mode === ModalMode.ADD) {
  //     form.resetFields()
  //     return
  //   }

  //   const {
  //     description = '',
  //     method = '',
  //     name = '',
  //     route_id: routeId = '',
  //     url = ''
  //   } = record || {}

  //   form.setFieldsValue({
  //     description,
  //     method,
  //     name,
  //     route_id: routeId,
  //     url
  //   })
  // }, [visible, record])

  const handleChange = (key: string, event: ChangeEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [key]: event.target.value
    })
  }

  return (
    <>
      <Button onClick={toggle}>Edit</Button>

      {showModal && (
        <Modal title="Edit Merchant" visible={showModal} onCancel={toggle}>
          <span>Name</span>
          <Input
            placeholder="Input name here..."
            value={payload.name}
            onChange={event => handleChange('name', event)}
          />
          <span>Description</span>
          <Input
            value={payload.description}
            placeholder="Input Description here..."
            onChange={event => handleChange('description', event)}
          />
          <span>Address</span>
          <Input
            value={payload.address}
            placeholder="Input address here..."
            onChange={event => handleChange('name', event)}
          />
          <span>Has Offline Store</span>
          <Input placeholder="Name" value="Name" />
          <span>Has Whatsapp</span>
        </Modal>
      )}
    </>
  )
}

export default EditMerchant
