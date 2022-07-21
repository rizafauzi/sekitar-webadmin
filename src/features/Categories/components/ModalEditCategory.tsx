/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, ChangeEvent } from 'react'
import { Modal, Input } from 'antd'
import type { RcFile } from 'antd/es/upload/interface'
import UploadImage from '@components/atoms/UploadImage'
import { toast } from 'react-toastify'
import { updateCategoryProduct, updateSubCategoryProduct } from '../api'
import { ICategoryProduct } from '../Categories.type'

interface IModalEditCategory {
  title: string
  type: string
  categoryId: string
  detailData?: ICategoryProduct
  showModal: boolean
  onCancel: () => void
}

const ModalEditCategory = (props: IModalEditCategory) => {
  const { title, type, categoryId, showModal, detailData, onCancel } = props

  const [data, setData] = useState({
    name: '',
    description: '',
    priority: 0,
    is_test: 0,
    images: {} as any,
    parent_id: 0
  })

  const onChangeInput = (
    key: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [key]: event.target.value
    })
  }

  const onInputImage = (file: string | Blob | RcFile) => {
    setData(previousState => ({ ...previousState, images: file }))
  }

  const onHandleSubmit = () => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('is_test', String(data.is_test))
    formData.append('priority', String(data.priority))
    formData.append('image', data.images as string | Blob)
    if (type === 'category') {
      updateCategoryProduct(categoryId, formData)
        .then(() => {
          onCancel()
          toast.success('Edit Category Success')
        })
        .catch(() => {
          toast.error('Edit Category Failed')
        })
    } else if (type === 'sub-category') {
      updateSubCategoryProduct(categoryId, formData)
        .then(() => {
          onCancel()
          toast.success('Edit Sub Category Success')
        })
        .catch(() => {
          toast.error('Edit Sub Category Failed')
        })
    }
  }

  useEffect(() => {
    if (detailData) {
      const payload = {
        name: detailData.name,
        description: detailData.description,
        priority: detailData.priority,
        is_test: detailData.is_test,
        images: detailData.images,
        parent_id: detailData.parent_id || 0
      }
      setData(payload)
    }
  }, [detailData])

  return (
    <Modal
      okText="Submit"
      onOk={onHandleSubmit}
      title={title}
      visible={showModal}
      onCancel={onCancel}
    >
      <UploadImage value={data.images} onInput={onInputImage} />

      <h4>Name</h4>
      <Input
        value={data?.name}
        style={{ marginBottom: 15 }}
        placeholder="Input name"
        onChange={event => onChangeInput('name', event)}
      />
      <h4>Description</h4>
      <Input
        value={data?.description}
        style={{ marginBottom: 15 }}
        placeholder="Input Description"
        onChange={event => onChangeInput('description', event)}
      />
      <h4>Priority</h4>
      <Input
        value={data?.priority}
        style={{ marginBottom: 15 }}
        placeholder="Input Priority"
        onChange={event => onChangeInput('priority', event)}
      />
    </Modal>
  )
}

export default ModalEditCategory
