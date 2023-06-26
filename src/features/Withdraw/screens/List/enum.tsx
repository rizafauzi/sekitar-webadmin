/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import DropdownWithdraw from '@features/Withdraw/components/DropdownWithdraw'
import { IWithdrawList } from '@features/Withdraw/Withdraw.types'
import { formatDate } from '@utils/format-date'
import { toCurrency } from '@utils/to-currency'

const ListWithdrawColumn = [
  {
    width: '4rem',
    title: 'Reference ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    width: '12rem',
    title: 'Merchant',
    dataIndex: 'merchant_name',
    key: 'merchant_name',
    render: (_: null, { id, merchant_name }: IWithdrawList) => (
      <a href={`/withdraw-request/${id}`}>{merchant_name}</a>
    )
  },
  {
    width: '13rem',
    title: 'Rekening',
    dataIndex: 'bank_number',
    key: 'bank_number'
  },
  {
    width: '9rem',
    title: 'Nominal',
    dataIndex: 'amount',
    key: 'amount',
    render: (_: null, data: IWithdrawList) => (
      <span>{data.amount ? toCurrency(data.amount) : ''}</span>
    )
  },
  {
    width: '9rem',
    title: 'Tanggal Penarikan',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (_: null, data: IWithdrawList) => (
      <span>{data.created_at ? formatDate(data.created_at) : ''}</span>
    )
  },
  {
    width: '9rem',
    title: 'Action',
    dataIndex: 'status',
    key: 'status',
    render: (_: null, data: IWithdrawList) =>
      data.status === 'Pending' ? <DropdownWithdraw item={data} /> : <div></div>
  }
]

export default ListWithdrawColumn
