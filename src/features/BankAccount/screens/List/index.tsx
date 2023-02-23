/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import ListLayout from '@components/organisms/ListLayout'
import { useFetchBankAccountList } from '@features/BankAccount/hooks'
import columnBankAccount from './enum'

const BankAccountList: React.FC = () => {
  const { data, isLoading } = useFetchBankAccountList({
    page: 1,
    limit: 1000
  })
  return (
    <div>
      <ListLayout
        title="Product Categories"
        source={{
          data,
          isError: false,
          isLoading
        }}
        columns={columnBankAccount}
      />
    </div>
  )
}

export default BankAccountList
