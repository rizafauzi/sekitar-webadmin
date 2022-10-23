/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable unicorn/consistent-destructuring */
import React, { useEffect, useState } from 'react'
import qs from 'query-string'
import { Button, Card } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useHistory, useLocation } from 'react-router-dom'

import useFetchMerchantById, { useFetchProductList } from '@features/Merchant/hooks'
import TextField from '@components/atoms/TextField'
import EditMerchant from '@features/Merchant/components/EditMerchant'
import { columnProductByMerchant } from '@features/Merchant/enum'
// import { IProduct } from '@features/Merchant/Merchant.type'
import Table from '@components/atoms/Table'
import AddProduct from '@features/Merchant/components/AddProduct'
import DownloadProduct from '@features/Merchant/components/DownloadPoduct'
import UploadProduct from '@features/Merchant/components/UploadProduct'
import EditOperationalHour from '@features/Merchant/components/EditOperationalHour'

const MerchantDetail: React.FC = () => {
  const { pathname, search } = useLocation()
  const pagination = qs.parse(search)
  const history = useHistory()
  const storePath = pathname.replace('/merchants/', '')
  const { data, isError, isLoading, refetch } = useFetchMerchantById(storePath)
  const [params, setParameters] = useState({
    page: 1,
    limit: 50
  })
  const [totalData, setTotalData] = useState(0)

  const {
    data: productList,
    isError: isProductError,
    isLoading: isProductLoading,
    refetch: productRefetch
  } = useFetchProductList(params, data?.id as number)

  const handleBack = () => {
    history.replace('/merchants?page=1')
  }

  useEffect(() => {
    setParameters({
      page: Number(pagination?.page) || 1,
      limit: Number(pagination?.limit) || 50
    })
  }, [search])

  useEffect(() => {
    if (productList) {
      const newPage = params.limit * params.page + params.limit
      setTotalData(previous => (previous > newPage ? previous : newPage))
    }
  }, [productList])

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
      <Button onClick={handleBack} style={{ borderRadius: 5, paddingRight: 20, paddingLeft: 20 }}>
        Back
      </Button>
      <div className="flex flex-row w-full my-6 items-center justify-center">
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
          <EditOperationalHour data={operation_hour} merchantId={data?.id} refetch={refetch} />
        }
      >
        {operation_hour?.map(dt => (
          <TextField label={dt.key}>{`${dt.open_time} - ${dt.close_time}`}</TextField>
        ))}
      </Card>
      <div className="mt-6" />
      <Card
        title="Product List"
        extra={
          <div className="flex-row">
            <UploadProduct merchantId={data?.id} />
            <DownloadProduct merchantId={data?.id} merchantName={data?.name} />
            <AddProduct merchantId={data?.id} refetch={productRefetch} />
          </div>
        }
      >
        <Table
          total={totalData}
          loading={isLoading}
          columns={columnProductByMerchant}
          data={
            isProductError || isProductLoading || !productList
              ? []
              : productList.map(dt => ({ ...dt, refetch: productRefetch }))
          }
        />
      </Card>
    </div>
  )
}

export default MerchantDetail
