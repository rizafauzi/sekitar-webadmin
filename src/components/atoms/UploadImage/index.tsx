import { PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload/interface'
import React, { useState } from 'react'

interface PropertiesUploadImage {
  value: string
  onInput?: (file: string | Blob | RcFile) => void
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const UploadImage = (props: PropertiesUploadImage) => {
  const { value, onInput } = props
  const [imageUrl, setImageUrl] = useState<string>()

  const propsUpload: UploadProps = {
    beforeUpload: file => {
      const typeImages = ['image/jpeg', 'image/png', 'image/jpg']
      const isImage = typeImages.includes(file.type)
      if (!isImage) {
        message.error(`${file.name} is image file`)
      }
      return isImage || Upload.LIST_IGNORE
    },
    customRequest: event => {
      getBase64(event.file as RcFile, url => {
        setImageUrl(url)
      })
      if (onInput) onInput(event.file)
    }
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      {...propsUpload}
    >
      {imageUrl || value ? (
        <img
          src={imageUrl || value}
          alt="avatar"
          style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}

export default UploadImage
