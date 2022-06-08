import React, { useEffect, useState } from 'react'

import ListLayout from '@components/organisms/ListLayout'

import { useFetchMerchantList } from '@features/Merchant/hooks'
import { IMerchant } from '@features/Merchant/Merchant.type'
import { columnMerchant } from './enum'

const MasterData: React.FC = () => {
  const limit = 20
  const [page, setPage] = useState(1)
  const { data, isError, isLoading } = useFetchMerchantList({ page, limit })

  useEffect(() => {
    setPage(1)
  }, [page])

  if (!data || isError) {
    return <div />
  }

  return (
    <ListLayout
      title="Merchants"
      source={{
        isError,
        isLoading,
        data: data as IMerchant[] | undefined
      }}
      columns={columnMerchant}
    />
  )
}

export default MasterData
