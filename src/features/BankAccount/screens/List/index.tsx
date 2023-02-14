import React from 'react'

import ListLayout from '@components/organisms/ListLayout'
// import { useFetchListCategoryProduct } from '@features/Categories/hooks'

import columnBankAccount from './enum'

const dataDummy = [
  {
    merchant: 'Sekitar',
    account_name: 'BCA',
    account_number: 134354,
    bank_code: 435
  },
  {
    merchant: 'Sekitar',
    account_name: 'BCA',
    account_number: 134354,
    bank_code: 435
  }
]

const BankAccountList: React.FC = () => (
  <div>
    <ListLayout
      title="Product Categories"
      source={{
        data: dataDummy,
        isError: false,
        isLoading: false
      }}
      columns={columnBankAccount}
    />
  </div>
)

export default BankAccountList
