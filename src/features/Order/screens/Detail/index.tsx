import React from 'react'
import { Button, Card } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'

import useFetchMerchantById from '@features/Merchant/hooks'
import TextField from '@components/atoms/TextField'
import EditMerchant from '@features/Merchant/components/EditMerchant'

const MerchantDetail: React.FC = () => {
  const { pathname } = useLocation()
  const storePath = pathname.replace('/merchants/', '')
  const { data, isError, isLoading } = useFetchMerchantById(storePath)

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingOutlined />
      </div>
    )
  }

  if (isError || !data) {
    return <span>Something is wrong... Try again later.</span>
  }

  const {
    name,
    path,
    image,
    address,
    description,
    is_verified,
    has_whatsapp,
    category_name,
    operation_hour,
    has_offline_store
  } = data

  return (
    <div>
      <div className="flex flex-row w-full mb-6  items-center justify-center">
        <img
          width={75}
          height={75}
          alt="img-merchant"
          src={image ? image[0] : ''}
          className="rounded-full h-20 w-20 object-cover"
        />
        <div className="w-full ml-4">
          <h1>{name}</h1>
          <h2>{category_name}</h2>
        </div>
      </div>
      <Card title="Merchant Data" extra={<EditMerchant data={data} />}>
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
        {operation_hour?.map(dt => (
          <TextField label={dt.key}>{dt.value}</TextField>
        ))}
      </Card>
    </div>
  )
}

export default MerchantDetail
