import React from 'react'
import { useHistory } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import Button from '@components/atoms/Button'
import ListLayout from '@components/organisms/ListLayout'
import { useFetchWithdrawList } from '@features/Withdraw/hooks'
import ListWithdrawColumn from './enum'

const WithdrawPage: React.FC = () => {
  const history = useHistory()
  const { data, isLoading } = useFetchWithdrawList({
    page: 1,
    limit: 100
  })

  const onAddPromo = () => history.push('/promo/create')

  return (
    <div>
      <ListLayout
        title="Withdraw Request Page"
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
        columns={ListWithdrawColumn}
      />
    </div>
  )
}

export default WithdrawPage
