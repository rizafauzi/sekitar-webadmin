import React from 'react'
import { useHistory } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import Button from '@components/atoms/Button'
import ListLayout from '@components/organisms/ListLayout'
import { useFetchPromoList } from '@features/Promo/hooks'
import ListPromoColumn from './enum'

const PromoPage: React.FC = () => {
  const history = useHistory()
  const { data, isLoading } = useFetchPromoList({
    page: 0,
    limit: 100
  })

  const onAddPromo = () => history.push('/promo/create')

  return (
    <div>
      <ListLayout
        title="Manage Promo Page"
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
