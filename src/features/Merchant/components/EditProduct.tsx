/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { useState, ChangeEvent, useEffect, useRef } from 'react'
import { Modal, Input, Button, Select } from 'antd'

import { toast } from 'react-toastify'
import { ICategoryProduct, IProduct } from '../Merchant.type'
import { getCategoryLevel1, getCategoryLevel2, patchEditProduct } from '../api'

interface IEditProduct {
  data: IProduct
  refetch?: () => void
}

const EditProduct: React.FC<IEditProduct> = ({ data, refetch }) => {
  const inputImageReference = useRef<HTMLInputElement | null>(null)
  const { TextArea } = Input
  const { Option } = Select
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [categoryLevel1, setCategoryLevel1] = useState<ICategoryProduct[]>([])
  const [categoryLevel2, setCategoryLevel2] = useState<ICategoryProduct[]>([])
  const [previewImage, setPreviewImage] = useState<string | File | null>('')
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

  const onUploadImage = () => {
    inputImageReference.current?.click()
  }

  const toggle = () => {
    setShowModal(!showModal)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const fd = new FormData()
      const formatted: any = payload
      Object.keys(formatted).forEach(dt => fd.append(dt, formatted[dt]))
      const response = await patchEditProduct(payload.store_id, payload.id, fd)
      if (response?.data?.status !== 0) {
        toast.error(response?.data?.message as string)
        toggle()
        return
      }
      if (refetch) {
        refetch()
      }
      toast.success('SUCCESS')
      toggle()
    } catch (error) {
      toast.error('Something wrong, Please try again later')
      console.error('[ERROR] Edit Merchant:', error)
    }
    setIsLoading(false)
  }

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    const { files } = target
    const file = files && files[0]
    if (file) {
      setPayload({ ...payload, image: file })
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const fetchCategoryLevel1 = async () => {
    try {
      const response = await getCategoryLevel1()
      if (response) {
        setCategoryLevel1(response?.data?.Data)
      }
    } catch (error) {
      console.error('[ERROR] Get Product Category Level 1:', error)
    }
  }

  const fetchCategoryLevel2 = async () => {
    try {
      if (payload.category_lvl_1_id) {
        const response = await getCategoryLevel2(payload.category_lvl_1_id)
        if (response) {
          setCategoryLevel2(response?.data?.Data)
        }
      }
    } catch (error) {
      console.error('[ERROR] Get Product Category Level 2:', error)
    }
  }

  useEffect(() => {
    if (showModal) {
      delete data?.refetch
      setPayload(data)
      setPreviewImage(data?.image_s ? data?.image_s[0] : null)
      fetchCategoryLevel1()
    }
  }, [data, showModal])

  useEffect(() => {
    fetchCategoryLevel2()
  }, [payload?.category_lvl_1_id, showModal])

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

  const handleCategoryLevel1 = (value: number) => {
    setPayload({
      ...payload,
      category_lvl_1_id: value,
      category_lvl_2_id: null
    })
  }

  const handleCategoryLevel2 = (value: number) => {
    setPayload({
      ...payload,
      category_lvl_2_id: value
    })
  }

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
          <form>
            <input
              type="file"
              name="file"
              accept="image/*"
              className="hidden"
              ref={inputImageReference}
              onChange={handleUploadImage}
            />
          </form>
          <h4>Product Image</h4>
          <img
            alt={payload.name}
            src={previewImage as any}
            className="rounded-lg w-[100px] h-[100px] mb-[15px] object-cover"
          />
          <Button onClick={onUploadImage} className="mb-[15px]">
            Edit Image
          </Button>
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
          <h4>Discount Price</h4>
          <Input
            value={payload.discount_price}
            style={{ marginBottom: 15 }}
            placeholder="Input Discount Price here..."
            onChange={event => handleChange('discount_price', event)}
          />
          <h4>Product Weight (gram)</h4>
          <Input
            value={payload.product_weight}
            style={{ marginBottom: 15 }}
            placeholder="Input Product Weight here..."
            onChange={event => handleChange('product_weight', event)}
          />
          <h4>Stock</h4>
          <Input
            value={payload.stock}
            style={{ marginBottom: 15 }}
            placeholder="Input Stock here..."
            onChange={event => handleChange('stock', event)}
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
          <h4>Product Category Level 1</h4>
          <Select
            className="w-full"
            optionFilterProp="children"
            style={{ marginBottom: 15 }}
            onChange={handleCategoryLevel1}
            value={payload.category_lvl_1_id}
            placeholder="Select Product Category Level 1"
          >
            {categoryLevel1?.map(dt => (
              <Option value={dt.id}>{dt.name}</Option>
            ))}
          </Select>
          <h4>Product Category Level 2</h4>
          <Select
            className="w-full"
            optionFilterProp="children"
            onChange={handleCategoryLevel2}
            value={payload.category_lvl_2_id}
            placeholder="Select Product Category Level 2"
          >
            {categoryLevel2?.map(dt => (
              <Option value={dt.id}>{dt.name}</Option>
            ))}
          </Select>
        </Modal>
      )}
    </>
  )
}

export default EditProduct
