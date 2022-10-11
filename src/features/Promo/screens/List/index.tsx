/* eslint-disable arrow-body-style */
import React from 'react'
import Button from '@components/atoms/Button'
import ListLayout from '@components/organisms/ListLayout'
import { PlusOutlined } from '@ant-design/icons'
import { useFetchPromoList } from '@features/Promo/hooks'
import ListPromoColumn from './enum'

const PromoPage: React.FC = () => {
  const { data, isLoading } = useFetchPromoList({
    page: 0,
    limit: 20
  })

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onAddPromo = () => console.info('ADD PROMO')

  return (
    <div>
      <ListLayout
        title="Product Categories"
        source={{
          data,
          isError: false,
          isLoading
        }}
        extendButton={[
          <Button onClick={onAddPromo}>
            <PlusOutlined />
            <span className="text-sm font-bold">Tambah</span>
          </Button>
        ]}
        columns={ListPromoColumn}
      />
    </div>
  )
}

export default PromoPage
