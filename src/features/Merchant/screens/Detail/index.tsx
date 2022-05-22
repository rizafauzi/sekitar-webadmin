import React from 'react'
import { Button, Card } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import useFetchMerchantById from '@features/Merchant/hooks'
import TextField from '@components/atoms/TextField'

const MerchantDetail: React.FC = () => {
  const { data, isError, isLoading } = useFetchMerchantById('nazfat')

  console.info('data;', data)
  const {
    address,
    category_name,
    description,
    has_offline_store,
    has_whatsapp,
    image,
    is_verified,
    name,
    path,
    operation_hour
    // phone_number,
  } = data

  if (isError) {
    return <span>Something is wrong... Try again later.</span>
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingOutlined />
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-row w-full mb-6  items-center justify-center">
        <img className="rounded-full" height={75} width={75} src={image[0]} alt="img-merchant" />
        <div className="w-full ml-4">
          <h1>{name}</h1>
          <h2>{category_name}</h2>
        </div>
      </div>
      <Card
        title="Merchant Data"
        extra={
          <Button style={{ padding: '0px 25px' }} type="primary">
            Edit
          </Button>
        }
      >
        <TextField label="Name">{name}</TextField>
        <TextField label="Path">{path}</TextField>
        <TextField label="Category">{category_name}</TextField>
        <TextField label="Description">{description}</TextField>
        <TextField label="Address">{address}</TextField>
        <TextField label="Has offline store">{has_offline_store === 1 ? 'Yes' : 'No'}</TextField>
        <TextField label="Has Whatsapp">{has_whatsapp === 1 ? 'Yes' : 'No'}</TextField>
        <TextField label="Is Verified">{is_verified === '1' ? 'Yes' : 'No'}</TextField>
      </Card>
      <div className="mt-6" />
      <Card
        title="Operational Hour"
        extra={
          <Button style={{ padding: '0px 25px' }} type="primary">
            Edit
          </Button>
        }
      >
        {operation_hour.map(dt => (
          <TextField label={dt.key}>{dt.value}</TextField>
        ))}
      </Card>
    </div>
  )
}

export default MerchantDetail
