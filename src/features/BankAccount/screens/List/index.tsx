/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import qs from 'query-string'

import ListLayout from '@components/organisms/ListLayout'
import { useFetchBankAccountList } from '@features/BankAccount/hooks'
import { useLocation } from 'react-router-dom'
import columnBankAccount from './enum'

const BankAccountList: React.FC = () => {
  const { search } = useLocation()
  const pagination = qs.parse(search)
  const { data, isLoading } = useFetchBankAccountList({
    page: 1,
    limit: 1000,
    search: pagination.keyword as string
  })

  return (
    <div>
      <ListLayout
        title="Bank Account"
        isSearch
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
